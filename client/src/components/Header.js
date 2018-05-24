import React, { Component } from 'react';
import '../css/custom.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

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
		        <li><Link to='/home/dashboard'>Dashboard</Link></li>
		        <li><Link to='/home/dashboard/account'>Account Activity</Link></li>		        
		        <li><a href="/login">Logout</a></li>
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