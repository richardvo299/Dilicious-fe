import React from 'react';
import { Col, Row, Card, Form, Button, Modal, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import CurrencyFormat from 'react-currency-format';

function CurrentOrder() {
    const user = useSelector(state => state.auth.user)
    return (
        <div>

            <Card className='p-3 box-shadow'>
                <h2>Order</h2>
                <hr></hr>
                {!user||user===undefined? <h1>Loading</h1> : user.cart?.map((u, index) => {
                    return <Row key={index}>
                    <Col>
                    <img src={u.images?u.images:"https://i.imgur.com/kcih1Da.jpg"} alt="orderphoto" className="order-photo"></img>
                    </Col>
                    <Col className="order-item-details">
                    <h4><strong>{u.name}</strong></h4>
                    <h5>{u.options}</h5>
                    <h5>{u.toppings}</h5>
                    </Col>
                    <Col className="order-item-details">
                    <h5>Quantity</h5>
                    <h5>{u.quantity}</h5>
                    <h5>Price</h5>
                    <h5>{u.price}</h5>
                    </Col>
                    </Row>
                }
                )}
                <hr></hr>
                
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
