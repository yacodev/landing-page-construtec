import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    dots: false,
    margin: 40,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        1200:{
            items:5
        }
    }
};

const Partner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <div className="partner-area ptb-100">
            <div className="container">
                {display ? <OwlCarousel 
                    className="partner-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="partner-slider-item">
                        <a href="#" target="_blank">
                            <img src="/images/partner/partner1.png" alt="logo" />
                        </a>
                    </div>

                    <div className="partner-slider-item">
                        <a href="#" target="_blank">
                            <img src="/images/partner/partner2.png" alt="logo" />
                        </a>
                    </div>

                    <div className="partner-slider-item">
                        <a href="#" target="_blank">
                            <img src="/images/partner/partner3.png" alt="logo" />
                        </a>
                    </div>

                    <div className="partner-slider-item">
                        <a href="#" target="_blank">
                            <img src="/images/partner/partner4.png" alt="logo" />
                        </a>
                    </div>

                    <div className="partner-slider-item">
                        <a href="#" target="_blank">
                            <img src="/images/partner/partner5.png" alt="logo" />
                        </a>
                    </div>

                    <div className="partner-slider-item">
                        <a href="#" target="_blank">
                            <img src="/images/partner/partner6.png" alt="logo" />
                        </a>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Partner;