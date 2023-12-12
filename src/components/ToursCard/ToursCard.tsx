import { useState } from 'react';
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite-icon.svg';
import { Rocket } from 'types/rocket';

import './ToursCard.scss';
import img1 from 'assets/card-img/img1.png';
// import img2 from 'assets/card-img/img2.png';
// import img3 from 'assets/card-img/img3.png';
import classNames from 'classnames';
import { useFavourites } from 'context/FavsContext';

// const imgs = [
//   {
//     image: img1,
//     alt: 'extraordinary tour',
//   },
//   {
//     image: img2,
//     alt: 'extraordinary tour',
//   },
//   {
//     image: img3,
//     alt: 'extraordinary tour',
//   },
// ];

type Props = {
  rocket: Rocket;
};

export const ToursCard: React.FC<Props> = ({ rocket }) => {
  const { addToFavorites, checkInFav } = useFavourites();
  const { name, description, id } = rocket;
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(prevState => !prevState);
  };

  const isInFav = checkInFav(id);

  return (
    <div className="tours-card">
      <div className="tours-card__card card">
        <img src={img1} alt={rocket.id} className="card__img" />

        <div className="card__info info">
          <div className="info__text">
            <h3 className="info__title">{name}</h3>

            <p
              className={classNames('info__desc', { truncated: isTruncated })}
              onClick={toggleTruncate}
            >
              {description}
            </p>
          </div>

          <div className="info__btn">
            <button className="info__btn__buy ">buy</button>

            {isInFav ? (
              <button
                className="info__btn__favorite selected"
                onClick={() => addToFavorites(id)}
              >
                <FavoriteIcon className="info__btn__favorite__icon selected-icon" />
              </button>
            ) : (
              <button
                className="info__btn__favorite"
                onClick={() => addToFavorites(id)}
              >
                <FavoriteIcon className="info__btn__favorite__icon" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
