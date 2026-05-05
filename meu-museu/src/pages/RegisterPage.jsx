import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './RegisterPage.css';

function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setErro('');

    if (senha !== confirmarSenha) {
      setErro('As senhas não conferem.');
      return;
    }

    const result = register({
      name,
      email,
      senha,
    });

    if (!result.ok) {
      setErro(result.message || 'Não foi possível criar a conta.');
      return;
    }

    navigate('/login');
  };

  return (
    <div className="register-container">
      <div className="register-card glass">
        <h1>✨ Criar Conta</h1>
        <p className="subtitle">
          Crie seu perfil para explorar o museu e salvar seu progresso.
        </p>

        <form onSubmit={handleRegister}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Crie uma senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            minLength="4"
            required
          />

          <label htmlFor="confirmarSenha">Confirmar senha</label>
          <input
            type="password"
            id="confirmarSenha"
            placeholder="Digite a senha novamente"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            minLength="4"
            required
          />

          {erro && <p className="erro">{erro}</p>}

          <button type="submit" className="register-btn">
            Criar Conta
          </button>
        </form>

        <p className="login-text">
          Já tem conta?{' '}
          <Link to="/login" className="login-link">
            Entrar agora
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
