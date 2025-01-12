import logo from './logo.svg';
import './App.css';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import Cart from './pages/Cart';
import Product from './pages/Product';
import React, { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/Cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/Checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/ThankYou" element={<ThankYou />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
