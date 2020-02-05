import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
<<<<<<< HEAD
import Loader from '../../helper/Spinner'
class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: "USD",
            to:"INR",
            final_value:"",
            is_loading:false
        };
=======
class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        this.state = {from: "USD",to:"INR",final_value:""};
>>>>>>> 6f03dcf58d3d2ae6dfef722cdd41bd9272ab1a10
    } 
    countries=["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BRL","BSD","BTC","BTN","BWP","BYN","BYR","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP","CRC","CUC","CUP","CVE","CZK","DJF","DKK","DOP","DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GGP","GHS","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","IMP","INR","IQD","IRR","ISK","JEP","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LVL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SYP","SZL","THB","TJS","TMT","TND","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEF","VND","VUV","WST","XAF","XAG","XCD","XDR","XOF","XPF","YER","ZAR","ZMK","ZMW","ZWL"] ;
    // countries=JSON.parse(this.countries);
    getCurrency(){
<<<<<<< HEAD
        this.setState({is_loading:true,final_value:""});        
=======
>>>>>>> 6f03dcf58d3d2ae6dfef722cdd41bd9272ab1a10
        const from=this.state.from;
        const to=this.state.to;
        const convert=from+"_"+to;
        return fetch("https://free.currconv.com/api/v7/convert?q="+convert+"&compact=ultra&apiKey=b9cf268f393faaf08c90")
          .then(response => response.json())
          .then(json => {
            console.log(json[convert]);
<<<<<<< HEAD
            let final_convert=json[convert];            
            this.setState({is_loading:false,final_value:final_convert});
          });        
=======
            let final_convert=json[convert];
            this.setState({final_value:final_convert});
          });
>>>>>>> 6f03dcf58d3d2ae6dfef722cdd41bd9272ab1a10
    }
    handleChange(event){
        var target=event.target;
        this.setState({[target.name]:target.value});
    }     
  	render() { 	
	  return (		  
		    <div className="row">
                <div className="col-sm-6 columns">
                  <div className="row ">
                    <div className="col-sm-3 columns form-group">
                      <input type="text" defaultValue="1" className="form-control" name="CURR_FR_VAL" id="CURR_FR_VAL" placeholder="Enter amount"/>
                    </div>
                    <div className="col-sm-4 columns form-group">
                      <select id="CURR_FR" className="postfix form-control" name="from" defaultValue={'USD'} onChange={this.handleChange.bind(this)}> 
                        {this.countries.map((content,i) =>       
                            <option key={i} value={content}>{content}</option> 
                        )}
                      </select>
                    </div>
                    <div className="col-sm-1 columns form-group" style={{textAlign: "center"}}>
                      <span className="postfix">to</span>
                    </div>
                    <div className="col-sm-4 columns form-group">
                      <select id="CURR_TO" className="postfix form-control" name="to" defaultValue={'INR'} onChange={this.handleChange.bind(this)}>        
                        {this.countries.map((content,i) =>       
                            <option key={i} value={content}>{content}</option> 
                        )} 
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3 columns">
                    <button onClick={()=>this.getCurrency()} className="btn btn-primary postfix" style={{width:"100%"}}>Convert</button>
                </div>
<<<<<<< HEAD
                 {!!this.state.is_loading ? (<Loader width={100} height={100} visible={true}/>):(<Loader width={100} height={100} visible={false}/>)}   
=======

>>>>>>> 6f03dcf58d3d2ae6dfef722cdd41bd9272ab1a10
                <div className="col-sm-3 columns">
                    <input type="text" id="CURR_VAL" defaultValue={this.state.final_value} className="form-control" readOnly="" placeholder="Press Convert button" style={{backgroundColor: "#eee", fontWeight:" bold",width:"100%"}} />
                </div>

            </div>		   
	  );
	}
}
export default withRouter(CurrencyConverter);