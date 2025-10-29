import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getConsoleById } from '../dados/museuDados';
import { useXP } from '../context/XPContext';
import Toast from '../components/Toast';
import './QuizConsole.css';

function QuizConsole() {
  const { consoleId } = useParams();
  const console = getConsoleById(consoleId);
  const { addXP } = useXP();
  const [indice, setIndice] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [terminou, setTerminou] = useState(false);
  const [toast, setToast] = useState(null);

  const perguntas = console?.quiz || [];

  const responder = (opcao) => {
    const atual = perguntas[indice];
    if (opcao === atual.r) {
      setPontuacao(pontuacao + 1);
      addXP(20); // ?? Ganha 20 XP por acerto
      setToast({ message: '? Resposta correta! +20 XP!', type: 'success' });
    } else {
      setToast({ message: '? Errou! Tente a próxima!', type: 'error' });
    }

    const proximo = indice + 1;
    if (proximo < perguntas.length) {
      setIndice(proximo);
    } else {
      setTerminou(true);
    }
  };

  if (!console) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Console não encontrado.</h2>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="quiz-console-container">
      <Link to={`/console/${consoleId}`} className="link-voltar">
        &larr; Voltar para {console.nome}
      </Link>

      <h2>?? Quiz do {console.nome}</h2>

      {perguntas.length === 0 ? (
        <p>Este console ainda não possui quiz disponível.</p>
      ) : !terminou ? (
        <>
          <p className="quiz-pergunta">{perguntas[indice].q}</p>
          <div className="quiz-opcoes">
            {perguntas[indice].op.map((opcao) => (
              <button key={opcao} onClick={() => responder(opcao)}>
                {opcao}
              </button>
            ))}
          </div>
          <p className="quiz-progresso">
            Pergunta {indice + 1} de {perguntas.length}
          </p>
        </>
      ) : (
        <div className="quiz-fim">
          <h3>?? Fim do Quiz!</h3>
          <p>
            Você acertou {pontuacao} de {perguntas.length} perguntas!
          </p>

          {pontuacao === perguntas.length && (
            <p className="quiz-premio">?? Perfeito! Você domina o {console.nome}!</p>
          )}

          <Link to={`/console/${consoleId}`} className="quiz-voltar-btn">
            Voltar ao console
          </Link>
        </div>
      )}

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </div>
  );
}

export default QuizConsole;
