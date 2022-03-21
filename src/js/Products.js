import data from "./data"

function Cards(props){
    return(
        <div className='card' id={props.id} style={{opacity: props.cart ? "50%" : "100%"}}>
            <div className='card-image' style={{backgroundImage:`url(${require(`../img/${props.img || "cube.png"}`)})`}} >
            </div>
            <div className='card-text'>
                <h1>{props.name}</h1>
                {props.description && <p>{props.description}</p>}
                <p>${props.price}</p>
                <form method='POST'>
                    <input type='submit' name='Buy' value='Add to Cart' className='card-buy' />
                </form>
            </div>
        </div>
    )
}

export default function Products(){
    const cards=data.map(item => {
        return (
            <Cards
                id={item.id}
                img={item.img}
                name={item.name}
                description={item.description}
                price={item.price}
                cart={item.cart}
            />
        )
    })

    return(
        <div>
            <h1 style={{fontSize: "45px", margin: "20px"}}>Products</h1>
            <div className="store">
                {cards}
            </div>
        </div>
    )
}