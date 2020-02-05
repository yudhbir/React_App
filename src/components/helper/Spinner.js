 import React from 'react';
 import Loader from 'react-loader-spinner'
 export default class Spinner extends React.Component {  
    render() {
     return(
      <Loader
         type="Triangle"
         color={this.props.color?this.props.color:"#f82249"}
         height={this.props.height?this.props.height:200}
         width={this.props.width?this.props.width:200}       
         visible={this.props.visible}
      />
     );
    }
 }