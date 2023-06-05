import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="seo-banner-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="seo-banner-text">
                            <span>Creative Agency From 2010</span>
                            <h1>Digital Marketing Agency And SEO Experts</h1>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                            
                            <div className="seo-banner-btn">
                                <Link href="#">
                                    <a className="default-btn seo-btn-bg1 mr-2">Get A Free Analysis</a>
                                </Link>
                                <Link href="#">
                                    <a className="default-btn seo-btn-bg2">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="seo-img-contant">
                            <div className="seo-banner-img">
                                <img src="/images/seo-img/seo-banner-img1.jpg" alt="Image" />
                            </div>
                            <div className="seo-img">
                                <img src="/images/seo-img/seo-banner-img2.png" className="seo-img-2" alt="Image" />
                                <img src="/images/seo-img/seo-banner-img3.png" className="seo-img-3" alt="Image" />
                            </div>
                            <div className="seo-shape1">
                                <img src="/images/shape/shape13.png" className="shape-13" alt="shape" />
                                <img src="/images/shape/shape15.png" className="shape-15" alt="shape" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="seo-shape2">
                    <img src="/images/shape/shape16.png" className="shape-16" alt="Shape" />
                    <img src="/images/shape/shape16.png" className="shape-same" alt="Shape" />
                    <img src="/images/shape/shape14.png" className="shape-14" alt="Shape" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;