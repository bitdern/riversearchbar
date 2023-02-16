import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

// styles
import "./BlogList.css";

export default function BlogList() {
  const [url] = useState("http://localhost:3000/blogs");
  const { data: blogs, isPending, error } = useFetch(url);

  return (
    <div className="blog-list">
      <h2>BlogList</h2>
      {isPending && <div>Loading Blogs...</div>}
      {error && <div>{error}</div>}
      <ul>
        {blogs &&
          blogs.map((blog) => (
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.topic}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
