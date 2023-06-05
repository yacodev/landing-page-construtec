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
        <div className="choose-us-area ptb-100">
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
                                <h2>Make Work Productive & Get Faster Solution</h2>
                            </div>

                            <div className="choose-us-img">
                                <img src="/images/seo-img/choose-us-1.jpg" alt="Image" />
                                <div className="choose-img">
                                    <img src="/images/seo-img/choose-us-2.png" alt="Image" />
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
                                        <h3>Advanced Analysis</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
    
                                <div className="col-lg-6 col-sm-6">
                                    <div className="choose-card">
                                        <i className="las la-file-archive bg-2"></i>
                                        <h3>Content Optimization</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
    
                                <div className="col-lg-6 col-sm-6">
                                    <div className="choose-card">
                                        <i className="las la-bullseye bg-3"></i>
                                        <h3>Target Analysis</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    </div>
                                </div>
    
                                <div className="col-lg-6 col-sm-6">
                                    <div className="choose-card">
                                        <i className="las la-search-plus bg-4"></i>
                                        <h3>Continuous Testing</h3>
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