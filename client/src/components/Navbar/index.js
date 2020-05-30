import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
    const [active, setActive] = useState(1);
  return (  
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo left">PLANTHOOD</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
            <a href="#">My Plantkins</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Community</a></li>
      </ul>
    </div>
  </nav>
        
  );
}

export default Navbar;
