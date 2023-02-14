import { BrowserRouter as Router } from "react-router-dom";

// page components
import Searchbar from "./components/searchbar";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Searchbar />
        <header className="App-header">
          <p>Bitcoin Learning Center</p>
        </header>
      </Router>
    </div>
  );
}

export default App;
