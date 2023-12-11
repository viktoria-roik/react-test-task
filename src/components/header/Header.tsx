import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../assets/logo-new.svg';
import { Navigation } from './Navigation';
import { HeaderButtons } from './HeaderButtons';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <Logo className="header__logo-img" />
      </Link>

      <Navigation />
      <HeaderButtons />
    </div>
  );
};
