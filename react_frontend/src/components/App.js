import HomePage from "./HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element= { <HomePage /> }/>
      <Route path="/frontend" element= { <Profile /> } />
      <Route path="/backend" />
      <Route path="/sre" />
    </Routes>
  );
}

export default App;
