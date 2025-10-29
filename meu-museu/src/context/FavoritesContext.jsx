import React, { createContext, useContext, useEffect, useState } from 'react';
import Toast from '../components/Toast';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [toast, setToast] = useState(null);

  // Carrega favoritos do localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(saved);
  }, []);

  // Salva favoritos sempre que mudar
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (consoleId, game) => {
    const exists = favorites.some(f => f.consoleId === consoleId && f.id === game.id);
    let updated;
    if (exists) {
      updated = favorites.filter(f => !(f.consoleId === consoleId && f.id === game.id));
      setToast({ message: `❌ Removido dos favoritos`, type: 'error' });
    } else {
      updated = [...favorites, { ...game, consoleId }];
      setToast({ message: `⭐ Adicionado à biblioteca!`, type: 'success' });
    }
    setFavorites(updated);
  };

  const isFavorite = (consoleId, gameId) =>
    favorites.some(f => f.consoleId === consoleId && f.id === gameId);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
