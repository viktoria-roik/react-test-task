import './HeaderButtons.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { ReactComponent as FavoriteIcon } from '../../../assets/icons/favorite-icon.svg';

export const HeaderButtons = () => {
  return (
    <div className="header-btn">
      <NavLink
        to="favorites"
        className={({ isActive }) =>
          classNames('header-btn__favorite-btn', { 'is-active': isActive })
        }
      >
        <FavoriteIcon className="header-btn__favorite-icon" />
      </NavLink>
      <button className="header-btn__sign-btn sign-btn">sign in</button>
    </div>
  );
};
