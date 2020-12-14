import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Nav(props) {
  const logged_out_nav = (
    <div className="nav-login-signup">
      <div className="app-header" style={{ backgroundColor: "#e9ecef" }}>
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
            <div
              color="link"
              className="btn-link-primary"
              style={{fontSize: "20px"}}
              onClick={() => props.display_form("login")}
              >
              Login
            </div>
          </Fragment>
        </div>
      </div>
    </div>
  );

  const logged_in_nav = (
    <div>
    </div>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired,
};
