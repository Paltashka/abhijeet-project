import { FC } from "react";

import styles from './navbar-item.module.scss';

export interface NavBarItemOptions {
  label: string;
  to: string;
}

interface NavbarItemProps extends NavBarItemOptions {
  isActive: boolean;
}
export const NavbarItem: FC<NavbarItemProps> = ({ label, to, isActive }) => (
  <li className={styles.list_item}>
    <p>
      {label}
    </p>
  </li>
)