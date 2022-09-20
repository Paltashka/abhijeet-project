import { FC, useState } from "react";
import HeaderContext from "../../../context/header.context";

import { NavbarItem, NavBarItemOptions } from "../../ui";

import styles from './navbar.module.scss';

interface NavbarProps {
  items: NavBarItemOptions[];
  activeItem: number;
}

export const Navbar: FC<NavbarProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState(0);

  const { setData } = HeaderContext.useContext();

  return (
    <nav className={styles.navbar__container}>
      <ul className={styles.navbar__list}>
        {items.map((item, index) => (
          <NavbarItem
            key={item.label} {...item}
            isActive={index === activeItem}
            onClick={() => {
              setActiveItem(index);

              setData({ title: item.label });
            }}
          />
        ))}
      </ul>
    </nav>
  )
};