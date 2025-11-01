import React, { useEffect, useState, useRef } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getConsoleById } from "../dados/museuDados";
import { useXP } from "../context/XPContext";
import { useAchievements } from "../context/AchievementsContext"; // 🏅 Novo contexto
import Toast from "../components/Toast";
import "./QuizConsole.css";

import correctSound from "../assets/sounds/correct.mp3";
import wrongSound from "../assets/sounds/wrong.mp3";

function QuizConsole() {
  const { consoleId } = useParams();
  const { addXP } = useXP();
  const { unlock } = useAchievements();
  const navigate = useNavigate();
  const consoleData = getConsoleById(consoleId);

  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [toast, setToast] = useState(null);
  const [finalizado, setFinalizado] = useState(false);

  const quiz = consoleData?.quiz || [];

  const audioCorrect = useRef(null);
  const audioWrong = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!consoleData) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>Console não encontrado!</h2>
        <Link to="/">Voltar para o Menu Principal</Link>
      </div>
    );
  }

  if (quiz.length === 0) {
    return (
      <div className="quiz-console-container">
        <h2>🧠 Quiz do {consoleData.nome}</h2>
        <p>Este console ainda não possui quiz disponível.</p>
        <Link to={`/console/${consoleId}`} className="quiz-voltar-btn">
          ⬅️ Voltar ao Console
        </Link>
      </div>
    );
  }

  const perguntaAtual = quiz[indice];

  const responder = (opcao) => {
    if (finalizado) return;

    const questaoKey = `quiz_${consoleId}_q${indice}`;

    if (opcao === perguntaAtual.r) {
      setAcertos((prev) => prev + 1);
      audioCorrect.current.play();

      if (localStorage.getItem(questaoKey) !== "true") {
        addXP(20);
        localStorage.setItem(questaoKey, "true");
        setToast({ message: "✅ Resposta correta! +20 XP!", type: "success" });
      } else {
        setToast({
          message: " Você já ganhou XP por esta questão.",
          type: "info",
        });
      }
    } else {
      audioWrong.current.play();
      setToast({ message: " Errou! Tente a próxima!", type: "error" });
    }

    if (indice + 1 < quiz.length) {
      setTimeout(() => {
        setToast(null);
        setIndice(indice + 1);
      }, 800);
    } else {
      setTimeout(() => {
        setFinalizado(true);
        setToast(null);
      }, 1000);
    }
  };

  // 🏅 Desbloqueia insígnia ao finalizar o quiz
  useEffect(() => {
    if (finalizado && quiz.length > 0) {
      unlock(`quiz_${consoleId}`, `Completou o quiz do ${consoleData.nome}`);
    }
  }, [finalizado, consoleId, consoleData, quiz.length, unlock]);

  // 🔁 Reinicia o quiz sem recarregar
  const refazerQuiz = () => {
    setIndice(0);
    setAcertos(0);
    setFinalizado(false);
    setToast({
      message: "🔁 Quiz reiniciado! Boa sorte!",
      type: "info",
    });
  };

  return (
    <div className="quiz-console-container">
      {/* 🔊 Sons */}
      <audio ref={audioCorrect} src={correctSound} preload="auto" />
      <audio ref={audioWrong} src={wrongSound} preload="auto" />

      {/* 🔙 Navegação */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <button className="quiz-voltar-btn" onClick={() => navigate(-1)}>
          ⬅️ Voltar ao Console
        </button>
        <Link to="/" className="quiz-voltar-btn">
          🏠 Menu Principal
        </Link>
      </div>

      <h2>🧠 Quiz do {consoleData.nome}</h2>

      {!finalizado ? (
        <>
          <p className="quiz-pergunta">{perguntaAtual.q}</p>
          <div className="quiz-opcoes">
            {perguntaAtual.op.map((opcao, index) => (
              <button key={index} onClick={() => responder(opcao)}>
                {opcao}
              </button>
            ))}
          </div>
          <p className="quiz-progresso">
            Pergunta {indice + 1} de {quiz.length}
          </p>
        </>
      ) : (
        <div className="quiz-fim">
          <h3>🎉 Fim do Quiz!</h3>
          <p>
            Você acertou <strong>{acertos}</strong> de{" "}
            <strong>{quiz.length}</strong> perguntas.
          </p>

          {acertos === quiz.length ? (
            <p className="quiz-premio">
              🏆 Perfeito! Você domina o {consoleData.nome}!
            </p>
          ) : acertos >= quiz.length / 2 ? (
            <p className="quiz-premio">
              💪 Bom trabalho! Que tal tentar de novo?
            </p>
          ) : (
            <p className="quiz-premio">
              🎮 Continue praticando e tente novamente!
            </p>
          )}

          <button
            className="quiz-voltar-btn"
            style={{ marginTop: "20px" }}
            onClick={refazerQuiz}
          >
            🔁 Refazer o Quiz
          </button>
        </div>
      )}

      {/* 🔔 Toast */}
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

export default QuizConsole;
