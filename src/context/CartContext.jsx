import { createContext, useContext, useState } from "react"

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addItem(producto, cantidad) {
        if (!isInCart(producto.id)) {
            setCart(arr => [...arr, { ...producto, cantidad }])
        } else {
            const updatedCart = cart.map(prod => {
                if (prod.id === producto.id) {
                    return { ...producto, cantidad: prod.cantidad + cantidad };
                }
                return prod;
            });
            setCart(updatedCart)
        }
    }
    function removeItem(productoId) {
        const cartActualizado = cart.filter(prod => prod.id !== productoId);
        setCart(cartActualizado);
    }
    function clear() {
        setCart([]);
    }
    function isInCart(productoId) {
        return cart.some(prod => prod.id === productoId);
    }

    function numberItems() {

        var count = cart.reduce(function (acc, obj) { return acc + obj.cantidad; }, 0);

        return count;
    }

    function totalCartAmount() {

        var result = cart.reduce(function (acc, obj) { return acc + obj.price * obj.cantidad; }, 0);

        return result;
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, numberItems, totalCartAmount, cart }}>
            {children}
        </CartContext.Provider>
    )
}