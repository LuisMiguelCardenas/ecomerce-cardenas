import React, { useState,useEffect } from 'react'
import Item from '../Item/Item'
import {getFirestore} from '../../../firebase/index'


export const ItemList = () => {
    
   
    const [items, setItems] = useState ([])



    useEffect (
        () => {
            const db = getFirestore()
            const itemCollection = db.collection('items')
            
            itemCollection.get().then(
                (querySnapshot) => {
                    if(querySnapshot.size === 0){
                        console.log('no hay productos')
                    }
                    setItems(querySnapshot.docs.map(doc => ({...doc.data(), id : doc.id })))

                })
                .catch((error)  => console.error(error))
        }, []
    )
    
    return ( 
        <div className = "container fluid">
            <Item product={items}/>
        </div>
     );
}
 
