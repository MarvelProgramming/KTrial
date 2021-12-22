import React from 'react'
import Header from '../components/Header'

export default function UserLoginPage() {
  return (
    <div className="user-login-page">
      <Header />
        <h1 className="page-title">Login</h1>
      <main>
        <form onChange={(e) => {
          e.preventDefault();
        }}>
          <label htmlFor="username-input">Username</label>
          <input id="username-input" placeholder="Enter your username here" />
          <label htmlFor="password-input">Password</label>
          <input id="password-input" placeholder="Enter your password here" />
          <button className="hollow-btn">Sign up!</button>
          <button type="submit" className="filled-btn">Login</button>
        </form>
      </main>
    </div>
  );
};
