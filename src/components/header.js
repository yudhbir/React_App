import React,{ Component } from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import $ from "jquery";
class header extends Component {
	componentDidMount() {
	    $('.nav-menu a').on('click', function() {
	      if ($(this).parents('.nav-menu').length) {
	          $('.nav-menu .menu-active').removeClass('menu-active')
	          $(this).closest('li').addClass('menu-active')
	        }
	    });
	 }
  	render() {
	  return (
		  <header id="header">
		    <div className="container">

		      <div id="logo" className="pull-left">        
		        <a href="/" className="scrollto"><img src="img/logo.png" alt="" title=""/></a>
		      </div>
		      <nav id="nav-menu-container">
		        <ul className="nav-menu">
		          <li className="menu-active"><NavLink to="/">Home</NavLink></li>
		          <li><NavLink to="/about">About</NavLink></li>
		          <li><NavLink to="/speakers">Speakers</NavLink></li>
		          <li><NavLink to="/schedule">Schedule</NavLink></li>
		          <li><NavLink to="/venue">Venue</NavLink></li>
		          <li><NavLink to="/hotels">Hotels</NavLink></li>
		          <li><NavLink to="/gallery">Gallery</NavLink></li>
		          <li><NavLink to="/supporters">Sponsors</NavLink></li>
		          <li><NavLink to="/contact">Contact</NavLink></li>
		          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
		          <li className="buy-tickets"><NavLink to="/buytickets">Buy Tickets</NavLink></li>
		        </ul>
		      </nav>
		    </div>
		  </header>
	  );
	}
}

export default withRouter(header); // mantain the history of the routes.