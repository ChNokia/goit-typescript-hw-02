import Modal from 'react-modal';
import React from 'react';

import styles from './ImageModal.module.css';

import { ImageModalProps } from './ImageModal.types';

Modal.setAppElement('#root');
const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  url,
  onClose,
  description,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image view"
      className={styles.imageModal}
      overlayClassName={styles.overlayModal}
    >
      <img src={url} alt={description || undefined} className={styles.image} />
    </Modal>
  );
};

export default ImageModal;
