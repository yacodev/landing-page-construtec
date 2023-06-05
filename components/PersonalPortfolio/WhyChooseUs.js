import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const WhyChooseUs = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="choose-us-area choose-area ptb-100">
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="chooses-img-contant">
                            <div className="section-title">
                                <span>Why Choose Us</span>
                                <h2>Specialty in The Field Get Faster Solution</h2>
                            </div>

                            <div className="choose-us-img">
                                <img src="/images/seo-img/choose-us-1.jpg" alt="Image" />

                                <div className="choose-img">
                                    <img src="/images/portfolio/choose-us3.png" alt="Image" />
                                </div>

                                <div className="popup-video">
                                    <div className="d-table">
                                        <div className="d-table-cell">
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

                    <div className="col-lg-7">
                        <div className="choose-card-contant">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="choose-card">
                                        <i className="las la-sync-alt bg-1"></i>
                                        <h3>Research & Analysis</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
    
                                <div className="col-lg-6 col-sm-6">
                                    <div className="choose-card">
                                        <i className="las la-layer-group bg-2"></i>
                                        <h3>UI/UX Design & Research</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
    
                                <div className="col-lg-6 col-sm-6">
                                    <div className="choose-card">
                                        <i className="las la-code bg-3"></i>
                                        <h3>Web & App Development</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
    
                                <div className="col-lg-6 col-sm-6">
                                    <div className="choose-card">
                                        <i className="las la-chart-bar bg-4"></i>
                                        <h3>SEO Marketing & Advertising</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;