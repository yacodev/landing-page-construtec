import React from 'react';
import Navbar from '../components/SaasLanding/Navbar';
import MainBanner from '../components/SaasLanding/MainBanner';
import Services from '../components/SaasLanding/Services';
import Features from '../components/SaasLanding/Features';
import Pricing from '../components/SaasLanding/Pricing';
import SaaSAppFeatures from '../components/SaasLanding/SaaSAppFeatures';
import AppDownload from '../components/SaasLanding/AppDownload';
import PopupVideoArea from '../components/SaasLanding/PopupVideoArea';
import ReviewSlider from '../components/SaasLanding/ReviewSlider';
import Partner from '../components/SaasLanding/Partner';
import Contact from '../components/SaasLanding/Contact';
import Subscribe from '../components/SaasLanding/Subscribe';
import Footer from '../components/SaasLanding/Footer';
import WaitList from '../components/SaasLanding/WaitList';

const SaasLanding = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <Services />
      <Features />
      <Pricing />
      <SaaSAppFeatures />
      <AppDownload />
      <PopupVideoArea />
      <ReviewSlider />
      <WaitList />
      {/* <Partner /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default SaasLanding;
