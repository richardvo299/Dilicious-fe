import React from 'react';
import { Col, Row, Card, Form, Button, Modal, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import CurrencyFormat from 'react-currency-format';

function CurrentOrder() {
    return (
        <div>
            <Card className='p-3 box-shadow'>
                <h2>Order</h2>
                <hr></hr>
                <Row>
                <Col>
                <img src="https://i.imgur.com/kcih1Da.jpg" alt="orderphoto" className="order-photo"></img>
                </Col>
                <Col className="order-item-details">
                <h4><strong>Tiramisu Cake</strong></h4>
                <h5>Gluten-free</h5>
                <h5>Cocoa powder</h5>
                </Col>
                <Col className="order-item-details">
                <h5>Quantity</h5>
                <h5>4</h5>
                <h5>Price</h5>
                <h5>200.000VND</h5>
                </Col>
                </Row>
                <hr></hr>
                <Row>
                <Col>
                <img src="https://i.imgur.com/S8VfhYV.jpg" alt="orderphoto" className="order-photo"></img>
                </Col>
                <Col className="order-item-details">
                <h4><strong>Matcha Cheesecake</strong></h4>
                <h5>Default</h5>
                <h5>Matcha powder</h5>
                </Col>
                <Col className="order-item-details">
                <h5>Quantity</h5>
                <h5>4</h5>
                <h5>Price</h5>
                <h5>150.000VND</h5>
                </Col>
                </Row>
                <hr></hr>
                <h5 style={{textAlign: "right"}}>Subtotal</h5>
                <h5 style={{textAlign: "right"}}>1,400,000 VND</h5>
                <hr></hr>
                <h5 style={{textAlign: "right"}}>Delivery Fee</h5>
                <h5 style={{textAlign: "right"}}>40,000 VND</h5>
                <hr></hr>
                <h5 style={{textAlign: "right"}}>Total</h5>
                <h5 style={{textAlign: "right"}}><strong>1,440,000 VND</strong></h5>
                <Button
                    variant='warning'
                    className='font-weight-bold'
                    // style={{width: "300px", margin: "0 8px"}}
                >
                    Check-out
                </Button>
            </Card>
        </div>
    )
}

export default CurrentOrder
