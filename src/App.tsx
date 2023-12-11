import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from 'components/header';
import { MainSlider } from 'components/MainSlider';

export const App = () => {
  return (
    <>
      {/* <MainSlider /> */}
      <Header />
      <main style={{ flex: '1' }}>
        <Outlet />
      </main>
    </>
  );
};
