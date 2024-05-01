import React from 'react';
import Navbar from '../components/SaasLanding/Navbar';
import MainBanner from '../components/SaasLanding/MainBanner';
import Services from '../components/SaasLanding/Services';
import Features from '../components/SaasLanding/Features';
import Pricing from '../components/SaasLanding/Pricing';
import SaaSAppFeatures from '../components/SaasLanding/SaaSAppFeatures';
import AppDownload from '../components/SaasLanding/AppDownload';
import ReviewSlider from '../components/SaasLanding/ReviewSlider';
import Partner from '../components/SaasLanding/Partner';
import Contact from '../components/SaasLanding/Contact';
import Footer from '../components/SaasLanding/Footer';
import RegistrationCampaign from '../components/SaasLanding/RegistrationCampaign';
import Hotjar from '@hotjar/browser';

const siteId = 4965887;
const hotjarVersion = 6;

const SaasLanding = () => {
  Hotjar.init(siteId, hotjarVersion);
  return (
    <>
      <Navbar />
      <MainBanner />
      <Services />
      <Features />
      <SaaSAppFeatures />
      <AppDownload />
      <RegistrationCampaign />
      <Pricing />
      <ReviewSlider />
      <Partner />
      <Contact />
      <Footer />
    </>
  );
};

export default SaasLanding;
