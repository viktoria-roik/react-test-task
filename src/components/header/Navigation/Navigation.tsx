import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export const Navigation: React.FC = () => {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn('nav__link', { 'is-active': isActive })
            }
          >
            home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="tours"
            className={({ isActive }) =>
              cn('nav__link', { 'is-active': isActive })
            }
          >
            tours
          </NavLink>
        </li>

        <li>
          <NavLink
            to="about"
            className={({ isActive }) =>
              cn('nav__link', { 'is-active': isActive })
            }
          >
            about
          </NavLink>
        </li>

        <li>
          <NavLink
            to="help"
            className={({ isActive }) =>
              cn('nav__link', { 'is-active': isActive })
            }
          >
            help
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
