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
                        <Col style={{textAlign: "left"}}>
                            <h4>More Info</h4>
                            <a>View Specials</a>
                            <br></br>
                            <a>Recipes</a>
                            <br></br>
                            <a>Reviews</a>
                            <br></br>
                            <a>News</a>
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h4>Collaboration</h4>
                            <a>Product Recalls</a>
                            <br></br>
                            <a>Guest Care</a>
                            <br></br>
                            <a>New Vendors</a>
                            <br></br>
                            <a>Buyers</a>
                        </Col>
                        <Col style={{textAlign: "left"}}>
                            <h4>Others</h4>
                            <a>Careers</a>
                            <br></br>
                            <a>Terms of Use</a>
                            <br></br>
                            <a>Privacy Policy</a>
                            <br></br>
                            <a>Q & A</a>
                        </Col>
                        <Col style={{textAlign: "left"}}>
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
