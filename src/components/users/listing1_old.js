import React,{ Component } from 'react';
import { Switch, Route, Link} from "react-router-dom";
import { connect } from "react-redux";
import getData from "../../js/actions/index";
import Dashboard from "./dashboard/dashboard";
import User from "./dashboard/user";
class listing extends Component {
	componentDidMount() {
		this.props.dispatch(getData());		
	 }
  	render() {   		
  	  // let { path, url } = this.props.location.pathname; 		
	  return (
		  <section id="user_listing_info" className="wow fadeInUp">
		    <div className="container">
		        <div>
			      <h2>Dashbord</h2>
			      <ul>
			        <li>
			          <Link to='/dashboard'>Dashboard</Link>
			        </li>
			        <li>
			          <Link to='/users'>Users</Link>
			        </li>
			        <li>
			          <Link to='/profile'>Profile</Link>
			        </li>
			      </ul>
			     </div>
			     <Switch>
			        <Route exact path='/user_listing'>
			          <h3>Please select a topic.</h3>
			        </Route>
			        <Route path="/dashboard">
			          <Dashboard />
			        </Route>
			        <Route path='/users'>
			          <User />
			        </Route>
			    </Switch>
		    </div>
		  </section>
	  );
	}
}

function mapStateToProps(state) {
  return {
    posts: state.postReducer
  };
}
export default connect(mapStateToProps)(listing);