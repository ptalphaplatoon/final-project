import React, {Fragment} from 'react'
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