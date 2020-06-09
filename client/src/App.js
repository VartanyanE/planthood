import React, {useState} from "react";
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
import userContext from './utils/userContext';

function App() {
  const [user,setUser] = useState(null)
  return (
    <Router>
      <div>
        <Navbar />
        <Container maxWidth="md">
          <userContext.Provider value={user}>
          <Route exact path="/" component={Landing} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/plantkins" component={Plantkins} />
          <Route exact path="/login" component={()=> <Login setUser={setUser}/>} />
          <Route exact path="/signup" component={Signup} />
          </userContext.Provider>
        </Container>
      </div>
    </Router>
  );
}

export default App;
