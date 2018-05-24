import React, { Component } from 'react';																																																																																																																																																																																																						
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/';

import '../css/custom.css';
import Header from './Header';
import Boxes from './Boxes';
import Graph from './Graph';
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
						<Header />
						<Boxes />
						<Graph />
						<div className = "container"><SimpleGridExample/></div>,
	        			
						


					</div>
				</BrowserRouter>
			</div>
		);
	}
};




export default connect(null, actions)(App);