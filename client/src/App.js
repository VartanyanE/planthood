import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Community from "./pages/Community";
import Account from "./pages/Account";
import Browse from "./pages/Browse";
import Plantkins from "./pages/Plantkins";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Container from "@material-ui/core/Container";
import userContext from "./utils/userContext";
import plantContext from "./utils/plantContext";
import { getUser } from "../../client/src/utils/API";

function App() {
  const [user, setUser] = useState(null);
  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user === "") {
      setUser(null);
    } else {
      if (user)
        getUser(user)
          .then((res) => setUser(res.data))
          .catch((err) => {
            if (err) {
              console.log(err);
            }
          });
    }
  }, []);

  return (
    <Router>
      <div>
        <plantContext.Provider value={{ plants, setPlants }}>
          <userContext.Provider value={{ user, setUser }}>
            <Navbar />
            <Container maxWidth="md">
              <Route exact path="/" component={!user ? Landing : Plantkins} />
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/about" component={user ? About : Landing} />
              <Route
                exact
                path="/community"
                component={user ? Community : Landing}
              />
              <Route
                exact
                path="/account"
                component={user ? Account : Landing}
              />
              <Route exact path="/browse" component={Browse} />
              <Route
                exact
                path="/plantkins"
                component={user ? Plantkins : Landing}
              />
              <Route
                exact
                path="/login"
                component={() => <Login setUser={setUser} />}
              />
              <Route exact path="/signup" component={Signup} />
            </Container>
          </userContext.Provider>
          ß
        </plantContext.Provider>
      </div>
    </Router>
  );
}

export default App;
