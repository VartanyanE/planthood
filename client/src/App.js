import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home.js"
import Account from "./pages/Account.js"
import Browse from "./pages/Browse.js"
import Community from "./pages/Community.js"
import Plantkins from "./pages/Plantkins.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/account' component={Account} />
        <Route path='/browse' component={Browse} />
        <Route path='/community' component={Community} />
        <Route path='/plantkins' component={Plantkins} />
      </Router>
    </div>
  );
}

export default App;
