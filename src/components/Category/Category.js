import React, { Fragment } from 'react'
import './Category.css'
import menclothing from '../../images/Categories_img/menclothing.jpeg'
import womenclothing from '../../images/Categories_img/womenclothing.jpeg'
import jewerly from '../../images/Categories_img/jewerly.jpeg'
import electronic from '../../images/Categories_img/electronic.jpeg'
import { CartCategory } from './CartCategory/CartCategory'
import {CategoryId} from './CategoryId/CategoryId'

export const Category = () => {




    return (
        <Fragment>
        <h2 className="category__title text-center">Nuestros Productos</h2>
        <div className="category justify-content-center">
            <CartCategory
                text='Ropa de hombre'
                src={menclothing}
            />
            <CartCategory
                text="Joyería"
                src={jewerly}
            />
            <CartCategory
                text="Electronica"
                src={electronic}
            />
            <CartCategory
                text="Ropa de mujer"
                src={womenclothing}
            />
        </div>
        </Fragment>
        
     );
}
 
