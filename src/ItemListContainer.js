const ItemListContainer = (props) => {
    const usuario = props.usuario
    const id = props.id

    console.log("Entro al sitio el usuario numero:" + usuario + " , id: " + id)

    return (
        <div>
            <p className="props-div">Sos el usuario número:  {usuario}, con id de: {id} </p>
        </div>
    )
    
}



export default ItemListContainer