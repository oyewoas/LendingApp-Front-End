import React, { Component } from 'react'
import BlankNavBar from '../BlankNavBar/BlankNavBar'
import message from '../../assets/img/message.svg'
import './EmailVerification.css'

class EmailVerificaiton extends Component{

    render(){
        return(
            <div>
                <BlankNavBar/>

                <div className="container-fluid">
                    <header className="email-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6 text-center">
                                    <img src={message}  alt="message"/>
                                    <h1 className="email-heading"> Check your email</h1>
                                    <p className="email-text">We’ve just sent you a verification email. <br/> 
                                        Please check your email and click the verification link.
                                    </p>

                                </div>
                                <div className="col-md-3"></div>

                            </div>

                        </div>
                    </header>
                </div>
            </div>
        )
    }
}

export default EmailVerificaiton;