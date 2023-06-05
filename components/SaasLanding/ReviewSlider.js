import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    navText: [
        "<i class='las la-long-arrow-alt-left'></i>",
        "<i class='las la-long-arrow-alt-right'></i>"
    ]
};

const ReviewSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="clients-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Clients Review</span>
                    <h2>Our App Users And Their Experience</h2>
                    <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis.</p>
                </div>
            </div>

            <div className="container">
                {display ? <OwlCarousel 
                    className="clients-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="clients-slider-item">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="client-text">
                                    <div className="text">
                                        <i className="las la-quote-left text-icon-1"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        <i className="las la-quote-right text-icon-2"></i>
                                    </div>
                                    <div className="rating">
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                    </div>
                                    <h3>Alina Decros</h3>
                                    <span>CEO Of LTD Company</span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="client-image">
                                    <img src="/images/saas-img/client1.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clients-slider-item">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="client-text">
                                    <div className="text">
                                        <i className="las la-quote-left text-icon-1"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        <i className="las la-quote-right text-icon-2"></i>
                                    </div>
                                    <div className="rating">
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                    </div>
                                    <h3>Elizabeth Ava</h3>
                                    <span>CEO Of LTD Company</span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="client-image">
                                    <img src="/images/saas-img/client2.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clients-slider-item">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="client-text">
                                    <div className="text">
                                        <i className="las la-quote-left text-icon-1"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        <i className="las la-quote-right text-icon-2"></i>
                                    </div>
                                    <div className="rating">
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                    </div>
                                    <h3>Jhon Smith</h3>
                                    <span>CEO Of LTD Company</span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="client-image">
                                    <img src="/images/saas-img/client3.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clients-slider-item">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="client-text">
                                    <div className="text">
                                        <i className="las la-quote-left text-icon-1"></i>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                                        <i className="las la-quote-right text-icon-2"></i>
                                    </div>
                                    <div className="rating">
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                        <i className="las la-star"></i>
                                    </div>
                                    <h3>Benjamin Liam</h3>
                                    <span>CEO Of LTD Company</span>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="client-image">
                                    <img src="/images/saas-img/client4.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}

                <div className="claint-shape">
                    <img src="/images/shape/shape9.png" className="shape-9" alt="Shape" />
                    <img src="/images/shape/shape10.png" className="shape-10" alt="Shape" />
                </div>
            </div>
        </div>
    )
}

export default ReviewSlider;