import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-us-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us-img">
                            <img src="/images/seo-img/about-us1.png" alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-us-text">
                            <div className="section-title">
                                <span>Who We Are</span>
                                <h2>We Are Supporting All Kind Of Online Services Since 2020</h2>
                            </div>

                            <div className="about-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-sm-4">
                                    <div className="about-card">
                                        <h3>6k</h3>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-4">
                                    <div className="about-card">
                                        <h3>2k</h3>
                                        <p>Positive Reviews</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-4">
                                    <div className="about-card">
                                        <h3 className="l-45">9.2k</h3>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-btn">
                                <Link href="#">
                                    <a className="default-btn">Get A Quote</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;