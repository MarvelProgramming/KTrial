import React, { useState } from "react";
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div>
      <HamburgerMenu setToggle={setToggle}/>
     <div className={`primary-nav-container${!toggle ? ' hidden' : ''}`}
    style={!toggle ? { pointerEvents: 'none' } : {}}
    onClick={(e) => {
      if(e.target === e.currentTarget){
        setToggle(!toggle);
      }
    }}
    >
        <nav className="primary-nav">
          <Link to="/browse">Browse</Link>
          <Link to="/quiz/creation">Create Quiz</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </div>
  );
};