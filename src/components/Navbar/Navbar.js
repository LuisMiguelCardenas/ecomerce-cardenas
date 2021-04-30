import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from './cart/CartWidget';
import './Navbar.css'


export const Navbar = () => {
    
    const menuItems = [
        {
            title:'Home',
            url:'/',
            cName: 'nav-links',
            id:'navHome'
        },
        {
            title:'Category',
            url:'/category',
            cName: 'nav-links',
            id:'navHomeServices'
        },
        {
            title:'Products',
            url:'#',
            cName: 'nav-links',
            id: 'navProducts'
        },
        {
            title:'Contact Us',
            url:'#',
            cName: 'nav-links',
            id: 'navContact'
        },
    
    
    ]
    
    
    return (
        <nav className = "navbar">
            <Link to = '/'><h1 className="navbar-logo"><i className="fas fa-shopping-bag"></i>E-commerce</h1></Link>
            <ul className = "navbarMenu">
                {menuItems.map((item)=>{
                            return (
                                <Link to ={item.url}>
                                <li key={item.id}><a className={item.cName}>
                                    {item.title}
                                    </a>
                                </li>
                                </Link>
                            )
                        })}
            </ul>
            <CartWidget/>
        </nav>
        
    );
}
 
