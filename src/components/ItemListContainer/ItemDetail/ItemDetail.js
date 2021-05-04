import React from 'react'
import './ItemDetail.css'


export const ItemDetail = ({product}) => {
    return ( 
        <div className= "itemDetail row">
            <img className="itemDetail__image col-md-6" src={product.image}/>
            <div className="imtemDetail__detail col-md-6">
                <h3 className="itemDetail__title">{product.title}</h3>
                <p className="itemDetail__price">$ {product.price}</p>    
                <h5><strong>Descripción del producto</strong></h5>
                <p className="itemDetail__text">{product.description}</p>
            </div>
        </div>
       
     );
}
 

