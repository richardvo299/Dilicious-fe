import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

function Cart() {
    const [cartItems, setCartItems] = useState(0);
    const cart = useSelector((state) => state.auth.user.cart);
    console.log("cart on nav", cart);

    return (
        <div>
            <FontAwesomeIcon icon="shopping-cart" size='sm' />
            <span className="cart-number">{cart?.length}</span>
        </div>
    )
}

export default Cart
