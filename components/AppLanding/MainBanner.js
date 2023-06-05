import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="app-banner-area pt-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="app-bennr-text">
                            <span>Creative App Of 2020</span>
                            <h1>Best Mobile App For Your Storage Management</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                            <div className="app-btn">
                                <Link href="#">
                                    <a className="default-btn app-btn-1 mr-3">Try Free Trial</a>
                                </Link>
                                <a href="https://www.apple.com/app-store/" className="default-btn app-btn-2" target="_blank">Download</a>
                            </div>

                            <div className="row mt-30">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="app-text">
                                        <h3>50.6k</h3>
                                        <p>App <br /> Download</p>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <div className="app-text">
                                        <h3>16.2k</h3>
                                        <p>Positive <br /> Reviews</p>
                                    </div>
                                </div>
                            </div>

                            <div className="app-shapes">
                                <img src="/images/shape/shape1.png" className="shape-1" alt="Image" />
                                <img src="/images/shape/shape30.png" className="shape-30"  alt="Image" />
                                <img src="/images/shape/shape28.png" className="shape-28"  alt="Image" />
                                <img src="/images/shape/shape16.png" className="shape-16"  alt="Image" />
                                <img src="/images/shape/shape16.png" className="shape-11"  alt="Image" />
                                <img src="/images/shape/shape14.png" className="shape-14"  alt="Image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="app-banner-img">
                            <img src="/images/app-img/app-banner-img.png" className="app-img" alt="Image" />
                            <div className="app-shapes">
                                <img src="/images/shape/shape31.png" className="shape-31"  alt="Image" />
                                <img src="/images/shape/shape4.png" className="shape-4"  alt="Image" />
                                <img src="/images/shape/shape2.png" className="shape-2"  alt="Image" />
                                <img src="/images/shape/shape22.png" className="shape-22"  alt="Image" />
                                <img src="/images/shape/shape5.png" className="shape-5"  alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-shape">
                    <img src="/images/shape/shape29.png" alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;