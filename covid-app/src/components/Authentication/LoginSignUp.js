import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import Nav from "./Nav";
import LoggedInUserBox from "./LoggedInBox";

const BASE_URL = 'http://localhost:8000/';
// const BASE_URL = 'https://pt-alpha-final-project.herokuapp.com/';

class LoginSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: "",
      logged_in: localStorage.getItem("token") ? true : false,
      username: "",
      invalid_credentials_warning: false,
    };
  }

  componentDidMount() {
    this.setState({ username: localStorage.getItem("username") });
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch(`${BASE_URL}token-auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res["status"] >= 400) {
          console.log("400 error");
          this.setState({
            logged_in: false,
            invalid_credentials_warning: true,
          });
        } else {
          return res.json();
        }
      })
      .then((json) => {
        const username = json.user.username;
        const token = json.token;
        localStorage.setItem("token", token);
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: username,
          invalid_credentials_warning: false,
        });
        localStorage.setItem("username", json.user.username);
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch(`${BASE_URL}covid/users/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        localStorage.setItem("username", json.username);
        this.setState({
          logged_in: true,
          displayed_form: "",
          username: json.username,
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.setState({ logged_in: false, username: "" });
  };

  display_form = (form) => {
    this.setState({
      displayed_form: form,
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case "login":
        form = (
          <LoginForm
            handle_login={this.handle_login}
            handle_signup={this.handle_signup}
            display_form={this.display_form}
            invalid_credentials_warning={this.state.invalid_credentials_warning}
          />
        );
        break;
      case "signup":
        form = <SignupForm
        handle_signup={this.handle_signup}
        handle_login={this.handle_login}
        display_form={this.display_form} />;
        break;
      default:
        form = null;
    }
    return (
      <div>
        <Nav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        {form}
        {this.state.logged_in ? (
          <LoggedInUserBox username={this.state.username} handleLogout={this.handle_logout}/>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default LoginSignUp;
