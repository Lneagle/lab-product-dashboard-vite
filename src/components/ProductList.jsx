import React from 'react';
import { Alert } from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  // Check if the product list is empty and display a message if needed
  if (products.length > 0) {
    return (
      <main>
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </main>
    );
  } else {
    return (
      <Alert severity="error">There are no products that match your filter</Alert>
    );
  }
};

export default ProductList;
