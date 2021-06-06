import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../Button/Button'
import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { CartContext } from '../../context/CartContext'


export const ItemDetail = ({item}) => {

   

    const {addToCart, button} = useContext(CartContext)
    

    return ( 
        <div className= "itemDetail container row justify-content-center">
            <img className="itemDetail__image col-md-4" src={item.image} alt={item.title}/>
            <div className="imtemDetail__detail col-md-6">
                <h3 className="itemDetail__title">{item.title}</h3>
                <p className="itemDetail__price">$ {item.price}</p>    
                <h5><strong>Description</strong></h5>
                <p className="itemDetail__text">{item.description}</p>
                <ItemCount 
                    stock = {item.stock}
                    //onAdd = {handleClick}
                    product={item}
                    onAdd={addToCart}
                />
                {
                  button? <Link to = '/cart'><Button/></Link>: null
                }
            </div>
        </div>
       
     );
}
 