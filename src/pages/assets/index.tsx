import { FC } from "react";
import { HistoryItem } from "../../components";

import styles from './assets.module.scss';
import { historyItems } from "./constants";


export const AssetsPage: FC = () => {

  return (
    <main className={styles.assets}>
      <div className={styles.assets__input}>
        <div className={styles.assets__input__field}>
          <form action="#">
            <input type="text" placeholder='Type make or model to search' />

            <button type='submit'>
              Search
            </button>
          </form>
        </div>

        <div className={styles.assets__input__filter}>
          <button>
            Filter
          </button>
        </div>
      </div>

      <section className={styles.assets__grid}>
        {historyItems.map((item, index) => (
          <HistoryItem
            key={item.title + index}
            {...item}
          />
        ))}
      </section>
    </main>
  )
}