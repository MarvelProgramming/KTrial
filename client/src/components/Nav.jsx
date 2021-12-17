import React from "react";
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="primary-nav">
      <Link to="/browse">Browse</Link>
      <Link to="/quiz/creation">Create Quiz</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};