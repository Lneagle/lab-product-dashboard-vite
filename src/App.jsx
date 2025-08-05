import React, { useState } from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import ProductList from './components/ProductList';

const App = () => {
  //Product Inventory
  const products = [
    {id: 1, name: "Laptop", price: 500, inStock: true},
    {id: 1, name: "Phone", price: 200, inStock: false},
    {id: 1, name: "Keyboard", price: 60, inStock: true},
    {id: 1, name: "Tablet", price: 150, inStock: false}
  ]

  //Implement state to manage filtering
  const [filter, setFilter] = useState(false);

  const handleChange = (event) => {
    setFilter(event.target.checked);
  };

  // Filter products based on availability
  const filteredProducts = filter ? products.filter((product) => product.inStock === filter) : products;

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      {/* Use MUI Switch to filter by availability */}
      <FormGroup>
        <FormControlLabel control={<Switch onChange={handleChange}/>} label="In Stock" />
      </FormGroup>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
