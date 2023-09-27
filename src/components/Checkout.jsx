import { useContext, useState } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { CartContext } from "../context/CartContext";
import { Cart } from "./Cart";

export const Checkout = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState();
    const [buttonDisabled, setButtonDisabled] = useState(true);


    const { cart, totalCartAmount, clear } = useContext(CartContext);

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
        {clear()}
    }
    function verificarEmail() {
        if (email === email2) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }

    if (orderId) {
        return (
            <div className="container w-75 mt-5 text-center">
                <h1>{`Gracias por su compra! El ID de la orden es: ${orderId}`} </h1>
            </div>
        )
    }

    if (cart.length == 0) {
        return (
            <Cart />
        )
    } else {
        return (
            <>
                <Cart />
                <div className="container w-50 mt-5 text-center">
                    <h3>Complete los siguientes datos para confirmar su orden</h3>
                    <div className="container w-50 mt-5">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nombre" value={name} onChange={(event) => setName(event.target.value)} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Telefono</label>
                                <input type="tel" className="form-control" id="telefono" aria-describedby="emailHelp" value={phone} onChange={(event) => setPhone(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onBlur={verificarEmail} value={email} onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Confirmar Email</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onBlur={verificarEmail} value={email2} onChange={(event) => setEmail2(event.target.value)} />
                            </div>
                            <div>
                                <button className="btn btn-primary" onClick={crearOrden} disabled={buttonDisabled}>Finalizar Compra</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}