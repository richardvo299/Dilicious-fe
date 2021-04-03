import React from 'react';
import { Col, Row, Card, Form, Button, Modal, Container, Image } from "react-bootstrap";
import "./style.css";

function Categories({ category }) {
    return (
        <div>
            <Button className="cat-btn">{category.name}</Button>
        </div>
    )
}

export default Categories
