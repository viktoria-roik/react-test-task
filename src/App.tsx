import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';

export const App = () => {
  return (
    <main style={{ flex: '1' }}>
      <Outlet />
    </main>
  );
};
