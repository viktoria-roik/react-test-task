import { useState } from 'react';
import { ReactComponent as FavoriteIcon } from '../../assets/icons/favorite-icon.svg';
import { Rocket } from 'types/rocket';

import './ToursCard.scss';
import img1 from 'assets/card-img/img1.png';
import img2 from 'assets/card-img/img2.png';
import img3 from 'assets/card-img/img3.png';
import classNames from 'classnames';
import { favoritesItemsState } from 'provider/FavsProvider';
import { useRecoilState } from 'recoil';

const imgs = [
  {
    image: img1,
    alt: 'extraordinary tour',
  },
  {
    image: img2,
    alt: 'extraordinary tour',
  },
  {
    image: img3,
    alt: 'extraordinary tour',
  },
];

type Props = {
  rocket: Rocket;
  cardIndex: number;
};

export const ToursCard: React.FC<Props> = ({ rocket, cardIndex }) => {
  const [favoritesItems, setFavoritesItems] =
    useRecoilState(favoritesItemsState);
  const { name, description, id } = rocket;
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(prevState => !prevState);
  };

  const isInFav = favoritesItems.some(item => item.id === id);

  const addToFavorites = () => {
    if (isInFav) {
      setFavoritesItems(prevFavoritesItems =>
        prevFavoritesItems.filter(item => item.id !== id),
      );
    } else {
      setFavoritesItems(prevFavoritesItems => [
        ...prevFavoritesItems,
        { id: id, quantity: 1 },
      ]);
    }
  };

  const getImgIndex = (cardIndex: number) => {
    return (cardIndex - 1) % 3;
  };

  const imgIndex = getImgIndex(cardIndex);
  const { image, alt } = imgs[imgIndex];

  return (
    <div className="card">
      <img src={image} alt={alt} className="card__img" />

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
          <button
            className={classNames('info__btn__favorite', {
              selected: isInFav,
            })}
            onClick={addToFavorites}
          >
            <FavoriteIcon
              className={classNames('info__btn__favorite__icon', {
                'selected-icon': isInFav,
              })}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
