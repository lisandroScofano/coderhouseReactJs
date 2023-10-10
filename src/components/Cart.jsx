import { useContext } from "react"
import { CartContext } from "../context/CartContext";
import { CartTable } from "./CartTable";
import { Link } from "react-router-dom";

export const Cart = ({ skipCheckoutButton }) => {

    const { cart, clear } = useContext(CartContext);

    function emptyCart() {
        let confirmado = confirm("Esta seguro que quiere vaciar el carrito de compras?");
        if (confirmado) {
            clear()
        }
    }

    if (cart.length == 0) {
        return (
            <div className="container text-center">
                <h1>El carrito de compra esta vacio</h1>
            </div>
        )
    }

    return (
        <>
            <div className="container text-center w-50">
                <div className="container">
                    <span className="fs-1 me-5">Su carrito de compra incluye</span>
                    <button className="btn btn-danger ms-5" onClick={emptyCart}>Vaciar carrito</button>
                </div>
                <CartTable prods={cart} />
                {skipCheckoutButton ? '' : <Link to="/checkout"><button className="btn btn-primary mt-4">Ir a Checkout</button></Link>}
            </div>
        </>
    )
}