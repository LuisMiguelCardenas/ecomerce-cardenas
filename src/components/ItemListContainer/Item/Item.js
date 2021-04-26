import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount';
import './Item.css'

const Item = (props) => {
    
    
    
    return ( 
          
          <div className = "item">
          {props.product.map((item)=>{
                      return (
                          <div key={item.id} className="item__container">
                              <h4 className="item__container--title">{item.title}</h4>
                              <img className="item__container--img" src = {item.image} />
                              <p className="item__container--text">{item.price}</p>
                              <ItemCount 
                                stock = {item.id*2}
                              />
                              <p>{item.category}</p>
                          </div>
                      )
                  })}
          </div>     
     );
}
 
export default Item;