import React from 'react';
import styles from './Navbar.module.scss';

export const Navbar:React.FC = () => {
  return (
    <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      <li className={styles.nav__item}>
        <a href="#" className={styles.nav__link}>Главная</a>
      </li>
      <li className={styles.nav__item}>
        <a href="#" className={styles.nav__link}>Технологии</a>
      </li>
      <li className={styles.nav__item}>
        <a href="#" className={styles.nav__link}>График полетов</a>
      </li>
      <li className={styles.nav__item}>
        <a href="#" className={styles.nav__link}>Гарантии</a>
      </li>
      <li className={styles.nav__item}>
        <a href="#" className={styles.nav__link}>О компании</a>
      </li>
      <li className={styles.nav__item}>
        <a href="#" className={styles.nav__link}>Контакты</a>
      </li>
    </ul>
  </nav>
  )
}
