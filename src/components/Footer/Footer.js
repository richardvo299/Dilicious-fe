import React from 'react';
import { Col, Row } from "react-bootstrap";
import "./style.css";
import logo from "../../images/logo.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <Row className="footer-row">
                    <Col sm={12} md={9}>
                        <Row>
                        <Col className="footer-col">
                            <h4>More Info</h4>
                            <a href="/">View Specials</a>
                            <br></br>
                            <a href="/">Recipes</a>
                            <br></br>
                            <a href="/">Reviews</a>
                            <br></br>
                            <a href="/">News</a>
                        </Col>
                        <Col className="footer-col">
                            <h4>Collaboration</h4>
                            <a href="/">Product Recalls</a>
                            <br></br>
                            <a href="/">Guest Care</a>
                            <br></br>
                            <a href="/">New Vendors</a>
                            <br></br>
                            <a href="/">Buyers</a>
                        </Col>
                        <Col className="footer-col">
                            <h4>Others</h4>
                            <a href="/">Careers</a>
                            <br></br>
                            <a href="/">Terms of Use</a>
                            <br></br>
                            <a href="/">Privacy Policy</a>
                            <br></br>
                            <a href="/">Q & A</a>
                        </Col>
                        <Col className="footer-col">
                            <h4>Social Media</h4>
                        </Col>
                        </Row>
                    </Col>
                    <Col sm={12} md={3}>
                        <img src={logo} alt="mentee" width="200px"></img>
                        <br></br>
                        <br></br>
                        <p>123 Nguyen Kiem Str, Phu Nhuan Dist, HCMC</p>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer
