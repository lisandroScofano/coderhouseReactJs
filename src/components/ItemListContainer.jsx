import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { varietalName } = useParams();

    useEffect(() => {
        const db = getFirestore();
        let productsCollection = collection(db, "productos");
        if (varietalName !== undefined) {
            productsCollection = query(collection(db, "productos"), where("category", "==", varietalName));
        }
        getDocs(productsCollection).then((snapshot) => {
            if (snapshot.size != 0) {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            }
        });
    }, [varietalName]);

    return (
        <>
            <ItemList products={products} />
        </>
    )
}