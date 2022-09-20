import { FC } from "react";
import { Section } from "../../layout";

import GarbageIcon from './../../icons/Garbage.svg';

import styles from './statistic-item.module.scss';

export interface StatisticItemProps {
  title: string;
  value: string;
  color: string;
}

export const StatisticItem: FC<StatisticItemProps> = ({ title, value, color }) => (
  <Section>
    <div className={styles.statistic_item__container}>
      <div className={styles.statistic_item__text}>
        <p className={styles.statistic_item__text__title}>{title}</p>

        <p className={styles.statistic_item__text__value}>{value}</p>
      </div>

      <div className={styles.statistic_item__icon} style={{ backgroundColor: color }}>
        <img src={GarbageIcon} alt="garbage" />
      </div>
    </div>
  </Section>
)