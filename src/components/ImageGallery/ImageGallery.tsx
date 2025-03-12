import React from 'react';

import ImageCard from '../ImageCard/ImageCard';

import styles from './ImageGallery.module.css';

import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onSelectedItem,
}) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map(item => (
        <li key={item.id} className={styles.galleryItem}>
          <ImageCard imageCard={item} onSelect={onSelectedItem} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
