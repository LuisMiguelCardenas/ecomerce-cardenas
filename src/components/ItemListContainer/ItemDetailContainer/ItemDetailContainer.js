import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import {getFirestore} from '../../../firebase/index'



export const ItemDetailContainer = () => {

    const {id} = useParams()    
    const [item, setItem] = useState([])


    useEffect(() =>{ 
        const db = getFirestore()
        const docRef = db.collection("items").doc(id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                setItem({...doc.data(),id: doc.id})
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [id])

    return (
        <ItemDetail
            item = {item}
        /> 

        );
    }
    

