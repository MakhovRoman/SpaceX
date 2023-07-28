import React, { useState } from 'react';
import styles from './Burger.module.scss';
import clsx from 'clsx';

type Props = {
  open: () => void
}

export const Burger:React.FC<Props> = ({open}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handlerClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div
      className={styles.burger}
      onClick={() => {handlerClick(), open()}}
    >
      <div className={clsx(
        styles.burger__button,
        isClicked && styles.burger__button_active
      )}>

      </div>
    </div>
  )
}
