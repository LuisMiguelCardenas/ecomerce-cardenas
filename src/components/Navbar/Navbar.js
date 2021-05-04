import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './cart/CartWidget';
import './Navbar.css'
import { SearchBar } from './SearchBar/SearchBar';

export const Navbar = () => {
    
    
    return (
        <Fragment>
        <nav className = "navbar container-fluid row p-0 m-0 justify-content-center">
            <div className='navbarNav col-12 row m-0'>
                <Link to = '/' className="col-md-3 navbar__logo"><h1 className="navbar__logo--name m-0 pt-2"><i className="fas fa-shopping-bag"></i>E-commerce</h1></Link>
                <SearchBar/>
                <CartWidget/>
            </div>
            <ul className = "navbarMenu col-8 row justify-content-around px-5">
                <Link className="nav-links col-md-3" to='/category' >
                    <li className="nav-links navCategories">Categories
                        <ul className="nav__category category-hide">
                            <Link className="nav-links__category col-md-3" to='/category:categoryId' >
                                <li className="nav__category--link">men's clothing</li>
                            </Link>
                            <Link className="nav-links__category col-md-3" to='/category:categoryId' >
                                <li className="nav__category--link">jewelery</li>
                            </Link>
                            <Link className="nav-links__category col-md-3" to='/category:categoryId' >
                                <li className="nav__category--link">electronics</li>
                            </Link>
                            <Link className="nav-links__category col-md-3" to='/category:categoryId' >
                                <li className="nav__category--link">women's clothing</li>
                            </Link>
                        </ul>
                    </li>       
                </Link>
               <li className="nav-links col-md-3">New</li>
               <li className="nav-links col-md-3">Best Seller</li>
               <li className="nav-links col-md-3">Contac Us</li>
            </ul>
        </nav>
       
        </Fragment>
    );
}
 
