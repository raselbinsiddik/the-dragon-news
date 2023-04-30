import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';


const Header = () => {
    
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalist without fear or favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY ")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Danger</Button>
                <Marquee className='text-danger' speed={50}>
                    Whether to pause the marquee when clicked........Whether to pause the marquee when clicked
                </Marquee>
            </div>
            <div>
               
            </div>
        </Container>
    );
};

export default Header;