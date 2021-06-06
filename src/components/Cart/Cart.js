import React,  {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { FormCart } from './FormCart/FormCart';
import './Cart.css'

export const Cart = () => {

    const {cart,clearCart,removeItem,cartTotal,cartQuantity} = useContext(CartContext)

    return ( 
        
        cartQuantity > 0? <div className="container">
        {
            cart.map(item =>
                <div key={item.id} className="productInCart row my-3">
                    <img className="productInCart__img col-2 m-0 pt-3" src={item.image} alt={item.name}/>
                    <p className="col-5 text-center m-0 pt-3">{item.name}</p>
                    <p className="col-2 text-center m-0 pt-3">{item.quantity}</p>
                    <p className="col-2 text-center m-0 pt-3">$ {item.price *item.quantity}</p>
                    <button className="productInCart__btn--remove col-1" onClick={() => removeItem(item.id)}><i className="fas fa-trash-alt"></i></button>
                </div>
                )
        }
        <div className="total d-flex justify-content-end">        
            <p><strong>Total:</strong> ${cartTotal()}</p>
        </div>
        <div className="row d-flex justify-content-start">
            <Link className="mb-2" to='/'><button className="btn btn-secondary col-3">CONTINUE SHOPPING</button></Link>
            <button className="btn__clear btn-light col-3 m-2" onClick={clearCart}>Clear Cart</button>
        </div>
        <FormCart
            cart = {cart}
            total = {cartTotal()}
        />

    </div> : <p className="p-5 text-center">Ops!! The cart is empty, <Link to = '/'> return</Link> to our page to get what you need</p>
        
        
    
        
     );
}
 
