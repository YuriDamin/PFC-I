import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getConsoleById, getGameById } from '../dados/museuDados';
import { useXP } from '../context/XPContext';
import { useFavorites } from '../context/FavoritesContext';
import { useAchievements } from '../context/AchievementsContext';
import Toast from '../components/Toast';
import './GamePage.css';

function GamePage() {
  const { consoleId, gameId } = useParams();
  const consoleData = getConsoleById(consoleId);
  const jogo = getGameById(consoleId, gameId);

  const { addXP } = useXP();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { unlock } = useAchievements();

  const [toast, setToast] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const galleryImages = jogo?.detalhes?.imagens_galeria || [];
  const hasGallery = galleryImages.length > 0;

  function handleImageError(event) {
    event.currentTarget.onerror = null;
    event.currentTarget.src = '/imagens/placeholder-game.png';
  }

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

  useEffect(() => {
    setCurrentGalleryIndex(0);
    setIsImageModalOpen(false);
  }, [consoleId, gameId]);

  useEffect(() => {
    function handleModalKeyDown(event) {
      if (!isImageModalOpen) return;

      if (event.key === 'Escape') {
        setIsImageModalOpen(false);
        return;
      }

      if (galleryImages.length <= 1) return;

      if (event.key === 'ArrowLeft') {
        setCurrentGalleryIndex((prev) =>
          prev === 0 ? galleryImages.length - 1 : prev - 1
        );
      }

      if (event.key === 'ArrowRight') {
        setCurrentGalleryIndex((prev) =>
          prev === galleryImages.length - 1 ? 0 : prev + 1
        );
      }
    }

    window.addEventListener('keydown', handleModalKeyDown);

    return () => {
      window.removeEventListener('keydown', handleModalKeyDown);
    };
  }, [isImageModalOpen, galleryImages.length]);

  useEffect(() => {
    if (!jogo) return;

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
  }, [consoleId, gameId, jogo, addXP]);

  useEffect(() => {
    if (!jogo || !consoleData) return;

    const key = `games_${consoleId}`;
    const count = parseInt(localStorage.getItem(key) || '0', 10) + 1;
    localStorage.setItem(key, count.toString());

    if (count === 5) {
      unlock(`${key}_5`, `Explorou 5 jogos do ${consoleData.nome}`);
    }

    if (count === 10) {
      unlock(`${key}_10`, `Explorou 10 jogos do ${consoleData.nome}`);
    }

    if (count === 15) {
      unlock(`${key}_15`, `Explorou 15 jogos do ${consoleData.nome}`);
    }
  }, [consoleId, jogo, consoleData, unlock]);

  if (!consoleData || !jogo) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Ops! Jogo não encontrado.</h2>
        <Link to="/">Voltar para a Home</Link>
      </div>
    );
  }

  const favorito = isFavorite(consoleId, jogo.id);

  return (
    <div className="game-page-container">
      <Link to={`/console/${consoleId}`} className="link-voltar">
        &larr; Voltar para {consoleData.nome}
      </Link>

      <div className="game-header">
        <img
          src={jogo.imagem_url || '/images/placeholder-game.png'}
          alt={jogo.titulo}
          className="game-main-image"
          onError={handleImageError}
        />

        <div className="game-header-info">
          <h1>{jogo.titulo}</h1>

          <button
            type="button"
            onClick={() => toggleFavorite(consoleId, jogo)}
            className={`favorite-btn ${favorito ? 'active' : ''}`}
          >
            {favorito ? '💖 Remover dos Favoritos' : '⭐ Adicionar aos Favoritos'}
          </button>

          <p>
            <strong>Plataforma:</strong> {consoleData.nome}
          </p>
          <p>
            <strong>Ano:</strong> {jogo.ano}
          </p>
          <p>
            <strong>Gênero:</strong> {jogo.genero}
          </p>
          <p>
            <strong>Desenvolvedora:</strong> {jogo.desenvolvedora}
          </p>
        </div>
      </div>

      <div className="game-content">
        <h3>Sobre o Jogo</h3>
        <p>{jogo.detalhes?.descricao_longa || 'Sem descrição disponível.'}</p>

        <h3>Galeria de Imagens</h3>

        {hasGallery ? (
          <div className="game-carousel">
            <div className="carousel-main">
              <button
                type="button"
                className="carousel-image-button"
                onClick={() => setIsImageModalOpen(true)}
                aria-label="Abrir imagem em tela cheia"
              >
                <img
                  src={galleryImages[currentGalleryIndex] || '/images/placeholder-game.png'}
                  alt={`Screenshot ${currentGalleryIndex + 1}`}
                  className="carousel-main-image"
                  onError={handleImageError}
                />
              </button>

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
                    key={img || index}
                    type="button"
                    className={`carousel-thumb ${
                      currentGalleryIndex === index ? 'active' : ''
                    }`}
                    onClick={() => setCurrentGalleryIndex(index)}
                    aria-label={`Ver screenshot ${index + 1}`}
                  >
                    <img
                      src={img || '/images/placeholder-game.png'}
                      alt={`Miniatura ${index + 1}`}
                      onError={handleImageError}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p>Este jogo ainda não possui imagens na galeria.</p>
        )}

        {jogo.detalhes?.videos?.length > 0 && (
          <>
            <h3>Vídeos</h3>

            <div className="game-videos">
              {jogo.detalhes.videos.map((video, index) => (
                <div className="video-card" key={video.url || index}>
                  <h4>{video.titulo}</h4>

                  <div className="video-wrapper">
                    <iframe
                      src={video.url}
                      title={video.titulo}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <h3>Dicas e Curiosidades</h3>

        {jogo.detalhes?.dicas?.length > 0 ? (
          <ul className="game-tips">
            {jogo.detalhes.dicas.map((dica, index) => (
              <li key={index}>{dica}</li>
            ))}
          </ul>
        ) : (
          <p>Este jogo ainda não possui dicas cadastradas.</p>
        )}
      </div>

      {isImageModalOpen && hasGallery && (
        <div
          className="image-modal-overlay"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div
            className="image-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="image-modal-close"
              onClick={() => setIsImageModalOpen(false)}
              aria-label="Fechar imagem"
            >
              ×
            </button>

            {galleryImages.length > 1 && (
              <>
                <button
                  type="button"
                  className="image-modal-nav prev"
                  onClick={handlePrevImage}
                  aria-label="Imagem anterior"
                >
                  ‹
                </button>

                <button
                  type="button"
                  className="image-modal-nav next"
                  onClick={handleNextImage}
                  aria-label="Próxima imagem"
                >
                  ›
                </button>

                <span className="image-modal-counter">
                  {currentGalleryIndex + 1} / {galleryImages.length}
                </span>
              </>
            )}

            <img
              src={galleryImages[currentGalleryIndex] || '/images/placeholder-game.png'}
              alt={`Screenshot ampliado ${currentGalleryIndex + 1}`}
              className="image-modal-img"
              onError={handleImageError}
            />
          </div>
        </div>
      )}

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
