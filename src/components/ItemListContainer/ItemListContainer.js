import React from 'react'
import { ItemList } from './ItemList/ItemList'
import './ItemListContainer.css'


export const ItemListContainer = () => {

    return (
        <div className="itemlistContainer container justify-content-center">
            <h2 className="itemlistContainer__title text-center" >Encuentra lo que tanto estas buscando</h2>
            <ItemList/>
        </div>
        
        
     );
}
 
