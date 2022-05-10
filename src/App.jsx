import "./App.css";
import Navbar from "./Components/Navbar";

const linksArray = ["Products", "Services", "Overview", "Contact Us"];

function App() {
  return (
    <div className="App">
      <Navbar links={linksArray} />
    </div>
  );
}

export default App;
