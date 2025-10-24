import React from 'react';
import GameCard from './GameCard';
import './GameList.css';

function GameList({ jogos, consoleId }) {
  return (
    <div className="game-list-container">
      {jogos.map(jogo => (
        <GameCard 
          key={jogo.id} 
          jogo={jogo} 
          consoleId={consoleId} // Passa o ID do console
        />
      ))}
    </div>
  );
}

export default GameList;