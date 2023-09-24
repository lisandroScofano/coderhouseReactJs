import { useContext } from "react"
import { CartContext } from "../context/CartContext";

export const Cart = () => {

    const { cart, totalCartAmount } = useContext(CartContext);
    if (cart.length == 0) {
        return (
            <div className="container text-center">
                <h1>El carrito de compra esta vacio</h1>
            </div>
        )
    }

    return (
        <div className="container text-center w-50">
            <h1>Su carrito de compra incluye</h1>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover mt-5">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((prod) => (
                            <tr key={prod.id}>
                                <td>{prod.title}</td>
                                <td>{prod.cantidad}</td>
                                <td>{prod.price}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={2}>Total</th>
                            <td>{totalCartAmount()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}