import React from 'react';
import logo from '../../img/DH.ico';

export const Footer = ({ themeClass }) => {
  return (
    <footer>
      <a
        className={`footer ${themeClass}`}
        href="https://www.digitalhouse.com/"
        target="_blank"
        rel="noreferrer"
      >
        <p className="footer__p">Powered by</p>
        <img
          style={{ width: '40px', marginLeft: '10px', height: '40px' }}
          src={logo}
          alt="DH-logo"
        />
      </a>
    </footer>
  );
};
