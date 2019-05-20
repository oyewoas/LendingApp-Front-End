import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import FormValidator from '../FormValidator/FormValidator'
import SignUpNavBar from '../SignUpNavBar/SignUpNavBar'
import './SignUpPage.css';
import axios from 'axios';
import env from '../../../src/env';
import FooterComponent from '../FooterComponet/FooterComponent';


class SignUpPage extends Component {
    constructor(props){
				super(props);
				this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.validator = new FormValidator([
            { 
                field: 'occupation', 
                method: 'isEmpty', 
                validWhen: false, 
                message: 'Your Occupation is required' 
							},
							{ 
                field: 'occupation', 
								method: 'matches',
								args: [/^[a-zA-Z\s]*$/],
                validWhen: true, 
                message: 'Your Occupation can only contain letters' 
              },
              { 
                field: 'firstName', 
                method: 'isEmpty',
                validWhen: false, 
                message: 'First Name is required' 
							},
							{ 
                field: 'firstName', 
								method: 'matches',
								args: [/^[a-zA-Z\s]*$/],
                validWhen: true, 
                message: 'First Name can only contain letters' 
              },
              { 
                field: 'lastName', 
                method: 'isEmpty',
                validWhen: false, 
                message: 'Last Name is required' 
							},
							{ 
                field: 'lastName', 
                method: 'matches',
								args: [/^[a-zA-Z\s]*$/],
                validWhen: true, 
                message: 'Last Name can only contain letters' 
              },
            { 
              field: 'email', 
              method: 'isEmpty', 
              validWhen: false, 
              message: 'Email is required' 
            },
            { 
              field: 'email',
              method: 'isEmail', 
              validWhen: true, 
              message: 'That is not a valid email.'
            },
            { 
              field: 'password', 
              method: 'isEmpty', 
              validWhen: false, 
              message: 'Password is required'
            },
            { 
              field: 'confirmpassword', 
              method: 'isEmpty', 
              validWhen: false, 
              message: 'Password confirmation is required'
            },
            { 
              field: 'confirmpassword', 
              method: this.passwordMatch,   // notice that we are passing a custom function here
              validWhen: true, 
              message: 'Password and password confirmation do not match.'
            },
						{ 
							field: 'dob', 
							method: 'isEmpty', 
							validWhen: false, 
							message: 'Date of Birth is required'
						}
          ]);
          
          this.state = {
            occupation:'',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmpassword: '',
						dob: '',
						validation: this.validator.valid(),
						successmessage: '',
						errormessage: '',
    				toDashboard: false,

          };
      
          this.submitted = false;


  
		}
		
		passwordMatch = (confirmation, state) => (state.password === confirmation)

		handleInputChange = event => {
			event.preventDefault();
	
			this.setState({
				[event.target.name]: event.target.value,
			});
		}

    handleFormSubmit = async(event) => {
        event.preventDefault();
				const refreshPage = (timeoutPeriod) => {
					let refresh = "location.reload(true)";
					setTimeout( refresh ,timeoutPeriod);
			  }
        const validation = this.validator.validate(this.state);
        this.setState({ validation });
        this.submitted = true;
    
        if (validation.isValid) {
					// handle actual form submission here
					try{
						const res = await axios.post(`${env.api}customer/SignUp`, this.state);
						const token = res.result.data.token;
            res.result.data.message = 'Account Successfully Created'
						localStorage.setItem('token', token);

						this.props.history.push('/verifymail');
            console.log(res);
            this.setState({
              successmessage: res.result.data.message
            });
						

					} catch(err){
            this.setState({
               errormessage: err.result.data.message
            });
						console.log('An Error Occured', err.result.data.message);
					}
					
					

					
        } 
        else {
					// this.setState({
					// 	errormessage: 'Cannot Create User Make sure all fields are correctly filled', successmessage: ''
					// });
					// alert('Cannot Create User Make sure all fields are correctly filled')
				}
      };
		
			componentDidMount(){
				const token = localStorage.getItem('token');
		
				if (token) return this.props.history.push('/dashboard');
		}
    
    render(){
        let validation = this.submitted ?                         // if the form has been submitted at least once
                      this.validator.validate(this.state) :   // then check validity every time we render
                      this.state.validation; 
        return(
            <div>
                <SignUpNavBar/>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-sm-3 ">
                    </div>
                    <div className="col-sm-6 form">
										<h2 className="err-success text-center">{this.state.errormessage}</h2>
										<h2 className="err-success text-center">{this.state.successmessage}</h2>
                    <form action="" method="">
                        <div className="text-center">
                            <h5 className="form-header">Create Account</h5>
                        </div>
                        
                        <div className="form-group {validation.firstName.isInvalid && 'has-error'}">
                            <label htmlFor="firstName">First Name</label>
                            <input onChange={this.handleInputChange} type="text" name="firstName" className="form-control" id="firstName" placeholder="First Name" />
                            <span className="help-block">{validation.firstName.message}</span>
                        
                        </div>
                        <div className="form-group {validation.lastName.isInvalid && 'has-error'}">
                            <label htmlFor="lastName ">Last Name</label>
                            <input onChange={this.handleInputChange} type="text" name="lastName" className="form-control" id="lastName" placeholder="Last Name" />
                            <span className="help-block">{validation.lastName.message}</span>
                        
                        </div>
												<div className="form-group {validation.occupation.isInvalid && 'has-error'}">
                            <label htmlFor="occupation">Occupation</label>
                            <input onChange={this.handleInputChange} type="text" className="form-control" name="occupation" id="occupation" placeholder="Enter Your Occupation" />
                            <span className="help-block">{validation.occupation.message}</span>
                        </div>
                        <div className="form-group {validation.lastName.isInvalid && 'has-error'}">
                            <label htmlFor="email">Email address</label>
                            <input onChange={this.handleInputChange} type="email" name="email" className="form-control" id="email" placeholder="Enter email" />
                            <span className="help-block">{validation.email.message}</span>
                        
                        </div>
                  
                        <div className="form-group {validation.dob.isInvalid && 'has-error'}">
                            <label htmlFor="dob">Date Of Birth</label>
                            <input onChange={this.handleInputChange} type="date" name="dob" id="dob" className="form-control" />
                            <span className="help-block">{validation.dob.message}</span>
                        
                        </div>
                        <div className="form-group {validation.password.isInvalid && 'has-error'}">
                            <label htmlFor="password">Password</label>
                            <input type="password"  onChange={this.handleInputChange} name="password" className="form-control" id="password" placeholder="Password" />
                            <span className="help-block">{validation.password.message}</span>
                        
                        </div>
                        <div className="form-group {validation.confirmpassword.isInvalid && 'has-error'}">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input type="password" onChange={this.handleInputChange}  name="confirmpassword" className="form-control" id="confirmpassword" placeholder="Confirm Password" />
                            <span className="help-block">{validation.confirmpassword.message}</span>
                        
                        </div>
                       
                        <div className="text-center">

                            <button onClick={this.handleFormSubmit} className="btn btn-primary">CREATE</button>
                        </div>
                        <div className="text-center">
                            <p className="registered">Already Registered? <Link to="/login">Login here</Link></p>
                        </div>
                    </form>
                    
                    </div>
										<div className="col-sm-3">
                    </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}

export default SignUpPage;