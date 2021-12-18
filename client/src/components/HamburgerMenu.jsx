import React from 'react'

export default function HamburgerMenu({ setToggle }) {
  return (
    <div className="hamburger-menu-container" onClick={() => {
      setToggle(true);
    }}>
      <div className="hamburger-menu"></div>
    </div>
  )
}
