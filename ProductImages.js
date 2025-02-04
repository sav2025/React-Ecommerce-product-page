
import React, { useState } from 'react';

const ProductImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="product-images">
      <img src={selectedImage} alt="Product" className="main-image" />
      <div className="image-thumbnails">
        {images.map((image, index) => (
          <img key={index} src={image} alt="Thumbnail" onClick={() => setSelectedImage(image)} />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
