import React, { useState,useEffect, Fragment } from 'react'
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
        
        <div className="categoryId container mt-5">
        <h3 className="categoryId__title text-center">{category}</h3>
            <div className="categoryId__container row mt-4 justify-content-center">
            {
                categories.filter(categories => categories.category === category).map(
                    item => {
                        return(
                        <div key={item.id} className="item__container col-md-3">
                            <h4 className="item__container--title">{item.title}</h4>
                            <Link to = {`/item/${item.id}`}>
                            <img className="item__container--img" src = {item.image} />
                            </Link>

                        
                            <p className="item__container--text">{item.price}</p>

                        </div>
                        )
                    }

                    )
            }
            </div>
        </div>
     );
}
 
