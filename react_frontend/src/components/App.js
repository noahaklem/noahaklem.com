import HomePage from "./HomePage/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element= { <HomePage /> }/>
      <Route path="/frontend"/>
      <Route path="/backend" />
      <Route path="/sre" />
    </Routes>
  );
}

export default App;
