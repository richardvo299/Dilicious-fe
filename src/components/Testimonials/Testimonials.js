import React from 'react';
import { Col, Row, Card, Form, Button, Modal, Container, Image } from "react-bootstrap";
import "./style.css"

function Testimonials() {
    return (
        <div className="testimonials-clean">
            <div className="container">
                <div className="intro">
                    <h2 className="text-center"><i>How do our cake-lovers feel?</i></h2>
                </div>
                <div className="row people">
                    <div className="col-md-6 col-lg-4 item">
                        <div className="box">
                            <p className="description">Thanks to Dilicious, I've got to eat great cakes yet still can lose weight. Now I don't visit KFC everyday anymore.</p>
                        </div>
                        <div className="author"><img className="rounded-circle" src="https://i.imgur.com/ekq8VD4.jpg"/>
                            <h5 className="name">Adele</h5>
                            <p className="title"><i>Grammy-s winner</i></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 item">
                        <div className="box">
                            <p className="description">My family love these! I order for them every week. My favorite is that dark, rich, moist brownie with Coffee glaze. Just YUM!</p>
                        </div>
                        <div className="author"><img className="rounded-circle" src="https://i.imgur.com/GXlWBa0.jpg"/>
                            <h5 className="name">Michelle Obama</h5>
                            <p className="title"><i>Just an amazing woman</i></p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 item">
                        <div className="box">
                            <p className="description">If you don't love Dilicious baked goods, how in the hell are you gonna love somebody else? Let them eat cakes, henny.</p>
                        </div>
                        <div className="author"><img className="rounded-circle" src="https://i.imgur.com/Wnq4LgY.jpg"/>
                            <h5 className="name">Rupaul</h5>
                            <p className="title"><i>TV Host</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
