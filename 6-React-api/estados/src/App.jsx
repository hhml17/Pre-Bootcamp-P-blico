// src/App.jsx
import React from 'react';
import './App.css';
import Product from './component/Product';
import Header from './component/Header';
const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <div className="product-list">
        <Product name="Laptop" price={1500} description="Una potente laptop para trabajar y jugar." initialStock={10} />
        <Product name="Smartphone" price={800} description="Un smartphone de última generación con una de las mejores cámaras." initialStock={0} />
        <Product name="Auriculares" price={200} description="Auriculares con cancelación de ruido. No escucharás nada a tu alrededor." initialStock={5} />
        <Product name="Monitor" price={300} description="Monitor 4K para una experiencia visual increíble." initialStock={7} />
      </div>
    </div>
  );
}

export default App;
