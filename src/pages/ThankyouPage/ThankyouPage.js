import React from 'react';
import "./style.css";
import { Col, Row, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";

function ThankyouPage() {
    return (
        <div className="aboutus-info">
            <Helmet>
                <meta charSet='utf-8' />
                <title>Thank you</title>
                <link rel='canonical' href='/thanks' />
            </Helmet>
            <Container>
            <Row style={{marginBottom: "16px"}}>
                <Col sm={12} md={6}>
                    <img src="https://i.imgur.com/tyfVHMy.png" className="aboutus-info-image" alt="img" style={{maxHeight: "540px", width: "auto"}}></img>
                </Col>
                <Col sm={12} md={6} className="d-flex align-items-center">
                    <div style={{marginTop: "auto", marginBottom: "auto"}}>
                    <h1 className="aboutus-page-title"><b>Thank you for ordering!</b></h1>
                    <p className="aboutus-page-content">
                    <b>Dilicious</b> has successfully received your order.
                    <br></br>
                    Your order will be processed as soon as possible. Our staff will contact you via phone within an hour.
                    <br></br>
                    </p>
                    <br></br>
                    <br></br>
                    <a href="/" style={{color: "#4E3021"}}><b>Back to homepage</b></a>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default ThankyouPage
