import React from 'react';
import Link from 'next/link';

const AppDownload = () => {
    return (
        <div className="app-features-area">
            <div className="container">
                <div className="section-title">
                    <span>App Download</span>
                    <h2>Download The App With Top Features</h2>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.</p>
                </div>

                <div className="app-features-img">
                    <a href="https://play.google.com/store/apps" target="_blank">
                        <img src="/images/app-img/google-play.png" className="mr-3" alt="Image" />
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank">
                        <img src="/images/app-img/app-store.png" alt="Image" />
                    </a>
                </div>

                <div className="app-features">
                    <img src="/images/app-img/app-features.png" alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default AppDownload;