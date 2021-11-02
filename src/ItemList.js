import {useState, useEffect } from "react"
import Item from "./Item"

function ItemList ({ data }) {
    const {Productos} = data 

    return(
        <>
        {
            Productos.map((Producto) => (
                <Item
                nombre={Producto.nombre}
                cantidad={Producto.cantidad}
                precio={Producto.precio}
                >
                </Item>
            ))
        }
        </>
    )
}

export default ItemList