import React, { useState } from 'react';
import styles from './Header.module.scss';

import { Logo } from '../logo/Logo';
import { Navbar } from '../navbar/Navbar';
import { useResize } from '../../hook/useResize';
import { Burger } from '../burger/Burger';
import { Modal } from '../modal/Modal';

export const Header:React.FC = () => {
  const {isScreenSm} = useResize();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerOpen = () => {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
    <header className={styles.header}>
      <Logo />
      {isScreenSm ? <Burger open={handleBurgerOpen} /> : <Navbar />}
      {isScreenSm && <Modal open={isBurgerOpen}/>}
    </header>
  )
}
