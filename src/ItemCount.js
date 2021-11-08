import { useState } from "react"
import Productos from "./Products.json"

const Stock = Productos => Productos.cantidad

function Contador () {
    const [contador,setContador] = useState(0)
    
    const sumarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }

    const ceroContador = () => {
        setContador(contador === 0)
    }

    if (contador > Stock) {
        alert("No hay más stock!")
    }

    return (
        <>
            <button onClick={sumarContador} className="botonContador"><img src="/mas1.png"></img></button>
            <button onClick={restarContador} className="botonContador"><img src="/menos1.png"></img></button> 
            <button onClick={ceroContador} className="botonContador"><img src="/basura.png"></img></button>   
            <p className="contador">{contador}</p>
        </>
    ) 
}

export default Contador