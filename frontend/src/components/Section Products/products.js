import React from 'react';
import './products.css';
import ScrollableImages from '../imagesData/scrollableImages';
import imageData from '../imagesData/imageData';
  
const Products = () => {
  
  return (
    <div id="products" className="section Products">
      <h1 id="Products-content-1">Experience the Beauty</h1>
      <h1 id="Products-content-2">Our Products</h1>

      <ScrollableImages images={imageData} />
    </div>
  ); 
};

export default Products;
