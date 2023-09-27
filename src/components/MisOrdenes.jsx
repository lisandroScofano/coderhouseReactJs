import { useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { CartTable } from "./CartTable";


export const MisOrdenes = () => {

    const [orderID, setOrderID] = useState("");
    const [order, setOrder] = useState();
    const db = getFirestore();

    function buscarOrden() {
        const orderRef = doc(db, "ordenes", orderID);
        getDoc(orderRef).then((snapshot) => {
            if (snapshot.exists()) {
                setOrder({ id: snapshot.id, ...snapshot.data() });
            }
        });
    }

    if (order == undefined) {
        return (
            <>
                <div className="container w-50 mt-5 text-center">
                    <h3>Ingrese el ID de su orden para ver el detalle</h3>
                    <div className="container w-50 mt-5">
                        <div className="mb-3">
                            <input type="text" className="form-control" id="nombre" value={orderID} onChange={(event) => setOrderID(event.target.value)} required />
                        </div>
                        <div>
                            <button className="btn btn-primary" onClick={buscarOrden}>Buscar Orden</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="container text-center w-50">
            <span className="fs-1 me-5">Detalle de la orden ID: {orderID}</span>
            <CartTable prods={order.productos} viewOnlyOrder={true} />
        </div>
    )
}