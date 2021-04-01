import React from 'react';
import './style.css';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function DeliveryPage() {
    return (
        <div className="delivery-info">
            <Helmet>
                <meta charSet='utf-8' />
                <title>Dilicious - Delivery</title>
                <link rel='canonical' href='/delivery' />
            </Helmet>
            <h1 className="delivery-page-title">Delivery Info</h1>
            <div className="delivery-info-image">
                <img src="https://i.imgur.com/2WB6h5L.jpg" style={{width: "400px"}}></img>
            </div>
            <div className="delivery-page-content">
            <p>When you don’t have time to come into our store to pick up that special cake to share at the party, why not order online and we will deliver to your door for free!
            We offer <b>free cake delivery within Phu Nhuan District</b> for our entire range of delicious baked goods.
            <br></br>
            Simply select which flavour you want with options and delivery.
            <br></br>
            We also have the option of <i>paying online</i> or <i>on delivery</i> of the cake.
            <br></br>
            The baked goods will be packaged in environment-friendly paper boxes.
            </p>
            </div>
            <div className="delivery-page-content">
            <div className="delivery-info-image">
                <img src="https://i.imgur.com/psZmFB0.jpg" style={{width: "400px"}}></img>
            </div>
            <p>
            Our delivery service is available Monday to Saturday from <b>9:00am - 6:00pm</b>. 
            <br></br>
            If you are traveling long distances and will have the cake at room temperature for more than 3 hours please let our staff know ahead of time and we will freeze the cake to help it travel safe and sound on the trip.
            <br></br>
            <br></br>
            Ready to order? Click <a href="/" style={{color: "#4E3021"}}><b>here</b></a> to order your cake now.</p>
            </div>
        </div>
    )
}

export default DeliveryPage
