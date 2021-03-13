import React from 'react';
import './ImageGalleryItem.scss';

const ImageGalleryItem = ({ image }) => {
  const { webformatURL, tags } = image;
  console.log(webformatURL);
  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
