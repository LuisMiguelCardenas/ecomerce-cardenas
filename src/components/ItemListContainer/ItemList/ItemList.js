import React, { useState,useEffect } from 'react'
import Item from '../Item/Item'
import {getFirestore} from '../../../firebase/index'


export const ItemList = () => {
    
    const [product, setProduct] = useState ([])
    const [items, setItems] = useState ([])


    // useEffect(() => {
    //     getData()
    // }, [])

    // const getData = async () => {
    //     const data = await fetch ('https://fakestoreapi.com/products')
    //     const dataProducts = await data.json()
    //     setProduct(dataProducts)
        
    // }

    useEffect (
        () => {
            const db = getFirestore()
            const itemCollection = db.collection('items')
            
            itemCollection.get().then(
                (querySnapshot) => {
                    if(querySnapshot.size === 0){
                        console.log('no hay productos')
                    }
                    setItems(querySnapshot.docs.map((doc) => doc.data()))
                    
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
 
