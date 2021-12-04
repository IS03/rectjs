import { useEffect } from "react"
import Productos from "./Products.json"
import ItemList from "./ItemList"
import { useState } from "react"
import {useParams} from "react-router-dom"

const ItemListContainer = (param) => {

    const [items, setItems] = useState ([])
    const { categoryId } = useParams()
    

    useEffect(() => {
        setTimeout(() => {
            if (categoryId) {
                const productosFilter = Productos.Productos.filter (Productos => Productos.category === categoryId)
                console.log (productosFilter)
                setItems (productosFilter)
            } else {
                setItems(Productos);
            }
        },2000);
    }, [categoryId]);  

    

    if (items.length === 0 ) {
        return <p className="loading">Cargando Productos...</p>;
    } else {
        return (
            <>
                <ItemList param={items.Productos}/>
            </>
        )
    }
}


export default ItemListContainer
