import React from 'react';
import Link from 'next/link';

const AppDownload = () => {
    return (
        <div className="saas-downloand-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="download-text">
                            <div className="section-title">
                                <span>App Download</span>
                                <h2>Also Available in Mobile App Format, So You Can Connect To Your Business All Time</h2>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                            
                            <div className="app-image">
                                <a href="https://play.google.com/store/apps" target="_blank">
                                    <img src="/images/app-img/google-play.png" className="play-stroe" alt="Image" />
                                </a>
                            
                                <a href="https://www.apple.com/app-store/" target="_blank">
                                    <img src="/images/app-img/app-store.png" className="apple" alt="Image" />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div className="download-image">
                            <img src="/images/saas-img/saas-mobile1.png" className="mobile-1" alt="Image" />
                            <img src="/images/saas-img/saas-mobile2.png" className="mobile-2" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDownload;