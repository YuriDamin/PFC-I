import { nes } from "./consoles/nes";
import { snes } from "./consoles/snes";
import { n64 } from "./consoles/n64";
import { ps1 } from "./consoles/ps1";
import { ps2 } from "./consoles/ps2";
import { megadrive } from "./consoles/megadrive";

import { videosJogos } from "./videosJogos";
import { imagensJogos } from "./imagensJogos";

function aplicarMidias(consoleItem) {
  return {
    ...consoleItem,
    jogos: consoleItem.jogos.map((jogo) => {
      const imagens = imagensJogos[jogo.id];

      return {
        ...jogo,

        imagem_url: imagens?.capa || jogo.imagem_url,

        detalhes: {
          ...jogo.detalhes,

          imagens_galeria:
            imagens?.galeria ||
            jogo.detalhes.imagens_galeria ||
            [],

          videos:
            videosJogos[jogo.id] ||
            jogo.detalhes.videos ||
            [],
        },
      };
    }),
  };
}

export const consoles = [
  nes,
  megadrive,
  snes,
  ps1,
  n64,
  ps2,
].map(aplicarMidias);

export const getConsoleById = (id) => {
  return consoles.find((consoleItem) => consoleItem.id === id) || null;
};

export const getGameById = (consoleId, gameId) => {
  const consoleItem = getConsoleById(consoleId);

  if (!consoleItem) return null;

  return consoleItem.jogos.find((jogo) => jogo.id === gameId) || null;
};