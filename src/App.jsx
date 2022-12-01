import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import SearchItems from './pages/SearchItems'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    const inCart = cartItems.find((item) => item.id === product.id);
    if (inCart) {
          const newCartItems = cartItems.map((item) =>
          item.id === product.id ? { ...inCart, qty: inCart.qty + 1 } : item
        )
        setCartItems(newCartItems);
    } else {
      const newCartItems = [...cartItems, { ...product, qty: 1 }]
      setCartItems(newCartItems);
    }
  };

  const removeItem = (product) => {
    const inCart = cartItems.find((item) => item.id === product.id);
    if (inCart.qty === 1) {
      const newCartItems = cartItems.filter((item) => item.id !== product.id)
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((item) =>
      item.id === product.id ? { ...inCart, qty: inCart.qty - 1 } : item
      );
      setCartItems(newCartItems);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout cartCount={cartItems.length}/ >}>
            <Route index element={<SearchItems addItem={addItem} />} />
            <Route path="cart" element={<Cart cartItems={cartItems} addItem={addItem} removeItem={removeItem} />} />
            <Route path="/:id" element={<ProductDetails addItem={addItem} removeItem={removeItem} />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
