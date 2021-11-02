function Item({nombre, cantidad, precio }) {
    
    return (
        <div className="divItem">  
            <h1 className="h1Item">
                {nombre}
            </h1>
            <p className="precioItem">
                ${precio}
            </p>
            <p className="verDetalles">
                Ver detalles del Producto
            </p>
            <p className="stockItem">
                Stock: {cantidad}
            </p>
        </div>

    )
}

export default Item