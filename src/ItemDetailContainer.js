import Productos from "./Products.json"
import ItemDetail from "./ItemDetail"
import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom";



const ItemDetailContainer = () => {
    const {id} = useParams ();
    const [item, setItem] = useState ([]);

    useEffect (() => {
        setTimeout (() => {
            setItem (
                Productos.Productos.filter (item => item.id === parseInt(id))
            )
        }, 2000);
    },[]);


    if (item.length === 0) {
        return <p className="search">Buscando...</p>;
    } else {
        return (
            <ItemDetail item={item.Productos.id}/>
            
        )
    }
}

export default ItemDetailContainer