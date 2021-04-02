import React from 'react';
import { Col, Row, Card, Form, Button, Modal, Container, Image } from "react-bootstrap";
import "./style.css";
import logo from "../../images/logo.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <Row className="footer-row">
                    <Col sm={12} md={9}>
                        <Row>
                        <Col>
                            <h4>Footer Col 1.1</h4>
                            <a>Small Footer 1</a>
                            <br></br>
                            <a>Small Footer 2</a>
                            <br></br>
                            <a>Small Footer 3</a>
                            <br></br>
                            <a>Small Footer 4</a>
                        </Col>
                        <Col>
                            <h4>Collaboration</h4>
                            <a>Product Recalls</a>
                            <br></br>
                            <a>Guest Care</a>
                            <br></br>
                            <a>New Vendors</a>
                            <br></br>
                            <a>Buyers</a>
                        </Col>
                        <Col>
                            <h4>Others</h4>
                            <a>Careers</a>
                            <br></br>
                            <a>Terms of Use</a>
                            <br></br>
                            <a>Privacy Policy</a>
                            <br></br>
                            <a>Q & A</a>
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
