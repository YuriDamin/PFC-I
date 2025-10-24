// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // <-- Aqui importamos o CSS

function Header() {
  return (
    // Usamos a classe CSS 'app-header' aqui
    <header className="app-header"> 
      <Link to="/" className="header-link">
        <h1>Museu Digital de Jogos Clássicos</h1>
      </Link>
    </header>
  );
}
export default Header;