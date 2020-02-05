import { NEWS_COUNTRY,NEWS_CATEGORY,NEWS_LOADED } from "../constants/action-types";

export function addNewsCountry(payload) {
  return { type: NEWS_COUNTRY, payload }
};

export function addNewsCategory(payload) {
  return { type: NEWS_CATEGORY, payload }
};


export default function get_news_data() {
	return function(dispatch) {
		return fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=301a967102cd44a3832350764c3d895d")
		  .then(response => response.json())
		  .then(json => {
		    dispatch({ type: NEWS_LOADED, payload: json });
		  });
	};
}
