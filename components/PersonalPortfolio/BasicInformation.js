import React from 'react';

const BasicInformation = () => {
    return (
        <div className="information-area pt-100">
            <div className="container">
                <div className="section-title">
                    <h2>My Basic Information</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="information-card">
                            <i className="las la-envelope bg-1"></i>
                            <h3><a href="mailto:info@ortix.com">info@ortix.com</a></h3>
                            <p>Email Address</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="information-card bg-2">
                            <i className="las la-phone bg-2"></i>
                            <h3><a href="tel:+0123654798">+0123 654 798</a></h3>
                            <p>Phone Number</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="information-card">
                            <i className="las la-layer-group bg-3"></i>
                            <h3><a href="#" target="_blank">www.ortix.com</a></h3>
                            <p>Website</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="information-card">
                            <i className="las la-map-marked-alt bg-4"></i>
                            <h3>Highway, Sydney</h3>
                            <p>Address</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicInformation;