export const ItemDetail = ({ product }) => {
    if (product.length == 0) {
        // si no hay producto no renderizo nada
        return;
    }
    return (
        <div className="col text-center mx-auto w-25">
            <div className="card">
                <h1 className="card-title">{`Varietal ${product.category}`}</h1>
                <img src={product.image} alt="imagen botella vino" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <h3 className="card-text">$ {product.price}</h3>
                </div>
            </div>
        </div>
    )
}