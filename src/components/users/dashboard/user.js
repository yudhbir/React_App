import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
import Post from "./posts";
import Dashboard from "./dashboard";
import Register from "./register";
import Report from "./Report";
<<<<<<< HEAD
import News from "./news";
=======
>>>>>>> 6f03dcf58d3d2ae6dfef722cdd41bd9272ab1a10
import CurrencyConverter from "./CurrencyConverter";
class user extends Component {	
  	render() {  		
	  return (		  
		    <div>
		    	  <nav>
                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                      <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Post</a>
                      <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Dashboard</a>
                      <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                      <a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Reports</a>
                      <a className="nav-item nav-link" id="nav-currencyconverter-tab" data-toggle="tab" href="#nav-currencyconverter" role="tab" aria-controls="nav-currencyconverter" aria-selected="false">Currency Converter</a>
<<<<<<< HEAD
                      <a className="nav-item nav-link" id="nav-news-tab" data-toggle="tab" href="#nav-news" role="tab" aria-controls="nav-news" aria-selected="false">News</a>
=======
>>>>>>> 6f03dcf58d3d2ae6dfef722cdd41bd9272ab1a10
                    </div>
                  </nav>
                  <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                      <Post />
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                      <Dashboard />
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                       <Register />
                    </div>
                    <div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                      <Report />
                    </div> 
                    <div className="tab-pane fade" id="nav-currencyconverter" role="tabpanel" aria-labelledby="nav-currencyconverter-tab">
                      <CurrencyConverter />
                    </div>
<<<<<<< HEAD
                    <div className="tab-pane fade" id="nav-news" role="tabpanel" aria-labelledby="nav-news-tab">
                      <News />
                    </div>
=======
>>>>>>> 6f03dcf58d3d2ae6dfef722cdd41bd9272ab1a10
                  </div>
		    </div>		   
	  );
	}
}
export default withRouter(user);