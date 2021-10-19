import Nav from "./Nav"

const Header = ({ nombre, apellido, edad, links, callback }) => {

    callback()
    console.log(edad)
    console.log(links)

    return (
        <header id="main-header" className="clase1 clase2" >
            <h1>E-Commerce</h1>
            <p>Bienvenido  {nombre} {apellido} </p>
            <span className="material-icons">
                Shopping-Cart
            </span>
            <Nav />
        </header>
    )
}

export default Header