import React, { useState } from "react";
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

function App() {
  const [user, setUser] = useState(null);
  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const [plants, setPlants] = useState([]);
  return (
    <Router>
      <div>
        <plantContext.Provider value={{ plants, setPlants }}>
          <Navbar />
          <Container maxWidth="md">
            <userContext.Provider value={{ user, setUser }}>
              <Route exact path="/" component={Landing} />
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/community" component={Community} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/browse" component={Browse} />
              <Route exact path="/plantkins" component={Plantkins} />
              <Route
                exact
                path="/login"
                component={() => <Login setUser={setUser} />}
              />
              <Route exact path="/signup" component={Signup} />
            </userContext.Provider>
          </Container>
        </plantContext.Provider>
      </div>
    </Router>
  );
}

export default App;
