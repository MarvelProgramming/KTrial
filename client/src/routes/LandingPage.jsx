import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function LandingPage () {
  return (
    <div className="landing-page">
      <main>
        <h1>Welcome to <span>KTrial</span></h1>
        
        <Link to="/browse">
          <button className="filled-btn">Browse Quizzes</button>
        </Link>
        <Link to="/quiz/creation">
          <button className="hollow-btn">Create a Quiz!</button>
        </Link>
      </main>
    </div>
  );
};