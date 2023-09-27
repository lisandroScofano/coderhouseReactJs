import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { Cart } from './components/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { CartProvider, CartContext } from './context/CartContext'
import { Checkout } from './components/Checkout'
import { MisOrdenes } from './components/MisOrdenes'

function App() {


  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/varietal/:varietalName" element={<ItemListContainer />} />
            <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/ordenes" element={<MisOrdenes />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
