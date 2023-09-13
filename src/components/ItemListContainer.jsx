import { useState } from "react";
import productsJSON from "../products.json";
import { ItemList } from "./ItemList";
import { useEffect } from "react";

const mockAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsJSON);
        }, 2000);
    }, []);
};

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        mockAPI().then((data) => setProducts(data));
    });

    return (
        <>
            <ItemList products={products} />
        </>
    )
}