import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeButton } from './ThemeButton';

export const MenuModal = ({ isDarkMode, setIsModalOpen }) => {
  const themeColor = isDarkMode ? 'dark' : 'light';

  const onLinkClick = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={`header__menu_modal ${themeColor}`}>
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
