import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";
import { routerMiddleware } from 'react-router-redux';
const createHistory = require("history").createBrowserHistory;
const history = createHistory();
const middleware = routerMiddleware(history);

var store = createStore(
	rootReducer,
	applyMiddleware(
		thunk,
		middleware	
	)

);

export default store;