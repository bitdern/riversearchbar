import { useState, useEffect } from "react";

// passes the URL prop into the useFetch hook
export const useFetch = (url, method = "GET") => {
  // state that is general enough to be reused for multiple purposes
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    // creating the fetching function inside useEffect and therefore not a dependency.
    const fetchData = async (fetchOptions) => {
      setIsPending(true);

      // this is the async function that tries to grab data & throws error if unable to.
      try {
        const res = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const json = await res.json();

        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch that data");
          console.log(err.message);
        }
      }
    };

    if (method === "GET") {
      fetchData();
    }
    if (method === "POST" && options) {
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, method, options]);

  // returning the data state from the fetch function
  return { data, isPending, error, postData };
};
