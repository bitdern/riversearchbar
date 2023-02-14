// page components
import Searchbar from "./components/searchbar";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Bitcoin Learning Center</p>
      </header>
      <div>
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
