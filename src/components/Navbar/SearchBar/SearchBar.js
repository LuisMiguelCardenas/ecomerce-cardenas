import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './SearchBar.css'

export const SearchBar = ({product}) => {
    
    const [searchItem, setSearchItem ] = useState('')
    
    const onClick = () => {
        setSearchItem('')
    }

    const itemsFilter = product.filter(item => item.title.toLocaleLowerCase().includes(searchItem))
    

    return ( 
        <div className="searchBar col-md-7 row p-2">
            <input 
                className="searchInput col-11" 
                type="search" 
                placeholder="Search..." 
                onChange={(e) => {
                    setSearchItem(e.target.value);
                }}/>
            <button className="btn col-1" type="button"><i className="fas fa-search"></i></button>
           
           { searchItem===''? <div></div>:
               itemsFilter.map((item,key) =>
                <Link className="searchItem" onClick={onClick} to={`/item/${item.id}`} key={item.id}> 
                    <div className='container row my-2 align-items-center' key={key}>
                         <img className='image__item col-2' src = {item.image} alt={item.title} />
                         <p className='text__item col-10'>{item.title}</p>
                    </div>
               </Link>
               )
           }

        </div>
     );
}
 
