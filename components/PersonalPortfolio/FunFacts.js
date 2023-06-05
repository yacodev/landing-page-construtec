import React from 'react';

const FunFacts = () => {
    return (
        <div className="fun-facts-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-fun-facts">
                            <i className="las la-check-double icon-color-1"></i>
                            <h3>
                                <span className="odometer">1200</span> +
                            </h3>
                            <p>Project Completed</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-fun-facts">
                            <i className="las la-clock icon-color-2"></i>
                            <h3>
                                <span className="odometer">2000</span>
                            </h3>
                            <p>Working Hours</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-fun-facts">
                            <i className="las la-award icon-color-3"></i>
                            <h3>
                                <span className="odometer">120</span>
                            </h3>
                            <p>Award Won</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-fun-facts">
                            <i className="las la-smile-beam icon-color-4"></i>
                            <h3>
                                <span className="odometer">3200</span> +
                            </h3>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FunFacts;