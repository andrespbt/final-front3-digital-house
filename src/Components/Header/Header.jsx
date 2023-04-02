import React from 'react';
import { useState } from 'react';
import { ListIcon } from '../icons';
import { MenuModal, Navbar } from './';

export const Header = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={`${isDarkMode ? 'dark' : 'light'} app__header`}>
      <h1 className="header__h1">DH Odonto</h1>
      <Navbar />
      <button
        className="header__button"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <ListIcon isDarkMode={isDarkMode} />
      </button>

      {isModalOpen && (
        <MenuModal
          isDarkMode={isDarkMode}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </header>
  );
};
