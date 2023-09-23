import { useState } from "react"

export const ItemCount = ({ stock, confirmar }) => {

    const [count, setCount] = useState(1);

    function onDecrease() {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    function onIncrease() {
        if (stock && count < stock) {
            setCount(count + 1);
        }
    }

    return (
        <>
            <div className="mt-4">
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-primary" onClick={onDecrease}>-</button>
                    <span className="ps-5 pe-5">{count}</span>
                    <button className="btn btn-outline-primary" onClick={onIncrease}>+</button>
                </div>
            </div>
            <div className="mt-4">
                <button className="btn btn-outline-primary" onClick={() => confirmar(count)}>Agregar al carrito</button>
            </div>
        </>
    )
}