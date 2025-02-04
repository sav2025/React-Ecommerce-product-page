
import React, { useState } from 'react';
import ProductOptions from './ProductOptions';
import ProductImages from './ProductImages';

const ProductDisplay = ({ product }) => {
  const [selectedOptions, setSelectedOptions] = useState({ size: '', color: '', quantity: 1 });

  const handleOptionChange = (optionType, value) => {
    setSelectedOptions(prev => ({ ...prev, [optionType]: value }));
  };

  return (
    <div className="product-display">
      <ProductImages images={product.images} />
      <div className="product-details">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <ProductOptions options={product.options} onOptionChange={handleOptionChange} />
        <p>Price: ${product.price}</p>
        <p>Stock: {product.stock}</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
