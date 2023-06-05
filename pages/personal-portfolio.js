import React from 'react';
import Navbar from '../components/PersonalPortfolio/Navbar';
import MainBanner from '../components/PersonalPortfolio/MainBanner';
import BasicInformation from '../components/PersonalPortfolio/BasicInformation';
import MyIntro from '../components/PersonalPortfolio/MyIntro';
import Services from '../components/PersonalPortfolio/Services';
import FunFacts from '../components/PersonalPortfolio/FunFacts';
import WhyChooseUs from '../components/PersonalPortfolio/WhyChooseUs';
import Portfolio from '../components/PersonalPortfolio/Portfolio';
import Testimonials from '../components/PersonalPortfolio/Testimonials';
import Contact from '../components/PersonalPortfolio/Contact';
import Subscribe from '../components/PersonalPortfolio/Subscribe';
import Footer from '../components/PersonalPortfolio/Footer';

const PersonalPortfolio = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <BasicInformation />
            <MyIntro />
            <Services />
            <FunFacts /> 
            <WhyChooseUs />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Subscribe />
            <Footer />
        </>
    )
}

export default PersonalPortfolio;