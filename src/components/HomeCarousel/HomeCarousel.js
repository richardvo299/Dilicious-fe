import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";
// import { Link } from "react-router-dom";
import './style.css';

const HomeCarousel = () => {
    // const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Carousel fade>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/04lxOY4.jpg"
                    alt="First slide"
                    />
                    {/* <Carousel.Caption>
                    <h3><i>"Everybody deserves a good cake"</i></h3>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/enYPMvF.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                    className="d-block w-100"
                    src="https://i.imgur.com/oSeOWAJ.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
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