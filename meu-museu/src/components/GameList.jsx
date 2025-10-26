import React, { useMemo, useState } from 'react';
import GameCard from './GameCard';
import './GameList.css';

function mapGenreToKey(genero) {
  const g = (genero || '').toLowerCase();
  if (g.includes('rpg')) return 'rpg';
  if (g.includes('plataforma 3d') || g.includes('plataforma')) return 'plataforma';
  if (g.includes("beat") || g.includes("beat 'em up")) return 'beatemup';
  if (g.includes('stealth')) return 'stealth';
  if (g.includes('fps')) return 'fps';
  if (g.includes('mundo aberto')) return 'openworld';
  if (g.includes('metroidvania')) return 'metroidvania';
  if (g.includes('fantasia')) return 'fantasy';
  if (g.includes('ação') && g.includes('aventura')) return 'action-adventure';
  if (g.includes('ação')) return 'action';
  if (g.includes('aventura')) return 'adventure';
  return 'default';
}

const genreColors = [
  { name: 'Todos', key: 'all', class: 'genre-default' },
  { name: 'Ação', key: 'action', class: 'genre-action' },
  { name: 'Aventura', key: 'adventure', class: 'genre-adventure' },
  { name: 'RPG', key: 'rpg', class: 'genre-rpg' },
  { name: 'Plataforma', key: 'plataforma', class: 'genre-plataforma' },
  { name: "Beat 'em up", key: 'beatemup', class: 'genre-beatemup' },
  { name: 'Stealth', key: 'stealth', class: 'genre-stealth' },
  { name: 'FPS', key: 'fps', class: 'genre-fps' },
  { name: 'Mundo Aberto', key: 'openworld', class: 'genre-openworld' },
  { name: 'Metroidvania', key: 'metroidvania', class: 'genre-metroidvania' },
  { name: 'Fantasia', key: 'fantasy', class: 'genre-fantasy' },
  { name: 'Ação/Aventura', key: 'action-adventure', class: 'genre-action-adventure' },
];

function GameList({ jogos, consoleId }) {
  const [active, setActive] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);

  function toggle(key) {
    if (key === 'all') {
      setActive(new Set());
      return;
    }
    const next = new Set(active);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    setActive(next);
  }

  const filtered = useMemo(() => {
    if (active.size === 0) return jogos;
    return jogos.filter(j => active.has(mapGenreToKey(j.genero)));
  }, [jogos, active]);

  return (
    <div className="game-list-wrapper">
      {/* --- BOTÃO COM SETA ANIMADA --- */}
      <button
        className={`toggle-filters-btn ${showFilters ? 'open' : ''}`}
        onClick={() => setShowFilters(!showFilters)}
      >
        🎮 Filtrar por gênero
        <span className="arrow-icon" />
      </button>

      {/* --- CONTAINER ANIMADO DOS FILTROS --- */}
      <div className={`genre-legend-wrapper ${showFilters ? 'open' : ''}`}>
        <div className="genre-legend">
          {genreColors.map((g) => {
            const isAll = g.key === 'all';
            const isActive = isAll ? active.size === 0 : active.has(g.key);
            const activeClass = isActive ? 'active' : '';
            return (
              <button
                key={g.key}
                type="button"
                className={`genre-badge ${g.class} ${activeClass}`}
                onClick={() => toggle(g.key)}
              >
                {g.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="genre-feedback">
        {active.size === 0
          ? 'Mostrando todos os jogos'
          : `Filtrando por: ${[...active].join(', ')} — ${filtered.length} jogo(s)`}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-list">Nenhum jogo encontrado para o filtro selecionado.</div>
      ) : (
        <div className="game-list-container">
          {filtered.map((jogo) => (
            <GameCard key={jogo.id} jogo={jogo} consoleId={consoleId} />
          ))}
        </div>
      )}
    </div>
  );
}

export default GameList;
