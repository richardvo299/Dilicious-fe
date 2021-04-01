import React, { useState } from "react";
import { Col, Row, Card, Form, Button, Modal, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import CurrencyFormat from 'react-currency-format';

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
  const [show, setShow] = useState(false);
  const [tempprice, setTempprice] = useState(0);

  const onToggleModal = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div>
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
                  <img src={product.images[0].imageUrl} className="modal-image"></img>
                </Col>
                <Col xs={12} md={6}>
                  <Form>
                    <Form.Group controlId='productinfo'>
                      <h2>
                      {product.name}
                      </h2>
                      Size: {product.size}
                      <br></br>
                      {product.description}
                    </Form.Group>
                  </Form>
                  <Form.Row>
                    <fieldset>
                    <Form.Group as={Col} controlId='options'>
                      <Form.Label as="legend">
                        Options
                      </Form.Label>
                      <Col>
                        <Form.Check
                          type="radio"
                          label={product.options[0].option}
                          name="formHorizontalRadios"
                          id="option1"
                        />
                        <Form.Check
                          type="radio"
                          label={product.options[1].option}
                          name="formHorizontalRadios"
                          id="option2"
                        />
                        <Form.Check
                          type="radio"
                          label={product.options[2].option}
                          name="formHorizontalRadios"
                          id="option3"
                        />
                      </Col>
                    </Form.Group>
                    </fieldset>
                    <fieldset>
                    <Form.Group as={Col} controlId='image'>
                      <Form.Label as="legend">
                        Toppings
                      </Form.Label>
                      <Col>
                        <Form.Check
                          type="radio"
                          label={product.toppings[0].topping}
                          name="formHorizontalRadios2"
                          id="topping1"
                        />
                        <Form.Check
                          type="radio"
                          label={product.toppings[1].topping}
                          name="formHorizontalRadios2"
                          id="topping2"
                        />
                        <Form.Check
                          type="radio"
                          label={product.toppings[2].topping}
                          name="formHorizontalRadios2"
                          id="topping3"
                        />
                      </Col>
                    </Form.Group>
                    </fieldset>
                  </Form.Row>
                  <Form.Row>
                    <fieldset>
                    <Form.Group as={Col} controlId='quantity'>
                      <Form.Label as="legend">
                        Quantity
                      </Form.Label>
                        <Quantity></Quantity>
                    </Form.Group>
                    </fieldset>
                  </Form.Row>
                  <Form.Row>
                    <fieldset>
                    <Form.Group as={Col} controlId='temp-price'>
                        <b>Total: <CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true}/></b> vnd
                    </Form.Group>
                    </fieldset>
                  </Form.Row>
                  <Button className='mx-auto font-weight-bold' variant='warning' type='submit'>
                    Add to Cart
                  </Button>
                  <Button className='font-weight-bold cancel-button' variant='warning' onClick={onToggleModal}>
                    Back to Page
                  </Button>
                </Col>
              </Row>
            </Modal.Body>
        </Modal>
    </div>
  );
};

export default Product;