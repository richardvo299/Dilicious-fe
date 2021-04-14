import React, { useState } from 'react';
import { Row, Col, Button, Modal, ButtonGroup, Container, Card, Form, Table } from "react-bootstrap";
import Moment from 'react-moment';
import 'moment-timezone';

function Orderlist({orders}) {
    const [status, setStatus] = useState("pending");
    const [show, setShow] = useState(false);
    const onclickStatus = (e) => {
        e.preventDefault();
        console.log("status button is clicked");
        if (e.target.value === "pending") {
            setStatus("confirmed");
            e.target.value = status;
        }
    }

    const onToggleOrderModal = (e) => {
        e.preventDefault();
        setShow(!show);
    };

    return (
        <tbody>
            <tr>
                <td>{orders.checkout.recipientName}</td>
                <td><Moment format="YYYY/MM/DD">{orders.checkout.date}</Moment></td>
                <td>{orders.checkout.time}</td>
                <td>{orders.products.length}</td>
                <td>{orders.total}</td>
                <td>{orders.status}</td>
                <td><Button onClick={onToggleOrderModal}>View</Button><Button>Cancel</Button></td>
            </tr>
        <Modal
            show={show}
            dialogClassName='modal-90w'
            onHide={() => setShow(false)}
            aria-labelledby='example-custom-modal-styling-title'
            className='d-flex align-items-center justify-content-center'
            >
            <Modal.Body>
            <Row>
            <Col>
                <h5>Recipient Name: {orders.checkout.recipientName}</h5>
                <hr></hr>
                <h5>Delivery Date: <Moment format="YYYY/MM/DD">{orders.checkout.date}</Moment></h5>
                <hr></hr>
                <h5>Delivery Time: {orders.checkout.time}</h5>
                <hr></hr>
                <h5>Phone Number: {orders.checkout.phone}</h5>
                <hr></hr>
                <h5>Number of Items: {orders.products.length}</h5>
                <hr></hr>
                <h5>Status: <Button onClick={onclickStatus}>{orders.status}</Button></h5>
                <br></br>
                <Button className='font-weight-bold cancel-button' variant='warning' onClick={onToggleOrderModal}>
                        Back to Page
                </Button>
            </Col>
            <Col>
                <h5>Items List:</h5>
                {orders.products.map((i, index) => (
                    <Row key={index}>
                    <Col>
                        <img src={i.images} style={{height: "100px"}}></img>
                    </Col>
                    <Col>
                    <h5><b>{i.name}</b></h5>
                    <h5>{i.options}</h5>
                    <h5>{i.toppings}</h5>
                    </Col>
                    <Col>
                    <h5>{i.price}</h5>
                    <h5>x {i.quantity}</h5>
                    </Col>
                    <hr></hr>
                    </Row>
                ))}
            </Col>
            </Row>
            </Modal.Body>
            </Modal> 
        </tbody>
    )
}

export default Orderlist
