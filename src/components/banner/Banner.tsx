import React from 'react';
import styles from './Banner.module.scss';
import { Header } from '../header/Header';

export const Banner:React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__wrapper}>
        <div className={styles.banner__content}>
          <Header />
        </div>
      </div>
    </div>
  )
}
