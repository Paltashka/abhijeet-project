import { FC } from "react";

import { NavbarItem, NavBarItemOptions } from "../../ui";

import styles from './navbar.module.scss';

interface NavbarProps {
  items: NavBarItemOptions[];
  activeItem: number;
}

export const Navbar: FC<NavbarProps> = ({ items, activeItem }) => (
  <nav className={styles.navbar__container}>
    <ul className={styles.navbar__list}>
      {items.map((item, index) => (
        <NavbarItem key={item.label} {...item} isActive={activeItem === index} />
      ))}
    </ul>
  </nav>
)