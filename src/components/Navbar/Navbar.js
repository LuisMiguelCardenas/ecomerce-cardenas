import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './cart/CartWidget';
import './Navbar.css'
import { SearchBar } from './SearchBar/SearchBar';
import {getFirestore} from '../../firebase/index'

export const Navbar = () => {
    
    const [product, setProduct] = useState ([])
    const [menu, setMenu] = useState ('')

    useEffect(
        () => {
            const db = getFirestore()
            const itemCollection = db.collection('items')
                
            itemCollection.get().then(
                (querySnapshot) => {
                    if(querySnapshot.size === 0){
                        console.log('no hay productos')
                    }
                    setProduct(querySnapshot.docs.map(doc => ({...doc.data(), id : doc.id })))
                
                })
                .catch((error)  => console.error(error))

    }, [])

    

    let result = (product.map(item => item.categoryId)).reduce((acc, e) =>{
        if(!acc.find(d => d === e)) {
          acc.push(e)
        }
      return(acc)
      }, [])

      const capitalize = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    }
   
    return (
        <nav className = "navbar container-fluid row p-0 m-0 justify-content-center">
            <div className='navbarNav col-12 row m-0'>
                <Link to = '/' className="col-md-3 navbar__logo">
                    <h1 className="navbar__logo--name m-0 pt-2">
                        <i className="fas fa-shopping-bag"></i>E-commerce</h1>
                </Link>
                <SearchBar
                    product={product}
                />
                <CartWidget/>
            </div>
            <button className="btn-hamburger col-1" onClick={() => setMenu(!menu)}><i className="fas fa-bars"></i></button>
            <div className="navbarMenu" id={menu? "hidden": ""}>
                <ul className="listMenu col-12 row justify-content-around m-0 p-0">{
                    result.map((item, index) => (
                        <li key ={index} className="nav-links navCategories col-12 col-md-3 text-center">
                        <Link className="nav-link" to = {`/categoryid/${item}`}>{capitalize(item)}</Link>
                        </li>
                        ))                            
                    }
                </ul>
            </div>
            
        </nav>
    );
}
 
