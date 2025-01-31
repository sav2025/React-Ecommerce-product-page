javascript
CopyEdit
import React from 'react';

const ProductOptions = ({ options, onOptionChange }) => {
  return (
    <div className="product-options">
      {options.map(option => (
        <div key={option.type}>
          <label>{option.type}</label>
          <select onChange={(e) => onOptionChange(option.type, e.target.value)}>
            {option.values.map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;
