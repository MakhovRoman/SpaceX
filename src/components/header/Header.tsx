import React from 'react';
import styles from './header.module.scss'

import { Logo } from '../logo/Logo';
import { Navbar } from '../navbar/Navbar';

export const Header:React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
    </header>
  )
}
