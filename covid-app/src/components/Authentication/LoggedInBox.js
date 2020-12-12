import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import defaultUserIcon from '../../assets/images/avatars/default.png';

function LoggedInUserBox({ username, userIcon, handleLogout }) {
  
  return (
    <div className="app-header" style={{backgroundColor: '#e9ecef'}}>
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
      <div className="app-header--pane">
        <Fragment>
          <UncontrolledDropdown className="user-box position-relative ml-2">
            <DropdownToggle
              color="link"
              className="p-0 text-left d-flex align-items-center"
            >
              <div className="d-block d-44 rounded-sm overflow-hidden">
                <img src={userIcon || defaultUserIcon} className="img-fluid" alt="..." />
              </div>
              <div className="d-none d-xl-block pl-2">
                <div className="font-weight-bold">Hello, {username}</div>
              </div>
              <span className="pl-1 pl-xl-3">
                <FontAwesomeIcon
                  icon={["fas", "angle-down"]}
                  className="opacity-5"
                />
              </span>
            </DropdownToggle>
            <DropdownMenu
              right
              className="dropdown-menu-lg overflow-hidden p-0"
            >
              <ListGroup flush className="text-left bg-transparent">
                <ListGroupItem className="rounded-top">
                  <Nav pills className="nav-neutral-primary flex-column">
                    <NavItem>
                      <NavLink href="#/user-profile/">My Account</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#/" onClick={handleLogout}>
                        Logout
                      </NavLink>
                    </NavItem>
                  </Nav>
                </ListGroupItem>
              </ListGroup>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Fragment>
      </div>
    </div>
  );
}

export default LoggedInUserBox;
