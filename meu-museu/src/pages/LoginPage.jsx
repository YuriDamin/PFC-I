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
    setErro('');

    const ok = login(email.trim(), senha);

    if (!ok) {
      setErro('E-mail ou senha incorretos.');
    }
  };

  const handleGuestLogin = () => {
    setErro('');

    const ok = login('visitante@museu.com', 'guest');

    if (!ok) {
      setErro('Não foi possível entrar como visitante.');
    }
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

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>

        <div className="divider">ou</div>

        <button type="button" onClick={handleGuestLogin} className="guest-btn">
          👾 Entrar como Visitante
        </button>

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
