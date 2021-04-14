import React from 'react';
import Logo from './Logo'

const Navbar = () => {
    return (
        <div className = "row justify-content-between m-0 p-0">
            <Logo/>  
            <ul className = "row m-0 p-0 bg-primary col-8 align-content-center">
                <a className = "col-3 text-center text-decoration-none" href="#"><li className = "list-group-item bg-primary text-white">Home</li></a>
                <a className = "col-3 text-center text-decoration-none" href="#"><li className = "list-group-item bg-primary text-white">Productos</li></a>
                <a className = "col-3 text-center text-decoration-none" href="#"><li className = "list-group-item bg-primary text-white">¿Por qué Panditas?</li></a>
                <a className = "col-3 text-center text-decoration-none" href="#"><li className = "list-group-item bg-primary text-white">¿Contacto?</li></a>
            </ul>
        </div>
        
    );
}
 
export default Navbar;