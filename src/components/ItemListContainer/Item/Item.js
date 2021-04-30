import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom'
import './Item.css'

const Item = (props) => {
    
    
    
    return ( 
          
          <div className = "item">
          {props.product.map((product)=>{
                      return (
                          <div key={product.id} className="item__container">
                              <h4 className="item__container--title">{product.title}</h4>
                              <Link to = {`/item/${product.id}`}>
                                <img className="item__container--img" src = {product.image} />
                              </Link>
                              <p className="item__container--text">{product.price}</p>
                              <ItemCount 
                                stock = {product.id*2}
                              />
                              <p>{product.category}</p>
                          </div>
                      )
                  })}
          </div>     
     );
}
 
export default Item;