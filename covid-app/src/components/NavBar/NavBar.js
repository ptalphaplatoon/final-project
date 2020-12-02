import React from 'react'
import './NavBarCSS.css'
import { useHistory, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


function NavBar(props) {
  const history = useHistory()

  function handleClick() {
    history.push(`/user-profile/`);
  }

  return (
    <div id="nav-container">
      <div className="sub-nav-title">COVID APP</div>
      <div className="sub-nav-home-button">
        <Link to="/">HOME</Link>
        <Button onClick={() => handleClick()}>User Profile</Button>
      </div>
    </div>
  )
}

export default NavBar