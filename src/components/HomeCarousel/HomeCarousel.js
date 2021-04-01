import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import './style.css';

const HomeCarousel = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/04lxOY4.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/enYPMvF.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/oSeOWAJ.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/vXbVIWo.jpg"
                    alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeCarousel