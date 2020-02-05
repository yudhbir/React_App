import {combineReducers} from 'redux';
import postReducer from "./posts/post";
import userReducer from "./posts/user";
<<<<<<< HEAD
import newsReducer from "./news/news";

export default combineReducers({
	postReducer,
	userReducer,
	newsReducer
=======

export default combineReducers({
	postReducer,
	userReducer
>>>>>>> 6f03dcf58d3d2ae6dfef722cdd41bd9272ab1a10
});