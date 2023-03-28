import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import User from "./components/User";
import Trips from "./components/Trips";
import TripDetails from "./components/TripDetails";
import Login from "./components/Login";

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
      <Switch>
        <Route path="/" element={<Trips />} />
        <Route path="/account" element={<User />} />
        <Route path="/trips/:id" element={<TripDetails user={user} />} />
      </Switch>
      }
    </div>
  );
}

export default App;
