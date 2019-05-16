import React, { Component } from 'react';
import './FooterComponent.css';


class FooterComponent extends Component {
    render() {
      return (
        <div>
          <footer className="footer">
              <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <p className="paragraph">
                            &copy; LendMoney.App 2019
                        </p>
                    </div>
                </div>
              </div>
          </footer>
        </div>
      )
    }
}

export default FooterComponent;