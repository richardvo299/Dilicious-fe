import React, { useState } from 'react';
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react';
import { useSelector, useDispatch } from "react-redux";
import Cart from "../../components/Cart/Cart";
import authActions  from "../../redux/actions/auth.actions";
// import SearchBar from '../SearchBar';
import "./style.css";


const PublicNavbar = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log("authenticated?", isAuthenticated);

    const handleLogout = () => {
        dispatch(authActions.logout());
    };

    return (
        <div>
            <Navbar expand="lg">
            <Navbar.Brand as={Link} to="/">
                <img src={logo} alt="mentee" width="100px"></img>
            </Navbar.Brand>
            <Navbar.Toggle
                children={<Hamburger toggled={isOpen} toggle={setIsOpen}/>} 
                aria-controls="basic-navbar-nav"
                bsPrefix="navbar-toggler hamburger-button" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/delivery">Delivery</Nav.Link>
                    <Nav.Link as={Link} to="/about">About us</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    {isAuthenticated 
                        ? 
                        <> 
                        <Nav.Link as={Link} to="/checkout">
                            <Cart></Cart>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/" onClick={handleLogout}>Log out</Nav.Link>
                        </>
                        :
                        <Nav.Link as={Link} to="/auth">Login | Register</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default PublicNavbar
