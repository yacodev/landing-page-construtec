import React from 'react';
import Link from 'next/link';

const Pricing = () => {
    return (
        <div id="pricing" className="prising-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Our Pricing</span>    
                    <h2>Suitable And Nice Pricing Plan With Our Top Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="prising-card">
                            <div className="price-header text-center">
                                <h3>Personal Pack</h3>
                                <h4>$30.00</h4>
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

                    <div className="col-lg-4 col-sm-6">
                        <div className="prising-card active">
                            <div className="price-header text-center">
                                <h3>Business className</h3>
                                <h4>$50.00</h4>
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

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                        <div className="prising-card">
                            <div className="price-header text-center">
                                <h3>Premium</h3>
                                <h4>$100.00</h4>
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
        </div>
    )
}

export default Pricing;