import { FC } from "react";
import { StatisticItem } from "../../components";
import { staticticData } from "./constants";

import styles from './dashboard.module.scss';

export const DashboarPage: FC = () => {
  return (
    <main className={styles.dashboard}>
      <section className={styles.statistics}>
        {staticticData.map(item => (
          <StatisticItem {...item} />
        ))}
      </section>
    </main>
  )
}