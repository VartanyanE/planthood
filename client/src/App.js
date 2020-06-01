import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './pages/Landing';
import About from './pages/About';
import Community from './pages/Community';
import Account from './pages/Account';
import Browse from './pages/Browse';
import Plantkins from './pages/Plantkins';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={"/"}/>
        <Route exact path="/landing" component={Landing}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/community" component={Community}/>
        <Route exact path="/account" component={Account}/>
        <Route exact path="/browse" component={Browse}/>
        <Route exact path="/plantkins" component={Plantkins}/>
        </div>
    
    </Router> 
  );
}

export default App;
