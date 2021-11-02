import { useState } from "react"

function Contador () {
    const [contador,setContador] = useState(0)

    const sumarContador = () => {
        setContador(contador + 1)
    }

    const restarContador = () => {
        setContador(contador - 1)
    }

    const ceroContador = () => {
        setContador(contador == 0)
    }

    if (contador>10) {
        alert("No hay más stock! Solo 10")
    }

    return (
        <>
            <button onClick={restarContador} className="botonContador">Restar</button> 
            <button onClick={sumarContador} className="botonContador">Aumentar</button>
            <button onClick={ceroContador} className="botonContador">Poner en 0</button>   
            <p className="contador">El contador va : {contador}</p>
        </>
    ) 
}

export default Contador