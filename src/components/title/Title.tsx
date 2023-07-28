import React from 'react';
import styles from './TitleSrtyles.module.scss';
import clsx from 'clsx';
import { Line } from '../line/Line';
import { useResize } from '../../hook/useResize';

export const Title:React.FC = () => {
  const {isScreenSm} = useResize();

  return (
    <div className={styles.title}>
      <div className={clsx(styles.title__content, styles.title__text)}>
        <h1 className={styles.title__h1}>Путешествие</h1>
        <h3 className={styles.title__h3}>на красную планету</h3>
      </div>
      <div className={styles.title__content}>
        <a href="#" className={styles.title__link}>
          <div className={styles.border}>
            <span className={ clsx(styles.border__corner_topright, styles.border__corner) }></span>
            <span className={ clsx(styles.border__corner_botleft, styles.border__corner) }></span>
            Начать путешествие
          </div>
        </a>
      </div>
      {!isScreenSm && <Line />}
    </div>
  )
}
