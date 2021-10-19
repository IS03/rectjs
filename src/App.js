import Header from "./Header"
import Footer from "./Footer"

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
            <Footer />
        </>
    )
}
 
export default App