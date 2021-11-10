import Header from "./Header"
import Footer from "./Footer"
import ItemListContainer from "./ItemListContainer"
import Nav from "./Nav"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer"


const App = () => {

    return (
        <BrowserRouter>
            <Header
                nombre="Ignacio"
                apellido="Senestrari"
                edad={17}
                links={["Link1", "Link2"]}
                callback={()=>{console.log("Soy un callback de App")}}
            />
            <Nav/>

            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/itemDetail/:id" component={ItemDetailContainer} />
                <Route path="/category/:categoryId" component={ItemListContainer} />
            </Switch>

            <ItemListContainer/>

            <Footer />
        </BrowserRouter>
    )
}
 
export default App