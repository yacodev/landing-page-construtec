import React from 'react';
import Link from 'next/link';

const MyIntro = () => {
    return (
        <div id="my-intro" className="who-we-area my-intro pt-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <span>My Intro</span>
                            <h2>A Short Intro All About Myself</h2>
                        </div>

                        <div className="who-we-are-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <h3>Interest In :</h3>
                        <ul>
                            <li>
                                <i className="las la-map"></i>
                                Travel
                            </li>
                            <li>
                                <i className="las la-headphones"></i>
                                Music
                            </li>
                            <li>
                                <i className="las la-biking"></i>
                                Riding
                            </li>
                            <li>
                                <i className="las la-utensils"></i>
                                Food
                            </li>
                            <li>
                                <i className="las la-highlighter"></i>
                                Design
                            </li>
                        </ul>

                        <div className="intro-btn">
                            <a href="#contact" className="default-btn">Get Started</a>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="who-we-are-img bg-color">
                            <img src="/images/portfolio/my-intro.jpg" className="we-are-img" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyIntro;