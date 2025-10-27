import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ConsolePage from './pages/ConsolePage';
import GamePage from './pages/GamePage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />

            {/* Rotas protegidas */}
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
          </Routes>
        </main>
      </AuthProvider>
    </div>
  );
}

export default App;
