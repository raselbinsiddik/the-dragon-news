import React from 'react';
import Header from '../Pages/Shared/Navber/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../LeftNav/LeftNav';
import RightNav from '../RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationVar from '../Pages/Shared/NavigationVar/NavigationVar';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationVar></NavigationVar>
            <Container>
                <Row>
                    <Col lg={3}>
                    <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                      <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;