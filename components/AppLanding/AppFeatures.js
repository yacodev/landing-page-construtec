import React from 'react';

const AppFeatures = () => {
    return (
        <div className="powerful-area pt-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="section-title">
                            <h2>More Easy And More Powerful And Personal App Built For You</h2>
                        </div>
                        <div className="powerful-card">
                            <i className="las la-layer-group bg-1"></i>
                            <h3>Expert User Experience Component</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        </div>

                        <div className="powerful-card">
                            <i className="las la-mobile-alt bg-2"></i>
                            <h3>Clean User Interface Design</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        </div>

                        <div className="powerful-card">
                            <i className="las la-shield-alt bg-3"></i>
                            <h3>Highly Secured System</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        </div>

                        <div className="powerful-card">
                            <i className="las la-hdd bg-4"></i>
                            <h3>Unlimited Storage As Need</h3>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="powerful-img">
                            <img src="/images/app-img/powerful.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppFeatures;