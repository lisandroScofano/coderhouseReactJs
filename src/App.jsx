import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          {/* to be completed */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
