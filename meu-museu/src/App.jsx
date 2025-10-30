import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ConsolePage from "./pages/ConsolePage";
import GamePage from "./pages/GamePage";
import LoginPage from "./pages/LoginPage";
import FavoritesPage from "./pages/FavoritesPage";
import QuizConsole from "./pages/QuizConsole";
import AchievementsPage from "./pages/AchievementsPage"; // 🏅 Novo

import { AuthProvider } from "./context/AuthContext";
import { XPProvider } from "./context/XPContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import { AchievementsProvider } from "./context/AchievementsContext"; // 🆕 Novo
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {
  const location = useLocation();

  // Esconde o Header apenas na tela de login
  const hideHeader = location.pathname === "/login";

  return (
    <div className="App">
      <AuthProvider>
        <XPProvider>
          <FavoritesProvider>
            <AchievementsProvider>
              {!hideHeader && <Header />}
              <main>
                <Routes>
                  {/* 🔑 Login */}
                  <Route path="/login" element={<LoginPage />} />

                  {/* 🏠 Página inicial protegida */}
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute>
                        <HomePage />
                      </ProtectedRoute>
                    }
                  />

                  {/* 🎮 Página de console */}
                  <Route
                    path="/console/:consoleId"
                    element={
                      <ProtectedRoute>
                        <ConsolePage />
                      </ProtectedRoute>
                    }
                  />

                  {/* 🧠 Quiz do console */}
                  <Route
                    path="/console/:consoleId/quiz"
                    element={
                      <ProtectedRoute>
                        <QuizConsole />
                      </ProtectedRoute>
                    }
                  />

                  {/* 🕹️ Página de jogo */}
                  <Route
                    path="/console/:consoleId/:gameId"
                    element={
                      <ProtectedRoute>
                        <GamePage />
                      </ProtectedRoute>
                    }
                  />

                  {/* 📚 Biblioteca de favoritos */}
                  <Route
                    path="/biblioteca"
                    element={
                      <ProtectedRoute>
                        <FavoritesPage />
                      </ProtectedRoute>
                    }
                  />

                  {/* 🏅 Página de Insígnias */}
                  <Route
                    path="/insignias"
                    element={
                      <ProtectedRoute>
                        <AchievementsPage />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
            </AchievementsProvider>
          </FavoritesProvider>
        </XPProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
