import React, { Component } from 'react';
import './custom.css';


class Boxes extends Component {
	render() {
		return (

		<div className="container">
		  <div className="row">


		  		<div className="box">


				    <div className="col s3">
				      <div className="card-panel blue-grey darken-1">
				        <span className="white-text">
				        <div><img alt="bitcoin" height='20px' src={require('../images/bitcoin.png')} /></div>
			        	<h5>$8,002.88</h5>
				        </span>
				      </div>
				    </div>

				    <div className="col s3">
				      <div className="card-panel red">
				        <span className="white-text">
							<div><img alt="eth" height='20px' src={require('../images/eth.png')} /></div>
			        		<h5>$649.01</h5>
				        </span>
				      </div>
				    </div>

					<div className="col s3">
				      <div className="card-panel  indigo lighten-2">
				        <span className="white-text">				   					        
					        
					        <div><img alt="xrp" height='20px' src={require('../images/xrp.png')} /></div>
			        		<h5>$0.648754</h5>					        	
					      
					      </span>					      
				      </div> 
				    </div>

				    

					<div className="col s3 " >
				      <div className="card-panel  teal accent-3">
				        <span className="white-text">
							<div><img alt="dollar" height='20px' src={require('../images/dollar.png')} /></div>
			        		<h5>$84,353.93</h5>
				        </span>
				      </div>
				    </div>
				</div>

		    
		  </div>
		  </div>
		)
	}
}



export default Boxes;