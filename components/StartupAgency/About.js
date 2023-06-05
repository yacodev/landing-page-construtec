import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const About = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div id="about"className="about-us-two pt-70 pb-100">
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-two-text">
                            <div className="section-title">
                                <span>About Us</span>
                                <h2>We Are Supporting All Kind Of Online Services Since 2012</h2>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure praising pain was born and I will give you a complete account Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam consectetur adipiscing elit.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="las la-check"></i>
                                            Top ranking agency
                                        </li>
                                        <li>
                                            <i className="las la-check"></i>
                                            Work is done by an expert team
                                        </li>
                                        <li>
                                            <i className="las la-check"></i>
                                            100% trusted
                                        </li>
                                        <li>
                                            <i className="las la-check"></i>
                                            World wide service
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="las la-check"></i>
                                            24/7 support 
                                        </li>
                                        <li>
                                            <i className="las la-check"></i>
                                            Expert team
                                        </li>
                                        <li>
                                            <i className="las la-check"></i>
                                            Market analysis
                                        </li>
                                        <li>
                                            <i className="las la-check"></i>
                                            Top features
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="about-two-btn">
                                <Link href="#">
                                    <a className="default-btn">Get Started</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-two-img">
                            <img src="/images/startup/about-two-img.png" alt="Image" />
                            <div className="popup-video">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="video-btn">
                                            <Link href="#play-video">
                                                <a
                                                    onClick={e => {e.preventDefault(); openModal()}}
                                                    className="popup-youtube"
                                                > 
                                                    <i className="las la-play"></i>
                                                    <span className="ripple pinkBg"></span>
                                                    <span className="ripple pinkBg"></span>
                                                    <span className="ripple pinkBg"></span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-shape">
                                <img src="/images/shape/shape17.png" className="shape-17" alt="Shape" />
                                <img src="/images/shape/shape18.png" className="shape-18" alt="Shape" />
                                <img src="/images/shape/shape19.png" className="shape-19" alt="Shape" />
                                <img src="/images/shape/shape20.png" className="shape-20" alt="Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;