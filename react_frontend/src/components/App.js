import HomePage from "./HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import { data } from "../assets/profile_data/data"

function App() {

  const findByParams= (param) => {
    return data.filter( profile => {
      return profile.url_path === `/${param}`
    })
  }

  return (
    <Routes>
      <Route path="/" element= { <HomePage data={data} /> }/>
      <Route path="/:profile" element= { <Profile findByParams={findByParams} /> } />
    </Routes>
  );
}

export default App;
