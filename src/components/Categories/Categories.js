import React from 'react';
import { Col, Row, Card, Form, Button, Modal, Container, Image } from "react-bootstrap";
import "./style.css";

function Categories({ category }) {
    return (
        <div>
            <Button className="cat-btn">All</Button>
            <Button className="cat-btn">Chocolate</Button>
            <Button className="cat-btn">Matcha</Button>
            <Button className="cat-btn">Fruits</Button>
            <Button className="cat-btn">Others</Button>
        </div>
    )
}

export default Categories
