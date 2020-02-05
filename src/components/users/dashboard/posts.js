import React,{ Component } from 'react';
import { connect } from "react-redux";
class dashboard extends Component {	
  	render() { 
  	// console.log(window.store.getState());		
	  return (
	  		<div className="container">			  
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
	  );
	}
}

function mapStateToProps(state) {	
  return {  	
    posts: state.postReducer
  };
}
export default connect(mapStateToProps)(dashboard);