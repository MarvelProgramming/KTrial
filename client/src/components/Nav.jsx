import React, { useState } from "react";
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <div>
      <HamburgerMenu setToggle={setToggle}/>
     <div className={`primary-nav-container${!toggle ? ' hidden' : ''}`}
    
    onClick={(e) => {
      if(e.target === e.currentTarget){
        setToggle(!toggle);
      }
    }}
    >
        <nav className="primary-nav">
          <Link to="/browse" className={window.location.pathname === '/browse' ? 'active-link' : ''}>Browse</Link>
          <Link to="/quiz/creation" className={window.location.pathname === '/quiz/creation' ? 'active-link' : ''}>Create Quiz</Link>
          <Link to="/about" className={window.location.pathname === '/about' ? 'active-link' : ''}>About</Link>
        </nav>
      </div>
    </div>
  );
};