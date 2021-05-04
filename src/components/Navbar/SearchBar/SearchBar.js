import React, { useState } from 'react'
import './SearchBar.css'

export const SearchBar = () => {
    
    const [searchItem, setSearchItem ] = useState('')

    const handleKeyDown = (e) =>{
        switch (e.key.toLowerCase()){
            case 'a': e.preventDefault();
            case 'e': e.preventDefault();
            case 'i': e.preventDefault();
            case 'o': e.preventDefault();
            case 'u': e.preventDefault();
            default:
        }
        console.log(e)
    }
    
    return ( 
        <div className="col-md-7 row p-2">
            <input className="searchInput col-11" type="search" placeholder="¿En qué estas interesado hoy?" onKeyDown={(e) => handleKeyDown(e)}/>
            <button className="btn col-1" type="button"><i className="fas fa-search"></i></button>
        </div>
     );
}
 
