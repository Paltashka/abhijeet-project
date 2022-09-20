import React, { useEffect } from 'react';

import { Header, Navbar } from './components/layout';

import { navbarItems } from './app.constants';

import styles from './app.module.scss';
import { Route, Routes } from 'react-router';
import { DashboarPage } from './pages';

function App() {
  useEffect(() => {
    localStorage.setItem('activeItem', '0');
  }, []);

  return (
    <div className={styles.app}>
      <Navbar items={navbarItems} activeItem={+(localStorage.getItem('activeItem') || 0)} />


      <div className={styles.content}>
        <Header />

        <Routes>
          <Route path='/dashboard' element={<DashboarPage />} />
          <Route path='/assets' element={<DashboarPage />} />
          <Route path='/asets-life' element={<DashboarPage />} />
          <Route path='/inventory' element={<DashboarPage />} />
          <Route path='/work-orders' element={<DashboarPage />} />
          <Route path='/calendar' element={<DashboarPage />} />
          <Route path='/report-list' element={<DashboarPage />} />
          <Route path='/planner' element={<DashboarPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
