import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeButton } from './ThemeButton';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/favs">Favs</NavLink>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <ThemeButton />
      </nav>
    </>
  );
};
