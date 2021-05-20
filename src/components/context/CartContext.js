import React, { createContext, useEffect, useState } from "react"

export const CartContext = createContext();


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [cartQuantity,setCartQuantity] = useState(0)
    
    const [button, setButton] = useState(false)

    
    const handleClick = () => {
        setButton(true)
    }

    const addToCart = (item,quantity) =>{
        if ((cart.map(x => x.id)).includes(item.id)){
            const newCart = [...cart];

            newCart.forEach((p) => {
                if (p.id === item.id){
                    console.log(p);
                    p.quantity = p.quantity + quantity;
                }
            })
        }else setCart([...cart,{'id':item.id, 'name':item, 'quantity':quantity}])
        
        handleClick()
        cartTotal()
    }

    useEffect(() => {
        setCartQuantity(cart.length)
    },[cart])


    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const newCart=cart.filter(x => x.id !== id)
        const second = cart.map(x => x.id)
        console.log(second)
        console.log(newCart)
        setCart(newCart)
    };
    
    const cartTotal = () =>{
        if(cart.length !== 0){
            const total = cart.map(item => item.name.price).reduce((a,b) => a+b)
            return(total)
        } return (0)   
    } 

    return ( 
        <CartContext.Provider value={{cart,addToCart,cartQuantity,button,clearCart,removeItem,cartTotal}}>
            {children}
        </CartContext.Provider>
     );
}
 
