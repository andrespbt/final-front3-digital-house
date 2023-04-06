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
        to="/home"
        onClick={onLinkClick}
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        onClick={onLinkClick}
      >
        Contact
      </NavLink>
      <NavLink
        to="/favs"
        onClick={onLinkClick}
      >
        Favs
      </NavLink>
      <ThemeButton />
    </div>
  );
};
