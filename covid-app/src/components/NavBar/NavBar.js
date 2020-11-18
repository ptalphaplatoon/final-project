import React from 'react'
import './NavBarCSS.css'
import { Link } from 'react-router-dom'
import LoginForm from '../Authentication/LoginForm'
import SignupForm from '../Authentication/SignupForm'
import Nav from '../Authentication/Nav'
import LoginSignUp from '../Authentication/LoginSignUp'


const BASE_URL = 'http://localhost:8000/';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch(`${BASE_URL}/covid/current_user/`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    console.log("handle login is called")
    // e.preventDefault();
    fetch(`${BASE_URL}token-auth/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    //e.preventDefault();
    fetch(`${BASE_URL}covid/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      //.then(res => console.log(res))
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };




  logged_out_nav = (
    <div className="nav-login-signup">
      <div className="sub-nav-login-button" onClick={() => this.display_form('login')}>Login</div>
      {/* <div className="sub-nav-login-button" onClick={(e) => this.handle_login(e)}>Login</div> */}
      <div className="sub-nav-signup-button" onClick={() => this.display_form('signup')}>Signup</div>
      {/* <div className="sub-nav-signup-button" onClick={(e) => this.handle_signup(e)}>Signup</div> */}
    </div>
  );

  logged_in_nav = (
    <ul>
      <li onClick={this.handle_logout}>logout</li>
    </ul>
  );


  display_form = (form) => {
    console.log("display form")
    console.log("state form ", this.state.displayed_form)
    // switch (this.state.displayed_form) {
    switch (form) {
      case 'login':
        console.log("case login")
        form = <LoginForm handle_login={this.handle_login} />;
        return < LoginForm handle_login={this.handle_login()} />;
      case 'signup':
        console.log("case signup")
        form = <SignupForm handle_signup={this.handle_signup} />;
        return <SignupForm handle_signup={this.handle_signup()} />;

      default:
        form = null;

        this.setState({
          displayed_form: form
        });
    };
  }


  render() {

    return (
      <div id="nav-container" >
        <div className="sub-nav-title">COVID APP</div>
        <div className="sub-nav-home-button">
          <Link to="/">HOME</Link>
        </div>
        {/* <div className="sub-nav-login-button">Login</div>
      <div className="sub-nav-signup-button">Signup</div> */}
        {/* <div> {this.state.logged_in ? this.logged_in_nav : this.logged_out_nav}</div >; */}
        <div>
        </div>
      </div >
    )
  }

}

export default NavBar
