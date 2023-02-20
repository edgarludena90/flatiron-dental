import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchDentists } from "./Context/dentists/dentistsSlice";

import Navbar from "./Components/Navbar/Navbar";
import Pages from "./Pages";

import "./App.css";

function App() {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  
  // storing user data in local storage and using it when making requests
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user&&user.data); 
  },[]);

  useEffect(() => {
    dispatch(fetchDentists());
    // eslint-disable-next-line
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {/* passing user for displaying appointments */}
        <Navbar user={user} setUser={setUser} />
        <Pages user={user} setUser={setUser} />
      </div>
    </BrowserRouter>
  );
}

export default App;