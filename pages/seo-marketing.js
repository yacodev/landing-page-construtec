import React from 'react';
import Navbar from '../components/SeoMarketing/Navbar';
import MainBanner from '../components/SeoMarketing/MainBanner';
import FeaturedServices from '../components/SeoMarketing/FeaturedServices';
import AboutUs from '../components/SeoMarketing/AboutUs';
import Services from '../components/SeoMarketing/Services';
import WhoWeAre from '../components/SeoMarketing/WhoWeAre';
import WhyChooseUs from '../components/SeoMarketing/WhyChooseUs';
import Pricing from '../components/SeoMarketing/Pricing';
import CaseStudy from '../components/SeoMarketing/CaseStudy';
import Testimonials from '../components/SeoMarketing/Testimonials';
import Subscribe from '../components/SeoMarketing/Subscribe';
import Footer from '../components/SeoMarketing/Footer'; 
 
const SeoMarketing = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <FeaturedServices />
            <AboutUs />
            <Services />
            <WhoWeAre />
            <WhyChooseUs />
            <Pricing />
            <CaseStudy />
            <Testimonials />
            <Subscribe />
            <Footer />
        </>
    )
}

export default SeoMarketing;