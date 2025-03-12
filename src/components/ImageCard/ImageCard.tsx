import React from 'react';

import styles from './ImageCard.module.css';

import { ImageCardProps } from './ImageCard.types';

const ImageCard: React.FC<ImageCardProps> = ({ imageCard, onSelect }) => {
  const { likes, description, alt_description, urls } = imageCard;
  return (
    <div
      className={styles.galleryLink}
      onClick={() => {
        onSelect({ description, alt_description, ...urls });
      }}
    >
      <img
        className={styles.imageCard}
        src={urls.small}
        alt={alt_description || undefined}
      />

      <div className={styles.galleryCardListInfo}>
        <p className={styles.galleryCardListInfoTitle}>
          {description || alt_description}
        </p>
        <p className={styles.galleryCardListInfoText}>Likes: {likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
