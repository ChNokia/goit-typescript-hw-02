import React from 'react';

import styles from './ErrorMessage.module.css';

import { ErrorMessageProps } from './ErrorMessage.types';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;
