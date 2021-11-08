import Contador from "./ItemCount";

const ItemDetail = ({item}) => {
    const {id, category, nombre, cantidad, precio, img, descripcion} = item [0];

    return (
        <div className="" key={id} id={id}>
            <div>
                <h1>
                    {nombre}
                </h1>
                <p>{category} </p>
                <img src={img}></img>
                <p>Precio: ${precio} </p>
                <p key="1">{descripcion} </p>
                <p>Stock: {cantidad} </p>
                <div>
                    <Contador qty={1} stk={10} />
                </div>
            </div>

        </div>
    )
}

export default ItemDetail