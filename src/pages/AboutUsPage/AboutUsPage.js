import React from 'react';
import "./style.css";
import { Col, Row, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

function AboutUsPage() {
    return (
        <div className="aboutus-info">
            <Helmet>
                <meta charSet='utf-8' />
                <title>Dilicious - About</title>
                <link rel='canonical' href='/aboutus' />
            </Helmet>
            <h1 className="aboutus-page-title">About Us</h1>
            <h2 className="aboutus-page-title"><i>"If eating cake is wrong, then I don’t want to be right."</i></h2>
            <Container>
            <Row>
                <Col sm={12} md={6}>
                    <img src="https://i.imgur.com/iWV9aot.jpg" className="aboutus-info-image" alt="img"></img>
                </Col>
                <Col sm={12} md={6}>
                    <p className="aboutus-page-content">
                    <b>Dilicious</b> was found in  2020 in the hands of two lovely unknown people.
                    <br></br>
                    Its fate is still unknown.
                    <br></br>
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <br></br>
                    <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <br></br>
                    <br></br>
                    <a href="/" style={{color: "#4E3021"}}><b>START ORDER HERE</b></a>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default AboutUsPage
