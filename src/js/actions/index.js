import { ADD_POST,POST_LOADED } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_POST, payload }
};

export default function getData() {
	return function(dispatch) {
		return fetch("https://jsonplaceholder.typicode.com/posts")
		  .then(response => response.json())
		  .then(json => {
		    dispatch({ type: POST_LOADED, payload: json });
		  });
	};
}
