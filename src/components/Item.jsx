import { Link } from "react-router-dom"

export const Item = ({ product }) => {

    return (
        <div className="col text-center mx-auto">
            <div className="card h-100">
                <img src={product.image} alt="imagen botella vino" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <h3 className="card-text">$ {product.price}</h3>
                    <Link to={`/producto/${product.id}`} className="btn btn-primary">Ver detalles</Link>
                </div>
            </div>
        </div>
    )
}