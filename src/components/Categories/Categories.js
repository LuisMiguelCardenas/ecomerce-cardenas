import React, { Fragment } from 'react'
import './Categories.css'
import clothing from '../../images/Categories_img/ropa.jpeg'
import figures from '../../images/Categories_img/figuras.jpeg'
import accessories from '../../images/Categories_img/accesorios.jpeg'
import mangas from '../../images/Categories_img/manga.jpeg'
import { CartCategories } from './CartCategories/CartCategories'

export const Categories = (props) => {
    
    return (
        <Fragment>
        <h2 className="categories__title text-center">Nuestros Productos</h2>
        <div className="categories">
            <CartCategories
                text="Manga"
                src={mangas}
            />
            <CartCategories
                text="Accesorios"
                src={accessories}
            />
            <CartCategories
                text="Ropa"
                src={clothing}
            />
            <CartCategories
                text="Figuras"
                src={figures}
            />
        </div>
        </Fragment>
        
     );
}
 
