import React, { Component } from 'react';
import '../css/custom.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class Login extends React.Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleSubmit(event) {
    event.preventDefault();

    let e = document.getElementById('email').value;
    let p = document.getElementById('password').value;

    if (e == 'admin@admin.com' && p === 'admin') {
        localStorage.setItem('myData', 'admin');
        this.props.history.push("/home/dashboard")
    } else if (e === 'user@user.com' && p ==='user') {
        localStorage.setItem('myData', 'user');
        this.props.history.push("/home/dashboard")
    } else {
        alert('Wrong username or password.');
        localStorage.setItem('myData', null);
    }
  }

  render() {
    return (

      <div className="container">
          <div className="row graph">
            <div className="col s6 offset-s3 graph">
              <div className="card-panel indigo accent-4">
                <div>
                  <img alt="logo" height='80px' src={require('./logo-white.png')} />
                    </div>
                    <span className="white-text">
                      <h5>Login</h5>
                      <form onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="col s12">
                          <div className="input-field">
                            <input id="email" name="email" type="email" className="validate"/>
                            <label for="email_inline">Email</label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12">
                          <div className="input-field">
                            <input id="password" name="password" type="password" className="validate"/>
                            <label for="password">Password</label>
                          </div>
                        </div>
                      </div>
                      <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right"></i>
                      </button>
                    <p className="note center">user@user.com, user - or -   admin@admin@.com, admin</p>
                  </form>
                </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;