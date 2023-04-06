import React from 'react';
import { useAppContext } from '../../hooks/useAppContext';
import { MoonIcon, SunIcon } from '../icons';

export const ThemeButton = () => {
  const {
    changeTheme,
    state: { isDarkMode },
  } = useAppContext();

  return (
    <button
      className="menu-modal__button"
      onClick={changeTheme}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
