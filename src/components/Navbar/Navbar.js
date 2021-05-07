import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './cart/CartWidget';
import './Navbar.css'
import { SearchBar } from './SearchBar/SearchBar';

export const Navbar = () => {
    
    const [product, setProduct] = useState ([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch ('https://fakestoreapi.com/products')
        const dataProducts = await data.json()
        setProduct(dataProducts)    
    }

    let result = (product.map(item => item.category)).reduce((acc, e) =>{
        if(!acc.find(d => d == e)) {
          acc.push(e)
        }
      return(acc)
      }, [])


    return (
        <nav className = "navbar container-fluid row p-0 m-0 justify-content-center">
            <div className='navbarNav col-12 row m-0'>
                <Link to = '/' className="col-md-3 navbar__logo">
                    <h1 className="navbar__logo--name m-0 pt-2">
                        <i className="fas fa-shopping-bag"></i>E-commerce</h1>
                </Link>
                <SearchBar/>
                <CartWidget/>
            </div>
            <ul className = "navbarMenu col-8 row justify-content-around px-5">
                    <li className="nav-links navCategories col-3">Categories
                        <ul className="nav__category category-hide">{
                            result.map((item, index) => (
                                <li key ={index} className="nav__category--link">
                                <Link to = {`/categoryid/${item}`} >{item}</Link>
                                </li>
                                ))                            
                        }
                        </ul>
                    </li>       
               <li className="nav-links col-md-3">New</li>
               <li className="nav-links col-md-3">Best Seller</li>
               <li className="nav-links col-md-3">Contac Us</li>
            </ul>
        </nav>
    );
}
 
