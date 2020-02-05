import { NEWS_COUNTRY,NEWS_CATEGORY,NEWS_LOADED } from "../../constants/action-types";

const initialState = {
  news: [],
  news_country:'in',
  news_category:'in',
};

function newsReducer(state = initialState, action) {
  if (action.type === NEWS_CATEGORY) {
    return Object.assign({}, state, {
      news_category: action.payload
    });
  }
  if (action.type === NEWS_LOADED) {
    return Object.assign({}, state, {
      news: action.payload
    });
  }
  if(action.type === NEWS_COUNTRY) {
    return Object.assign({}, state, {
      news_country: action.payload
    });
  }
  return state;
}

export default newsReducer;