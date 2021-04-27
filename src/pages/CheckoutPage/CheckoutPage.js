import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Row, Col, Button, ButtonGroup, Container, Form, Card } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TimePicker from 'react-bootstrap-time-picker';
import CurrentOrder from "../../components/CurrentOrder/CurrentOrder";
import authActions  from "../../redux/actions/auth.actions";

function CheckoutPage() {
    const [isDelivery, setIsDelivery] = useState(true);
    const dispatch = useDispatch();
    // const user = useSelector(state => state.auth.user.checkout)
    const [orderinfo, setOrderinfo] = useState({
        recipientName: "",
        phone: "",
        email: "",
        orderType: "delivery",
        time: "",
        date: "2021-02-03T13:00:00Z",
    })
    const onChangeOrderInfo = (e) => {
        setOrderinfo({...orderinfo, [e.target.name]: e.target.value});
    }
    // const accessToken = useSelector(state => state.auth.accessToken)

    useEffect(() => {
        dispatch(authActions.getCurrentUser());
    }, [dispatch]);

    const setDelivery = (e) => {
        console.log("Delivery is clicked");
        e.preventDefault();
        setIsDelivery(true);
        setOrderinfo({...orderinfo, orderType: "delivery"})
    }

    const setPickup = (e) => {
        console.log("Pickup is clicked");
        e.preventDefault();
        setIsDelivery(false);
        setOrderinfo({...orderinfo, orderType: "pickup"})
    }

    // console.log("order info", orderinfo)
    return (
        <div>
            <h1 style={{textAlign: "center", color: "#4E3021", marginTop: "16px"}}>Check Out Page</h1>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Dilicious - Checkout</title>
                <link rel='canonical' href='/checkout' />
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
                        placeholder='Name'
                        onChange={onChangeOrderInfo}
                        name='recipientName'
                        required
                    />
                    </Form.Group>
                    <Form.Group controlId='phone'>
                    <Form.Label>
                        Phone Number
                    </Form.Label>
                    <Form.Control
                        type='string'
                        placeholder='Phone Number'
                        onChange={onChangeOrderInfo}
                        name='phone'
                        required
                    />
                    </Form.Group>
                    <Form.Group controlId='email'>
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Email'
                        onChange={onChangeOrderInfo}
                        name='email'
                        required
                    />
                    </Form.Group>
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
                    <Form.Control type="time" name="time" min="09:00" max="18:00" onChange={onChangeOrderInfo} />
                    </Form.Group>
                    <Form.Group controlId='delivery-date'>
                    <Form.Label>
                        Delivery Date
                    </Form.Label>
                    <Form.Control type="date" name="date" placeholder="Date of delivery" onChange={onChangeOrderInfo} />
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
                    <Form.Control type="time" name="time" min="09:00" max="18:00" onChange={onChangeOrderInfo} />
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
                    <CurrentOrder orderinfo={orderinfo}/>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default CheckoutPage
