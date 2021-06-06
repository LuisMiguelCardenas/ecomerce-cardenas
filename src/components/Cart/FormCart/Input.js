import React from 'react'

export const Input = ({label,type,placeholder,name,onAdd}) => {
    return ( 
        <div id="form__phone" className="Input my-3">
          <label>{label}</label>
          <input 
            type={type} 
            className="form-control" 
            placeholder={placeholder}
            name={name}
            onChange={onAdd}
            required
            />
        </div>
     );
}
 
