import React from 'react';
import logo from '../../img/DH.ico';

export const Footer = ({themeClass}) => {
  return (
    <footer className={`app__footer ${themeClass}`}>
      <p>Powered by</p>
      <img
        style={{ width: '40px', marginLeft: '10px', height: '40px' }}
        src={logo}
        alt="DH-logo"
      />
      </footer>
  )
};
