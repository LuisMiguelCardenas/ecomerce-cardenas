import React from 'react'
import './CartWidget.css'
export const CartWidget = () => {
    return (  
        <span className="cartWitget col-md-1">
            <i className="cart__logo fab fa-opencart"></i>
            <p className="CartQuantity">0</p>
        </span>
    );
}

