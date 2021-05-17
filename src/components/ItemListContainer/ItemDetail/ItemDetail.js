import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../Button/Button'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext'


export const ItemDetail = ({product}) => {

   

    const {cart, addToCart,cartQuantity,button} = useContext(CartContext)
    
    console.log(cart)
   

    return ( 
        <div className= "itemDetail row justify-content-center">
            <img className="itemDetail__image col-md-4" src={product.image}/>
            <div className="imtemDetail__detail col-md-6">
                <h3 className="itemDetail__title">{product.title}</h3>
                <p className="itemDetail__price">$ {product.price}</p>    
                <h5><strong>Descripción del producto</strong></h5>
                <p className="itemDetail__text">{product.description}</p>
                <ItemCount 
                    stock = {product.id*2}
                    //onAdd = {handleClick}
                    product={product}
                    onAdd={addToCart}
                />
                {
                  button? <Link to = '/cart'><Button/></Link>: null
                }
            </div>
        </div>
       
     );
}
 