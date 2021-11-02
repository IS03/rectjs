function Item({nombre, cantidad, precio }) {
    
    return (
        <div>  
            <h1>
                {nombre}
            </h1>
            <p>
                ${precio}
            </p>
            <p>
                Stock: {cantidad}
            </p>

        </div>

    )
}

export default Item