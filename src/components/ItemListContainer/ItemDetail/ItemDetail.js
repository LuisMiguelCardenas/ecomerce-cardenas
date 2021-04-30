import React from 'react'

export const ItemDetail = ({product}) => {
    return ( 
        <div className= "itemDetail">
            <h3>{product.title}</h3>
            <img className="imtemDetail__image" src={product.image}/>
            <p className="imtemDetail__text">{product.description}</p>
            <p className="imtemDetail__price">{product.price}</p>
        </div>
       
     );
}
 

