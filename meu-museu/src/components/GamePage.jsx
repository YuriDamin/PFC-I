import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getConsoleById, getGameById } from '../dados/museuDados';
import './GamePage.css';

function GamePage() {
  const { consoleId, gameId } = useParams();
  
  const console = getConsoleById(consoleId);
  const jogo = getGameById(consoleId, gameId);

  if (!console || !jogo) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Ops! Jogo não encontrado.</h2>
        <Link to="/">Voltar para a Home</Link>
      </div>
    );
  }

  return (
    <div className="game-page-container">
      {/* Botão para voltar para a tela DO CONSOLE */}
      <Link to={`/console/${consoleId}`} className="link-voltar">
        &larr; Voltar para {console.nome}
      </Link>

      <div className="game-header">
        <img src={jogo.imagem_url} alt={jogo.titulo} className="game-main-image" />
        <div className="game-header-info">
          <h1>{jogo.titulo}</h1>
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
        <div className="game-gallery">
          {jogo.detalhes.imagens_galeria.map((img, index) => (
            <img key={index} src={img} alt={`Screenshot ${index + 1}`} />
          ))}
        </div>

        <h3>Dicas e Curiosidades</h3>
        <ul className="game-tips">
          {jogo.detalhes.dicas.map((dica, index) => (
            <li key={index}>{dica}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default GamePage;