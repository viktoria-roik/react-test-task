import { ToursCard } from 'components/ToursCard';
import { useQuery, gql } from '@apollo/client';

import { Rocket } from 'types/rocket';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { favoritesItemsState } from 'provider/FavsProvider';

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
  const favoritesItems = useRecoilValue(favoritesItemsState);
  const setFavoritesItems = useSetRecoilState(favoritesItemsState);

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
    setFavoritesItems([]);
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
          {updatedRockets.map((rocket: Rocket, index: number) => (
            <ToursCard rocket={rocket} key={rocket.id} cardIndex={index + 1} />
          ))}
        </section>
      </div>
    </div>
  );
};
