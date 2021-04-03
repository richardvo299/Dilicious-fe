import React from 'react';
import { Row, Col, Button, ButtonGroup, Container, Card, Form } from "react-bootstrap";

function AdminPage() {
    const handleclick = (e) => {
        e.preventDefault();
        console.log("orders is clicked");
    }
    return (
        <div>
            <h1>Admin Page</h1>
            <Row>
                <Col md={3}>
                <Card className='p-3 box-shadow'>
                    <h4>Menu</h4>
                    <h5 onClick={handleclick}>Orders</h5>
                    <h5>Products</h5>
                    <h5>Categories</h5>
                    <h5>Promos</h5>
                </Card>
                </Col>
                <Col md={6}>
                <Card className='p-3 box-shadow'>
                    <h4>Menu name here</h4>
                    {/* Insert a react-bootstrap table here */}
                </Card>
                </Col>
            </Row>
        </div>
    )
}

export default AdminPage
