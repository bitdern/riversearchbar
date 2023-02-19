import React, { useState } from "react";

// styles
import "./SearchBar.css";

// assets
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ placeholder, data }) {
  // state that allows for JSX logic, where the bar only shows results when users change the input (search queries).
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  // function to accesses the changing input value and filters the data.
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    // boolean value to determine whether or not the query matches any data stored in the database in a case-agnostic manner.
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    // piece of logic that only opens the search drop-down if a user has entered a query value.
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  // function to clear the input when users click on the "close" icon using second state entry.
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  // basic search bar component functionality, icons will change based on whether or not a search has been initiated.
  // search bar's dropdown list is capped at 15 entries to reduce the weight of the component.
  return (
    <div className="search">
      <div className="seachInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
