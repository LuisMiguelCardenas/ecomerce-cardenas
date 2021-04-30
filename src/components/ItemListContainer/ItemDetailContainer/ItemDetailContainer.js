import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    const {id} = useParams()
    
    const [product, setProduct] = useState([])
    
    
    useEffect(() => {
        const getProduct = async () =>{
            const getData = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await getData.json()
            setProduct(data)
        }
        getProduct()
    }, [id])
    

    return (
        <ItemDetail
            product = {product}
        /> 

        );
    }
    

