import React from 'react';
import styles from './logo.module.scss';
import clsx from 'clsx';

import logo from '../../assets/logo.png';

export const Logo:React.FC = () => {
  return (
    <a href="#" className={styles.link}>
      <div className={styles.logo}>
        <span className={ clsx(styles.logo__corner_topleft, styles.logo__corner) }></span>
        <span className={ clsx(styles.logo__corner_topright, styles.logo__corner) }></span>
        <span className={ clsx(styles.logo__corner_botleft, styles.logo__corner) }></span>
        <span className={ clsx(styles.logo__corner_botright, styles.logo__corner) }></span>
        <img src={logo} alt="SpaceX" />
      </div>
    </a>
  )
}
