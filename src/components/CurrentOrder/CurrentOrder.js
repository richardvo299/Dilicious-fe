import React, { useState, useEffect } from 'react';
import { Col, Row, Card, Form, Button, Modal, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import productActions from "../../redux/actions/product.actions";
import "./style.css";
import CurrencyFormat from 'react-currency-format';

// function Subtotal() {
//     const user = useSelector(state => state.auth.user);
//     const cart = user.cart;
//     const subtotal = user.cart?.reduce((a, b) => a.price * a.quantity + b.price * b.quantity, 0);
//     console.log(subtotal);
//     console.log(cart);
//     return (
//         <div>
//             <h4>{subtotal}</h4>
//         </div>
//     )
// }

function CurrentOrder(orderinfo) {
    console.log("orderinfo on the right", orderinfo);
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const [temptotal, setTemptotal] = useState(0);
    const deleteItem = (id) => {
        if (id) dispatch(productActions.removeFromCart(id));
    }
    let subtotal;
    let total;
    if (user) {
        subtotal = user.cart?.reduce((b, a) => b + a.price * a.quantity, 0);
        total = subtotal + 40000;
    }

    
    // products = [{ 
    //         name: "",
    //         price: 0,
    //         images: "",
    //         options: "default",
    //         toppings: "none",
    //         quantity: 1,
    //     }],

    const submitOrder = () => {
        dispatch(productActions.createOrder(user.cart, orderinfo, 40000, "pending", total))
    }

    return (
        <div>

            <Card className='p-3 box-shadow'>
                <h2>Order</h2>
                <hr></hr>
                {!user||user===undefined 
                    ? <h1>Loading</h1> 
                    : user.cart?.map((u, index) => {
                        return <Row key={index}>
                                <Col>
                                <img src={u.images?u.images:"https://i.imgur.com/kcih1Da.jpg"} alt="orderphoto" className="order-photo"></img>
                                </Col>
                                <Col className="order-item-details">
                                <h4><strong>{u.name}</strong></h4>
                                <h5><i>{u.options}</i></h5>
                                <h5><i>{u.toppings}</i></h5>
                                </Col>
                                <Col className="order-item-details">
                                <h5><b>x {u.quantity}</b></h5>
                                <h5><b><b><CurrencyFormat value={u.price * u.quantity} displayType={'text'} thousandSeparator={true}/></b> VND</b></h5>
                                </Col>
                                <Button onClick={()=> deleteItem(u._id)} className="del-but">x</Button>
                                <hr></hr>
                               </Row>
                    }
                )}

                <h5 style={{textAlign: "right"}}>Subtotal</h5>
                <h5 style={{textAlign: "right"}}>
                    {!user||user===undefined 
                        ? <h1>Loading</h1> 
                        : <b><CurrencyFormat value={subtotal} displayType={'text'} thousandSeparator={true}/> VND</b>
                    }
                        
                </h5>
                <hr></hr>
                <h5 style={{textAlign: "right"}}>Delivery Fee</h5>
                <h5 style={{textAlign: "right"}}>40,000 VND</h5>
                <hr></hr>
                <h5 style={{textAlign: "right"}}>Total</h5>
                <h5 style={{textAlign: "right"}}><b><CurrencyFormat value={total} displayType={'text'} thousandSeparator={true}/> VND</b></h5>
                <Button
                    variant='warning'
                    className='font-weight-bold'
                    onClick={submitOrder}
                    // style={{width: "300px", margin: "0 8px"}}
                >
                    Check-out
                </Button>
            </Card>
        </div>
    )
}

export default CurrentOrder
