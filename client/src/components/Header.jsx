import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header className="primary-header">
      <Nav />
      <Link to='/login'>
        <i className="login-icon fas fa-user-circle"></i>
      </Link>
    </header>
  );
};