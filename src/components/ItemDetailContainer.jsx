import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const productoRef = doc(db, "productos", id);
        getDoc(productoRef).then((snapshot) => {
            if (snapshot.exists()) {
                setProduct({ id: snapshot.id, ...snapshot.data() });
            }
        });
    }, [id]);

    return (
        <>
            <div>
                <ItemDetail product={product} />
            </div>
        </>
    )
}