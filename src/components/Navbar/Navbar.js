import React from 'react';
import { CartWidget } from './cart/CartWidget';
import './Navbar.css'


export const Navbar = () => {
    
    const menuItems = [
        {
            title:'Home',
            url:'#',
            cName: 'nav-links'
        },
        {
            title:'Services',
            url:'#',
            cName: 'nav-links'
        },
        {
            title:'Products',
            url:'#',
            cName: 'nav-links'
        },
        {
            title:'Contact Us',
            url:'#',
            cName: 'nav-links'
        },
    
    
    ]
    
    
    return (
        <nav className = "navbar">
            <h1 
                className="navbar-logo"><i class="fas fa-shopping-bag"></i>E-commerce</h1>
            <ul className = "navbarMenu">
                {menuItems.map((item)=>{
                            return (
                                <li><a className={item.cName} href={item.url}>
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
            </ul>
            <CartWidget/>
        </nav>
        
    );
}
 
