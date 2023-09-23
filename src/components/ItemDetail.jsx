import { Loader } from "./Loader";
import { ItemCount } from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";




export const ItemDetail = ({ product }) => {
    const [cantidad, setCantidad] = useState(0);
    const { addItem } = useContext(CartContext);
    if (product.length === 0) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Loader />
            </div>
        );
    };

    const onAdd = (cant) => {
        setCantidad(cant);
    };

    const onConfirmar = () => {
        const {id, title, price} = product;
        const producto = {
            id,
            title,
            price
        }
        addItem(producto, cantidad)
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
                    {cantidad > 0 ?
                        <Link to="/cart"><button className="btn btn-primary mt-4" onClick={onConfirmar}>Finalizar compra</button></Link> :
                        <ItemCount stock={product.stock} confirmar={onAdd} />}
                </div>
            </div>
        </div>
    )
}