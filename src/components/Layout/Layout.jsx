import React, { Fragment } from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeroSection from '../HeroSection/HeroSection';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Layout = () => {
    return (
        <Fragment>
            <Header/>
            <HeroSection/>
            <About/>
            <Services/>
            <Experience/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </Fragment>

    );
};

export default Layout;