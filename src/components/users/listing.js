import React,{ Component } from 'react';
// import { Switch, Route, Link} from "react-router-dom";
import {IS_DASHBORAD } from "../../js/constants/action-types";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import getData from "../../js/actions/index";
import Dashboard from "./dashboard/dashboard";
import User from "./dashboard/user";
<<<<<<< HEAD
import Loader from '../helper/Spinner'
class listing extends Component {	
	componentDidMount() {		
		this.props.dispatch({ type: IS_DASHBORAD, payload:false });
		setTimeout(()=>{
			this.props.dispatch(getData());	
		},2000);
		// this.props.dispatch(getData());			
=======
class listing extends Component {	
	componentDidMount() {
		this.props.dispatch({ type: IS_DASHBORAD, payload:false });
		this.props.dispatch(getData());		
>>>>>>> 6f03dcf58d3d2ae6dfef722cdd41bd9272ab1a10
	 }
	check_action(){
		this.props.dispatch({ type: IS_DASHBORAD, payload:true });
	}
  	render() {
  	  // console.log(this.props.history);		
  	  // console.log(this.props.location);	
  	  const is_dashborad = this.props.is_dashborad;	
  	  // console.log(is_dashborad);	
<<<<<<< HEAD
	  return (
		  <section id="user_listing_info" className="wow fadeInUp">		  
		  <div className="container">
		 	 {this.props.posts.posts.length > 0 ? (<Loader visible={false}/>):(<Loader visible={true}/>)}	
		  	{is_dashborad ? (<Dashboard post_data={this.props.posts.posts} />) : this.props.posts.posts.length > 0 && (<User />  )}
=======
	  return (	   	
		  <section id="user_listing_info" className="wow fadeInUp">
		  <div className="container">	
		  	{is_dashborad ? (<Dashboard post_data={this.props.posts.posts} />) : (<User />  )}
>>>>>>> 6f03dcf58d3d2ae6dfef722cdd41bd9272ab1a10
		  </div>
		  </section>
	  );
	}
}

function mapStateToProps(state) {
  return {
    posts: state.postReducer,
    is_dashborad:state.postReducer.is_dashborad
  };
}
export default withRouter(connect(mapStateToProps)(listing));