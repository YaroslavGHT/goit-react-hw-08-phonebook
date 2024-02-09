import React from 'react';
import  Navigation from '../Navigation/Navigation.jsx';

export const Layout = ({ children }) => {
  return (
    <div>
      <header style={{ display: 'flex', alignItems: 'center' }}>
        <Navigation />
      </header>
      <main>{children}</main>
    </div>
  );
};
