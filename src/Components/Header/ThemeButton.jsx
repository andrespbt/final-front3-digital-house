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
      className="menu-modal__theme-button"
      onClick={changeTheme}
      aria-label="themeButton"
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
