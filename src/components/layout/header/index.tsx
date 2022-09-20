import { FC } from "react";

import HeaderContext from "../../../context/header.context";

import SettingsIcon from './../../icons/Settings.svg';
import BellIcon from './../../icons/Bell.svg';

import Avatar from './../../../assets/avatar.png';

import styles from './header.module.scss';

export const Header: FC = () => {
  const { data: { title } } = HeaderContext.useContext();

  return (
    <header className={styles.header}>
      <h2 className={styles.header__title}>
        {title}
      </h2>

      <div className={styles.header__content}>
        <div className={styles.header__icon__wrapper} onClick={console.log}>
          <img className={styles.header__icon} src={SettingsIcon} alt="Settings" />
        </div>

        <div className={styles.header__icon__wrapper} onClick={console.log}>
          <img className={styles.header__icon} src={BellIcon} alt="Notifications" />
        </div>

        <div className={styles.header__profile}>
          <div>
            <img src={Avatar} alt="Avatar" />
          </div>

          <div className={styles.header__profile__info}>
            <p className={styles.header__profile__info__name}>John Doe</p>
            <p className={styles.header__profile__info__role}>Administrator</p>
          </div>
        </div>
      </div>
    </header >
  )
}