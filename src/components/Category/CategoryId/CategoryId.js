import React, { useState,useEffect } from 'react'

export const CategoryId = () => {

    const [product, setProduct] = useState ([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch ('https://fakestoreapi.com/products')
        const dataProducts = await data.json()
        setProduct(dataProducts)
    }
    
    const category = () => {
        let array2 = product.filter(item => item.category == 'electronics');
        console.log(array2)
    }
    category()
    
    return ( 
        <h3>Soy una categoria </h3>
     );
}
 
