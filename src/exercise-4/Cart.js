import React, { useState } from 'react';
import ProductList from './ProductList';
import { Link } from 'react-router-dom'; 

const Cart = () => {
    const [cartCount, setCartCount] = useState(0);
  
    const handleAddToCart = () => {
      setCartCount(cartCount + 1);
    };
  
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Link to="/" className="back-to-menu-button"> Back to Menu </Link>
        
        <h2>Shopping Cart</h2>
        <p>Items in Cart: {cartCount}</p>
        <ProductList onAddToCart={handleAddToCart} />
      </div>
    );
  };
  

export default Cart;
