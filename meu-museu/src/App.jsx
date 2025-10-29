import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ConsolePage from './pages/ConsolePage';
import GamePage from './pages/GamePage';
import LoginPage from './pages/LoginPage';
import FavoritesPage from './pages/FavoritesPage'; // 🆕 nova página

import { AuthProvider } from './context/AuthContext';
import { XPProvider } from './context/XPContext';
import { FavoritesProvider } from './context/FavoritesContext'; // 🆕 novo contexto
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  const location = useLocation();

  // Esconde o Header quando estiver na tela de login
  const hideHeader = location.pathname === '/login';

  return (
    <div className="App">
      <AuthProvider>
        <XPProvider>
          <FavoritesProvider>
            {!hideHeader && <Header />}
            <main>
              <Routes>
                {/* 🔑 Login */}
                <Route path="/login" element={<LoginPage />} />

                {/* 🏠 Home protegida */}
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <HomePage />
                    </ProtectedRoute>
                  }
                />

                {/* 🎮 Página do console */}
                <Route
                  path="/console/:consoleId"
                  element={
                    <ProtectedRoute>
                      <ConsolePage />
                    </ProtectedRoute>
                  }
                />

                {/* 🕹️ Página do jogo */}
                <Route
                  path="/console/:consoleId/:gameId"
                  element={
                    <ProtectedRoute>
                      <GamePage />
                    </ProtectedRoute>
                  }
                />

                {/* 📚 Biblioteca (Favoritos) */}
                <Route
                  path="/biblioteca"
                  element={
                    <ProtectedRoute>
                      <FavoritesPage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
          </FavoritesProvider>
        </XPProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
