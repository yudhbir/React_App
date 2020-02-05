import React,{ Component } from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import {DATE_UPDATED,CHANGE_SIGNUP_FORM } from "../../../js/constants/action-types";
import './register.css';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
// import Dashboard from "./dashboard";
class register extends Component {
	setStartDate(date){
		this.props.dispatch({type:DATE_UPDATED,payload: date});		
	}
	handleSubmit(event){
		event.preventDefault();
		if (event.target.checkValidity()) {
		    console.log(this.props.user);
		}else{
			this.validate_form();
			console.log(event.target.checkValidity());
		}
	}
	handleChange(e){
		let target=e.target;
		let pattern=(target.pattern) ? new RegExp(target.pattern):false;
		var errorsec=target.parentNode.querySelector('.no_error');
		if(!!pattern && pattern.test(target.value)){			
			if(!!errorsec){
				errorsec.classList.remove("show_error");
			}
			
			if (target.parentNode.classList.contains('has-error')) {
				target.parentNode.classList.remove("has-error");
			}
			let new_change={...this.props.user, [target.name]: target.value}				
			this.props.dispatch({type:CHANGE_SIGNUP_FORM,payload: new_change});
		}else if(!pattern || !!target.required){
			if (target.parentNode.classList.contains('has-error')) {
				target.parentNode.classList.remove("has-error");
			}
			let new_change={...this.props.user, [target.name]: target.value}				
			this.props.dispatch({type:CHANGE_SIGNUP_FORM,payload: new_change});
		}else{
			if(!!errorsec){
				errorsec.classList.add("show_error");
			}
		}
	}
	validate_form(){
		const invalidElms = document.querySelectorAll(".register-form .form-group input:invalid");
        for (let i = 0; i < invalidElms.length; i++) {
            invalidElms[i].parentElement.classList.add("has-error");
        }
        const validElms = document.querySelectorAll(".register-form .form-group input:valid");
        for (let i = 0; i < validElms.length; i++) {
            validElms[i].parentElement.classList.remove("has-error");
        }
	}	
  	render() {	
	  return (		  
		    <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="logo_white.png"/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <input type="submit" name="" value="Login"/><br/>
                    </div>
                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Employee</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hirer</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                        	<form onSubmit={(e)=>this.handleSubmit(e)} noValidate={true} className="register-form">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Apply as a Employee</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" 
                                            name="fname" 
                                            placeholder="First Name *" 
                                            defaultValue={this.props.user.fname} 
                                            onChange={this.handleChange.bind(this)}                                            
                                            pattern={"^[a-zA-Z]+$"}
                                            required={true}
                                            />
                                           <p className="no_error">Please Enter valid first Name. Only Alphabets allowed.</p>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" 
                                            name="lname" 
                                            placeholder="Last Name *" 
                                            defaultValue={this.props.user.lname} 
                                            onChange={this.handleChange.bind(this)}
                                            required={true}
                                            pattern={"^[a-zA-Z]+$"}
                                            />
                                            <p className="no_error">Please Enter valid last Name. Only Alphabets allowed.</p>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" 
                                            name="password" 
                                            placeholder="Password *" 
                                            defaultValue={this.props.user.password} 
                                            onChange={this.handleChange.bind(this)}
                                            required={true}                                            
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" 
                                            name="cpassword" 
                                            placeholder="Confirm Password *" 
                                            defaultValue={this.props.user.cpassword} 
                                            onChange={this.handleChange.bind(this)}
                                            required={true}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <div className="maxl">
                                                <label className="radio inline"> 
                                                    <input type="radio" 
                                                    name="gender" 
                                                    value="male" 
                                                    defaultChecked={(this.props.user.gender==='male')?true:''} 
                                                    onChange={this.handleChange.bind(this)}
                                                    required={true}
                                                    />
                                                    <span> Male </span> 
                                                </label>
                                                <label className="radio inline"> 
                                                    <input type="radio" 
                                                    name="gender" 
                                                    value="female" 
                                                    onChange={this.handleChange.bind(this)}
                                                    required={true}
                                                    />
                                                    <span>Female </span> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" 
                                            name="email" 
                                            placeholder="Your Email *" 
                                            defaultValue={this.props.user.email} 
                                            onChange={this.handleChange.bind(this)}
                                            required={true}
                                            pattern={"^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"}
                                            />
                                            <p className="no_error">Please Enter a valid Email.</p>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" maxLength="10" 
                                            maxLength="10" 
                                            name="EmpPhone" 
                                            className="form-control" 
                                            placeholder="Your Phone *" 
                                            defaultValue={this.props.user.EmpPhone} 
                                            onChange={this.handleChange.bind(this)}
                                            pattern={"^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$"}                                            
                                            /> 
                                            <p className="no_error">Please Enter a valid phone number. Only Number is allowed.</p>                                           
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control" 
	                                            defaultValue={this.props.user.security_question} 
	                                            name="security_question" 
	                                            onChange={this.handleChange.bind(this)}
	                                            required={true}
                                            >
                                                <option className="hidden" value="select">Please select your Sequrity Question</option>
                                                <option value="birthdate">What is your Birthdate?</option>
                                                <option value="phone_number">What is Your old Phone Number</option>
                                                <option value="pet_name">What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" 
                                            name="security_answer" 
                                            placeholder="Enter Your Answer *" 
                                            defaultValue={this.props.user.security_answer} 
                                            onChange={this.handleChange.bind(this)}
                                            required={true}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <DatePicker selected={this.props.start_date} onChange={date => this.setStartDate(date)} />
                                        </div>
                                        <input type="submit" className="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                               
                            </div>
                            </form>
                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  className="register-heading">Apply as a Hirer</h3>
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name *" defaultValue="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name *" defaultValue="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email *" defaultValue="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" maxLength="10" maxLength="10" name="hirer_phone" className="form-control" placeholder="Phone *" defaultValue="" />
                                        </div>


                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password *" defaultValue="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Confirm Password *" defaultValue="" />
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control" defaultValue="select">
                                                <option className="hidden" value="select" disabled="disabled">Please select your Sequrity Question</option>
                                                <option value="birthdate">What is your Birthdate?</option>
                                                <option value="phone_number">What is Your old Phone Number</option>
                                                <option value="pet_name">What is your Pet Name?</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="`Answer *" defaultValue="" />
                                        </div>
                                        <input type="submit" className="btnRegister"  value="Register"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>	   
	  );
	}
}
function mapStateToProps(state) {
  return {
    users: state.userReducer,
    start_date:state.userReducer.start_date,
    user:state.userReducer.user,
  };
}
export default withRouter(connect(mapStateToProps)(register));
