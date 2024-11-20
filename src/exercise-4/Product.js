import React from 'react';
import './Product.css'; 

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-image"
        />
      )}
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">Price: {product.price} som</p>
      <button className="add-to-cart-button" onClick={onAddToCart}> Add to Cart </button>
    </div>
  );
};

export default Product;
