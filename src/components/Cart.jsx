import { useContext } from "react"
import { CartContext } from "../context/CartContext";

export const Cart = () => {

    const { cart, totalCartAmount, removeItem, clear } = useContext(CartContext);

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
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover mt-5">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((prod) => (
                                <tr key={prod.id}>
                                    <td>{prod.title}</td>
                                    <td>{prod.cantidad}</td>
                                    <td>$ {prod.price}</td>
                                    <td>
                                        <svg onClick={() => removeItem(prod.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan={3}>Total</th>
                                <td>$ {totalCartAmount()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}