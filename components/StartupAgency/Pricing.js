import Link from 'next/link'
import React, { Component } from 'react'

export default class Pricing extends Component {
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }
    
    render() {
        return (
            <div id="pricing" className="our-pricing-area bg-f8feff pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Our Pricing</span>
                        <h2>Suitable And Nice Pricing Plan With Our Top Services</h2>
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.</p>
                    </div>
                    
                    <div className="tab pricing-tab">
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'MonthlyPlan')}
                            >
                                Monthly Plan
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'YearlyPlan')}
                            >
                                Annual Plan
                                <span className="save-card">
                                    <span className="save">Save</span> 10%
                                </span>
                            </li>
                        </ul>

                        <div className="tab-content">
                            <div id="MonthlyPlan" className="tabs-item">
                                <div className="row"> 
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="prising-card pric-tabe">
                                            <div className="price-header text-center">
                                                <h3>Personal Pack</h3>
                                                <h4>$30</h4>
                                                <p>Per Month</p>
                                            </div>
                
                                            <ul>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Limited Trips
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Available Trips History
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    1 Offer Per Month
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    No Free Trip
                                                </li>
                                                <li className="not-provide">
                                                    <i className="las la-times"></i>
                                                    Membership Card
                                                </li>
                                                <li  className="not-provide">
                                                    <i className="las la-times"></i>
                                                    Trip Cancellation
                                                </li>
                                                <li  className="not-provide">
                                                    <i className="las la-times"></i>
                                                    Custom Services
                                                </li>
                                                <li  className="not-provide">
                                                    <i className="las la-times"></i>
                                                    Money Return
                                                </li>
                                            </ul>
                
                                            <div className="price-btn text-center">
                                                <Link href="#">
                                                    <a className="default-btn bg-color">Get Started</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="prising-card pric-tabe">
                                            <div className="price-header text-center">
                                                <h3>Business Class</h3>
                                                <h4>$50</h4>
                                                <p>Per Month</p>
                                            </div>
                
                                            <ul>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Limited Trips
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Available Trips History
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    1 Offer Per Month
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    No Free Trip
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Membership Card
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Trip Cancellation
                                                </li>
                                                <li  className="not-provide">
                                                    <i className="las la-times"></i>
                                                    Custom Services
                                                </li>
                                                <li  className="not-provide">
                                                    <i className="las la-times"></i>
                                                    Money Return
                                                </li>
                                            </ul>
                
                                            <div className="price-btn text-center">
                                                <Link href="#">
                                                    <a className="default-btn bg-color">Get Started</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6 offset-sm-3 offset-lg-0">
                                        <div className="prising-card pric-tabe">
                                            <div className="price-header text-center">
                                                <h3>Premium</h3>
                                                <h4>$100</h4>
                                                <p>Per Month</p>
                                            </div>
                
                                            <ul>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Limited Trips
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Available Trips History
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    1 Offer Per Month
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    No Free Trip
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Membership Card
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Trip Cancellation
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Custom Services
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Money Return
                                                </li>
                                            </ul>
                
                                            <div className="price-btn text-center">
                                                <Link href="#">
                                                    <a className="default-btn bg-color">Get Started</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="YearlyPlan" className="tabs-item">
                                <div className="row"> 
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="prising-card pric-tabe">
                                            <div className="price-header text-center">
                                                <h3>Personal Pack</h3>
                                                <h4>$150</h4>
                                                <p>Per Year</p>
                                            </div>
                
                                            <ul>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Limited Trips
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Available Trips History
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    1 Offer Per Month
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    No Free Trip
                                                </li>
                                                <li className="not-provide">
                                                    <i className="las la-times"></i>
                                                    Membership Card
                                                </li>
                                                <li  className="not-provide">
                                                    <i className="las la-times"></i>
                                                    Trip Cancellation
                                                </li>
                                                <li  className="not-provide">
                                                    <i className="las la-times"></i>
                                                    Custom Services
                                                </li>
                                                <li  className="not-provide">
                                                    <i className="las la-times"></i>
                                                    Money Return
                                                </li>
                                            </ul>
                
                                            <div className="price-btn text-center">
                                                <Link href="#">
                                                    <a className="default-btn bg-color">Get Started</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="prising-card pric-tabe">
                                            <div className="price-header text-center">
                                                <h3>Business Class</h3>
                                                <h4>$250</h4>
                                                <p>Per Year</p>
                                            </div>
                
                                            <ul>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Limited Trips
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Available Trips History
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    1 Offer Per Month
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    No Free Trip
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Membership Card
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Trip Cancellation
                                                </li>
                                                <li  className="not-provide">
                                                    <i className="las la-times"></i>
                                                    Custom Services
                                                </li>
                                                <li  className="not-provide">
                                                    <i className="las la-times"></i>
                                                    Money Return
                                                </li>
                                            </ul>
                
                                            <div className="price-btn text-center">
                                                <Link href="#">
                                                    <a className="default-btn bg-color">Get Started</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="prising-card pric-tabe">
                                            <div className="price-header text-center">
                                                <h3>Premium</h3>
                                                <h4>$350</h4>
                                                <p>Per Year</p>
                                            </div>
                
                                            <ul>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Limited Trips
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Available Trips History
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    1 Offer Per Month
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    No Free Trip
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Membership Card
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Trip Cancellation
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Custom Services
                                                </li>
                                                <li>
                                                    <i className="las la-check"></i>
                                                    Money Return
                                                </li>
                                            </ul>
                
                                            <div className="price-btn text-center">
                                                <Link href="#">
                                                    <a className="default-btn bg-color">Get Started</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
