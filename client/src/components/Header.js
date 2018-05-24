import React, { Component } from 'react';
import '../css/custom.css';
import { connect } from 'react-redux';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return 'still deciding';
			case false:
				return 'not logged in';
			default:
				return 'logged in';
		}
	}
	render() {
		return (
		  <nav>
		    <div className="nav-wrapper indigo accent-4">
		      <div className="logo">
		      	<a href="/" className="brand-logo"> <img alt="logo" height='50px' src={require('./logo-white.png')} /></a>
		      </div>
		      
		      <ul id="nav-mobile" className="right hide-on-med-and-down">
		        <li><a href="/">Home</a></li>
		        <li><a href="#spreadsheet">Account Activity</a></li>
		        <li><a href="http://localhost:5000/auth/google">Login</a></li>
		        <li><a href="http://localhost:5000/api/logout">Logout</a></li>
		        <li><img alt="logo" height='50px' src={require('../images/user.png')} /></li>
		      </ul>
		    </div>
		  </nav>
		);
	}
}


function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);