import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const MainBanner = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div id="home" className="startup-banner-area">
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
                        <div className="startup-banner-text">
                            <h1>Ortix Agency Stand With Trust Your Way To Success</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <div className="startup-btn">
                                <Link href="#">
                                    <a className="default-btn stsrt-btn-1 mr-3">Get Started</a>
                                </Link>
                                <Link href="#">
                                    <a className="default-btn stsrt-btn-2">Contact Us</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="banner-video-contant">
                            <div className="popup-video">
                                <div className="video-btn video-btn-1">
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
                </div>
            </div>
        </div>
    )
}

export default MainBanner;