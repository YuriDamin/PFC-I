import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './LoginPage.css';

function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const ok = login(email, senha);
    if (!ok) setErro('E-mail ou senha incorretos.');
  };

  const handleGuestLogin = () => {
    login('visitante@museu.com', 'guest');
  };

  return (
    <div className="login-container">
      <div className="login-card glass">
        <h1>🎮 Acesso ao Museu</h1>
        <p className="subtitle">Entre ou explore como visitante!</p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          {erro && <p className="erro">{erro}</p>}

          <button type="submit" className="login-btn">Entrar</button>
        </form>

        <div className="divider">ou</div>

        <button onClick={handleGuestLogin} className="guest-btn">
          👾 Entrar como Visitante
        </button>

        {/* 🔹 Novo bloco: criar conta */}
        <p className="register-text">
          Ainda não tem conta?{' '}
          <Link to="/register" className="register-link">
            ✨ Criar Conta
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
