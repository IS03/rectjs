import CartWidget from "./CartWidget"

const Nav = () => {
    return (
        <nav className="nav">
        
            <a href="#" className="nav-items">Home</a>
            <a href="#" className="nav-items">Seccion 1</a>
            <a href="#" className="nav-items">Seccion 2</a>
            <CartWidget/>
            
        </nav>
        
    )
}

export default Nav