import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListIcon } from '../icons';
import { MenuModal, Navbar } from './';

export const Header = ({ themeClass }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={`${themeClass} header`}>
      <h1
        className="header__h1"
        onClick={() => navigate('/')}
        aria-label="h1"
      >
        DH Odonto
      </h1>
      <Navbar />
      <button
        className="header__button"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        <ListIcon themeClass={themeClass} />
      </button>

      {isModalOpen && (
        <MenuModal
          themeClass={themeClass}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </header>
  );
};
