import React,{ Component } from 'react';
// import { Switch, Route, Link} from "react-router-dom";
import {IS_DASHBORAD } from "../../js/constants/action-types";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import getData from "../../js/actions/index";
import Dashboard from "./dashboard/dashboard";
import User from "./dashboard/user";
class listing extends Component {	
	componentDidMount() {
		this.props.dispatch({ type: IS_DASHBORAD, payload:false });
		this.props.dispatch(getData());		
	 }
	check_action(){
		this.props.dispatch({ type: IS_DASHBORAD, payload:true });
	}
  	render() {
  	  // console.log(this.props.history);		
  	  // console.log(this.props.location);	
  	  const is_dashborad = this.props.is_dashborad;	
  	  console.log(is_dashborad);	
	  return (	   	
		  <section id="user_listing_info" className="wow fadeInUp">
		  {is_dashborad ? (<Dashboard post_data={this.props.posts.posts} />) : (
		    <div className="container">		    
		    	<button onClick={() => this.check_action()}>Action</button>
		    	<User />
		      <table className="table table-striped table-voilate">
			  <thead>
			    <tr>
			      <th scope="col">#</th>
			      <th scope="col">UserId</th>
			      <th scope="col">Title</th>
			      <th scope="col">Description</th>
			    </tr>
			  </thead>
			  <tbody>
			  {this.props.posts.posts.map(post => (
			    <tr key={post.id}>
			      <th scope="row">{post.id}</th>
			      <td>{post.userId}</td>
			      <td>{post.title}</td>
			      <td>{post.body}</td>
			    </tr>
			   	))}	   
			  </tbody>
			</table>
			
		    </div>
		    )}
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