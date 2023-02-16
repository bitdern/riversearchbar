import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// page components
import Searchbar from "./components/searchbar";
import BlogList from "./components/BlogList";

// styles
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Searchbar />
        <header className="App-header">
          <p>Bitcoin Learning Center</p>
        </header>
        <div>
          <Routes>
            <Route path="/blogs/:id" element={<BlogList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
