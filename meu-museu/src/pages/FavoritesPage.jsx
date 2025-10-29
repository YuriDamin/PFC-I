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
import "./LibraryShelf.css";
import "../components/GameList.css";

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

const genreColors = [
  { name: "Todos", key: "all", class: "genre-default" },
  { name: "Ação", key: "action", class: "genre-action" },
  { name: "Aventura", key: "adventure", class: "genre-adventure" },
  { name: "RPG", key: "rpg", class: "genre-rpg" },
  { name: "Plataforma", key: "plataforma", class: "genre-plataforma" },
  { name: "Beat 'em up", key: "beatemup", class: "genre-beatemup" },
  { name: "Stealth", key: "stealth", class: "genre-stealth" },
  { name: "FPS", key: "fps", class: "genre-fps" },
  { name: "Mundo Aberto", key: "openworld", class: "genre-openworld" },
  { name: "Metroidvania", key: "metroidvania", class: "genre-metroidvania" },
  { name: "Fantasia", key: "fantasy", class: "genre-fantasy" },
  { name: "Corrida", key: "racing", class: "genre-racing" },
  { name: "Ação/Aventura", key: "action-adventure", class: "genre-action-adventure" },
];

/* === Componente Sortable para cada livro === */
function SortableBook({ jogo }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: jogo.id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="book draggable">
      <div className="book-spine">
        <span className="book-title">{jogo.titulo}</span>
      </div>
      <div className="book-cover">
        <img src={jogo.imagem_url} alt={jogo.titulo} />
        <div className="book-info">
          <p>{jogo.genero}</p>
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
  const [ordered, setOrdered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeGenres, setActiveGenres] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);

  /* Carrega ordem salva */
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

  /* Salva ordem */
  useEffect(() => {
    if (ordered.length > 0) {
      localStorage.setItem("libraryOrder", JSON.stringify(ordered.map((f) => f.id)));
    }
  }, [ordered]);

  /* Filtros */
  const toggleGenre = (key) => {
    if (key === "all") {
      setActiveGenres(new Set());
      return;
    }
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

  if (favorites.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>📭 Sua biblioteca está vazia.</h2>
        <Link to="/">Voltar para o Museu</Link>
      </div>
    );
  }

  /* Ao soltar um item */
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = ordered.findIndex((i) => i.id === active.id);
      const newIndex = ordered.findIndex((i) => i.id === over.id);
      setOrdered((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div className="library-container">
      <h2 className="library-title">📚 Minha Estante de Jogos</h2>

      {/* === Barra de pesquisa === */}
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

      <div className={`genre-legend-wrapper ${showFilters ? "open" : ""}`}>
        <div className="genre-legend">
          {genreColors.map((g) => {
            const isAll = g.key === "all";
            const isActive = isAll
              ? activeGenres.size === 0
              : activeGenres.has(g.key);
            return (
              <button
                key={g.key}
                className={`genre-badge ${g.class} ${isActive ? "active" : ""}`}
                onClick={() => toggleGenre(g.key)}
              >
                {g.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* === Prateleira === */}
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
