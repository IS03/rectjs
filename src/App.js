import Header from "./Header"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer"
import Nav from "./Nav"
import Contador from "./ItemCount"
import Main from "./Main"

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
            
            <Nav/>

            <ItemListContainer 
                usuario="1"
                id="13.10.299"
            />
            
            <Contador />

            <Footer />


        </>
    )
}
 
export default App