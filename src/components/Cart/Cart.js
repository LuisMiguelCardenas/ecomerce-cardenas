import React,  {Fragment, useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { FormCart } from './FormCart/FormCart';

export const Cart = () => {

    const {cart,clearCart,removeItem,cartTotal,cartQuantity} = useContext(CartContext)

    console.log(cart)
    return ( 
        
        cartQuantity > 0? <div className="container">
        {
            cart.map(item =>
                <div key={item.id} className="productInCart m-5">
                    <p>Producto: {item.name}</p>
                    <p>Precio: $ {item.price *item.quantity}</p>
                    <p>Cantidad {item.quantity}</p>
                    <button onClick={() => removeItem(item.id)}>Remover</button>
                </div>
                )
        }
        <button onClick={clearCart}>Limpiar Carrito</button>
        <p>Total $ {cartTotal()}</p>
        <FormCart
            cart = {cart}
            total = {cartTotal()}
        />

    </div> : <p>El carrito está vacío, <Link to = '/'>regresa</Link> a nuestra pagina para conseguir lo que necesitas </p>
        
        
    
        
     );
}
 
