export const Item = ({ product }) => {

    return (
        <div className="col text-center">
            <div className="card h-100">
                <img src={product.image} className="mw-100" style={{height: "400px"}} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <h3 className="card-text">$ {product.price}</h3>
                    <a href="#" className="btn btn-primary">Ver detalles</a>
                </div>
            </div>
        </div>
    )
}