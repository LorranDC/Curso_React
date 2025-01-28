import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <h1>Context</h1>

      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/products" element={ <Products /> }/>
            <Route path="/about" element={ <About /> }/>
            
        </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
