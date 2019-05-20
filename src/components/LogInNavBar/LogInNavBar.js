import React, { Component } from 'react';
import './LogInNavBar.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

class LogInNavBar extends Component {
    render(){
        return(
        <div className="navcomponent">
          <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">LendMoney.App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="white"><FontAwesomeIcon icon="bars"/></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto text-center">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
        )
    }
}

export default LogInNavBar;