import React from 'react';
import { Outlet } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import './App.scss';
import { Header } from 'components/header';
import { FavouritesProvider } from 'context/FavsContext';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <FavouritesProvider>
        <Header />
        <main style={{ flex: '1' }}>
          <Outlet />
        </main>
      </FavouritesProvider>
    </ApolloProvider>
  );
};
