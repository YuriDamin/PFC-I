import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

function Header() {
  const { user, logout } = useAuth();

  const isVisitor = user?.email === 'visitante@museu.com';

  return (
    <header className="app-header">
      <Link to="/" className="header-link">
        <h1>Museu Digital de Jogos Clássicos</h1>
      </Link>

      <div className="header-actions">
        {user ? (
          <>
            {isVisitor && (
              <div className="visitor-badge" title="Modo Visitante — acesso de exploração">
                👾 Visitante
              </div>
            )}

            {!isVisitor && <span className="user-email">{user.email}</span>}

            <button className="logout-btn" onClick={logout}>
              Sair
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="login-btn">Entrar</button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
