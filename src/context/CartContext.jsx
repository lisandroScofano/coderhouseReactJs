import { createContext, useContext, useState } from "react"

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    function addItem(producto, cantidad) {
        if (!isInCart(producto.id)) {
            setCart(arr => [...arr, { ...producto, cantidad }])
        } else {
            const indexProduct = cart.findIndex(prod => prod.id === producto.id);
            cart[indexProduct].cantidad = cart[indexProduct].cantidad + cantidad;
            setCart(arr => [...arr])//this is to update the numberItems()
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
        let count = 0;
        cart.forEach(producto => {
            count = count + producto.cantidad
        });
        return count;
    }

    function totalCartAmount() {
        let total = 0;
        cart.forEach(producto => {
            total = parseInt(total + (producto.cantidad * producto.price));
        });
        return total;
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, numberItems, totalCartAmount, cart }}>
            {children}
        </CartContext.Provider>
    )
}