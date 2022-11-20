import React from 'react';
import './Footer.css';
import { Container } from 'reactstrap';

const Footer = () => {
    return (
        <footer className='pb-4'>
            <Container className='footer text-center'>
               <p>Copyright 2022, Develop by Shohel Rana. All Rights Reerved</p>
            </Container>     
        </footer>
    );
};

export default Footer;