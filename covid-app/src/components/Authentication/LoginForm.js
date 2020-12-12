import React from "react";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handle_change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevstate) => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <div className="auth-form">
        <form onSubmit={(e) => this.props.handle_login(e, this.state)}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handle_change}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handle_change}
            />
          </div>
          <Button size="sm" variant="primary" type="submit">
            Login
          </Button>
          {this.props.invalid_credentials_warning ? (
            <span className="invalid-credentials-warning">
              Invalid credentials. Please try again.
            </span>
          ) : (
            <br />
          )}
        </form>
        <div class="auth-text">
          Don't have an account?{" "}
          <span
            color="link"
            className="auth-link"
            onClick={() => this.props.display_form("signup")}
          >
            Sign Up
          </span>
        </div>
      </div>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  handle_login: PropTypes.func.isRequired,
};
