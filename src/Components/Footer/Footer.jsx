import React from 'react';
import logo from '../../img/DH.ico';
import styles from './Footer.css';

export const Footer = ({ themeClass }) => {
  return (
    <footer>
      <a
        className={`app__footer ${themeClass}`}
        href="https://www.digitalhouse.com/"
        target="_blank"
        rel="noreferrer"
      >
        <p className="app_footer__p">Powered by</p>
        <img
          style={{ width: '40px', marginLeft: '10px', height: '40px' }}
          src={logo}
          alt="DH-logo"
        />
      </a>
    </footer>
  );
};
