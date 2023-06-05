import React from 'react';
import Navbar from '../components/StartupAgency/Navbar';
import MainBanner from '../components/StartupAgency/MainBanner';
import Services from '../components/StartupAgency/Services';
import About from '../components/StartupAgency/About';
import FreeContact from '../components/StartupAgency/FreeContact';
import WhyChooseUs from '../components/StartupAgency/WhyChooseUs';
import WorkingProcess from '../components/StartupAgency/WorkingProcess';
import Pricing from '../components/StartupAgency/Pricing';
import CaseStudy from '../components/StartupAgency/CaseStudy';
import Testimonials from '../components/StartupAgency/Testimonials';
import Contact from '../components/StartupAgency/Contact';
import Subscribe from '../components/StartupAgency/Subscribe';
import Footer from '../components/StartupAgency/Footer'; 
  
const StartupAgency = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <Services />
            <About />
            <FreeContact />
            <WhyChooseUs />
            <WorkingProcess />
            <Pricing />
            <CaseStudy />
            <Testimonials />
            <Contact />
            <Subscribe />
            <Footer />
        </>
    )
}

export default StartupAgency;