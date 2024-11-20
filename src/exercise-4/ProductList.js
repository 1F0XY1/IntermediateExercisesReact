import React from 'react';
import Product from './Product';

const ProductList = ({ onAddToCart }) => {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 1530 },
  ];

  return (
    <div>
      {products.map((product) => (<Product key={product.id} product={product} onAddToCart={onAddToCart} />))}
    </div>
  );
};

export default ProductList;
