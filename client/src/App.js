import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing/index";
import About from "./pages/About";
import Account from "./pages/Account";
import Browse from "./pages/Browse";
import Plantkins from "./pages/Plantkins";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Container from "@material-ui/core/Container";
import userContext from "./utils/userContext";
import plantContext from "./utils/plantContext";
import { getUser } from "../../client/src/utils/API";
import clickedContext from "./utils/clickedContext";

function App() {
  const [user, setUser] = useState(null);
  const [plants, setPlants] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const userId = JSON.parse(localStorage.getItem("user"));
      getUser(userId)
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
            <clickedContext.Provider value={{ clicked, setClicked }}>
              <Navbar />
              <Container maxWidth="md">
                <Route exact path="/" component={Landing} />
                <Route exact path="/landing" component={Landing} />
                <Route exact path="/about" component={user ? About : Landing} />
                <Route
                  exact
                  path="/account"
                  component={user ? Account : Landing}
                />
                <Route exact path="/browse" component={Browse} />
                <Route exact path="/plantkins" component={Plantkins} />
                <Route
                  exact
                  path="/login"
                  component={() => <Login setUser={setUser} />}
                />
                <Route exact path="/signup" component={Signup} />
              </Container>
            </clickedContext.Provider>
          </userContext.Provider>
        </plantContext.Provider>
      </div>
    </Router>
  );
}

export default App;
