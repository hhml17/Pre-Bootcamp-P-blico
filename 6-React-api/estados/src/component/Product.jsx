// src/components/Product/Product.jsx
import React, { useState } from 'react';
import './Product.css';

const Product = ({ name, price, description, initialStock }) => {
  const [stock, setStock] = useState(initialStock);

  const handleBuy = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };

  return (
    <div className="product-card">
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
      <p className={`product-stock ${stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
        {stock > 0 ? `En Stock: ${stock}` : 'Agotado'}
      </p>
      <button onClick={handleBuy} disabled={stock === 0} className="buy-button">
        Comprar
      </button>
    </div>
  );
};

export default Product;
