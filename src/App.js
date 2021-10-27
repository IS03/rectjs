import { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer"
import Main from "./Main"

const App = () => {
    const [saludo,setSaludo] = useState("Hola")
    const [contador,setContador] = useState(0)

    const sumarContador = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <Header
                nombre="Ignacio"
                apellido="Senestrari"
                edad={17}
                links={["Link1", "Link2"]}
                callback={()=>{console.log("Soy un callback de App")}}
            />
            <ItemListContainer />
            
            <Footer />

            <button onClick={sumarContador} className="botonContador">aumentar</button>  
            <p className="contador">El contador va : {contador}</p>
        </>
    )
}
 
export default App