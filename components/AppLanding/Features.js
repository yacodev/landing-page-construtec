import React from 'react';

const Features = () => {
    return (
        <div id="features" className="our-services-area service-shape pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Our Features</span>
                    <h2>Top Features To Manage Storage</h2>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.</p>
                </div>
                
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="our-service-card">
                            <i className="las la-cloud-upload-alt bg-1"></i>
                            <h3>Automatic Backups</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="our-service-card">
                            <i className="las la-share-alt bg-2"></i>
                            <h3>Remote Access</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="our-service-card">
                            <i className="las la-share bg-3"></i>
                            <h3>File Sharing</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="our-service-card">
                            <i className="las la-lock bg-4"></i>
                            <h3>File Security</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="our-service-card">
                            <i className="las la-file-import bg-5"></i>
                            <h3>File Backup</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="our-service-card">
                            <i className="las la-file-archive bg-6"></i>  
                            <h3>File Archiving</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        </div>
                    </div>
                </div>

                <div className="our-service-shape">
                    <img src="/images/shape/shape26.png" alt="Shape" />
                </div>
            </div>
        </div>
    )
}

export default Features;