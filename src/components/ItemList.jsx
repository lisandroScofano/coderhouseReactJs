import { Item } from "./Item"

export const ItemList = ({ products }) => {

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 m-5">
            {products.map((prod) => (
                <Item key={prod.id} product={prod} />
            ))}
        </div>
    )
}