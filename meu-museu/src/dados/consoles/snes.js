export const snes = {
  id: "snes",
  nome: "Super Nintendo (SNES)",
  ano: 1990,
  geracao: "4ª Geração",
  geracaoId: "4a",
  fabricante: "Nintendo",
  fabricanteId: "nintendo",
  imagem_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/SNES-Mod1-Console-Set.jpg/1200px-SNES-Mod1-Console-Set.jpg",
    historia:
    `O Super Nintendo Entertainment System utiliza o processador central Ricoh 5A22, baseado na arquitetura WDC 65C816 de 16 bits, operando a uma frequência variável de até 3,58 MHz. O destaque técnico do console reside em suas Unidades de Processamento Gráfico (PPU) duplas, que permitem o "Mode 7", uma técnica de rotação e escala de camadas que simula ambientes tridimensionais. O sistema de áudio é gerido por um co-processador Sony SPC700 de 8 bits, capaz de produzir som estéreo com base em amostras (ADPCM) de alta qualidade.

No mercado brasileiro, o SNES foi lançado oficialmente em 1993 pela Playtronic. Curiosamente, o modelo brasileiro (SNSM-001 BRA) foi o único exemplar do console fabricado fora do Japão, produzido pela Gradiente na Zona Franca de Manaus. A Playtronic também foi pioneira na localização de softwares, traduzindo manuais e adaptando jogos como "Supercopa" especificamente para o público local.

Para superar as limitações de clock da CPU principal, muitos cartuchos de SNES incorporaram chips auxiliares, como o Super FX para polígonos 3D e o chip DSP para cálculos matemáticos complexos. O console operava com uma paleta de 32.768 cores, exibindo até 256 simultaneamente, e possuía uma resolução máxima interlaçada de 512x448 pixels.`,
    jogos: [
    {
      id: "snes-chrono",
      titulo: "Chrono Trigger",
      ano: 1995,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/pt/a/a7/Chrono_Trigger_cover.jpg",
      plataforma: "SNES",
      genero: "RPG",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Um RPG atemporal sobre viagem no tempo, com múltiplos finais e trilha sonora marcante.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/pt/0/0c/Chrono_Trigger_battle.png",
        ],
        dicas: [
          "Visite o 'End of Time' para desbloquear habilidades especiais.",
          "Faça as sidequests antes da luta final para ver o final verdadeiro.",
        ],
        videos: [
        {
        titulo: "Gameplay de Chrono Trigger",
        url: "https://www.youtube.com/embed/Up9wQLnSNDE",
        },
        ],       
      },
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
        descricao_longa:
          "Um marco no gênero metroidvania, conhecido por sua atmosfera, exploração e design de níveis exemplar.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/0/0c/Super_Metroid_screenshot.png",
        ],
        dicas: [
          "Use o mapa frequentemente para não se perder.",
          "Volte a áreas antigas após novos upgrades.",
        ],
        videos: [
  {
    titulo: "Gameplay de Super Mario World",
    url: "https://www.youtube.com/embed/F9q20awtDIE",
  },
],
      },
    },
    {
      id: "snes-donkeykong",
      titulo: "Donkey Kong Country",
      ano: 1994,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/8/8d/Donkey_Kong_Country_SNES_cover.png",
      plataforma: "SNES",
      genero: "Plataforma",
      desenvolvedora: "Rare",
      detalhes: {
        descricao_longa:
          "Gráficos pré-renderizados revolucionaram o SNES. O jogo trouxe carisma e desafio com Donkey e Diddy.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/f/fb/Donkey_Kong_Country_gameplay.png",
        ],
        dicas: [
          "Use Diddy para fases rápidas e Donkey para inimigos fortes.",
          "Procure as letras KONG em cada fase para vidas extras.",
        ],
        videos: [
  {
    titulo: "Gameplay de Donkey Kong Country",
    url: "https://www.youtube.com/embed/0qnMl5ldSWY",
  },
],
      },
    },
    {
      id: "snes-mario-world",
      titulo: "Super Mario World",
      ano: 1990,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png",
      plataforma: "SNES",
      genero: "Plataforma",
      desenvolvedora: "Nintendo EAD",
      detalhes: {
        descricao_longa:
          "Título de lançamento que introduziu Yoshi, o mapa do mundo e saídas secretas nas fases.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_World_gameplay.png",
        ],
        dicas: [
          "Use a pena para voar e descobrir atalhos.",
          "Encontre todas as 96 saídas para o final verdadeiro.",
        ],
        videos: [
  {
    titulo: "Gameplay de Donkey Kong Country",
    url: "https://www.youtube.com/embed/0qnMl5ldSWY",
  },
],
      },
    },
    {
      id: "snes-zelda-ltp",
      titulo: "The Legend of Zelda: A Link to the Past",
      ano: 1991,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/2/2f/A_Link_to_the_Past_Box_Art.png",
      plataforma: "SNES",
      genero: "Ação / Aventura",
      desenvolvedora: "Nintendo EAD",
      detalhes: {
        descricao_longa:
          "Introduziu o conceito de dois mundos (Light World e Dark World), que redefiniu a série Zelda.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/c/c5/Zelda_a_link_to_the_past_gameplay.png",
        ],
        dicas: [
          "O Espelho Mágico (Magic Mirror) é essencial para viajar entre os mundos.",
          "Procure o Master Sword antes de entrar no Dark World.",
        ],
        videos: [
  {
    titulo: "Gameplay de The Legend of Zelda: A Link to the Past",
    url: "https://www.youtube.com/embed/Z6hjG6MCcZ8",
  },
],
      },
    },
    {
      id: "snes-ff6",
      titulo: "Final Fantasy VI",
      ano: 1994,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Final_Fantasy_VI_Coverart.jpg/640px-Final_Fantasy_VI_Coverart.jpg",
      plataforma: "SNES",
      genero: "RPG",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Um RPG com foco em tecnologia e um elenco enorme de personagens jogáveis, cada um com sua história e habilidades únicas (Magitek).",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/91/Final_Fantasy_VI_battle.png",
        ],
        dicas: [
          "O sistema de Magicite é crucial para aprender magias.",
          "Não perca Gogo e Umaro no 'World of Ruin'.",
        ],
        videos: [
  {
    titulo: "Gameplay de Final Fantasy VI",
    url: "https://www.youtube.com/embed/TbRBP4FXf4U",
  },
],
      },
    },
    {
      id: "snes-mario-kart",
      titulo: "Super Mario Kart",
      ano: 1992,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/1/10/Super_Mario_Kart_Coverart.png",
      plataforma: "SNES",
      genero: "Corrida / Kart",
      desenvolvedora: "Nintendo EAD",
      detalhes: {
        descricao_longa:
          "Criou o gênero 'kart racing' e popularizou o uso de power-ups para combate em corridas. Usa o Modo 7.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/77/Super_Mario_Kart_gameplay.png",
        ],
        dicas: [
          "Use a derrapagem para fazer curvas fechadas sem perder velocidade.",
          "Conheça a pista para usar os power-ups de forma estratégica.",
        ],
        videos: [
  {
    titulo: "Gameplay de Super Mario Kart",
    url: "https://www.youtube.com/embed/6KzhEGPUNIk",
  },
],
      },
    },
    {
      id: "snes-star-fox",
      titulo: "Star Fox (Starwing)",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Star_Fox_Box_Art.jpg/640px-Star_Fox_Box_Art.jpg",
      plataforma: "SNES",
      genero: "Rail Shooter 3D",
      desenvolvedora: "Nintendo / Argonaut Software",
      detalhes: {
        descricao_longa:
          "Revolucionário para a época, utilizou o chip Super FX para renderizar gráficos poligonais 3D.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/2/2f/Star_Fox_gameplay.png",
        ],
        dicas: [
          "Use o 'barrel roll' para desviar de lasers.",
          "Há três rotas de dificuldade para completar o jogo.",
        ],
        videos: [
  {
    titulo: "Gameplay de Star Fox",
    url: "https://www.youtube.com/embed/a0edFbcH1VM",
  },
],
      },
    },
    {
      id: "snes-fzero",
      titulo: "F-Zero",
      ano: 1990,
      imagem_url: "https://upload.wikimedia.org/wikipedia/en/1/1a/F-Zero_Cover.png",
      plataforma: "SNES",
      genero: "Corrida Futurista",
      desenvolvedora: "Nintendo EAD",
      detalhes: {
        descricao_longa:
          "Outro título de lançamento que usava o Modo 7, criando uma sensação de velocidade e perspectiva 3D em pistas futuristas.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/7c/F-Zero_gameplay.png",
        ],
        dicas: [
          "Use o turbo na reta final e o 'side attack' para atingir inimigos.",
          "As zonas de pit stop recuperam energia.",
        ],
        videos: [
  {
    titulo: "Gameplay de F-Zero",
    url: "https://www.youtube.com/embed/OF1SpvKRMD0",
  },
],
      },
    },
    {
      id: "snes-sf2",
      titulo: "Street Fighter II Turbo",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/6/67/Street_Fighter_II_Turbo_Coverart.png",
      plataforma: "SNES",
      genero: "Luta",
      desenvolvedora: "Capcom",
      detalhes: {
        descricao_longa:
          "Versão definitiva do clássico de luta no SNES. Adicionou velocidade ajustável e movimentos especiais novos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/c/c5/Street_Fighter_II_Turbo_gameplay.png",
        ],
        dicas: [
          "Domine os combos e movimentos especiais.",
          "O Bison é um dos chefes mais difíceis do jogo.",
        ],
        videos: [
  {
    titulo: "Gameplay de Street Fighter II Turbo",
    url: "https://www.youtube.com/embed/XLVoMW-OVyg",
  },
],
      },
    },
    {
      id: "snes-secret-mana",
      titulo: "Secret of Mana",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/0/07/Secret_of_Mana_Cover.png",
      plataforma: "SNES",
      genero: "Action RPG",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Conhecido por seu sistema de combate em tempo real e modo cooperativo para até três jogadores.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/e/e0/Secret_of_Mana_gameplay.png",
        ],
        dicas: [
          "Recarregue o medidor de ataque para causar mais dano.",
          "As magias devem ser lançadas com timing para não serem interrompidas.",
        ],
        videos: [
  {
    titulo: "Gameplay de Secret of Mana",
    url: "https://www.youtube.com/embed/yh7Z5IZ1gjI",
  },
],
      },
    },
    {
      id: "snes-earthbound",
      titulo: "EarthBound (Mother 2)",
      ano: 1994,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/2/29/EarthBound_Coverart.png",
      plataforma: "SNES",
      genero: "RPG",
      desenvolvedora: "Ape / HAL Laboratory",
      detalhes: {
        descricao_longa:
          "Um RPG com temática moderna e humor, famoso por seu estilo de arte e narrativa única.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/b/b2/Earthbound-battle.png",
        ],
        dicas: [
          "Use o 'Rolling HP Meter' a seu favor nos combates.",
          "Compre e use itens de cura frequentemente, pois o combate é difícil.",
        ],
        videos: [
  {
    titulo: "Gameplay de EarthBound",
    url: "https://www.youtube.com/embed/EIoLcNLyd0g",
  },
],
      },
    },
    {
      id: "snes-megamanx",
      titulo: "Mega Man X",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/1/1d/Mega_Man_X_Coverart.png",
      plataforma: "SNES",
      genero: "Ação / Plataforma",
      desenvolvedora: "Capcom",
      detalhes: {
        descricao_longa:
          "Início da série X, apresentando um tom mais sombrio, dash e a possibilidade de adquirir upgrades e armaduras permanentes.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/4b/Mega_Man_X_gameplay.png",
        ],
        dicas: [
          "Encontre os tanques de energia para sobreviver.",
          "A ordem dos chefes é crucial para aproveitar as fraquezas.",
        ],
        videos: [
  {
    titulo: "Gameplay de Mega Man X",
    url: "https://www.youtube.com/embed/qzVXlUoLU78",
  },
],
      },
    },
    {
      id: "snes-contra-3",
      titulo: "Contra III: The Alien Wars",
      ano: 1992,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/a/a2/Contra_III_Coverart.png",
      plataforma: "SNES",
      genero: "Run and Gun",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "A terceira parcela da série, com gráficos avançados, perspectiva Mode 7 em algumas fases e jogabilidade desafiadora.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/b/b8/Contra_III_The_Alien_Wars_gameplay.png",
        ],
        dicas: [
          "Mude de arma rapidamente para se adaptar aos inimigos.",
          "O jogo permite que você carregue duas armas simultaneamente.",
        ],
        videos: [
  {
    titulo: "Gameplay de Contra III: The Alien Wars",
    url: "https://www.youtube.com/embed/Kd8ByEG_7-I",
  },
],
      },
    },
    {
      id: "snes-pilotwings",
      titulo: "Pilotwings",
      ano: 1990,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Pilotwings_Cover.jpg/640px-Pilotwings_Cover.jpg",
      plataforma: "SNES",
      genero: "Simulador / Voo",
      desenvolvedora: "Nintendo EAD",
      detalhes: {
        descricao_longa:
          "Um dos títulos de lançamento que demonstrou o poder do Modo 7, oferecendo diferentes desafios de voo.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/c/cc/Pilotwings_gameplay.png",
        ],
        dicas: [
          "Mantenha o ângulo de descida suave para o pouso.",
          "Use o 'Roll' para corrigir a direção da queda no skydiving.",
        ],
        videos: [
  {
    titulo: "Gameplay de Pilotwings",
    url: "https://www.youtube.com/embed/yt8OAeyfXwY",
  },
],
      },
    },
    {
      id: "snes-mario-rpg",
      titulo: "Super Mario RPG: Legend of the Seven Stars",
      ano: 1996,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/b/b5/Super_Mario_RPG_Coverart.png",
      plataforma: "SNES",
      genero: "RPG",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Primeiro RPG da série Mario, combinando a plataforma da Nintendo com o sistema de batalha por turnos da Square.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/6/69/SMRPG_gameplay.png",
        ],
        dicas: [
          "Domine os 'Timed Hits' para multiplicar seu dano.",
          "Geno e Bowser são personagens chave para a batalha final.",
        ],
        videos: [
  {
    titulo: "Gameplay de Super Mario RPG",
    url: "https://www.youtube.com/embed/caV9PNWFITk",
  },
],
      },
    },
    {
      id: "snes-tmnt-4",
      titulo: "Teenage Mutant Ninja Turtles IV: Turtles in Time",
      ano: 1992,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/d/db/Turtles_in_Time_Coverart.png",
      plataforma: "SNES",
      genero: "Beat 'em up",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Baseado no arcade, este é considerado um dos melhores beat 'em ups para SNES, com gráficos e músicas aprimoradas.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/2/22/Turtles_in_Time_gameplay.png",
        ],
        dicas: [
          "Use o ataque de arremesso contra inimigos para causar dano em área.",
          "O jogo permite que você corra usando dash.",
        ],
        videos: [
  {
    titulo: "Gameplay de Teenage Mutant Ninja Turtles IV: Turtles in Time",
    url: "https://www.youtube.com/embed/Vb5jgNor7jo",
  },
],
      },
    },
    {
      id: "snes-mk2",
      titulo: "Mortal Kombat II",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/f/fd/Mortal_Kombat_II_Coverart.png",
      plataforma: "SNES",
      genero: "Luta",
      desenvolvedora: "Midway / Sculptured Software",
      detalhes: {
        descricao_longa:
          "Sequência de sucesso que melhorou o combate, adicionou mais Fatalities, Friendships e Babalities.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/d/d7/Mortal_Kombat_II_gameplay.png",
        ],
        dicas: [
          "Os códigos de Fatalities devem ser executados com precisão e distância correta.",
          "Kintaro e Shao Kahn são chefes extremamente agressivos.",
        ],
        videos: [
  {
    titulo: "Gameplay de Mortal Kombat II",
    url: "https://www.youtube.com/embed/b5_Cbb3T9wY",
  },
],
      },
    },
  ],
quiz: [
  {
    q: "Em que ano o Super Nintendo foi lançado no Japão?",
    op: ["1988", "1990", "1994", "1996"],
    r: "1990",
  },
  {
    q: "Qual console era o principal concorrente do SNES na geração 16-bits?",
    op: ["PlayStation 1", "Mega Drive", "Nintendo 64", "Dreamcast"],
    r: "Mega Drive",
  },
  {
    q: "Qual jogo do SNES introduziu Yoshi na série Mario?",
    op: ["Super Mario Kart", "Super Mario World", "Super Mario RPG", "Yoshi's Story"],
    r: "Super Mario World",
  },
  {
    q: "Qual RPG do SNES é famoso por viagem no tempo?",
    op: ["Final Fantasy VI", "Chrono Trigger", "Secret of Mana", "EarthBound"],
    r: "Chrono Trigger",
  },
  {
    q: "Qual jogo do SNES é considerado um marco do gênero metroidvania?",
    op: ["Super Metroid", "F-Zero", "Pilotwings", "Star Fox"],
    r: "Super Metroid",
  },
  {
    q: "Qual jogo do SNES usou o chip Super FX para gráficos poligonais?",
    op: ["Donkey Kong Country", "Star Fox", "Street Fighter II Turbo", "Contra III"],
    r: "Star Fox",
  },
  {
    q: "Qual jogo criou a base da franquia Mario Kart?",
    op: ["F-Zero", "Super Mario Kart", "Pilotwings", "Mario Paint"],
    r: "Super Mario Kart",
  },
  {
    q: "Qual empresa desenvolveu Donkey Kong Country?",
    op: ["Rare", "Capcom", "Square", "Konami"],
    r: "Rare",
  },
  {
    q: "Qual jogo do SNES possui o conceito de Light World e Dark World?",
    op: ["EarthBound", "A Link to the Past", "Secret of Mana", "Mega Man X"],
    r: "A Link to the Past",
  },
  {
    q: "Qual destes jogos do SNES é da franquia Final Fantasy?",
    op: ["Final Fantasy VI", "Chrono Trigger", "Secret of Mana", "Super Mario RPG"],
    r: "Final Fantasy VI",
  },
],};