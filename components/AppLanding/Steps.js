import React from 'react';

const Steps = () => {
    return (
        <div id="steps" className="easy-step-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span>Easy Steps</span>
                    <h2>Discover This App More Easy</h2>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="easy-step-img">
                            <img src="/images/app-img/easy-step-1.png" className="step-1" alt="Image" />
                            <div className="easy-step-shape">
                                <img src="/images/shape/shape1.png" className="shape-1" alt="Shape" />
                                <img src="/images/shape/shape21.png" className="shape-21" alt="Shape" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="easy-step-card left-text">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="step-signle-card">
                                        <i className="las la-download bg-1"></i>
                                        <span>1</span>
                                        <h3>Download Free Trial</h3>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-sm-6">
                                    <p>This is version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aen ean itudin, lorem quis bibendum auctor, nisi elit cons tequat ipsum, nec sagittis sem nibh id elit.</p>
                                </div>
                            </div>
                        </div>
 
                        <div className="easy-step-card right-text">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-sm-6">
                                    <p>This is version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aen ean itudin, lorem quis bibendum auctor, nisi elit cons tequat ipsum, nec sagittis sem nibh id elit.</p>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="step-signle-card">
                                        <i className="las la-user-alt bg-2"></i>
                                        <span>2</span>
                                        <h3>Make Your Profile</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="easy-step-card left-text">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="step-signle-card step-p">
                                        <i className="las la-smile-beam bg-3"></i>
                                        <span>3</span>
                                        <h3>Use Your App</h3>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-sm-6">
                                    <p>This is version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aen ean itudin, lorem quis bibendum auctor, nisi elit cons tequat ipsum, nec sagittis sem nibh id elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;