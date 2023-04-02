import React from 'react';
import logo from '../img/DH.ico';

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img
        style={{ width: '40px', marginLeft: '10px', height: '40px' }}
        src={logo}
        alt="DH-logo"
      />
    </footer>
  );
};

export default Footer;
