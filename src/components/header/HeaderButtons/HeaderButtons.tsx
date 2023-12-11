import './HeaderButtons.scss';
import { NavLink } from 'react-router-dom';
import { ReactComponent as FavoriteIcon } from '../../../assets/icons/favorite-icon.svg';

export const HeaderButtons = () => {
  return (
    <div className="header-btn">
      <NavLink to="favorite" className="header-btn__favorite-btn favorite-btn">
        <FavoriteIcon className="header-btn__favorite-icon" />
      </NavLink>
      <button className="header-btn__sign-btn sign-btn">sign in</button>
    </div>
  );
};
