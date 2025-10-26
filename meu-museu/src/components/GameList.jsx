import React from 'react';
import GameCard from './GameCard';
import './GameList.css';

const genreColors = [
  { name: 'Ação', class: 'genre-action' },
  { name: 'Aventura', class: 'genre-adventure' },
  { name: 'RPG', class: 'genre-rpg' },
  { name: 'Plataforma', class: 'genre-plataforma' },
  { name: "Beat 'em up", class: 'genre-beatemup' },
  { name: 'Stealth', class: 'genre-stealth' },
  { name: 'FPS', class: 'genre-fps' },
  { name: 'Mundo Aberto', class: 'genre-openworld' },
  { name: 'Metroidvania', class: 'genre-metroidvania' },
  { name: 'Fantasia', class: 'genre-fantasy' },
  { name: 'Ação/Aventura', class: 'genre-action-adventure' },
];

function GameList({ jogos, consoleId }) {
  return (
    <div className="game-list-wrapper">
      {/* --- LEGENDA DE GÊNEROS --- */}
      <div className="genre-legend">
        {genreColors.map((g) => (
          <span key={g.class} className={`genre-badge ${g.class}`}>
            {g.name}
          </span>
        ))}
      </div>

      {/* --- LISTA DE JOGOS --- */}
      <div className="game-list-container">
        {jogos.map((jogo) => (
          <GameCard key={jogo.id} jogo={jogo} consoleId={consoleId} />
        ))}
      </div>
    </div>
  );
}

export default GameList;
