import React, { useRef, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './HeroSection.css';
import heroImg from '../../assets/images/hero-img.png';

import { init } from 'ityped';

const HeroSection = () => {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: true,
            strings:[
                'Muhammad Shohel Rana',
                'a Web Developer',
                'Passionat Coder',
            ],
        })
    }, []);
    return (
        <section className='hero__section' id='home'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <p className='mb-3'>Welcome to my portfolio</p>
                            <h2 className='hero__title mb-4'>
                                I'm <span ref={textRef}></span>
                            </h2>
                            <p>I'm a passionate web developer, Each & every single bug
                              teaches me two things. one is to when I find a solution
                              to learn from it and the other one is "my mind says you're not weak,
                              just a little bit up your spirit and maintain your consistency that
                              brings your success immediately. 
                            </p>

                            <div className="mt-5 hero__btn d-flex align-items-center gap-4">
                                <button className="btn hire__btn">
                                    <a href="#">Hire Me</a>
                                </button>
                                <button className="btn">Contact</button>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="hero images" className='w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>        
        </section>
    );
};

export default HeroSection;