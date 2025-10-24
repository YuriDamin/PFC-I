import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ConsolePage from './pages/ConsolePage';
import GamePage from './pages/GamePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {/* Nível 1: Home com seleção de consoles */}
          <Route path="/" element={<HomePage />} />
          
          {/* Nível 2: Página do console (detalhes + lista de jogos) */}
          <Route path="/console/:consoleId" element={<ConsolePage />} />
          
          {/* Nível 3: Página do Jogo (detalhes, galeria, dicas) */}
          <Route path="/console/:consoleId/:gameId" element={<GamePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;