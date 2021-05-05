import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'

export const CategoryId = () => {

    useParams()
    const {category} = useParams()

    const [categories, setCategories] = useState([])
    
    
    useEffect(() => {
        const getProduct = async () =>{
            const getData = await fetch('https://fakestoreapi.com/products/')
            const data = await getData.json()
            setCategories(data)
        }
        getProduct()
    }, [category])

    return ( 
        <h3>{category} {
            categories.filter(categories => categories.category === category).map(
                item => {
                    return(
                    <div key={item.id} className="item__container">
                        <h4 className="item__container--title">{item.title}</h4>
                        <Link to = {`/item/${item.id}`}>
                        <img className="item__container--img" src = {item.image} />
                        </Link>
                        
                       
                        <p className="item__container--text">{item.price}</p>
                        
                    </div>
                    )
                }
                   
                )
        }</h3>
     );
}
 
