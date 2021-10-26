import Header from "./Header"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer"

const App = () => {
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
        </>
    )
}
 
export default App