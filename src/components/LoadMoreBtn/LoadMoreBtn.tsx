import React from 'react';

import styles from './LoadMoreBtn.module.css';

import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ clickAction }) => {
  return (
    <button onClick={clickAction} className={styles.loadMoreBtn}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
