import React from 'react';
import { Col, Row, Button } from "react-bootstrap";
import "./style.css";

function Categories({ category, handleCat }) {
    // const handleCat = (e) => {
    //     e.preventDefault();
    //     console.log("this cat is clicked");
    // }
    return (
        <div>
            <Button className="cat-btn" onClick={handleCat}>{category.name}</Button>
        </div>
    )
}

export default Categories
