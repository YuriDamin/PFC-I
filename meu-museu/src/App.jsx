import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ConsolePage from './pages/ConsolePage';
import GamePage from './pages/GamePage';
import QuizConsole from './pages/QuizConsole'; // ?? Novo
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import { XPProvider } from './context/XPContext';
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
          {!hideHeader && <Header />}
          <main>
            <Routes>
              {/* Login */}
              <Route path="/login" element={<LoginPage />} />

              {/* ?? Rotas protegidas */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/console/:consoleId"
                element={
                  <ProtectedRoute>
                    <ConsolePage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/console/:consoleId/:gameId"
                element={
                  <ProtectedRoute>
                    <GamePage />
                  </ProtectedRoute>
                }
              />

              {/* ?? Quiz de cada console */}
              <Route
                path="/console/:consoleId/quiz"
                element={
                  <ProtectedRoute>
                    <QuizConsole />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </XPProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
