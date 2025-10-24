// --- BASE DE DADOS DO MUSEU DIGITAL RETROGAMES ---
// Substitua as URLs se preferir usar imagens locais (ex: '/imagens/megadrive.jpg')

export const consoles = [
  {
    id: "nes",
    nome: "Nintendo Entertainment System (NES)",
    ano: 1985,
    geracao: "3ª Geração",
    fabricante: "Nintendo",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NES-Console-Set.jpg/640px-NES-Console-Set.jpg",
    historia: "O NES (ou 'Nintendinho') é um console de 8-bits que revitalizou a indústria de videogames após o 'crash' de 1983. Ele introduziu franquias icônicas como Super Mario Bros. e The Legend of Zelda.",
    jogos: [
      {
        id: "nes-mario-3",
        titulo: "Super Mario Bros. 3",
        ano: 1988,
        imagem_url: "https://upload.wikimedia.org/wikipedia/pt/a/a5/Super_Mario_Bros._3_cover.jpg",
        plataforma: "NES",
        genero: "Plataforma",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Considerado um dos melhores jogos de todos os tempos, Super Mario Bros. 3 expandiu a fórmula original com novos power-ups e mundos variados.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/pt/c/c5/Smb3_world_1_map.png",
            "https://upload.wikimedia.org/wikipedia/pt/7/7d/SMB3_gameplay.png"
          ],
          dicas: [
            "Use as Flautas Mágicas para pular mundos.",
            "O P-Wing permite voar o nível inteiro."
          ]
        }
      },
      {
        id: "nes-zelda",
        titulo: "The Legend of Zelda",
        ano: 1986,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/8/8d/The_Legend_of_Zelda_box_art.png",
        plataforma: "NES",
        genero: "Aventura",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "O primeiro título da famosa série de aventuras da Nintendo, introduziu exploração, quebra-cabeças e um mundo aberto 8-bit.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/d/d2/Zelda_NES_screenshot.png"
          ],
          dicas: [
            "Quebre paredes suspeitas com bombas.",
            "Procure a 'Triforce of Wisdom' para enfrentar Ganon."
          ]
        }
      },
      {
        id: "nes-megaman-2",
        titulo: "Mega Man 2",
        ano: 1988,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/0/0f/Megaman2_box.jpg",
        plataforma: "NES",
        genero: "Ação / Plataforma",
        desenvolvedora: "Capcom",
        detalhes: {
          descricao_longa: "Um dos maiores clássicos do NES. O jogador enfrenta oito chefes em qualquer ordem e absorve suas armas para derrotar os próximos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/a/a2/Mega_Man_2_screenshot.png"
          ],
          dicas: [
            "Use o Metal Blade contra quase todos os inimigos.",
            "O chefe final só pode ser derrotado com o item especial."
          ]
        }
      }
    ]
  },

  {
    id: "snes",
    nome: "Super Nintendo (SNES)",
    ano: 1990,
    geracao: "4ª Geração",
    fabricante: "Nintendo",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SNES-Mod1-Console-Set.jpg/640px-SNES-Mod1-Console-Set.jpg",
    historia: "O SNES trouxe gráficos e som de 16-bits que marcaram época, com uma biblioteca lendária de RPGs e plataformas.",
    jogos: [
      {
        id: "snes-chrono",
        titulo: "Chrono Trigger",
        ano: 1995,
        imagem_url: "https://upload.wikimedia.org/wikipedia/pt/a/a7/Chrono_Trigger_cover.jpg",
        plataforma: "SNES",
        genero: "RPG",
        desenvolvedora: "Square",
        detalhes: {
          descricao_longa: "Um RPG atemporal sobre viagem no tempo, com múltiplos finais e trilha sonora marcante.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/pt/0/0c/Chrono_Trigger_battle.png"
          ],
          dicas: [
            "Visite o 'End of Time' para desbloquear habilidades especiais.",
            "Faça as sidequests antes da luta final para ver o final verdadeiro."
          ]
        }
      },
      {
        id: "snes-supermetroid",
        titulo: "Super Metroid",
        ano: 1994,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/3/3e/Smetroidbox.jpg",
        plataforma: "SNES",
        genero: "Ação / Aventura",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Um marco no gênero metroidvania, conhecido por sua atmosfera, exploração e design de níveis exemplar.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/0/0c/Super_Metroid_screenshot.png"
          ],
          dicas: [
            "Use o mapa frequentemente para não se perder.",
            "Volte a áreas antigas após novos upgrades."
          ]
        }
      },
      {
        id: "snes-donkeykong",
        titulo: "Donkey Kong Country",
        ano: 1994,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/8/8d/Donkey_Kong_Country_SNES_cover.png",
        plataforma: "SNES",
        genero: "Plataforma",
        desenvolvedora: "Rare",
        detalhes: {
          descricao_longa: "Gráficos pré-renderizados revolucionaram o SNES. O jogo trouxe carisma e desafio com Donkey e Diddy.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/f/fb/Donkey_Kong_Country_gameplay.png"
          ],
          dicas: [
            "Use Diddy para fases rápidas e Donkey para inimigos fortes.",
            "Procure as letras KONG em cada fase para vidas extras."
          ]
        }
      }
    ]
  },

  {
    id: "ps1",
    nome: "PlayStation (PS1)",
    ano: 1994,
    geracao: "5ª Geração",
    fabricante: "Sony",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/PSX-Console-wController.png/640px-PSX-Console-wController.png",
    historia: "O console que popularizou os jogos em CD e trouxe o 3D para o grande público, com uma biblioteca lendária.",
    jogos: [
      {
        id: "ps1-metal-gear",
        titulo: "Metal Gear Solid",
        ano: 1998,
        imagem_url: "https://upload.wikimedia.org/wikipedia/pt/3/33/Metal_Gear_Solid_capa.jpg",
        plataforma: "PS1",
        genero: "Stealth",
        desenvolvedora: "Konami",
        detalhes: {
          descricao_longa: "Dirigido por Hideo Kojima, foi um divisor de águas na narrativa dos games.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/pt/4/4b/Mgs-psycho_mantis.png"
          ],
          dicas: [
            "Mude o controle para a porta 2 para vencer Psycho Mantis.",
            "O código da Meryl está na caixa do CD (dentro do jogo)."
          ]
        }
      },
      {
        id: "ps1-final-fantasy-vii",
        titulo: "Final Fantasy VII",
        ano: 1997,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/9/98/Final_Fantasy_VII_Box_Art.jpg",
        plataforma: "PS1",
        genero: "RPG",
        desenvolvedora: "Square",
        detalhes: {
          descricao_longa: "O RPG que definiu uma geração, com narrativa épica, sistema de Materia e protagonista icônico (Cloud).",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/e/e0/Final_Fantasy_VII_gameplay.png"
          ],
          dicas: [
            "Explore bem para pegar o 'Knights of the Round'.",
            "Use Materias de cura em combinação com HP Plus."
          ]
        }
      },
      {
        id: "ps1-crash",
        titulo: "Crash Bandicoot 3: Warped",
        ano: 1998,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/4/4c/Crash_Bandicoot_Warped_Cover.png",
        plataforma: "PS1",
        genero: "Plataforma",
        desenvolvedora: "Naughty Dog",
        detalhes: {
          descricao_longa: "Crash Bandicoot 3 trouxe fases criativas e gráficos impressionantes para o PS1.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/7/7b/Crash_Bandicoot_3_gameplay.png"
          ],
          dicas: [
            "Complete as fases de relíquia para liberar atalhos.",
            "Use a bazuca no final para chefes difíceis."
          ]
        }
      }
    ]
  },

  {
    id: "megadrive",
    nome: "Sega Mega Drive (Genesis)",
    ano: 1988,
    geracao: "4ª Geração",
    fabricante: "Sega",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sega-Genesis-Model2-Set.jpg",
    historia: "O Mega Drive foi o console que consolidou a Sega como rival da Nintendo, trazendo velocidade e atitude.",
    jogos: [
      {
        id: "md-sonic",
        titulo: "Sonic the Hedgehog 2",
        ano: 1992,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/2/2e/Sonic2boxart.jpg",
        plataforma: "Mega Drive",
        genero: "Plataforma",
        desenvolvedora: "Sega",
        detalhes: {
          descricao_longa: "Sonic e Tails enfrentam Dr. Robotnik em fases cheias de loops e velocidade.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/4/45/Sonic2_gameplay.png"
          ],
          dicas: [
            "Use o spin dash para ganhar impulso em rampas.",
            "Pegue 50 anéis para acessar o bônus stage."
          ]
        }
      },
      {
        id: "md-streets",
        titulo: "Streets of Rage 2",
        ano: 1992,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/4/41/Streetsofrage2cover.jpg",
        plataforma: "Mega Drive",
        genero: "Beat 'em up",
        desenvolvedora: "Sega",
        detalhes: {
          descricao_longa: "Um dos maiores beat ‘em ups de todos os tempos, com personagens variados e trilha sonora lendária.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/a/aa/Streets_of_Rage_2_gameplay.png"
          ],
          dicas: [
            "Use o ataque especial com moderação para limpar a tela.",
            "Cada personagem tem um estilo de luta único — teste todos."
          ]
        }
      },
      {
        id: "md-goldenaxe",
        titulo: "Golden Axe",
        ano: 1989,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/d/d1/Golden_Axe_cover.png",
        plataforma: "Mega Drive",
        genero: "Ação / Fantasia",
        desenvolvedora: "Sega",
        detalhes: {
          descricao_longa: "Um clássico da fantasia medieval, com cavaleiros e magia enfrentando o tirano Death Adder.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/b/b5/Golden_Axe_gameplay.png"
          ],
          dicas: [
            "Use magias em chefes para causar dano massivo.",
            "Cuidado com inimigos montados — você pode roubá-los!"
          ]
        }
      }
    ]
  },

  {
    id: "n64",
    nome: "Nintendo 64",
    ano: 1996,
    geracao: "5ª Geração",
    fabricante: "Nintendo",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/5/5a/N64-Console-Set.jpg",
    historia: "O primeiro console 3D da Nintendo, conhecido por títulos revolucionários e o controle analógico.",
    jogos: [
      {
        id: "n64-mario64",
        titulo: "Super Mario 64",
        ano: 1996,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg",
        plataforma: "N64",
        genero: "Plataforma 3D",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Super Mario 64 redefiniu o gênero de plataforma com liberdade total de movimento e exploração.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/7/77/Super_Mario_64_gameplay.png"
          ],
          dicas: [
            "Explore cada quadro — cada um contém 7 estrelas.",
            "Use o pulo triplo para alcançar áreas secretas."
          ]
        }
      },
      {
        id: "n64-zeldaoot",
        titulo: "The Legend of Zelda: Ocarina of Time",
        ano: 1998,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/8/88/The_Legend_of_Zelda_Ocarina_of_Time_box_art.png",
        plataforma: "N64",
        genero: "Aventura / RPG",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Um dos jogos mais aclamados da história, trazendo combate em tempo real e exploração 3D épica.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/2/28/Ocarina_of_Time_gameplay.png"
          ],
          dicas: [
            "Aprenda as músicas da Ocarina para desbloquear segredos.",
            "Use o targeting para lutar com precisão."
          ]
        }
      },
      {
        id: "n64-goldeneye",
        titulo: "GoldenEye 007",
        ano: 1997,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/6/66/GoldenEye007box.jpg",
        plataforma: "N64",
        genero: "FPS",
        desenvolvedora: "Rare",
        detalhes: {
          descricao_longa: "O título que popularizou os jogos de tiro em primeira pessoa nos consoles, com modo multiplayer icônico.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/1/1c/GoldenEye007_gameplay.png"
          ],
          dicas: [
            "Use o silenciador para evitar alertar inimigos.",
            "Headshots rendem mais pontos nas missões."
          ]
        }
      }
    ]
  },

  {
    id: "ps2",
    nome: "PlayStation 2",
    ano: 2000,
    geracao: "6ª Geração",
    fabricante: "Sony",
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/4/4e/PS2-Versions.jpg",
    historia: "O console mais vendido de todos os tempos, com uma biblioteca gigantesca e compatibilidade com DVDs e jogos de PS1.",
    jogos: [
      {
        id: "ps2-gta-san",
        titulo: "Grand Theft Auto: San Andreas",
        ano: 2004,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/c/c4/GTASABOX.jpg",
        plataforma: "PS2",
        genero: "Ação / Mundo Aberto",
        desenvolvedora: "Rockstar Games",
        detalhes: {
          descricao_longa: "Um dos jogos mais influentes da história, com liberdade total em um mundo vivo e cheio de possibilidades.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/4/43/GTASA_gameplay.png"
          ],
          dicas: [
            "Treine na academia para melhorar o físico.",
            "Use cheats com moderação — eles podem corromper saves!"
          ]
        }
      },
      {
        id: "ps2-godofwar",
        titulo: "God of War",
        ano: 2005,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/a/ac/God_of_War_I_PS2_cover.jpg",
        plataforma: "PS2",
        genero: "Ação / Aventura",
        desenvolvedora: "Santa Monica Studio",
        detalhes: {
          descricao_longa: "Kratos inicia sua vingança contra os deuses do Olimpo neste hack and slash brutal e cinematográfico.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/f/f1/God_of_War_2005_gameplay.png"
          ],
          dicas: [
            "Use combos longos para maximizar orbes.",
            "Aumente a barra de magia para facilitar chefes."
          ]
        }
      },
      {
        id: "ps2-shadow",
        titulo: "Shadow of the Colossus",
        ano: 2005,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/6/6d/Shadow_of_the_Colossus_cover.png",
        plataforma: "PS2",
        genero: "Aventura",
        desenvolvedora: "Team Ico",
        detalhes: {
          descricao_longa: "Uma experiência artística e emocional, onde o jogador enfrenta 16 colossos em busca de salvar uma vida.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/1/1e/Shadow_of_the_Colossus_gameplay.png"
          ],
          dicas: [
            "Observe o padrão de cada colosso antes de atacar.",
            "Suba apenas quando o colosso estiver parado."
          ]
        }
      }
    ]
  }
];


// --- FUNÇÕES HELPER ---

export const getConsoleById = (id) => consoles.find(c => c.id === id);

export const getGameById = (consoleId, gameId) => {
  const console = getConsoleById(consoleId);
  return console ? console.jogos.find(j => j.id === gameId) : null;
};
