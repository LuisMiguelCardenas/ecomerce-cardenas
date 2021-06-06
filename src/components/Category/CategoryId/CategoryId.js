import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'
import {getFirestore} from '../../../firebase/index'


export const CategoryId = () => {


    const {category} = useParams()

    const [categories, setCategories] = useState([])
    

    useEffect(
        () => {
            const db = getFirestore()
            const itemCollection = db.collection('items')
                
            itemCollection.get().then(
                (querySnapshot) => {
                    if(querySnapshot.size === 0){
                        console.log('no hay productos')
                    }
                    setCategories(querySnapshot.docs.map(doc => ({...doc.data(), id : doc.id })))
                
                })
                .catch((error)  => console.error(error))

    }, [])


    const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }
   

    return ( 
        
        <div className="categoryId container mt-5">
        <h3 className="categoryId__title text-center">{capitalize(category)}</h3>
            <div className="categoryId__container row mt-4 justify-content-center">
            {
                categories.filter(categories => categories.categoryId === category).map(
                    item => {
                        return(
                        <div key={item.id} className="item__container col-md-3">
                            <h4 className="item__container--title">{item.title}</h4>
                            <Link to = {`/item/${item.id}`}>
                            <img className="item__container--img" src = {item.image} alt={item.title} />
                            </Link>
                            <p className="item__container--text">$ {item.price}</p>
                        </div>
                        )
                    }
                    )
            }
            </div>
        </div>
     );
}
 
