import React, { useState } from 'react'


export const FormCart = () => {

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
    }

    console.log(user)
    return ( 
    <form onSubmit={sendData}>
        <div id="form__name" className="form-group">
          <label >Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="formGroupExampleInput" 
            placeholder="Example input"
            name="name"
            onChange={handleInputChange}
            />
        </div>
        <div id="form__phone" className="form-group">
          <label>Phone</label>
          <input 
            type="number" 
            className="form-control" 
            id="formGroupExampleInput" 
            placeholder="Example input"
            name="number"
            onChange={handleInputChange}
            />
        </div>
        <div id="form__email" className="form-group">
          <label >Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="formGroupExampleInput" khkj
            placeholder="Example input"
            name="email"
            onChange={handleInputChange}
            />
        </div>
        <button className="btn btn-primary" type ="submit">Enviar</button>
        <p>{JSON.stringify(user) }</p>
    </form> );
}
 
