import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css';

function mapGenreToClass(genero) {
  const g = (genero || '').toLowerCase();

  if (g.includes('rpg')) return 'genre-rpg';
  if (g.includes('plataforma 3d') || g.includes('plataforma')) return 'genre-plataforma';
  if (g.includes("beat") || g.includes("beat 'em up")) return 'genre-beatemup';
  if (g.includes('stealth')) return 'genre-stealth';
  if (g.includes('fps')) return 'genre-fps';
  if (g.includes('mundo aberto')) return 'genre-openworld';
  if (g.includes('metroidvania')) return 'genre-metroidvania';
  if (g.includes('fantasia')) return 'genre-fantasy';
  if (g.includes('ação') && g.includes('aventura')) return 'genre-action-adventure';
  if (g.includes('ação')) return 'genre-action';
  if (g.includes('aventura')) return 'genre-adventure';
  return 'genre-default';
}

function GameCard({ jogo, consoleId }) {
  const gameUrl = `/console/${consoleId}/${jogo.id}`;
  const genreClass = mapGenreToClass(jogo.genero);

  return (
    <Link to={gameUrl} className="game-card">
      <img src={jogo.imagem_url} alt={`Capa do ${jogo.titulo}`} />
      <div className="game-card-info">
        {/* linha título + gênero */}
        <div className="game-card-row">
          <h3>{jogo.titulo}</h3>
          <span className={`genre-badge ${genreClass}`}>{jogo.genero}</span>
        </div>

        <p><strong>Plataforma:</strong> {jogo.plataforma}</p>
        <p><strong>Ano:</strong> {jogo.ano}</p>
      </div>
    </Link>
  );
}

export default GameCard;
