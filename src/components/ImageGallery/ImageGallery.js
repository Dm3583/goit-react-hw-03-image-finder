import React from 'react';
import './ImageGallery.scss';
import PropTypes from 'prop-types';

import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, showLargeImage }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          showLargeImage={showLargeImage}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default ImageGallery;
