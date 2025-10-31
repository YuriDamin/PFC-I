import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useXP } from "../context/XPContext";
import {
  Home,
  ArrowLeft,
  BookMarked,
  Medal,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import "./Header.css";

function Header() {
  const { user, logout } = useAuth();
  const { level, xp, progress } = useXP();
  const barRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
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
      {/* === ESQUERDA === */}
      <div className="header-left">
        {!isHome ? (
          <button className="header-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} />
            <span>Voltar</span>
          </button>
        ) : (
          <Link to="/" className="header-btn">
            <Home size={18} />
            <span>Início</span>
          </Link>
        )}
      </div>

      {/* === CENTRO === */}
      <div className="header-center">
        <h1 className="logo">Museu dos Consoles</h1>
      </div>

      {/* === DIREITA === */}
      <div className="header-right">
        {/* === Menu hambúrguer (mobile) === */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* === Ações Desktop === */}
        <div className={`header-actions ${menuOpen ? "open" : ""}`}>
          {user && (
            <div className="user-info">
              <p>
                <strong>{user.email}</strong>
                {user.isVisitor && (
                  <span className="visitor-badge">Visitante</span>
                )}
              </p>
            </div>
          )}

          <div className="xp-container">
            <div className="xp-info">
              <span>Nível {level}</span>
              <span>{xp} XP</span>
            </div>
            <div className="xp-bar">
              <div ref={barRef} className="xp-bar-fill" />
            </div>
          </div>

          <Link
            to="/biblioteca"
            className="header-btn"
            onClick={() => setMenuOpen(false)}
          >
            <BookMarked size={18} />
            <span>Biblioteca</span>
          </Link>

          <Link
            to="/insignias"
            className="header-btn"
            onClick={() => setMenuOpen(false)}
          >
            <Medal size={18} />
            <span>Insígnias</span>
          </Link>

          <button
            className="header-btn logout"
            onClick={() => {
              logout();
              setMenuOpen(false);
            }}
          >
            <LogOut size={18} />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
