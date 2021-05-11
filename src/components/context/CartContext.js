import React, { createContext, useEffect, useState } from "react"

export const CartContext = createContext();

const data = {
    nombre:'Miguel',
    edad:34
}


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [cartQuantity,setCartQuantity] = useState(0)
    
    const [button, setButton] = useState(false)

    
    const handleClick = () => {
        setButton(true)

    }


    const addToCart = (item,quantity) =>{
        setCart([...cart,{'name':item, 'quantity':quantity}])
        handleClick()
    }

    useEffect(() => {
        setCartQuantity(cart.length)
    },[cart])


    const clearCart = () => {
        setCart([])
    }

    const delBurger = (id) => {
        const items = cart.filter((item) => item.id !== id);
        setCart(items);
    };
    
    return ( 
        <CartContext.Provider value={{cart,addToCart,cartQuantity,button,clearCart,delBurger}}>
            {children}
        </CartContext.Provider>
     );
}
 
