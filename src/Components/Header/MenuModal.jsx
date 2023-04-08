import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeButton } from './ThemeButton';

export const MenuModal = ({ themeClass, setIsModalOpen }) => {
  const onLinkClick = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={`menu-modal ${themeClass}`}>
      <NavLink
        className={`${themeClass}`}
        to="/home"
        onClick={onLinkClick}
      >
        Home
      </NavLink>
      <NavLink
        className={`${themeClass}`}
        to="/contact"
        onClick={onLinkClick}
      >
        Contact
      </NavLink>
      <NavLink
        className={`${themeClass}`}
        to="/favs"
        onClick={onLinkClick}
      >
        Favs
      </NavLink>
      <ThemeButton />
    </div>
  );
};
