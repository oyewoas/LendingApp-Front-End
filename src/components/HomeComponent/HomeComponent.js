 import React, {Component} from 'react';
import NavComponent from '../NavComponent/NavComponent';
import './HomeComponent.css';
import financesvg from '../../assets/svg/finance1.svg';
import loansvg from '../../assets/svg/loans.svg';
import FooterComponent from '../FooterComponet/FooterComponent';



 class HomeComponent extends Component {
     render() {
       return (
         <div className="homeheader">
            <NavComponent/>
            <div id="particle"></div>
            <header className="header">
              <div className="container-fluid">
                <div className="row text-center">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <p className="paragraph">
                      We provide loans to individuals and small businesses.
                    </p>
                    <div className="">
                      <a className="mt-4 btn-start shadow-lg" href="">Start Now</a>

                    </div>
                  </div>
                  <div className="col-md-2"></div>


                </div>
              </div>
            </header>

            <main className="homemain">
              <div className="container-fluid">
                <div className="row our-goal">
                  <div className="col-md-2"></div>
                  <div className="col-md-8 text-center">
                      <h1 className="heading-one">
                      Our goal is to make individuals and businesses thrive financially

                    </h1>
                  </div>
                  <div className="col-md-2"></div>

                </div>
                <div className="container we-offer">
                  <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="heading-one">
                          What We Offer
                        </h1>
                      </div>
                  </div>
                  <div className="row ">  
                    <div className="col-md-6">
                    <h2 className="heading-two pb-2 pt-5">
                        Loans
                      </h2>

                      <p className="paragraph">
                        We offer you Loans for a particular period of time and you pay us back with about 20% interest rate. it's as simple as that.
                      </p>
                    </div>
                    <div className="col-md-6">
                      <img src={loansvg} className="img-fluid" alt="loan-svg"/>
                    </div>

                  </div>
                  
                  <div className="row  pt-5 mt-5">  
                    
                    <div className="col-md-6">
                      <img src={financesvg} className="img-fluid" alt="finance-svg"/>
                    </div>
                    <div className="col-md-6">
                    <h2 className="heading-two pb-2 pt-5">
                        Monitoring
                      </h2>

                      <p className="paragraph">
                        You discuss what you want to invest the loan we give you on, and we help you monitor and project the investment such that
                        you gain as you are able to pay as at when due
                      </p>
                    </div>
                  </div>


                  
                </div>
                
              
              </div>
              
            </main>
            <FooterComponent/>
         </div>
       )
     }
 }


export default HomeComponent;