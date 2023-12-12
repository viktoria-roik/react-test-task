import { ToursCard } from 'components/ToursCard';
import { useQuery, gql } from '@apollo/client';

import { Rocket } from 'types/rocket';
import { useEffect, useState } from 'react';
import { useFavourites } from 'context/FavsContext';

import './Favourites.scss';

const ROCKETS_QUERY = gql`
  query ExampleQuery {
    rockets {
      id
      description
      name
    }
  }
`;

export const Favourites = () => {
  const [updatedRockets, setUpdatedRockets] = useState<Rocket[]>([]);
  const { favoritesItems, clearFavorites } = useFavourites();

  const { loading, error, data } = useQuery(ROCKETS_QUERY);

  useEffect(() => {
    if (data && data.rockets) {
      const productsToRender = data.rockets.filter((rocket: Rocket) =>
        favoritesItems.some((item: { id: string }) => item.id === rocket.id),
      );
      setUpdatedRockets(productsToRender);
    }
  }, [favoritesItems, data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleClearAll = () => {
    clearFavorites();
  };

  return (
    <div className="favs">
      <div className="favs__bg"></div>
      <div className="favs__container">
        <div className="favs__top">
          <h1 className="favs__title">favourites</h1>
        </div>

        <div className="favs__clear">
          <button className="favs__clear--btn" onClick={handleClearAll}>
            {!updatedRockets.length ? 'Empty' : 'Clear All'}
          </button>
        </div>

        <section className="favs__cards">
          {updatedRockets.map((rocket: Rocket) => (
            <ToursCard rocket={rocket} key={rocket.id} />
          ))}
        </section>
      </div>
    </div>
  );
};
