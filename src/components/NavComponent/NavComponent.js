import React, { Component } from 'react';
import './NavComponent.css';

class NavComponent extends Component {
    render() {
      return (
        <div className="navcomponent">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">LendMoney.App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto text-center">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">About </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
      )
    }
}

export default NavComponent;