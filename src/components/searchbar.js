import { useState } from "react";
import { useNavigate } from "react-router-dom";

//styles
import "./searchbar.css";

export default function Searchbar() {
  // state which tracks what a user types into form below.
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  // function which takes in event object (what they type) and prevents default action of page auto reloading.
  const handleSubmit = (e) => {
    e.preventDefault();

    // redirects the user to a seperate "search" page with term-specific query parameter.
    // the "search" page was not created for this demo.
    navigate(`/search?q=${term}`);
  };

  return (
    // submission entry form which takes in user queries.
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          //function that updates the state based on what the user types into the search bar.
          onChange={(e) => setTerm(e.target.value)}
          required
        />
      </form>
    </div>
  );
}
