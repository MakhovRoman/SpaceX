import React from 'react';
import styles from './Banner.module.scss';
import { Header } from '../header/Header';

export const Banner:React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__wrapper}>
        <div className={styles.banner__content}>
          <Header />
          <div className={styles.title}>
            <h1 className={styles.title__h1}>Путешествие</h1>
            <h3 className={styles.title__h3}>на красную планету</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
