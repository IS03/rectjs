import Nav from "./Nav"
import CartWidget from "./CartWidget"

const Header = ({ nombre, apellido, edad, links, callback }) => {

    callback()
    console.log(edad)
    console.log(links)

    
    return (
        <header id="main-header" className="clase1 clase2" >
            <h1>E-Commerce</h1>
            <p>Bienvenido  {nombre} {apellido} </p>
            <CartWidget/>            
            <Nav />

        </header>
    )
}

export default Header