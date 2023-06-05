import React from 'react';

const Features = () => {
    return (
        <div id="features" className="features-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="features-contant">
                            <div className="features-image">
                                <img src="/images/saas-img/feature1.png" alt="Image" />
                            </div>

                            <div className="features-shape">
                                <img src="/images/shape/shape8.png" alt="Shape" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="features-card-content">
                            <h2 className="title">You Will Love To Use It As Its Easy Features</h2>
                            <div className="saas-features">
                                <div className="icon bg-1">
                                    <i className="las la-sliders-h"></i>
                                </div>
                                <h3>Easy To Customise</h3>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment  so blinded by desire.</p>
                            </div>

                            <div className="saas-features">
                                <div className="icon bg-2">
                                    <i className="lab la-buffer"></i>
                                </div>
                                <h3>Multipurpose Layout</h3>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment  so blinded by desire.</p>
                            </div>

                            <div className="saas-features">
                                <div className="icon bg-3">
                                    <i className="las la-swatchbook"></i>
                                </div>
                                <h3>Clean User Interface</h3>
                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment  so blinded by desire.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;