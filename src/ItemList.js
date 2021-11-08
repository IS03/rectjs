import Productos from "./Products.json"
import Item from "./Item"


function ItemList ({ param }) {
    return(
        <>
        {   param && param.length > 0 ?
            param.map (item => {
                return <div key={item.id}>
                            <Item
                            img={Productos.img}
                            nombre={Productos.nombre}
                            cantidad={Productos.cantidad}
                            precio={Productos.precio}
                            >
                            </Item>
                        </div>
            })
            : "Eror"}
        </>
    )
}

export default ItemList