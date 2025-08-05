import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={`${styles.card} ${product.inStock ? '' : styles.outOfStockClass}`}>
      
      {/* Display product name */}
      <h3>{product.name}</h3>
      {/* Display product price */}
      <p>${product.price}</p>
      {/* Show if the product is in stock or out of stock */}
      <p className={styles.message}>{product.inStock ? 'In ' : 'Out of '}Stock</p>
    </div>
  );
};

export default ProductCard;
