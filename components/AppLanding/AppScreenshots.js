import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        1200:{
            items:5
        }
    }
};

const AppScreenshots = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])
    
    return (
        <div id="screenshots" className="screens-slider-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Application Screens</span>
                    <h2>Moder And User Friendly App Screens</h2>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.</p>
                </div>

                {display ? <OwlCarousel 
                    className="screens-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot1.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot2.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot3.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot4.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot5.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot2.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot4.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot3.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot5.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot1.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot4.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot5.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot2.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot4.png" alt="Image" />
                    </div>

                    <div className="screen-slider-item">
                        <img src="/images/app-img/screenshot3.png" alt="Image" />
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default AppScreenshots;