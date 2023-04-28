import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import User from "./components/User";
import Trips from "./components/Trips";
import Login from "./components/Login";
import TripView from "./components/TripView";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
      .then((res) => {
        if(res.ok) {
          res.json().then((user) => setUser({
            id: user.id,
            username: user.username
          }));
        }
    });
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        <NavBar user={user} setUser={setUser} />
      </div>
      { !user ? <Login onLogin={setUser} /> :
      <Routes>
        <Route exact path="/" element={<Trips />} />
        <Route exact path="/account" element={<User />} />
        <Route exact path="/trips/:id" element={<TripView user={user} />} />
      </Routes>
      }
    </div>
  );
}

export default App;
