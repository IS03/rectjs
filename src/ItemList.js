import Productos from "./Products.json"
import Item from "./Item"


function ItemList ({ param }) {
    return(
        <>
        {   param && param.length > 0 ?
            param.map (item => {
                return <div key={item.id}>
                            <Item item={item}
                            />
                        </div>
            })
            : "Eror"}
        </>
    )
}

export default ItemList