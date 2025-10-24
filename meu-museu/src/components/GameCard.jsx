import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

function GameCard({ jogo, consoleId }) {
  
  // Cria a URL de destino (ex: /console/ps1/ps1-metal-gear)
  const gameUrl = `/console/${consoleId}/${jogo.id}`;

  return (
    <Link to={gameUrl} className="game-card">
      <img src={jogo.imagem_url} alt={`Capa do ${jogo.titulo}`} />
      <div className="game-card-info">
        <h3>{jogo.titulo}</h3>
        <p><strong>Plataforma:</strong> {jogo.plataforma}</p>
        <p><strong>Ano:</strong> {jogo.ano}</p>
      </div>
    </Link>
  );
}

export default GameCard;