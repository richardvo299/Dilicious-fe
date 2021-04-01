import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

function Cart() {
    const [cartItems, setCartItems] = useState(0);

    return (
        <div>
            <FontAwesomeIcon icon="shopping-cart" size='sm' />
            <span className="cart-number">{cartItems}</span>
        </div>
    )
}

export default Cart
