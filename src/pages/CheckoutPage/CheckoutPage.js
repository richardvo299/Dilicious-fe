import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Row, Col, Button, ButtonGroup, Container, Form, Card } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import TimePicker from 'react-bootstrap-time-picker';
import CurrentOrder from "../../components/CurrentOrder/CurrentOrder";

function CheckoutPage() {
    const [isDelivery, setIsDelivery] = useState(true);

    const setDelivery = (e) => {
        console.log("Delivery is clicked");
        e.preventDefault();
        setIsDelivery(true);
    }

    const setPickup = (e) => {
        console.log("Pickup is clicked");
        e.preventDefault();
        setIsDelivery(false);
    }
    return (
        <div>
            <h1 style={{textAlign: "center", color: "#4E3021", marginTop: "16px"}}>Check Out Page</h1>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Dilicious - Checkout</title>
                <link rel='canonical' href='http://mysite.com/example' />
            </Helmet>
            <Container>
            <Row>
                <Col sm={12} md={7}>
                <Card className='p-3 box-shadow'>
                <h2>1. Info</h2>
                <Form className='d-flex flex-column justify-content-center align-content-center text-align-center'>
                    <Form.Group controlId='name'>
                    <Form.Label>
                        Recipient Name
                    </Form.Label>
                    <Form.Control
                        type='string'
                        // onChange={onChange}
                        placeholder='Name'
                    />
                    </Form.Group>
                    <Form.Group controlId='phone'>
                    <Form.Label>
                        Phone Number
                    </Form.Label>
                    <Form.Control
                        type='string'
                        // onChange={onChange}
                        placeholder='Phone Number'
                    />
                    </Form.Group>
                    <Form.Group controlId='email'>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control
                        type='email'
                        // onChange={onChange}
                        placeholder='Email'
                    />
                    </Form.Group>
                    {/* <Form.Group controlId='address'>
                    <Form.Label>
                        Delivery Address
                    </Form.Label>
                    <Form.Control
                        type='string'
                        // onChange={onChange}
                        placeholder='Address'
                    />
                    </Form.Group> */}
                    {/* <Button
                    type='submit'
                    variant='warning'
                    // onClick={onToggleModal}
                    className='mx-auto w-50 font-weight-bold'
                    >
                    Next Step
                    </Button> */}
                </Form>
                </Card>
                <Card className='p-3 box-shadow'>
                <h2>2. Order Type</h2>
                <Form className='d-flex justify-content-center align-content-center text-align-center'>
                    <Button
                    variant='warning'
                    onClick={setDelivery}
                    className='font-weight-bold'
                    style={{width: "250px", margin: "0 8px"}}
                    >
                    Delivery
                    </Button>
                    <Button
                    variant='warning'
                    onClick={setPickup}
                    className='font-weight-bold'
                    style={{width: "250px", margin: "0 8px"}}
                    >
                    Pick-up
                    </Button>
                </Form>
                </Card>
                {isDelivery 
                ? 

                <Card className='p-3 box-shadow'>
                <h2>3. Delivery Info</h2>
                <Form className='d-flex flex-column justify-content-center align-content-center text-align-center'>
                    <Form.Group controlId='delivery-time'>
                    <Form.Label>
                        Delivery Time
                    </Form.Label>
                    <TimePicker start="9:00" end="18:00" step={30} />
                    </Form.Group>
                    <Form.Group controlId='delivery-date'>
                    <Form.Label>
                        Delivery Date
                    </Form.Label>
                    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
                    <Form.Group controlId='address'>
                    <Form.Label>
                        Delivery Address
                    </Form.Label>
                    <Form.Control
                        type='string'
                        // onChange={onChange}
                        placeholder='Address'
                    />
                    </Form.Group>
                </Form>
                </Card>
                :
                <Card className='p-3 box-shadow'>
                <h2>3. Pick-up Info</h2>
                <Form className='d-flex flex-column justify-content-center align-content-center text-align-center'>
                    <Form.Group controlId='pickup-time'>
                    <Form.Label>
                        Pick-up Time
                    </Form.Label>
                    <TimePicker start="9:00" end="18:00" step={30} />
                    </Form.Group>
                    <Form.Group controlId='pickup-date'>
                    <Form.Label>
                        Pick-up Date
                    </Form.Label>
                    <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
                    <Form.Group controlId='notes'>
                    <Form.Label>
                        Notes
                    </Form.Label>
                    <Form.Control
                        type='string'
                        // onChange={onChange}
                        placeholder='Notes'
                    />
                    </Form.Group>
                </Form>
                </Card>
                
                }
                </Col>
                <Col sm={12} md={5}>
                    <CurrentOrder></CurrentOrder>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default CheckoutPage
