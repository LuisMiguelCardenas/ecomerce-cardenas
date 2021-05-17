import React,  {Fragment, useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

export const Cart = () => {

    const {cart,clearCart,removeItem,cartTotal,cartQuantity} = useContext(CartContext)


    return ( 
        
        cartQuantity > 0? <Fragment>
        {
            cart.map(item =>
                <div key={item.id} className="productInCart m-5">
                    <p>Producto: {item.name.title}</p>
                    <p>Precio: $ {item.name.price *item.quantity}</p>
                    <p>Cantidad {item.quantity}</p>
                    <button onClick={() => removeItem(item.id)}>Remover</button>
                </div>
                )
        }
        <button onClick={clearCart}>Limpiar Carrito</button>
        <p>Total $ {cartTotal()}</p>
    </Fragment> : <p>El carrito está vacío, <Link to = '/'>regresa</Link> a nuestra pagina para conseguir lo que necesitas </p>
        
        
    
        
     );
}
 
