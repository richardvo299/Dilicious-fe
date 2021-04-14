import React, { useState } from "react";
import { Col, Row, Card, Form, Button, Modal, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import CurrencyFormat from 'react-currency-format';
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../redux/actions/product.actions";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);


  const increase = (e) => {
    console.log("increase in clicked");
    e.preventDefault();
    const newquantity = quantity + 1;
    setQuantity(newquantity);
  }
  const decrease = (e) => {
    console.log("decrease in clicked");
    e.preventDefault();
    if (quantity !== 1) {
      const newquantity = quantity - 1;
      setQuantity(newquantity);
    } 
  }
  return (
    <div>
    <Button onClick={decrease} className="quantity-button">-</Button>
    {quantity}
    <Button onClick={increase} className="quantity-button">+</Button>
    </div>
  )
};

const Product = ({ product }) => {
  // console.log("products", product);
  const [quantity, setQuantity] = useState(1);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  
  const [cart, setCart] = useState({
    name: product?.name,
    price: product?.price,
    images: product?.images[0].imageUrl,
    options: "default",
    toppings: "none",
    quantity: 1,
  });
  const increase = (e) => {
    console.log("increase in clicked");
    e.preventDefault();
    const newquantity = quantity + 1;
    setQuantity(newquantity);
    setCart({...cart, quantity: newquantity});
  }
  const decrease = (e) => {
    console.log("decrease in clicked");
    e.preventDefault();
    let newquantity;
    if (quantity !== 1) {
      newquantity = quantity - 1;
      setQuantity(newquantity);
    }
    setCart({...cart, quantity: newquantity});
  }
  const [show, setShow] = useState(false);
  // const [tempprice, setTempprice] = useState(0);

  const onToggleModal = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const onChangeCart = (e) => {
    setCart({...cart, [e.target.name]: e.target.value});
    console.log("value", e.target.value);
    console.log("name", e.target.name);
  }

  const onSubmitCart = (e) => {
    e.preventDefault();
    console.log("cart", cart)
    dispatch(productActions.addToCart(cart));
  }

  return (
    <div className="product-cards">
    <Card className="text-center">
      <div>
      <Card.Img variant="top" src={product.images[0].imageUrl} />
      </div>
      <Card.Body>
        <Card.Title>
          <strong>
              {product.name.length > 24
                ? product.name.slice(0, 24) + "..."
                : product.name}
          </strong>
        </Card.Title>
        <Card.Text>
        <b><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true}/></b> vnd / batch
        </Card.Text>
        <Button variant="primary" onClick={onToggleModal} block><b>Add to Cart</b></Button>
      </Card.Body>
    </Card>
    <Modal
            show={show}
            dialogClassName='modal-90w'
            onHide={() => setShow(false)}
            aria-labelledby='example-custom-modal-styling-title'
            className='d-flex align-items-center justify-content-center'
        >
            <Modal.Header>
            <Modal.Title className="text-warning">
                ORDER
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* <Form
                className='d-flex justify-content-center'
            > */}
              <Row>
                <Col xs={12} md={6} className="modal-image-wrapper">
                  <img src={product.images[0].imageUrl} alt="" className="modal-image"></img>
                </Col>
                <Col xs={12} md={6}>
                  <Form onSubmit={onSubmitCart}>
                    <Form.Group controlId='productinfo'>
                      <h2>
                      {product.name}
                      </h2>
                      Price: <b><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true}/></b> VND
                      <br></br>
                      Size: {product.size}
                      <br></br>
                      {product.description}
                    </Form.Group>
                  <Form.Row>
                    <fieldset>
                    <Form.Group as={Col} controlId='options' onChange={onChangeCart} name="options">
                      <Form.Label as="legend">
                        Options
                      </Form.Label>
                      <Col>
                        <Form.Check
                          type="radio"
                          label={product.options[0].option}
                          name="options"
                          id="option1"
                          value={product.options[0].option}
                        />
                        <Form.Check
                          type="radio"
                          label={product.options[1].option}
                          name="options"
                          id="option2"
                          value={product.options[1].option}
                        />
                        <Form.Check
                          type="radio"
                          label={product.options[2].option}
                          name="options"
                          id="option3"
                          value={product.options[2].option}
                        />
                      </Col>
                    </Form.Group>
                    </fieldset>
                    <fieldset>
                    <Form.Group as={Col} controlId='toppings' onChange={onChangeCart} name="toppings">
                      <Form.Label as="legend">
                        Toppings
                      </Form.Label>
                      <Col>
                        <Form.Check
                          type="radio"
                          label={product.toppings[0].topping}
                          name="toppings"
                          id="topping1"
                          value={product.toppings[0].topping}
                        />
                        <Form.Check
                          type="radio"
                          label={product.toppings[1].topping}
                          name="toppings"
                          id="topping2"
                          value={product.toppings[1].topping}
                        />
                        <Form.Check
                          type="radio"
                          label={product.toppings[2].topping}
                          name="toppings"
                          id="topping3"
                          value={product.toppings[2].topping}
                        />
                      </Col>
                    </Form.Group>
                    </fieldset>
                  </Form.Row>
                  <Form.Row>
                    <fieldset>
                    <Form.Group as={Col} controlId='quantity' onChange={onChangeCart} name="quantity">
                      <Form.Label as="legend">
                        Quantity
                      </Form.Label>
                      <div>
                      <Button onClick={decrease} className="quantity-button">-</Button>
                      {quantity}
                      <Button onClick={increase} className="quantity-button">+</Button>
                      </div>
                    </Form.Group>
                    </fieldset>
                  </Form.Row>
                  {isAuthenticated 
                    ? <Button className='mx-auto font-weight-bold' variant='warning' type='submit'>
                        Add to Cart
                      </Button>
                    : <Button as={Link} to="/auth">Login to Add</Button>}
                  <Button className='font-weight-bold cancel-button' variant='warning' onClick={onToggleModal}>
                    Back to Page
                  </Button>
                  </Form>
                </Col>
              </Row>
            </Modal.Body>
        </Modal>
    </div>
  );
};

export default Product;