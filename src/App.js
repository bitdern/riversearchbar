// data components
import ArticleData from "./data/db.json";

// page components
import SearchBar from "./components/SearchBar";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header"> Bitcoin Learning Center </header>
      <SearchBar placeholder="Search for an Article..." data={ArticleData} />
    </div>
  );
}

export default App;
