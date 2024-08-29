import React from 'react'
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">
            <h3>LOGO</h3>
        </div>
        <div className="nav-item">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
