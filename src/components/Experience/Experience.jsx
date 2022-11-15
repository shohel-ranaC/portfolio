import React from 'react';
import './Experience.css';
import { Container, Row, Col } from 'reactstrap';

const experienceData = [
    {
        year: '2021 - 2022',
        title: 'Sr. Front-End Developer',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero consectetur ratione debitis deleniti blanditiis accusantium possimus minus expedita, cumque veritatis.',
    },
    {
        year: '2022 - 2022',
        title: 'Sr. Back-End Developer',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero consectetur ratione debitis deleniti blanditiis accusantium possimus minus expedita, cumque veritatis.',
    },
    {
        year: '2021 - 2022',
        title: 'Sr. Front-End Developer',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero consectetur ratione debitis deleniti blanditiis accusantium possimus minus expedita, cumque veritatis.',
    },
]

const Experience = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2>Experience</h2>
                    </Col>

                    <Col lg='6' md='6'>
                       <div className="single__experience-container">
                            {
                                experienceData.map((item, index) => (
                                    <div className="single__experience" key={index}>
                                        <span className='experience__icon'>
                                            <i class='ri-briefcase-line'></i>
                                        </span>
                                        <h6>{item.year}</h6>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                ))
                            }
                        </div>  
                    </Col>

                    <Col lg='6' md='6'>
                       <div className="single__experience-container">
                            {
                                experienceData.map((item, index) => (
                                    <div className="single__experience" key={index}>
                                        <span className='experience__icon'>
                                            <i class='ri-briefcase-line'></i>
                                        </span>
                                        <h6>{item.year}</h6>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                ))
                            }
                        </div>  
                    </Col>
                </Row>
            </Container>     
        </section>
    );
};

export default Experience;