import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { ItemCount } from './components/ItemCount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Bienvenido a la tienda!' />
      <ItemCount nombreProducto={'Malbec'} stock={8} />
      <ItemCount nombreProducto={'Cabernet Franc'} stock={3} />
      <ItemCount nombreProducto={'Tempranillo'} stock={0} />
    </>
  )
}

export default App
