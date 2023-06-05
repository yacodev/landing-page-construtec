import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="personal-banner-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="personal-banner-img">
                            <img src="/images/portfolio/profile-img.png" alt="Image" />
                            <div className="personal-shape">
                                <img src="/images/shape/shape24.png" className="shape-24" alt="Shape" />
                                <img src="/images/shape/shape2.png" className="shape-2" alt="Shape" />
                                <img src="/images/shape/shape13.png" className="shape-13" alt="Shape" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="personal-bennr-text">
                            <span>Hi, I am </span>
                            <h1>Jehson Bencher</h1>
                            <h3>UI/UX Designer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                            <div className="personal-btn">
                                <Link href="#">
                                    <a className="default-btn personal-btn-1 mr-3">Download CV</a>
                                </Link>
                                <Link href="#">
                                    <a className="default-btn personal-btn-2">Hire Me</a>
                                </Link>
                            </div>

                            <div className="personal-text-shape">
                                <img src="/images/shape/shape2.png" className="shape-2" alt="Image" />
                                <img src="/images/shape/shape14.png" className="shape-14" alt="Image" />
                                <img src="/images/shape/shape4.png" className="shape-4" alt="Image" />
                                <img src="/images/shape/shape22.png" className="shape-22" alt="Image" />
                                <img src="/images/shape/shape23.png" className="shape-23" alt="Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;