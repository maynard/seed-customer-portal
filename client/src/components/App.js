import React, { Component } from 'react';																																																																																																																																																																																																						
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/';

import '../css/custom.css';
import Header from './Header';
import Boxes from './Boxes';
import Graph from './Graph';
import Login from './Login';
import "./grid/ag-grid.css";
import "./grid/theme-fresh.css";
import SimpleGridExample from "./grid/SimpleGridExample";
		

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route exact path='/home/dashboard' component={Header} />
						<Route exact path='/home/dashboard/account' component={Header} />

						<Route exact path='/home/dashboard' component={Boxes} />
						<Route exact path='/home/dashboard' component={Graph} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/' component={Login} />
						<Route exact path='/home/dashboard/account' component={SimpleGridExample} />
						
					</div>
				</BrowserRouter>
			</div>
		);
	}
};




export default connect(null, actions)(App);