const Header = ({ nombre, apellido, edad, links, callback }) => {

    callback()
    console.log(edad)
    console.log(links)

    
    return (
        <header className="clase1 clase2 main-header" >
            <h1>E-Commerce</h1>
            <p>Bienvenido  {nombre} {apellido} </p>
        </header>
    )
}

export default Header