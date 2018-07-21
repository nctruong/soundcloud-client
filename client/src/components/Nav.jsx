import React from 'react';

const Nav = state => (
  <nav id="main-nav">
    <ul>
      <li className="main-navlinks"><a href="/" className="current">Home</a></li>
      <li className="main-navlinks">
        <a className="btn btn-primary btn-outline-dark" href="https://www.linkedin.com/in/truong-nguyen-029784b6/">Hire Me</a>
      </li>
      <li className="social-navlinks"><a href="/sign_in">Sign In</a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-instagram" /></a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-facebook" /></a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-twitter" /></a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-linkedin" /></a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-github" /></a></li>
    </ul>
  </nav>
)
export default Nav;
