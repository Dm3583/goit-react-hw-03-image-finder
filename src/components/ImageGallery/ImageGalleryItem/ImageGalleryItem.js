import React from 'react';
import './ImageGalleryItem.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, showLargeImage }) => {
  const { webformatURL, tags, largeImageURL } = image;

  return (
    <li className="ImageGalleryItem">
      <img
        onClick={() => showLargeImage(largeImageURL)}
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  showLargeImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
