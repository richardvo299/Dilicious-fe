import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Redirect } from "react-router-dom";

import {
  Col,
  Row,
  Card,
  Form,
  Modal,
  Button,
  Container,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import "./style.css";

import authActions  from "../../redux/actions/auth.actions";

import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";

const FB_APP_ID = process.env.REACT_APP_FB_APP_ID;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function AuthPage() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const onToggleModal = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(authActions.login(user.email, user.password));
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
    console.log(user.email, user.password);
  };

  if (isAuthenticated) return <Redirect to='/' />;

  const onRegister = (e) => {
    e.preventDefault();
    dispatch(
      authActions.register(
        user.name,
        user.email,
        user.password,
      )
    );
  };
    return (
        <div>
            <h1 style={{textAlign: "center", color: "#4E3021", paddingTop: "16px"}}>Login & Register</h1>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Dilicious - Login or Sign Up</title>
                <link rel='canonical' href='http://mysite.com/example' />
            </Helmet>
        <Container
            fluid
            className='d-flex flex-column align-items-center justify-content-center'
        >
            <Row>
            <Col className='d-flex justify-content-center align-items-center'>
                <Card style={{ width: "30rem" }} className='p-3 box-shadow'>
                <Form className='d-flex flex-column justify-content-center align-content-center text-align-center'>
                    <Form.Group controlId='email'>
                    <Form.Control
                        type='email'
                        onChange={onChange}
                        placeholder='Email'
                    />
                    </Form.Group>
                    <Form.Group controlId='password'>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        onChange={onChange}
                    />
                    </Form.Group>
                    <Form.Group className='mr-auto' controlId='formBasicPassword'>
                    <Link className='' to='#'>
                        <small className='text-muted'>Forgot Password ?</small>
                    </Link>
                    </Form.Group>
                    <Button
                    block
                    type='submit'
                    variant='warning'
                    onClick={onLogin}
                    className='font-weight-bold'
                    >
                    Login
                    </Button>
                    <h6 className='text-muted text-center mt-1'>Or Sign in with</h6>
                    <Row>
                    <Col>
                        <GoogleLogin
                        className='py-1'
                        clientId={GOOGLE_CLIENT_ID}
                        buttonText='Google'
                        onSuccess={(u) => {
                            console.log("u", u);
                            dispatch(authActions.login(u));
                        }}
                        onFailure={() => console.log("Google Login Failure")}
                        />
                    </Col>
                    <Col className='text-right'>
                        <FacebookLogin
                        className='py-1'
                        textButton='Facebook'
                        appId={FB_APP_ID}
                        icon='fa-facebook'
                        fields='name,email,picture'
                        callback={(u) =>
                            dispatch(authActions.login(u))
                        }
                        onFailure={() => console.log("Facebook Login Failure")}
                        />
                    </Col>
                    </Row>
                    <hr className='hr' />
                    <h6 className='text-muted text-center mt-1'>No account yet?</h6>
                    <Button
                    type='submit'
                    variant='warning'
                    onClick={onToggleModal}
                    className='mx-auto w-50 font-weight-bold'
                    >
                    Create an account
                    </Button>
                </Form>
                </Card>
            </Col>
            </Row>
        </Container>
        <Modal
            show={show}
            dialogClassName='modal-90w'
            onHide={() => setShow(false)}
            aria-labelledby='example-custom-modal-styling-title'
            className='d-flex align-items-center justify-content-center'
        >
            <Modal.Header>
            <Modal.Title className="text-warning">
                Sign Up
                <p className='text-white font-weight-light p-modal'>
                It's quick and easy.
                </p>
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form
                onSubmit={onRegister}
                className='d-flex flex-column justify-content-center'
            >
                <Form.Row>
                <Form.Group as={Col} controlId='name'>
                    <Form.Control
                    type='text'
                    placeholder='Name'
                    onChange={onChange}
                    />
                </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group as={Col} controlId='email'>
                    <Form.Control
                    type='email'
                    placeholder='Email'
                    onChange={onChange}
                    />
                </Form.Group>
                <Form.Group as={Col} controlId='password'>
                    <Form.Control
                    type='password'
                    placeholder='Password'
                    onChange={onChange}
                    />
                </Form.Group>
                </Form.Row>

                <p className='text-center p-terms'>
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookie Policy. You may receive emails from us and can
                opt out at any time.
                </p>
                <Button className='mx-auto w-50 font-weight-bold' variant='warning' type='submit'>
                Sign Up
                </Button>
            </Form>
            </Modal.Body>
        </Modal>
        </div>
    )
}

export default AuthPage
