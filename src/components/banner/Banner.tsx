import React from 'react';
import styles from './BannerStyles.module.scss';
import { Header } from '../header/Header';
import { Title } from '../title/Title';
import { Advantage } from '../advantage/Advantage';

export const Banner:React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__wrapper}>
        <div className={styles.banner__content}>
          <Header />
          <div className={styles.banner__info}>
            <Title />
            <Advantage />
          </div>
        </div>
      </div>
    </div>
  )
}
