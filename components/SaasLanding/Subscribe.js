import React from 'react';

const Subscribe = () => {
    return (
        <div className="subscribe-area mt-minus-100">
            <div className="container">
                <div className="subscribe-contant">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="subscrive-text">
                                <h3>Subscribe Our Newsletter</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="subscribe-form">
                                <form className="newsletter-form">
                                    <input type="email" className="form-control" placeholder="Enter your email" name="EMAIL" required="" />
                                    <button type="submit" className="btn btn-primary">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;