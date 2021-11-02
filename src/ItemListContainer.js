const ItemListContainer = (props) => {
    const usuario = props.usuario
    const id = props.id

    console.log("Entro al sitio el usuario numero:" + usuario + " , id: " + id)

    return (
        <div>
            <p className="props-div prop1">Sos el usuario número:  {usuario}° </p>
            <p className="props-div prop2">Con ID N°: {id} </p>
            
        </div>
    )
}



export default ItemListContainer