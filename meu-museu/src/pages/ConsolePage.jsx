import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getConsoleById } from '../dados/museuDados';
import GameList from '../components/GameList';
import './ConsolePage.css';

function ConsolePage() {
  const { consoleId } = useParams();
  const console = getConsoleById(consoleId);

  if (!console) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Console não encontrado!</h2>
        <Link to="/">Voltar para a Home</Link>
      </div>
    );
  }

  return (
    <div className="console-page-layout">
      
      <div className="console-details-pane">
        {/* Botão de voltar global */}
        <Link to="/" className="link-voltar">
          &larr; Voltar para a seleção de consoles
        </Link>

        <h2>{console.nome}</h2>
        <img src={console.imagem_url} alt={console.nome} className="console-image" />
        <p><strong>Ano de Lançamento:</strong> {console.ano}</p>
        <p className="console-history">{console.historia}</p>
      </div>

      <div className="game-list-pane">
        <h3>Catálogo de Jogos</h3>
        {/* Passa o ID do console para o GameList */}
        <GameList jogos={console.jogos} consoleId={console.id} />
      </div>

    </div>
  );
}

export default ConsolePage;