import { FC } from "react";
import cn from 'classnames';

import styles from './navbar-item.module.scss';
import { Link } from "react-router-dom";

export interface NavBarItemOptions {
  label: string;
  to: string;
}

interface NavbarItemProps extends NavBarItemOptions {
  isActive: boolean;
  onClick: () => void;
}
export const NavbarItem: FC<NavbarItemProps> = ({ label, to, isActive, onClick }) => (
  <Link to={to} onClick={onClick}>
    <li
      className={cn(styles.list_item, { [styles.list_item__active]: isActive })}
    >
      <p>
        {label}
      </p>
    </li>
  </Link>
)