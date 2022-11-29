import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import SearchItems from './pages/SearchItems'
import Product from './pages/Product'
import Cart from './pages/Cart'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addItem = (item) => setCartItems([...cartItems, item]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SearchItems addItem={addItem} />} />
            <Route path="product" element={<Product addItem={addItem} />} />
            <Route path="cart" element={<Cart cartItems={cartItems} addItem={addItem} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
