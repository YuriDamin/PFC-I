import React from "react";
import { useAchievements } from "../context/AchievementsContext";
import "./AchievementsPage.css";

const allBadges = [
  // 🧠 Quiz de cada console
  { key: "quiz_nes", name: "Mestre do NES", desc: "Completou o quiz do Nintendo Entertainment System" },
  { key: "quiz_snes", name: "Mestre do SNES", desc: "Completou o quiz do Super Nintendo" },
  { key: "quiz_n64", name: "Mestre do Nintendo 64", desc: "Completou o quiz do Nintendo 64" },
  { key: "quiz_ps1", name: "Mestre do PS1", desc: "Completou o quiz do PlayStation 1" },
  { key: "quiz_ps2", name: "Mestre do PS2", desc: "Completou o quiz do PlayStation 2" },
  { key: "quiz_megadrive", name: "Mestre do Mega Drive", desc: "Completou o quiz do Mega Drive" },

  // 🎮 Explorar 5, 10 e 15 jogos
  { key: "games_nes_5", name: "Explorador NES", desc: "Abriu 5 jogos do NES" },
  { key: "games_snes_5", name: "Explorador SNES", desc: "Abriu 5 jogos do SNES" },
  { key: "games_n64_5", name: "Explorador N64", desc: "Abriu 5 jogos do Nintendo 64" },
  { key: "games_ps1_5", name: "Explorador PS1", desc: "Abriu 5 jogos do PS1" },
  { key: "games_ps2_5", name: "Explorador PS2", desc: "Abriu 5 jogos do PS2" },
  { key: "games_megadrive_5", name: "Explorador Mega Drive", desc: "Abriu 5 jogos do Mega Drive" },

  { key: "games_nes_10", name: "Colecionador NES", desc: "Abriu 10 jogos do NES" },
  { key: "games_snes_10", name: "Colecionador SNES", desc: "Abriu 10 jogos do SNES" },
  { key: "games_n64_10", name: "Colecionador N64", desc: "Abriu 10 jogos do Nintendo 64" },
  { key: "games_ps1_10", name: "Colecionador PS1", desc: "Abriu 10 jogos do PS1" },
  { key: "games_ps2_10", name: "Colecionador PS2", desc: "Abriu 10 jogos do PS2" },
  { key: "games_megadrive_10", name: "Colecionador Mega Drive", desc: "Abriu 10 jogos do Mega Drive" },

  { key: "games_nes_15", name: "Lenda do NES", desc: "Abriu 15 jogos do NES" },
  { key: "games_snes_15", name: "Lenda do SNES", desc: "Abriu 15 jogos do SNES" },
  { key: "games_n64_15", name: "Lenda do N64", desc: "Abriu 15 jogos do Nintendo 64" },
  { key: "games_ps1_15", name: "Lenda do PS1", desc: "Abriu 15 jogos do PS1" },
  { key: "games_ps2_15", name: "Lenda do PS2", desc: "Abriu 15 jogos do PS2" },
  { key: "games_megadrive_15", name: "Lenda do Mega Drive", desc: "Abriu 15 jogos do Mega Drive" },

  // 🕹️ Insígnias por Geração
  { key: "generation_3a", name: "Pioneiro dos 8 Bits", desc: "Dominou a 3ª geração de consoles (NES, Master System)" },
  { key: "generation_4a", name: "Herói dos 16 Bits", desc: "Dominou a 4ª geração de consoles (SNES, Mega Drive)" },
  { key: "generation_5a", name: "Lenda dos 32/64 Bits", desc: "Dominou a 5ª geração de consoles (PS1, Nintendo 64)" },
  { key: "generation_6a", name: "Guerreiro da 6ª Geração", desc: "Dominou a 6ª geração de consoles (PS2, GameCube, Dreamcast)" },

  // 🏢 Insígnias por Empresa
  { key: "company_nintendo", name: "Fã da Nintendo", desc: "Explorou os principais consoles da Nintendo" },
  { key: "company_sony", name: "PlayStation Lover", desc: "Explorou os principais consoles da Sony" },
  { key: "company_sega", name: "Sonic Legacy", desc: "Explorou os principais consoles da Sega" },

  // 🌍 Insígnias Especiais (Globais)
  { key: "all_quizzes_done", name: "Mente Brilhante", desc: "Completou todos os quizzes disponíveis" },
  { key: "all_consoles_explored", name: "Viajante do Tempo", desc: "Explorou pelo menos 1 jogo de cada console" },
  { key: "all_favorites_5", name: "Colecionador Apaixonado", desc: "Favoritou 5 jogos diferentes" },
  { key: "all_favorites_10", name: "Coração de Gamer", desc: "Favoritou 10 jogos diferentes" },
  { key: "all_achievements_earned", name: "Lenda do Museu", desc: "Conquistou todas as insígnias disponíveis" },
];
function AchievementsPage() {
  const { achievements } = useAchievements();

  return (
    <div className="achievements-container">
      <h2>🏅 Minhas Insígnias</h2>

      <div className="badge-grid">
        {allBadges.map((b) => {
          const unlocked = achievements[b.key];
          let extraClass = "";

          if (b.key.startsWith("generation_")) extraClass = "generation";
          else if (b.key.startsWith("company_")) extraClass = "company";
          else if (b.key.startsWith("all_")) extraClass = "global";

          return (
            <div
              key={b.key}
              className={`badge ${unlocked ? "unlocked" : "locked"} ${extraClass}`}
            >
              <span className="icon">
                {b.key.startsWith("all_")
                  ? "👑"
                  : b.key.startsWith("company_")
                  ? "🏢"
                  : b.key.startsWith("generation_")
                  ? "🕹️"
                  : "🏆"}
              </span>
              <h4>{b.name}</h4>
              <p>{b.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AchievementsPage;
