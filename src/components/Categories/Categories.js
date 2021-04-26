import React, { Fragment } from 'react'
import './Categories.css'
import menclothing from '../../images/Categories_img/menclothing.jpeg'
import womenclothing from '../../images/Categories_img/womenclothing.jpeg'
import jewerly from '../../images/Categories_img/jewerly.jpeg'
import electronic from '../../images/Categories_img/electronic.jpeg'
import { CartCategories } from './CartCategories/CartCategories'

export const Categories = () => {
    return (
        <Fragment>
        <h2 className="categories__title text-center">Nuestros Productos</h2>
        <div className="categories">
            <CartCategories
                text='Ropa de hombre'
                src={menclothing}
            />
            <CartCategories
                text="Joyería"
                src={jewerly}
            />
            <CartCategories
                text="Electronica"
                src={electronic}
            />
            <CartCategories
                text="Ropa de mujer"
                src={womenclothing}
            />
        </div>
        </Fragment>
        
     );
}
 
