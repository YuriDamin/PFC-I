import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useXP } from '../context/XPContext';
import './Header.css';

function Header() {
  const { user, logout } = useAuth();
  const { level, progress } = useXP();
  const isVisitor = user?.email === 'visitante@museu.com';

  return (
    <header className="app-header">
      <Link to="/" className="header-link">
        <h1>Museu Digital de Jogos Clássicos</h1>
      </Link>

      <div className="header-actions">
        {/* 🧩 Nível do Jogador */}
        <div className="xp-bar-container" title={`Nível ${level}`}>
          <span className="xp-label">Nível {level}</span>
          <div className="xp-bar">
            <div
              className="xp-progress"
              style={{ width: `${progress * 100}%` }}
            ></div>
          </div>
        </div>

        {user ? (
          <>
            {isVisitor && (
              <div
                className="visitor-badge"
                title="Modo Visitante — acesso de exploração"
              >
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
