import React, { Fragment } from 'react'


export const Saludo = (props) => {
    console.log(props)
    return (
        <Fragment>
            <h2>Hola {props.persona}</h2>
        </Fragment>
      );
}
 
export default Saludo;