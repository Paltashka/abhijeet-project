import React, { useEffect } from 'react';

import { Navbar } from './components/layout';

import { navbarItems } from './app.constants';

import styles from './app.module.scss';

function App() {

  useEffect(() => {
    localStorage.setItem('activeItem', '0');
  }, []);

  return (
    <div className={styles.app}>
      <Navbar items={navbarItems} activeItem={+(localStorage.getItem('activeItem') || 0)} />

      <div className={styles.content}>

      </div>
    </div>
  );
}

export default App;
