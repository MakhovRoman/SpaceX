import React from 'react';
import styles from './AdvantageStyles.module.scss';

export const Advantage:React.FC = () => {
  return (
    <div className={styles.advantage}>
      <div className={styles.advantage__item}>
        <h2 className={styles.advantage__title}>
          <span className={styles.advantage__subtitle}>мы</span>
          1
          <span className={styles.advantage__subtitle}>на рынке</span>
        </h2>
      </div>
      <div className={styles.advantage__item}>
        <h2 className={styles.advantage__title}>
          <span className={styles.advantage__subtitle}>гарантируем</span>
          50%
          <span className={styles.advantage__subtitle}>безопасность</span>
        </h2>
      </div>
      <div className={styles.advantage__item}>
        <h2 className={styles.advantage__title}>
          <span className={styles.advantage__subtitle}>календарик за</span>
        <div className={styles.advantage__title_hub}>
          2001 <span className={styles.advantage__title_small}>г.</span>
        </div>
          <span className={styles.advantage__subtitle}>в подарок</span>
        </h2>
      </div>
      <div className={styles.advantage__item}>
        <h2 className={styles.advantage__title}>
          <span className={styles.advantage__subtitle}>путешествие</span>
          597
          <span className={styles.advantage__subtitle}>дней</span>
        </h2>
      </div>
    </div>
  )
}
