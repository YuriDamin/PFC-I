import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useFavorites } from "../context/FavoritesContext";
import { useXP } from "../context/XPContext";
import "./LibraryShelf.css";

/* === Função auxiliar para gêneros === */
function mapGenreToKey(genero) {
  const g = (genero || "").toLowerCase();
  if (g.includes("rpg")) return "rpg";
  if (g.includes("plataforma")) return "plataforma";
  if (g.includes("beat")) return "beatemup";
  if (g.includes("stealth")) return "stealth";
  if (g.includes("fps")) return "fps";
  if (g.includes("mundo aberto")) return "openworld";
  if (g.includes("metroidvania")) return "metroidvania";
  if (g.includes("fantasia")) return "fantasy";
  if (g.includes("corrida")) return "racing";
  if (g.includes("ação") && g.includes("aventura")) return "action-adventure";
  if (g.includes("ação")) return "action";
  if (g.includes("aventura")) return "adventure";
  return "default";
}

/* === Livro arrastável === */
function SortableBook({ jogo }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: jogo.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="book draggable">
      <div className="book-cover">
        <span className={`genre-tag ${mapGenreToKey(jogo.genero)}`}>{jogo.genero}</span>
        <img src={jogo.imagem_url} alt={jogo.titulo} />
        <div className="book-info">
          <p>{jogo.titulo}</p>
          <Link to={`/console/${jogo.consoleId}/${jogo.id}`} className="open-btn">
            Abrir
          </Link>
        </div>
      </div>
    </div>
  );
}

/* === Página principal === */
function FavoritesPage() {
  const { favorites } = useFavorites();
  const { xp } = useXP();
  const [ordered, setOrdered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeGenres, setActiveGenres] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("libraryOrder") || "[]");
    if (saved.length > 0) {
      const filtered = saved
        .map((id) => favorites.find((f) => f.id === id))
        .filter(Boolean);
      const missing = favorites.filter((f) => !saved.includes(f.id));
      setOrdered([...filtered, ...missing]);
    } else {
      setOrdered(favorites);
    }
  }, [favorites]);

  useEffect(() => {
    if (ordered.length > 0) {
      localStorage.setItem("libraryOrder", JSON.stringify(ordered.map((f) => f.id)));
    }
  }, [ordered]);

  const toggleGenre = (key) => {
    const next = new Set(activeGenres);
    next.has(key) ? next.delete(key) : next.add(key);
    setActiveGenres(next);
  };

  const filteredFavorites = useMemo(() => {
    let result = ordered;
    if (activeGenres.size > 0) {
      result = result.filter((j) => activeGenres.has(mapGenreToKey(j.genero)));
    }
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter((j) => j.titulo.toLowerCase().includes(term));
    }
    return result;
  }, [ordered, activeGenres, searchTerm]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = ordered.findIndex((i) => i.id === active.id);
      const newIndex = ordered.findIndex((i) => i.id === over.id);
      setOrdered((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  if (favorites.length === 0) {
    return (
      <div className="empty-library">
        <h2>📭 Sua biblioteca está vazia.</h2>
        <p>
          Explore o <Link to="/">Museu dos Consoles</Link> e adicione jogos à sua estante!
        </p>
      </div>
    );
  }

  return (
    <div className="library-container">
      {/* === Cabeçalho estilizado === */}
      <div className="library-header">
        <h2>🎮 Minha Estante de Jogos</h2>
        <p>Gerencie seus títulos favoritos, ordene, filtre e reviva a nostalgia!</p>
      </div>

      {/* === Estatísticas rápidas === */}
      <div className="library-stats">
        <div><strong>{favorites.length}</strong> jogos</div>
        <div><strong>{activeGenres.size || "Todos"}</strong> gêneros</div>
        <div><strong>{xp}</strong> XP total</div>
      </div>

      {/* === Pesquisa === */}
      <input
        type="text"
        className="search-bar"
        placeholder="🔍 Pesquise um jogo..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* === Filtros === */}
      <button
        className={`toggle-filters-btn ${showFilters ? "open" : ""}`}
        onClick={() => setShowFilters(!showFilters)}
      >
        🎮 Filtrar por gênero
        <span className="arrow-icon" />
      </button>

      {showFilters && (
        <div className="genre-legend">
          {["Ação", "Aventura", "RPG", "Plataforma", "Corrida", "Fantasia", "FPS", "Stealth"].map((g) => {
            const key = mapGenreToKey(g);
            const active = activeGenres.has(key);
            return (
              <button
                key={key}
                className={`genre-badge ${active ? "active" : ""}`}
                onClick={() => toggleGenre(key)}
              >
                {g}
              </button>
            );
          })}
        </div>
      )}

      {/* === Estante === */}
      <div className="shelf">
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext
            items={filteredFavorites.map((j) => j.id)}
            strategy={horizontalListSortingStrategy}
          >
            <div className="book-row">
              {filteredFavorites.map((jogo) => (
                <SortableBook key={jogo.id} jogo={jogo} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default FavoritesPage;
