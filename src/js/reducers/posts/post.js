import { ADD_POST,POST_LOADED,IS_DASHBORAD } from "../../constants/action-types";

const initialState = {
  posts: [],
  is_dashborad:false
};

function postReducer(state = initialState, action) {
  if (action.type === ADD_POST) {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    });
  }
  if (action.type === POST_LOADED) {
    return Object.assign({}, state, {
      posts: action.payload
    });
  }
  if(action.type === IS_DASHBORAD) {
    return Object.assign({}, state, {
      is_dashborad: action.payload
    });
  }
  return state;
}

export default postReducer;