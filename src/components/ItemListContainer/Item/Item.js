import React from 'react'
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
                                <img className="item__container--img" src = {product.image} alt={product.title} />
                              </Link>
                              <p className="item__container--text">{product.price}</p>
                              <p>{product.categoryId}</p>
                          </div>
                      )
                  })}
          </div>     
     );
}
 
export default Item;