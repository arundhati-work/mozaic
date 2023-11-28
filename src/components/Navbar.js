import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="navigation">
      <div id="menuToggle">
        <input type='checkbox'/>
        <span></span>
        <span></span>
        <span></span>
          <ul id="menu">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
            <button><NavLink to="contact-us">Request a call</NavLink></button>
            </li>
          </ul>
        </div>
        <div className="navbar-logo">
        <NavLink to="/"><span className='blue'>Mozaic</span><span className='gray'>.co</span></NavLink>
      </div>
      </nav>
  );
}
