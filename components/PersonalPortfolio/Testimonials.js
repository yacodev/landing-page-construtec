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

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div id="testimonials" className="testimonials-area pt-100">
            <div className="container">
                <div className="section-title">
                    <span>Testimonials</span>
                    <h2>My Lovely Clients Review</h2>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.</p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slider owl-carousel owl-theme"
                    {...options}
                >
                    <div className="testimonials-slider-item">
                        <img src="/images/seo-img/client1.jpg" alt="Image" />
                        <h3>Danial Henry</h3>
                        <div className="rating">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                    </div>

                    <div className="testimonials-slider-item">
                        <img src="/images/seo-img/client2.jpg" alt="Image" />
                        <h3>William leo</h3>
                        <div className="rating">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                    </div>
                    
                    <div className="testimonials-slider-item">
                        <img src="/images/seo-img/client3.jpg" alt="Image" />
                        <h3>Jhon Smith</h3>
                        <div className="rating">
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                            <i className="las la-star"></i>
                        </div>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default Testimonials;