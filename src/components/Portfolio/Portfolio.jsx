import React from 'react';
import './Portfolio.css';
import { Container, Row, Col } from 'reactstrap';

import portfolioImg from '../../assets/images/portfolio.png';
import ecommerceImg from '../../assets/images/ecommerce.png';
import doctorImg from '../../assets/images/doctor.png';

const portfolioData =[
    {
        imgUrl: portfolioImg,
        title: 'React Landing Page',
        url: '#'
    },
    {
        imgUrl: ecommerceImg,
        title: 'React Landing Page',
        url: '#'
    },
    {
        imgUrl: doctorImg,
        title: 'React Landing Page',
        url: '#'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <Container>
                <Row>
                    <Col lg='12' className='portfolio__top mb-5'>
                        <h6>Explore my work and give feedback</h6>
                        <h2>Portfolio</h2>
                    </Col>
                        
                 {
                    portfolioData.map((item, index) => (
                        <Col lg='4' md='6' sm='6' key={index}>
                        <div className='portfolio__card'>
                            <div className='portfolio__img'>
                                <img src={item.imgUrl} alt='images' className='w-100' />
                            </div>

                            <div className="portfolio__content">
                                <h5>{item.title}</h5>
                                <a href={item.url}>View Live demo</a>
                            </div>
                        </div>
                    </Col>
                    ))
                            
                 }

                </Row>
            </Container>            
        </section>
    );
};

export default Portfolio;