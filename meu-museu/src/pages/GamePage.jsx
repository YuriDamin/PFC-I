import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getConsoleById, getGameById } from '../dados/museuDados';
import { useXP } from '../context/XPContext';
import { useFavorites } from '../context/FavoritesContext';
import { useAchievements } from '../context/AchievementsContext'; // 🏅 Novo
import Toast from '../components/Toast';
import './GamePage.css';

function GamePage() {
  const { consoleId, gameId } = useParams();
  const console = getConsoleById(consoleId);
  const jogo = getGameById(consoleId, gameId);
  const { addXP } = useXP();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { unlock } = useAchievements(); // 🏅 Novo

  const [toast, setToast] = useState(null);
const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

useEffect(() => {
  setCurrentGalleryIndex(0);
}, [consoleId, gameId]);

  useEffect(() => {
    if (jogo) {
      const xpKey = `xp_given_${consoleId}_${gameId}`;
      const alreadyGiven = sessionStorage.getItem(xpKey);

      if (!alreadyGiven) {
        addXP(10);
        setToast({
          message: `✨ +10 XP! Você explorou "${jogo.titulo}".`,
          type: 'success',
        });

        sessionStorage.setItem(xpKey, 'true');
      }
    }
  }, [consoleId, gameId, jogo, addXP]);

  useEffect(() => {
    if (jogo && console) {
      const key = `games_${consoleId}`;
      const count = parseInt(localStorage.getItem(key) || '0', 10) + 1;
      localStorage.setItem(key, count);

if (count === 5) {
  unlock(`${key}_5`, `Explorou 5 jogos do ${console.nome}`);
}
if (count === 10) {
  unlock(`${key}_10`, `Explorou 10 jogos do ${console.nome}`);
}
if (count === 15) {
  unlock(`${key}_15`, `Explorou 15 jogos do ${console.nome}`);
}
    }
  }, [consoleId, jogo, console, unlock]);

  if (!console || !jogo) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Ops! Jogo não encontrado.</h2>
        <Link to="/">Voltar para a Home</Link>
      </div>
    );
  }

  const favorito = isFavorite(consoleId, jogo.id);
  const galleryImages = jogo.detalhes?.imagens_galeria || [];
  const hasGallery = galleryImages.length > 0;

function handlePrevImage() {
  if (!hasGallery) return;

  setCurrentGalleryIndex((prev) =>
    prev === 0 ? galleryImages.length - 1 : prev - 1
  );
}

function handleNextImage() {
  if (!hasGallery) return;

  setCurrentGalleryIndex((prev) =>
    prev === galleryImages.length - 1 ? 0 : prev + 1
  );
}
  return (
    <div className="game-page-container">
      <Link to={`/console/${consoleId}`} className="link-voltar">
        &larr; Voltar para {console.nome}
      </Link>

      <div className="game-header">
        <img
          src={jogo.imagem_url}
          alt={jogo.titulo}
          className="game-main-image"
        />
        <div className="game-header-info">
          <h1>{jogo.titulo}</h1>

          {/* --- Botão de Favoritar --- */}
          <button
            onClick={() => toggleFavorite(consoleId, jogo)}
            className={`favorite-btn ${favorito ? 'active' : ''}`}
          >
            {favorito ? '💖 Remover dos Favoritos' : '⭐ Adicionar aos Favoritos'}
          </button>

          <p><strong>Plataforma:</strong> {console.nome}</p>
          <p><strong>Ano:</strong> {jogo.ano}</p>
          <p><strong>Gênero:</strong> {jogo.genero}</p>
          <p><strong>Desenvolvedora:</strong> {jogo.desenvolvedora}</p>
        </div>
      </div>

      <div className="game-content">
        <h3>Sobre o Jogo</h3>
        <p>{jogo.detalhes.descricao_longa}</p>

         <h3>Galeria de Imagens</h3>

{hasGallery && (
  <div className="game-carousel">
    <div className="carousel-main">
      <img
        src={galleryImages[currentGalleryIndex]}
        alt={`Screenshot ${currentGalleryIndex + 1}`}
        className="carousel-main-image"
      />

      {galleryImages.length > 1 && (
        <>
          <button
            type="button"
            className="carousel-btn prev"
            onClick={handlePrevImage}
            aria-label="Imagem anterior"
          >
            ‹
          </button>

          <button
            type="button"
            className="carousel-btn next"
            onClick={handleNextImage}
            aria-label="Próxima imagem"
          >
            ›
          </button>
        </>
      )}

      <span className="carousel-counter">
        {currentGalleryIndex + 1} / {galleryImages.length}
      </span>
    </div>

    {galleryImages.length > 1 && (
      <div className="carousel-thumbnails">
        {galleryImages.map((img, index) => (
          <button
            key={index}
            type="button"
            className={`carousel-thumb ${
              currentGalleryIndex === index ? 'active' : ''
            }`}
            onClick={() => setCurrentGalleryIndex(index)}
            aria-label={`Ver screenshot ${index + 1}`}
          >
            <img src={img} alt={`Miniatura ${index + 1}`} />
          </button>
        ))}
      </div>
    )}
  </div>
)}
        
{jogo.detalhes.videos && jogo.detalhes.videos.length > 0 && (
  <>
    <h3>Vídeos</h3>

    <div className="game-videos">
      {jogo.detalhes.videos.map((video, index) => (
        <div className="video-card" key={index}>
          <h4>{video.titulo}</h4>

          <div className="video-wrapper">
            <iframe
              src={video.url}
              title={video.titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  </>
)}
        <h3>Dicas e Curiosidades</h3>
        <ul className="game-tips">
          {jogo.detalhes.dicas.map((dica, index) => (
            <li key={index}>{dica}</li>
          ))}
        </ul>
      </div>

      {/* --- Toast de XP ou Favorito --- */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default GamePage;
