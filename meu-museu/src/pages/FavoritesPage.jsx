import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import './ConsolePage.css'; // reaproveita estilo de listas

function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>📭 Sua biblioteca está vazia.</h2>
        <Link to="/">Voltar para o Museu</Link>
      </div>
    );
  }

  return (
    <div className="console-page-layout">
      <div className="game-list-pane">
        <h3>⭐ Meus Jogos Favoritos</h3>
        <div className="game-list-container">
          {favorites.map((jogo) => (
            <Link
              key={`${jogo.consoleId}-${jogo.id}`}
              to={`/console/${jogo.consoleId}/${jogo.id}`}
              className="game-card"
            >
              <img src={jogo.imagem_url} alt={jogo.titulo} />
              <div className="game-card-info">
                <h3>{jogo.titulo}</h3>
                <p>{jogo.genero}</p>
                <p><strong>Plataforma:</strong> {jogo.plataforma}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FavoritesPage;
