import React from 'react'
import './NavBarCSS.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function NavBar(props) {
  const logged_out_nav = (
    <ul>
      <li onClick={() => props.display_form('login')}>Login</li>
      <li onClick={() => props.display_form('signup')}>Signup</li>
    </ul>
  );

  const logged_in_nav = (
    <ul>
      <li onClick={props.handle_logout}>logout</li>
    </ul>
  );

  return (
    <div id="nav-container">
      <div className="sub-nav-title">COVID APP</div>
      <div className="sub-nav-home-button">
        <Link to="/">HOME</Link>
      </div>
      {/* <div className="sub-nav-login-button">Login</div>
      <div className="sub-nav-signup-button">Signup</div> */}
      <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
    </div>
  )
}

export default NavBar

NavBar.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};