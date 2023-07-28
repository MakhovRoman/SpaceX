import React from 'react';
import styles from './AppStyles.module.scss';
import { Banner } from '../banner/Banner';

export const App:React.FC = () => {
  return (
    <main className={styles.main}>
      <Banner />
    </main>
  )
}
