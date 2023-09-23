import { useContext, useState } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { CartContext } from "../context/CartContext";

export const Checkout = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState();

    const { cart, totalCartAmount } = useContext(CartContext);

    function crearOrden() {
        const productos = cart;
        let total = totalCartAmount();
        const order = {
            buyer: {
                name,
                email,
                phone
            },
            productos,
            total
        };
        const db = getFirestore();
        const ordenesRef = collection(db, "ordenes");
        addDoc(ordenesRef, order).then(result => setOrderId(result.id));
    }

    if (orderId) {
        return (
            <h1>{`Gracias por tu compra ${orderId}!`} </h1>
        )
    }

    return (
        <div className="container w-25">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="tel" className="form-control" id="telefono" aria-describedby="emailHelp" value={phone} onChange={(event) => setPhone(event.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={crearOrden}>Finalizar Compra</button>
            </form>
        </div>
    )
}