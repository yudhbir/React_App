import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
class Report extends Component {
   options = {
         chart: {
            type: 'column'
        },
        title: {
            text: 'Reports',
            style : {
              display : 'none'
            }
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5]
        }]
    }	
  	render() {  		
	  return (		  
		    <div>
		    	 <HighchartsReact  highcharts={Highcharts}  options={this.options} />
		    </div>		   
	  );
	}
}
export default withRouter(Report);