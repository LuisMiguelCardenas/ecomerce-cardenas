import React from 'react'

import './CartCategory.css'


export const CartCategory = (props) => {
    return ( 
        <div className="cartCategory">
            <img className="cartCategory__img" src={props.src}/>
            <p className="cartCategory__text">{props.text}</p>
        </div>
     );
}
 
