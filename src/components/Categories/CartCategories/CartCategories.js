import React from 'react'

import './CartCategories.css'


export const CartCategories = (props) => {
    return ( 
        <div className="cartCategories">
            <img className="cartCategories__img" src={props.src}/>
            <p className="cartCategories__text">{props.text}</p>
        </div>
     );
}
 
