import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {getFirestore} from '../../../firebase/index'
import Item from '../Item/Item';


export const ItemDetailContainer = () => {

    const {id} = useParams()    
    const [item, setItem] = useState([])


    useEffect(() =>{ 
        const db = getFirestore()
        const docRef = db.collection("items").doc(id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                setItem({...doc.data(),id: doc.id})
                console.log(doc.id)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [id])

    console.log(item)
    

    return (
        <ItemDetail
            item = {item}
        /> 

        );
    }
    

