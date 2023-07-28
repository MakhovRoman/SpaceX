import React from 'react';
import styles from './ModalStyles.module.scss';
import { Navbar } from '../navbar/Navbar';
import clsx from 'clsx';

type Props = {
  open: boolean
}

export const Modal:React.FC<Props> = ({open}) => {


  return (
    <div className={clsx(
      styles.modal,
      {[styles.modal_open]: open === true}
    )}>
      <Navbar />
    </div>

  )
}
