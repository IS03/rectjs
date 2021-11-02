import { useEffect } from "react"
import Productos from "./Products.json"
import ItemList from "./ItemList"
import { useState } from "react/cjs/react.development"

const ItemListContainer = (props) => {

    const [data, setData] = useState ({})
    const [loading, setLoading] = useState [true]

    useEffect(() => {
        setTimeout(() => {
            setData (Productos)
            setLoading(false)
        },2000)
    })

    return (
        <div>
            {
                loading?
                <div>
                    <p>Cargando</p>
                </div>:
                <ItemList data={data}></ItemList>
            }
        </div>
    )
}



export default ItemListContainer
