import React from 'react';
import './ImageGallery.scss';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery" images={images}>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
