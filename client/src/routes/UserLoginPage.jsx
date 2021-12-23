import React from 'react'
import Header from '../components/Header'

export default function UserLoginPage({ loggedIn, handleUserLogin }) {
  return (
    <div className="user-login-page">
      <Header />
      <h1 className="page-title">Login</h1>
      <main>
        {
          !loggedIn ? (
            <form onSubmit={(e) => {
              e.preventDefault();
              handleUserLogin({
                loggedIn: true,
                username: e.target[0].value
              });
            }}>
              <label htmlFor="username-input">Username</label>
              <input id="username-input" placeholder="Enter your username here" />
              <label htmlFor="password-input">Password</label>
              <input type="password" id="password-input" placeholder="Enter your password here" autoComplete="" />
              <button type="submit" className="filled-btn">Login</button>
            </form>
          ) : (
            <div>
              <p className="logged-in-text">You're logged in!</p>
              <button className="filled-btn" onClick={() => {
                handleUserLogin({
                  loggedIn: false,
                  username: ''
                });
              }}>Logout</button>
            </div>
          )
        }
      </main>
    </div>
  );
};
