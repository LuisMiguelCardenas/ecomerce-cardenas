import React,  {Fragment, useContext} from 'react'
import { CartContext } from '../context/CartContext'

export const Cart = () => {

    const {cart,clearCart,delBurger} = useContext(CartContext)

    return ( 
        <Fragment>
            {
                cart.map(item =>
                    <div className="productInCart m-5">
                        <p>Producto: {item.name.title}</p>
                        <p>Cantidad {item.quantity}</p>
                        <button onClick={(id) => delBurger}>Remover</button>
                    </div>
                    )
            }
            <button onClick={clearCart}>Limpiar Carrito</button>
        </Fragment>
     );
}
 
