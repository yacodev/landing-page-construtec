import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div id="home" className="saas-banner-area">
            <div className="container">
                <div className="saas-banner-content">
                    <span>Top Service Since 2020</span>
                    <h1>Make Your Business Easier & Simple</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt aliqua.</p>

                    <div className="saas-banner-btn">
                        <Link href="#">
                            <a className="default-btn bg-white mr-2">Try Free Trial</a>
                        </Link>
                        <Link href="#">
                            <a className="default-btn bg-main">Start Now</a>
                        </Link>
                    </div>
                </div>
                
                <div className="saas-banner-img">
                    <img src="/images/saas-img/saas-laptop.png" className="saas-img-1" alt="Image" />
                    <img src="/images/saas-img/saas-mobile.png" className="saas-img-2" alt="Image" />
                </div>

                <div className="saas-shape-content">
                    <img src="/images/shape/shape1.png" className="saas-shape-1" alt="Shape" />
                    <img src="/images/shape/shape2.png" className="saas-shape-2" alt="Shape" />
                    <img src="/images/shape/shape3.png" className="saas-shape-3" alt="Shape" />
                    <img src="/images/shape/shape4.png" className="saas-shape-4" alt="Shape" />
                    <img src="/images/shape/shape5.png" className="saas-shape-5" alt="Shape" />
                    <img src="/images/shape/shape6.png" className="saas-shape-6" alt="Shape" />
                    <img src="/images/shape/shape7.png" className="saas-shape-7" alt="Shape" />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;