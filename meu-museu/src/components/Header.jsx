import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useXP } from "../context/XPContext";
import "./Header.css";

function Header() {
  const { user, logout } = useAuth();
  const { level, xp, progress } = useXP();
  const barRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.width = `${progress * 100}%`;
    }
  }, [progress]);

  const isHome = location.pathname === "/";
  const isLogin = location.pathname === "/login";

  if (isLogin) return null;

  return (
    <header className="header">
      <div className="header-left">
        {!isHome ? (
          <button className="menu-btn" onClick={() => navigate(-1)}>
            ⬅️ Voltar
          </button>
        ) : (
          <Link to="/" className="menu-btn">
            🏠 Menu Principal
          </Link>
        )}
      </div>

      <div className="header-center">
        <h1 className="logo">🎮 Museu dos Consoles</h1>
      </div>

      <div className="header-right">
        {user && (
          <div className="user-info">
            <p>
              👤 <strong>{user.email}</strong>
              {user.isVisitor && (
                <span className="visitor-badge">Visitante</span>
              )}
            </p>
          </div>
        )}

        {/* === Barra de XP === */}
        <div className="xp-container">
          <div className="xp-info">
            <span>Nível {level}</span>
            <span>{xp} XP</span>
          </div>
          <div className="xp-bar">
            <div ref={barRef} className="xp-bar-fill" />
          </div>
        </div>

        {/* === Ações do cabeçalho === */}
        <div className="header-actions">
          <Link to="/biblioteca" className="logout-btn">
            📚 Biblioteca
          </Link>

          {/* 🏅 Novo botão de Insígnias */}
          <Link to="/insignias" className="logout-btn">
            🏅 Insígnias
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
