import React from 'react'
import './CartWidget.css'
export const CartWidget = () => {
    return (  
        <span className="cartWitget">
            <i className="cart__logo fab fa-opencart"></i>
            <p className="CartQuantity">0</p>
        </span>
    );
}

