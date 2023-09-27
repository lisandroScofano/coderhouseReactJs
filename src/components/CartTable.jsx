import { CartContext } from "../context/CartContext";
import { useContext } from "react"
import { RemoveItem } from "./RemoveItem";

export const CartTable = ({ prods, viewOnlyOrder }) => {

    const { removeItem } = useContext(CartContext);

    function totalAmount() {
        let total = 0;
        prods.forEach(producto => {
            total = parseInt(total + (producto.cantidad * producto.price));
        });
        return total;
    }


    return (
        <>
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
                        {prods.map((prod) => (
                            <tr key={prod.id}>
                                <td>{prod.title}</td>
                                <td>{prod.cantidad}</td>
                                <td>$ {prod.price}</td>
                                <td>
                                    {viewOnlyOrder ? '' : <RemoveItem prodId={prod.id} />}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan={3}>Total</th>
                            <td>$ {totalAmount()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}