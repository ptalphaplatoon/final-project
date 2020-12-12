import React, {Fragment} from 'react'
import './NavBarCSS.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


function NavBar(props) {
  return (
    <div id="nav-container">
      <div className="nav-row">
        <Fragment>
          <div className="app-header">
            <div className="app-header--pane">
              <Button
                as={Link}
                to="/"
                size="sm"
                color="neutral-success"
                className="ml-3 mr-3 btn-transition-none"
                >
                  HOME
              </Button>
            </div>
            <div className="app-header--pane">{/* <HeaderUserbox /> */}</div>
          </div>
        </Fragment>
      </div>
    </div>
  );
}

export default NavBar