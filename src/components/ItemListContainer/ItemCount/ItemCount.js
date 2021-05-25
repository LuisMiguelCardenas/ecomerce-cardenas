import React, { Fragment, useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({stock, onAdd, product}) => {
    
    
    const [number, setNumber] = useState(1);
    
    const increase = () =>{
        if (number < (stock)){
           setNumber( number+1)
        }
    }
    
    const decrease = () => {
        if (number > 1){
            setNumber(number +-1)
        }
    }
    return ( 
        <Fragment>
            <span className="itemCount">
                <button className="itemCount__decrease btn" onClick={decrease}>-</button>
                <p className="itemCount__text">{number}</p>
                <button className="itemCount__increase btn" onClick={increase}>+</button>
            </span>
            <p>Cantidad disponible {(stock)-(number)}</p>
            <button className="btn btn-secondary" onClick={() => onAdd(product,number)}>Añadir al carrito <span>{number}</span></button>
        </Fragment>
     );
}
 
