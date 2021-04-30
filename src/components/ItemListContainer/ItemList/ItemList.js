import React, { useState,useEffect } from 'react'
import Item from '../Item/Item'

export const ItemList = () => {
    
    const [product, setProduct] = useState ([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch ('https://fakestoreapi.com/products')
        const dataProducts = await data.json()
        setProduct(dataProducts)
        
    }
    
    return ( 
        <div className = "container fluid">
            <Item product={product}/>
        </div>
     );
}
 
