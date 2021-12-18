import React from 'react';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="primary-header">
      <Nav />
      <i className="fas fa-user-circle"></i>
    </header>
  );
};