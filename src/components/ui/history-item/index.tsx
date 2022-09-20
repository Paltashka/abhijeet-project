import { FC } from "react";

import styles from './history-item.module.scss';

export interface HistoryItemProps {
  title: string;
  image: string;
  distance: number;
  description: string;
}

export const HistoryItem: FC<HistoryItemProps> = ({ title, image, distance, description }) => (
  <article className={styles.item}>
    <img className={styles.item__image} src={image} alt={title} />

    <div className={styles.item__text}>
      <h5 className={styles.item__text_title}>{title}</h5>
      <p className={styles.item__text_distance}>{distance}km</p>
    </div>

    <p className={styles.item__descrition}>{description}</p>

    <div className={styles.item__footer}>
      <button>Edit</button>
      <button>History</button>
    </div>
  </article>
)