import { useState, useEffect } from "react";
import productsJSON from "../products.json";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

const mockAPI = (varietalName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(varietalName);
            if (varietalName !== undefined) {
                const productosPorVarietal = productsJSON.filter((item) => item.category === varietalName);
                resolve(productosPorVarietal)
            } else {
                resolve(productsJSON);
            }
        }, 2000);
    });
};

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { varietalName } = useParams();

    useEffect(() => {
        mockAPI(varietalName).then((data) => setProducts(data));
    }, [varietalName]);

    return (
        <>
            <ItemList products={products} />
        </>
    )
}