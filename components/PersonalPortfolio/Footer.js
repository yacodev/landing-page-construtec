import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <footer className="footer-area pt-200"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-widget">
                                <div className="logo">
                                    <img src="/images/logo-white.png" alt="logo" />
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                                <ul className="footer-social">
                                    <li>
                                        <a className="bg-1" href="https://www.facebook.com/" target="_blank">
                                            <i className="lab la-facebook-f bg-1"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="bg-2" href="https://twitter.com/" target="_blank">
                                            <i className="lab la-twitter bg-2"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="bg-3" href="https://www.linkedin.com/" target="_blank">
                                            <i className="lab la-linkedin-in bg-3"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="bg-4" href="https://www.instagram.com/" target="_blank">
                                            <i className="lab la-instagram bg-4"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-5 col-sm-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="footer-widget">
                                        <h3 className="title">Company</h3>
                                        <ul className="footer-text">
                                            <li>
                                                <a href="#">
                                                    <i className="las la-angle-right"></i>
                                                    Advertise
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="las la-angle-right"></i>
                                                    Support
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="las la-angle-right"></i>
                                                    Marketing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="las la-angle-right"></i>
                                                    Contact 
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="las la-angle-right"></i>
                                                    About Us
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <div className="footer-widget">
                                        <h3 className="title">Quick Links</h3>
                                        <ul className="footer-text">
                                            <li>
                                                <a href="#">
                                                    <i className="las la-angle-right"></i>
                                                    Home
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="las la-angle-right"></i>
                                                    Features
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="las la-angle-right"></i>
                                                    Pricing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="las la-angle-right"></i>
                                                    Screenshot 
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="las la-angle-right"></i>
                                                    Testimonial
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 offset-sm-4 offset-lg-0">
                            <div className="footer-widget">
                                <h3 className="title">Download Link</h3>

                                <div className="footer-image">
                                    <a href="https://play.google.com/store/apps" target="_blank">
                                        <img src="/images/app-img/google-play.png" alt="Image" />
                                    </a>
                                    <a href="https://www.apple.com/app-store/" target="_blank">
                                        <img src="/images/app-img/app-store.png" alt="Image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-text">
                        <p>Copyright &copy; {currentYear} Ortix. All Rights Reserved <a href="https://hibootstrap.com/" target="_blank">HiBootstrap</a></p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;