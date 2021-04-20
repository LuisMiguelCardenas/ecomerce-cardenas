import React, { Fragment } from 'react'

export const ItemListContainer = () => {

    const products = [
        {
        type:'manga',
        title:'Manga Naruto',
        price:'$30.000',
        stock:4
        },
        {
        type:'accesorios',
        title:'Anillo akatsuki',
        price:'$15.000',
        stock:6
        },
        {
        type:'accesorios',
        title:'Banda de regulación Naruto',
        price:'$40.000',
        stock:4
        },
        {
        type:'ropa',
        title:'Buso zoro Roronoa',
        price:'$80.000',
        stock:4
        },
        {
        type:'Ropa',
        title:'Camiseta One Pice',
        price:'$50.000',
        stock:4
        },
        {
        type:'manga',
        title:'Manga Dagon ball',
        price:'$30.000',
        stock:4
        },
        {
        type:'manga',
        title:'One Pice',
        price:'$20.000',
        stock:4
        },
        {
        type:'figura',
        title:'Figura Kakashi Naruto',
        price:'$60.000',
        stock:4
        },
        {
        type:'figura',
        title:'Figura Dragon ball Goku',
        price:'$40.000',
        stock:4
        },
        {
        type:'figura',
        title:'Figura One Pice',
        price:'$35.000',
        stock:4
        },
    ]
    return (
        <Fragment>
        <h2 className="itemListContainer__title text-center">Productos</h2>
        <div className= "itemListContainer">
            {products.map((item)=>{
                return(
                    <div className="pruductCart container">
                        <h3>{item.title}</h3>
                        <img src="https://img.17qq.com/images/kmmnmhdphlv.jpeg"></img>
                        <p>{item.price}</p>
                    </div>
                )
            }
            
            )}
        </div>
        </Fragment>
        
     );
}
 
