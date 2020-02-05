import React,{ Component } from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import get_news_data from "../../../js/actions/news";
import countries from '../../../data/countries';
import Loader from '../../helper/Spinner'
class news extends Component {
    Style={textAlign:"left"}
    componentDidMount(){
        this.props.dispatch(get_news_data());
    }		
	handleChange(e){
		// let target=e.target;
		// let new_change={...this.props.user, [target.name]: target.value}              
        // this.props.dispatch({type:CHANGE_SIGNUP_FORM,payload: new_change});
	}	
  	render() {
        console.log(!!this.props.news.articles);
	  return (		  
		    <div className="container register">
                <div className="row">
                    <div className="col-4">
                        <ul className="list-group country_listing">
                            {   countries.map((crty, index) => {
                                 let code=(crty.topLevelDomain[0])? crty.topLevelDomain[0].split(".").join(""):crty.name;
                                return (<li className="list-group-item" key={index} key_code={code} style={this.Style}>{crty.name}</li>)
                                })
                            }
                        </ul>
                    </div> 
                    <div className="col-8 news_panel">
                     {!!this.props.news.articles ? (<Loader visible={false}/>):(<Loader visible={true}/>)}
                        {   
                            (!!this.props.news.articles)?
                                this.props.news.articles.map((art, index) => {                             
                                return (
                                        <div className="card" key={index} >
                                            <div className="card-header">{art.title}</div>
                                            <div className="card-body" style={this.Style}>
                                                <img className="card-img-top" src={art.urlToImage} alt="Card image cap"/>
                                                <h5 className="card-title">{art.description}</h5>
                                                <p className="card-text">{art.content}</p>
                                                <a href={art.url} className="btn btn-primary">Check the content</a>
                                            </div>
                                        </div>
                                    )
                                })
                            :""
                        } 
                   </div>                                       
                </div>
            </div>	   
	  );
	}
}
function mapStateToProps(state) {
  return {
    news: state.newsReducer.news,
  };
}
export default withRouter(connect(mapStateToProps)(news));
