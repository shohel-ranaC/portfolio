import React, { Fragment } from 'react';
import About from '../About/About';
import Experience from '../Experience/Experience';
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
            
        </Fragment>

    );
};

export default Layout;