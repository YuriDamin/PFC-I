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
  if (g.includes('corrida') || g.includes('racing')) return 'racing';
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
  { name: 'Corrida', key: 'racing', class: 'genre-racing' },
  { name: 'Ação/Aventura', key: 'action-adventure', class: 'genre-action-adventure' },
];

function GameList({ jogos, consoleId }) {
  const [active, setActive] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // 🆕 novo estado

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
    let result = jogos;

    // filtro de gênero
    if (active.size > 0) {
      result = result.filter(j => active.has(mapGenreToKey(j.genero)));
    }

    // filtro de pesquisa
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(j => j.titulo.toLowerCase().includes(term));
    }

    return result;
  }, [jogos, active, searchTerm]);

  return (
    <div className="game-list-wrapper">
      {/* --- BARRA DE PESQUISA --- */}
      <input
        type="text"
        className="search-bar"
        placeholder="🔍 Pesquise um jogo..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

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
        {active.size === 0 && searchTerm === ''
          ? 'Mostrando todos os jogos'
          : `Filtrando ${searchTerm ? `por "${searchTerm}"` : ''} ${active.size > 0 ? `e gênero: ${[...active].join(', ')}` : ''} — ${filtered.length} jogo(s)`}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-list">Nenhum jogo encontrado.</div>
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
