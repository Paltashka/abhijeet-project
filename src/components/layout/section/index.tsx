import { FC, PropsWithChildren } from 'react';

import styles from './section.module.scss';

export const Section: FC<PropsWithChildren> = ({ children }) => (
  <section className={styles.section}>
    {children}
  </section>
)