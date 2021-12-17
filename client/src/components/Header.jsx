import React from 'react';
import Nav from './Nav';
import HamburgerMenu from './HamburgerMenu';

export default function Header() {
  return (
    <header className="primary-header">
      <Nav />
      <HamburgerMenu />
      <i className="fas fa-user-circle"></i>
    </header>
  );
};