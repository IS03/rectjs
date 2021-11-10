import Contador from "./ItemCount"
import {Link} from "react-router-dom"

const Item = ({item}) => {
    return (
        <div className="divItem" id={item.id} key={item.id}>
            <h1 className="h1Item">
            {item.nombre}
            </h1>

            <img src={item.img} className="imgProductos"></img>

            <p className="precioItem">
                ${item.precio}
            </p>
            
            <p className="stockItem">
                Stock: {item.cantidad}
            </p>

            <Contador/>

            <a>
                <Link to={`/itemDetail/${item.id}`}>Ver detalles</Link>
            </a>
        </div>
    )
}


export default Item