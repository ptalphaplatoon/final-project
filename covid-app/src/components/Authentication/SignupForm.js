import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
class SignupForm extends React.Component {
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
        <form onSubmit={(e) => this.props.handle_signup(e, this.state)}>
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
          <div>
          <Button size="sm" variant="primary" type="submit">
            Sign Up
          </Button>
          </div>
          <div class="auth-text">
          Already Have an account?{" "}
          <span
            color="link"
            className="auth-link"
            onClick={() => this.props.display_form("login")}
          >
            Log In
          </span>
        </div>

        </form>
      </div>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired,
};