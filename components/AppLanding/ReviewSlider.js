import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:1
        },
        1200:{
            items:2
        }
    }
};

const ReviewSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div id="testimonials" className="clients-slider-two-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Clients Review</span>
                    <h2>Our App Users And Their Experience</h2>
                    <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                </div>

                {display ? <OwlCarousel 
                    className="clients-slider-two owl-carousel owl-theme"
                    {...options}
                >
                    <div className="slider-two-item">
                        <img src="/images/portfolio/client1.jpg" alt="Image" />
                        <h3>Thomas Smith</h3>
                        <span>CEO Of LTD Company</span>
                        <div className="rating">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>
                        <i className="las la-quote-left clients-icon"></i>
                    </div>

                    <div className="slider-two-item">
                        <img src="/images/portfolio/client2.jpg" alt="Image" />
                        <h3>Sinthy Alina</h3>
                        <span>Marking Assistant</span>
                        <div className="rating">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>
                        <i className="las la-quote-left clients-icon"></i>
                    </div>

                    <div className="slider-two-item">
                        <img src="/images/portfolio/client3.jpg" alt="Image" />
                        <h3>Jehson Benther</h3>
                        <span>Shipping Manager</span>
                        <div className="rating">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>
                        <i className="las la-quote-left clients-icon"></i>
                    </div>

                    <div className="slider-two-item">
                        <img src="/images/portfolio/client4.jpg" alt="Image" />
                        <h3>Niccy Priti</h3>
                        <span>Founder - CEO</span>
                        <div className="rating">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>
                        <i className="las la-quote-left clients-icon"></i>
                    </div>

                    <div className="slider-two-item">
                        <img src="/images/portfolio/client2.jpg" alt="Image" />
                        <h3>Niccy Priti</h3>
                        <span>Founder - CEO</span>
                        <div className="rating">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire.</p>
                        <i className="las la-quote-left clients-icon"></i>
                    </div>
                </OwlCarousel> : ''}

                <div className="client-shape">
                    <img src="/images/shape/shape27.png" alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default ReviewSlider;