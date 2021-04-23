import React, { useState } from 'react'
import './ItemCount.css'

export const ItemCount = (props) => {
    
    const [number, setNumber] = useState(1);
    
    const increase = () =>{
        if (number < (props.stock)){
           setNumber( number+1)
        }
      
    }
    const decrease = () =>{
        if (number > 1){
            setNumber(number -1)
        }
        
    }

    return ( 
        
            <span className="itemCount">
                <button className="itemCount__decrease btn" onClick={decrease}>-</button>
                <p className="itemCount__text">{number}</p>
                <button className="itemCount__increase btn" onClick={increase}>+</button>
            </span>
            
        
     );
}
 
