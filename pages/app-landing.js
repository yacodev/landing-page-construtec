import React from 'react';
import Navbar from '../components/AppLanding/Navbar';
import MainBanner from '../components/AppLanding/MainBanner';
import Steps from '../components/AppLanding/Steps';
import Features from '../components/AppLanding/Features';
import PopupVideoArea from '../components/AppLanding/PopupVideoArea';
import AppFeatures from '../components/AppLanding/AppFeatures';
import AppFeaturesTwo from '../components/AppLanding/AppFeaturesTwo';
import AppScreenshots from '../components/AppLanding/AppScreenshots';
import AppDownload from '../components/AppLanding/AppDownload';
import ReviewSlider from '../components/AppLanding/ReviewSlider';
import Subscribe from '../components/AppLanding/Subscribe';
import Footer from '../components/AppLanding/Footer';

const AppLanding = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Steps />
            <Features />
            <PopupVideoArea />
            <AppFeatures />
            <AppFeaturesTwo />
            <AppScreenshots />
            <AppDownload />
            <ReviewSlider />
            <Subscribe />
            <Footer />
        </>
    )
}

export default AppLanding;