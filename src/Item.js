function Item ({ id, title, price, pictureUrl }) {

    console.log("el producto: " + title + ", con id: " + id + ", tiene un precio de: " + price + "." )
    
    return (
        <div>
            <h1>
                {title}
            </h1>
            <p>
                {pictureUrl}
            </p>          
            <p>
                ${price}
            </p>
        </div>
    )
}

export default Item 