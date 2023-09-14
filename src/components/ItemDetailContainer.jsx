import { useState, useEffect } from "react";
import productsJSON from "../products.json";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";

const mockAPI = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id !== undefined) {
                const productoPorId = productsJSON.filter((item) => item.id == id);
                resolve(productoPorId[0])
            }
        }, 2000);
    });
};

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        mockAPI(id).then((data) => setProduct(data));
    }, [id]);

    return (
        <>
            <div>
                <ItemDetail product={product} />
            </div>
        </>
    )
}