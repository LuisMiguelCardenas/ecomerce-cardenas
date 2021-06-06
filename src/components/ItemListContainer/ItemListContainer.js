import React from 'react'
import { ItemList } from './ItemList/ItemList'
import './ItemListContainer.css'


export const ItemListContainer = () => {

    return (
        <div className="itemlistContainer container justify-content-center">
            <h2 className="itemlistContainer__title text-center mb-5" >Find what you are looking for</h2>
            <ItemList/>
        </div>
        
        
     );
}
 
