import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './CartWidget.css'


export const CartWidget = () => {

    const {cartQuantity} = useContext(CartContext)

    return (  
        
        <Link to = '/cart' className="cartWitget__container">
            <span style={{color: cartQuantity > 0 ? '#000' : '#6666'}} className="cartWitget col-md-1">
                <i className="cart__logo fab fa-opencart"></i>
                <p className="CartQuantity">{cartQuantity}</p>
            </span>
        </Link>
    );
}

