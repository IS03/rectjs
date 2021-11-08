import CartWidget from "./CartWidget"

const Nav = () => {
    return (
        <nav className="nav">
        
            <a href="index.html" className="nav-items">Home</a>
            <a href="#pr" className="nav-items">Productos</a>
            <CartWidget/>
            
        </nav>
        
    )
}

export default Nav