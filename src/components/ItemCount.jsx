export const ItemCount = ({ nombreProducto, stock }) => {
    return (
        <>
            <div className="row mb-3 mt-5 border">
                <div className="col-2">
                    <h3 className="pb-5 d-flex justify-content-center">{nombreProducto}</h3>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-outline-primary">-</button>
                        <span className="ps-5 pe-5">0</span>
                        <button className="btn btn-outline-primary">+</button>
                    </div>
                </div>
                <div className="col-2">
                    <button className="btn btn-outline-primary">Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}