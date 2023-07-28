import React from 'react';
import styles from './App.module.scss';
import { Banner } from '../banner/Banner';

export const App:React.FC = () => {
  return (
    <main className={styles.main}>
      <Banner />
    </main>
  )
}
