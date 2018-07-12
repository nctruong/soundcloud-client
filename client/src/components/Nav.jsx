import React, { Component } from 'react';

const Nav = state => (
  <nav id="main-nav">
    <a href="#" id="menu-icon">
      <i className="fas fa-2x fa-bars"></i>
    </a>
    <ul>
      <li className="main-navlinks"><a href="#" className="current">Home</a></li>
      <li className="main-navlinks"><a href="#">About Me</a></li>
      <li className="main-navlinks"><a href="#">My Work</a></li>
      <li className="main-navlinks"><a href="#">Blog</a></li>
      <li className="main-navlinks"><a href="#">Vlog</a></li>
      <li className="main-navlinks">
        {/*<button className="btn-outline-dark">Hire Me</button>*/}
      </li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-instagram"></i></a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-facebook"></i></a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-twitter"></i></a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-linkedin"></i></a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-github"></i></a></li>
    </ul>
  </nav>
)
export default Nav;
