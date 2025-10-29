import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useXP } from '../context/XPContext';
import './Header.css';

function Header() {
  const { user, logout } = useAuth();
  const { level, xp, progress } = useXP();
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.width = `${progress * 100}%`;
    }
  }, [progress]);

  return (
    <header className="header">
      <h1 className="logo">🎮 Museu dos Consoles</h1>

      <div className="user-section">
        {user && (
          <div className="user-info">
            <p>
              👤 <strong>{user.email}</strong>
              {user.isVisitor && <span className="visitor-badge">Visitante</span>}
            </p>
          </div>
        )}

        {/* --- XP e Nível --- */}
        <div className="xp-container">
          <div className="xp-info">
            <span>Nível {level}</span>
            <span>{xp} XP</span>
          </div>
          <div className="xp-bar">
            <div ref={barRef} className="xp-bar-fill" />
          </div>
        </div>

        {/* --- Navegação adicional --- */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link to="/biblioteca" className="logout-btn">
            📚 Biblioteca
          </Link>

          {user && (
            <button className="logout-btn" onClick={logout}>
              🚪 Sair
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
