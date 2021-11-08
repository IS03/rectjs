import Productos from "./Products.json"
import ItemDetail from "./ItemDetail"
import React, {useEffect, useState} from "react"
import {useParams} from 'react-dom';


const ItemDetailContainer = () => {
    const {id} = useParams ();

    const [item, setItem] = useState ([]);

    useEffect (() => {
        setTimeout (() => {
            setItem (
                Productos.filter (item => item.id === parseInt(id))
            )
        }, 2000);
    },[]);


    if (item.length === 0) {
        return <p>Buscando...</p>;
    } else {
        return (
            <ItemDetail item={item}/>
        )
    }
}

export default ItemDetailContainer