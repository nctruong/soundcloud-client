import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => (
  <Link to="/profile">{props.email}</Link>
);

const SignIn = (props) => (
  <Link to="/sign_in">Sign In</Link>
);

const Nav = (props) => (
  <nav id="main-nav">
    <ul>
      <li className="main-navlinks"><Link to="/" className="current">Home</Link></li>
      <li className="main-navlinks">
        <a className="btn btn-primary btn-outline-dark" href="https://www.linkedin.com/in/truong-nguyen-029784b6/">Hire Me</a>
      </li>
      <li className="social-navlinks">
        {props.currentUser.isSignedIn ?
          <Profile email={props.currentUser.attributes.provider} /> : <SignIn/> }
      </li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-instagram" /></a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-facebook" /></a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-twitter" /></a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-linkedin" /></a></li>
      <li className="social-navlinks"><a href="#" target="_blank"><i className="fa fa-2x fa-github" /></a></li>
    </ul>
  </nav>
)
export default Nav;
