import React, { useState } from 'react'
import {db} from '../../../firebase/index'
import {Input} from './Input'

export const FormCart = ({cart,total}) => {

    const agregar = (cart) => {
        db.collection('pedidos').add({
            cart
        })
    
    }
    
    // const date = db.Timestamp.fromDate(new Date())

    // console.log(date)
    
    const [user,setUser] = useState({
        name:'',
        number:'',
        email: '',
    })

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value 
        })
    }

    const sendData = (e) => {
        e.preventDefault()
        const pedido = [{
            date: new Date(),
            buyer: user,
            items: cart,
            total: total 
        }]
        console.log(pedido)
        agregar(pedido)
    }

    return ( 
    <form className="form my-5" onSubmit={sendData}>
        <Input
            label='Name'
            type='text'
            placeholder='Enter your name'
            name ='name'
            onAdd={handleInputChange}
        />
        <Input
            label='Phone'
            type='number'
            placeholder='Enter your phone'
            name ='number'
            onAdd={handleInputChange}
        />
        <Input
            label='Email'
            type='email'
            placeholder='Enter your email'
            name ='email'
            onAdd={handleInputChange}
        />
        <div className="justify-content-center row">
            <button className="btn btn-secondary col-6" type ="submit">PROCEED TO CHECKOUT</button>
        </div>
    </form> );
}
 
