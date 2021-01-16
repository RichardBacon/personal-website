import React from 'react';
import styles from './layout.module.css';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
