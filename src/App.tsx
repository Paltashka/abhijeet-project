import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router';

import HeaderProvider from './context/header.provider';

import { Header, Navbar } from './components/layout';

import { AssetsPage, DashboarPage } from './pages';

import styles from './app.module.scss';
import { navbarItems } from './app.constants';

function App() {
  useEffect(() => {
    localStorage.setItem('activeItem', '0');
  }, []);

  return (
    <div className={styles.app}>
      <HeaderProvider>
        <Navbar items={navbarItems} activeItem={+(localStorage.getItem('activeItem') || 0)} />


        <div className={styles.content}>
          <Header />

          <Routes>
            <Route path='/dashboard' element={<DashboarPage />} />
            <Route path='/assets' element={<AssetsPage />} />
            <Route path='/asets-life' element={<DashboarPage />} />
            <Route path='/inventory' element={<DashboarPage />} />
            <Route path='/work-orders' element={<DashboarPage />} />
            <Route path='/calendar' element={<DashboarPage />} />
            <Route path='/report-list' element={<DashboarPage />} />
            <Route path='/planner' element={<DashboarPage />} />
          </Routes>
        </div>
      </HeaderProvider>
    </div>
  );
}

export default App;
