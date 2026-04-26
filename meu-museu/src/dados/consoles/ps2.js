export const ps2 = {
  id: "ps2",
  nome: "PlayStation 2",
  ano: 2000,
  geracao: "6ª Geração",
  geracaoId: "6a",
  fabricante: "Sony",
  fabricanteId: "sony",
  imagem_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/PS2-Versions.jpg/1016px-PS2-Versions.jpg?20130620234911",
  historia:
    `O PlayStation 2 utiliza o processador Emotion Engine (EE) de 128 bits, operando a 294 MHz, que integra um núcleo MIPS III R5900 e duas unidades de co-processamento vetorial (VU0 e VU1). O processamento gráfico é realizado pelo Graphics Synthesizer (GS), operando a 150 MHz com 4 MB de DRAM embutida na placa, permitindo uma largura de banda de memória massiva de 1,2 GB/s. O sistema inclui 32 MB de RAM principal e suporte nativo à reprodução de filmes em DVD.

No cenário brasileiro, o PlayStation 2 teve uma trajetória atípica: embora tenha dominado as locadoras e residências via importação informal desde o início dos anos 2000, o lançamento oficial pela Sony no Brasil ocorreu apenas em 2009. Posteriormente, o console passou a ser fabricado na Zona Franca de Manaus, o que permitiu preços mais competitivos e a manutenção de sua popularidade por muito tempo após o lançamento do sucessor PlayStation 3.

A arquitetura do PS2 é notória por sua complexidade, exigindo que os programadores gerenciassem manualmente o fluxo de dados entre os diversos processadores para extrair o desempenho total. O console é retrocompatível via hardware com quase toda a biblioteca do PlayStation original, utilizando o processador do PS1 como controlador de entrada e saída (I/O). Sua resolução máxima de saída é de 1280x1024 pixels, dependendo do software e cabo utilizado.`,
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
        descricao_longa:
          "Um dos jogos mais influentes do PS2, trazendo um enorme mundo aberto, liberdade de exploração, missões variadas e uma história marcante.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/43/GTASA_gameplay.png",
        ],
        dicas: [
          "Explore bem o mapa para encontrar armas, veículos e missões secundárias.",
          "Treine na academia para melhorar os atributos do personagem.",
        ],
      },
    },
    {
      id: "ps2-godofwar",
      titulo: "God of War",
      ano: 2005,
      imagem_url:
        "https://images.launchbox-app.com/e0525716-30ba-4c1d-8522-669e10bf21f4.jpg",
      plataforma: "PS2",
      genero: "Ação / Aventura",
      desenvolvedora: "Santa Monica Studio",
      detalhes: {
        descricao_longa:
          "God of War apresentou Kratos em uma aventura épica inspirada na mitologia grega, com combates intensos, puzzles e cenas cinematográficas.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/f/f1/God_of_War_2005_gameplay.png",
        ],
        dicas: [
          "Use combos variados para ganhar mais orbes.",
          "Evolua as armas principais para facilitar batalhas contra chefes.",
        ],
      },
    },
    {
      id: "ps2-shadow",
      titulo: "Shadow of the Colossus",
      ano: 2005,
      imagem_url:
        "https://images.launchbox-app.com/e666e456-200b-460d-ac92-b3a92a2cb249.jpg",
      plataforma: "PS2",
      genero: "Aventura",
      desenvolvedora: "Team Ico",
      detalhes: {
        descricao_longa:
          "Uma experiência artística e emocional em que o jogador enfrenta colossos gigantes em um mundo silencioso e misterioso.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/1/1e/Shadow_of_the_Colossus_gameplay.png",
        ],
        dicas: [
          "Observe o comportamento de cada colosso antes de atacar.",
          "Use a espada para encontrar a direção do próximo objetivo.",
        ],
      },
    },
    {
      id: "ps2-ffx",
      titulo: "Final Fantasy X",
      ano: 2001,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Final_Fantasy_X_cover.jpg/640px-Final_Fantasy_X_cover.jpg",
      plataforma: "PS2",
      genero: "RPG",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Final Fantasy X marcou a chegada da franquia ao PS2, com gráficos avançados, dublagem, narrativa emocional e o sistema Sphere Grid.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/e/e5/Final_Fantasy_X_gameplay.png",
        ],
        dicas: [
          "Use o Sphere Grid para evoluir os personagens de forma estratégica.",
          "Troque personagens durante as batalhas para aproveitar suas especialidades.",
        ],
      },
    },
    {
      id: "ps2-mgs2",
      titulo: "Metal Gear Solid 2: Sons of Liberty",
      ano: 2001,
      imagem_url: "https://upload.wikimedia.org/wikipedia/en/a/a2/MGS2_Cover.jpg",
      plataforma: "PS2",
      genero: "Stealth",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Metal Gear Solid 2 elevou o nível da narrativa cinematográfica e da jogabilidade stealth, explorando espionagem, tecnologia e manipulação da informação.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/f/f6/Metal_Gear_Solid_2_gameplay.png",
        ],
        dicas: [
          "Use o modo primeira pessoa para mirar com precisão.",
          "Evite alertas para conseguir melhor desempenho no final.",
        ],
      },
    },
    {
      id: "ps2-resident-evil-4",
      titulo: "Resident Evil 4",
      ano: 2005,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Resident_Evil_4_Cover.jpg/640px-Resident_Evil_4_Cover.jpg",
      plataforma: "PS2",
      genero: "Survival Horror / Ação",
      desenvolvedora: "Capcom",
      detalhes: {
        descricao_longa:
          "Resident Evil 4 revolucionou a série com câmera sobre o ombro, mais ação e uma nova abordagem para o terror de sobrevivência.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/3/3d/Resident_Evil_4_gameplay.png",
        ],
        dicas: [
          "Atire nas pernas ou na cabeça para abrir chance de ataque físico.",
          "Melhore armas aos poucos no mercador.",
        ],
      },
    },
    {
      id: "ps2-devil-may-cry",
      titulo: "Devil May Cry",
      ano: 2001,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Devil_May_Cry_Coverart.png/640px-Devil_May_Cry_Coverart.png",
      plataforma: "PS2",
      genero: "Hack and Slash",
      desenvolvedora: "Capcom",
      detalhes: {
        descricao_longa:
          "Devil May Cry ajudou a popularizar o gênero de ação estilosa, com Dante usando espada, armas de fogo e combos rápidos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/f/f4/Devil_May_Cry_gameplay.png",
        ],
        dicas: [
          "Varie ataques para aumentar a pontuação de estilo.",
          "Use Devil Trigger em momentos difíceis.",
        ],
      },
    },
    {
      id: "ps2-tekken-5",
      titulo: "Tekken 5",
      ano: 2005,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Tekken_5_Cover.jpg/640px-Tekken_5_Cover.jpg",
      plataforma: "PS2",
      genero: "Luta 3D",
      desenvolvedora: "Namco",
      detalhes: {
        descricao_longa:
          "Tekken 5 trouxe combates rápidos, grande elenco de personagens e modos extras que fortaleceram a série no PS2.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/5e/Tekken_5_gameplay.png",
        ],
        dicas: [
          "Aprenda combos básicos antes de tentar sequências avançadas.",
          "Use movimentação lateral para evitar ataques lineares.",
        ],
      },
    },
    {
      id: "ps2-jak-and-daxter",
      titulo: "Jak and Daxter: The Precursor Legacy",
      ano: 2001,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Jak_and_Daxter_The_Precursor_Legacy_Coverart.png/640px-Jak_and_Daxter_The_Precursor_Legacy_Coverart.png",
      plataforma: "PS2",
      genero: "Plataforma 3D",
      desenvolvedora: "Naughty Dog",
      detalhes: {
        descricao_longa:
          "Jak and Daxter apresentou um mundo colorido e contínuo, com exploração, coleta de itens e jogabilidade de plataforma em 3D.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/4c/Jak_and_Daxter_gameplay.png",
        ],
        dicas: [
          "Colete Power Cells para desbloquear novas áreas.",
          "Explore bem os cenários para encontrar Precursor Orbs.",
        ],
      },
    },
    {
      id: "ps2-burnout-3",
      titulo: "Burnout 3: Takedown",
      ano: 2004,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Burnout_3_Takedown_Coverart.jpg/640px-Burnout_3_Takedown_Coverart.jpg",
      plataforma: "PS2",
      genero: "Corrida / Combate Veicular",
      desenvolvedora: "Criterion Games",
      detalhes: {
        descricao_longa:
          "Burnout 3 colocou velocidade, batidas e derrubadas no centro da experiência, criando um dos jogos de corrida arcade mais marcantes do PS2.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/53/Burnout_3_Takedown_gameplay.png",
        ],
        dicas: [
          "Faça takedowns para ganhar turbo.",
          "No modo Crash, procure causar o maior impacto possível.",
        ],
      },
    },
    {
      id: "ps2-kh",
      titulo: "Kingdom Hearts",
      ano: 2002,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Kingdom_Hearts_Cover.jpg/640px-Kingdom_Hearts_Cover.jpg",
      plataforma: "PS2",
      genero: "Action RPG",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Kingdom Hearts mistura mundos Disney com elementos de Final Fantasy, trazendo combate em tempo real e uma história sobre amizade e luz.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/0/05/Kingdom_Hearts_gameplay.png",
        ],
        dicas: [
          "Use magias de cura em batalhas difíceis.",
          "Explore cada mundo para encontrar baús e habilidades extras.",
        ],
      },
    },
    {
      id: "ps2-onimusha",
      titulo: "Onimusha: Warlords",
      ano: 2001,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Onimusha_Warlords_Coverart.png/640px-Onimusha_Warlords_Coverart.png",
      plataforma: "PS2",
      genero: "Ação / Aventura",
      desenvolvedora: "Capcom",
      detalhes: {
        descricao_longa:
          "Onimusha combina ação com ambientação no Japão feudal, misturando combates de espada, exploração e elementos de terror.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/2/28/Onimusha_Warlords_gameplay.png",
        ],
        dicas: [
          "Absorva almas dos inimigos para evoluir equipamentos.",
          "Aprenda o contra-ataque para derrotar inimigos rapidamente.",
        ],
      },
    },
    {
      id: "ps2-prince-of-persia",
      titulo: "Prince of Persia: The Sands of Time",
      ano: 2003,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Prince_of_Persia_The_Sands_of_Time_Coverart.jpg/640px-Prince_of_Persia_The_Sands_of_Time_Coverart.jpg",
      plataforma: "PS2",
      genero: "Ação / Aventura / Plataforma",
      desenvolvedora: "Ubisoft Montreal",
      detalhes: {
        descricao_longa:
          "Prince of Persia: The Sands of Time revitalizou a série com parkour fluido, puzzles e a mecânica de voltar no tempo.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/3/3d/Prince_of_Persia_The_Sands_of_Time_gameplay.png",
        ],
        dicas: [
          "Use o poder de retroceder o tempo após erros perigosos.",
          "Observe o cenário para encontrar rotas de parkour.",
        ],
      },
    },
    {
      id: "ps2-ratchet-clank",
      titulo: "Ratchet & Clank: Up Your Arsenal",
      ano: 2004,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Ratchet_and_Clank_Up_Your_Arsenal_Coverart.png/640px-Ratchet_and_Clank_Up_Your_Arsenal_Coverart.png",
      plataforma: "PS2",
      genero: "Plataforma / Tiro",
      desenvolvedora: "Insomniac Games",
      detalhes: {
        descricao_longa:
          "Ratchet & Clank: Up Your Arsenal combina plataforma, humor e uma grande variedade de armas criativas.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/4e/Ratchet_and_Clank_Up_Your_Arsenal_gameplay.png",
        ],
        dicas: [
          "Use várias armas para evoluí-las.",
          "Experimente armas diferentes em cada tipo de inimigo.",
        ],
      },
    },
    {
      id: "ps2-splinter-cell",
      titulo: "Tom Clancy's Splinter Cell",
      ano: 2003,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Tom_Clancy%27s_Splinter_Cell_Coverart.png/640px-Tom_Clancy%27s_Splinter_Cell_Coverart.png",
      plataforma: "PS2",
      genero: "Stealth",
      desenvolvedora: "Ubisoft Montreal",
      detalhes: {
        descricao_longa:
          "Splinter Cell trouxe uma experiência stealth técnica, focada em luz, sombra, infiltração e estratégia.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/5e/Tom_Clancy%27s_Splinter_Cell_gameplay.png",
        ],
        dicas: [
          "Fique nas sombras sempre que possível.",
          "Use ferramentas de espionagem para evitar confrontos diretos.",
        ],
      },
    },
    {
      id: "ps2-guitar-hero",
      titulo: "Guitar Hero",
      ano: 2005,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Guitar_Hero_Coverart.png/640px-Guitar_Hero_Coverart.png",
      plataforma: "PS2",
      genero: "Musical / Ritmo",
      desenvolvedora: "Harmonix",
      detalhes: {
        descricao_longa:
          "Guitar Hero iniciou uma febre dos jogos musicais com controle em formato de guitarra e músicas de rock.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/5e/Guitar_Hero_gameplay.png",
        ],
        dicas: [
          "Use Star Power em partes difíceis da música.",
          "Pratique trechos complicados no modo treino.",
        ],
      },
    },
    {
      id: "ps2-socom",
      titulo: "SOCOM U.S. Navy SEALs",
      ano: 2002,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/SOCOM_U.S._Navy_SEALs_Coverart.png/640px-SOCOM_U.S._Navy_SEALs_Coverart.png",
      plataforma: "PS2",
      genero: "Tiro Tático",
      desenvolvedora: "Zipper Interactive",
      detalhes: {
        descricao_longa:
          "SOCOM foi um dos grandes nomes do tiro tático no PS2, com foco em missões estratégicas e multiplayer online.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/91/SOCOM_U.S._Navy_SEALs_gameplay.png",
        ],
        dicas: [
          "Use comandos de equipe para avançar com segurança.",
          "Evite agir sozinho em missões mais difíceis.",
        ],
      },
    },
    {
      id: "ps2-ssx-tricky",
      titulo: "SSX Tricky",
      ano: 2001,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/SSX_Tricky_Coverart.png/640px-SSX_Tricky_Coverart.png",
      plataforma: "PS2",
      genero: "Esporte / Snowboarding",
      desenvolvedora: "EA Canada",
      detalhes: {
        descricao_longa:
          "SSX Tricky é um jogo de snowboard arcade com manobras exageradas, personagens estilosos e pistas cheias de atalhos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/b/b5/SSX_Tricky_gameplay.png",
        ],
        dicas: [
          "Complete Über Tricks para ganhar vantagem.",
          "Procure atalhos nas pistas para melhorar seus tempos.",
        ],
      },
    },
    {
      id: "ps2-gta-vice-city",
      titulo: "Grand Theft Auto: Vice City",
      ano: 2002,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/c/ce/Vice-city-cover.jpg",
      plataforma: "PS2",
      genero: "Ação / Mundo Aberto",
      desenvolvedora: "Rockstar North",
      detalhes: {
        descricao_longa:
          "Vice City trouxe uma cidade inspirada nos anos 80, com trilha sonora marcante, crimes, negócios e muita liberdade.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/e/e8/Vice-city-gameplay.jpg",
        ],
        dicas: [
          "Compre propriedades para liberar novas missões.",
          "Use veículos rápidos para facilitar fugas.",
        ],
      },
    },
    {
      id: "ps2-gta-iii",
      titulo: "Grand Theft Auto III",
      ano: 2001,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/c/c4/Grand_Theft_Auto_III_cover_art.jpg",
      plataforma: "PS2",
      genero: "Ação / Mundo Aberto",
      desenvolvedora: "DMA Design",
      detalhes: {
        descricao_longa:
          "GTA III foi um marco dos mundos abertos em 3D, influenciando muitos jogos que vieram depois.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/6/6a/Grand_Theft_Auto_III_gameplay.jpg",
        ],
        dicas: [
          "Explore Liberty City para encontrar missões extras.",
          "Use garagens para guardar veículos úteis.",
        ],
      },
    },
    {
      id: "ps2-godofwar2",
      titulo: "God of War II",
      ano: 2007,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/4/44/God_of_War_II_cover.jpg",
      plataforma: "PS2",
      genero: "Ação / Aventura",
      desenvolvedora: "Santa Monica Studio",
      detalhes: {
        descricao_longa:
          "God of War II expandiu a escala da aventura de Kratos, com batalhas maiores, novos poderes e uma apresentação impressionante para o PS2.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/8/85/God_of_War_II_gameplay.png",
        ],
        dicas: [
          "Evolua magias e armas de acordo com seu estilo.",
          "Use bloqueio e esquiva contra inimigos maiores.",
        ],
      },
    },
    {
      id: "ps2-mgs3",
      titulo: "Metal Gear Solid 3: Snake Eater",
      ano: 2004,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/b/b3/Mgs3box.jpg",
      plataforma: "PS2",
      genero: "Stealth / Ação",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Metal Gear Solid 3 levou a série para a selva, com sobrevivência, camuflagem e uma das histórias mais marcantes do PS2.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/a/a7/MGS3_gameplay.png",
        ],
        dicas: [
          "Use camuflagem adequada para cada ambiente.",
          "Cure ferimentos e gerencie energia para sobreviver.",
        ],
      },
    },
    {
      id: "ps2-silent-hill-2",
      titulo: "Silent Hill 2",
      ano: 2001,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/9/95/Silent_Hill_2.jpg",
      plataforma: "PS2",
      genero: "Terror Psicológico",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Silent Hill 2 é lembrado por sua atmosfera pesada, narrativa simbólica e abordagem psicológica do terror.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/79/Silent_Hill_2_gameplay.jpg",
        ],
        dicas: [
          "Explore com atenção para encontrar pistas importantes.",
          "Economize itens de cura e munição.",
        ],
      },
    },
    {
      id: "ps2-okami",
      titulo: "Ōkami",
      ano: 2006,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/2/2a/OkamiNTSCcoverFinal.jpg",
      plataforma: "PS2",
      genero: "Ação / Aventura",
      desenvolvedora: "Clover Studio",
      detalhes: {
        descricao_longa:
          "Ōkami se destaca pelo visual inspirado em pintura japonesa e pela mecânica do Pincel Celestial.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/e/e6/Okami_gameplay.jpg",
        ],
        dicas: [
          "Use o pincel para resolver puzzles e enfrentar inimigos.",
          "Explore bem as áreas para restaurar a natureza.",
        ],
      },
    },
    {
      id: "ps2-ico",
      titulo: "Ico",
      ano: 2001,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/9/9d/Ico_cover_-_EU%2BJP.jpg",
      plataforma: "PS2",
      genero: "Aventura / Puzzle",
      desenvolvedora: "Team Ico",
      detalhes: {
        descricao_longa:
          "Ico é uma aventura minimalista e emocional, focada na conexão entre dois personagens e na exploração de um castelo misterioso.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/55/Ico_gameplay.jpg",
        ],
        dicas: [
          "Observe o ambiente para encontrar caminhos.",
          "Proteja Yorda durante a exploração.",
        ],
      },
    },
    {
      id: "ps2-jak-ii",
      titulo: "Jak II",
      ano: 2003,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/0/0d/Jak_II_Coverart.png",
      plataforma: "PS2",
      genero: "Ação / Plataforma",
      desenvolvedora: "Naughty Dog",
      detalhes: {
        descricao_longa:
          "Jak II mudou o tom da série, adicionando cidade aberta, armas, veículos e uma história mais séria.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/1/1e/Jak_II_gameplay.png",
        ],
        dicas: [
          "Use veículos para se deslocar rapidamente pela cidade.",
          "Alterne entre armas conforme o tipo de inimigo.",
        ],
      },
    },
    {
      id: "ps2-ratchet-clank-1",
      titulo: "Ratchet & Clank",
      ano: 2002,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/3/37/Ratchet_%26_Clank_cover_art.png",
      plataforma: "PS2",
      genero: "Plataforma / Ação",
      desenvolvedora: "Insomniac Games",
      detalhes: {
        descricao_longa:
          "O primeiro Ratchet & Clank apresentou uma mistura de plataforma, tiro e humor, com armas criativas e mundos variados.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/6/65/Ratchet_and_Clank_gameplay.png",
        ],
        dicas: [
          "Compre novas armas sempre que possível.",
          "Explore planetas antigos após ganhar novos equipamentos.",
        ],
      },
    },
    {
      id: "ps2-sly-cooper",
      titulo: "Sly Cooper and the Thievius Raccoonus",
      ano: 2002,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/3/32/Sly_Cooper_and_the_Thievius_Raccoonus_Coverart.png",
      plataforma: "PS2",
      genero: "Plataforma / Stealth",
      desenvolvedora: "Sucker Punch",
      detalhes: {
        descricao_longa:
          "Sly Cooper combina plataforma com furtividade em uma estética de desenho animado, acompanhando um ladrão guaxinim carismático.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/2/2d/Sly_Cooper_gameplay.png",
        ],
        dicas: [
          "Use furtividade para evitar confrontos desnecessários.",
          "Colete pistas para abrir cofres secretos.",
        ],
      },
    },
    {
      id: "ps2-persona-4",
      titulo: "Persona 4",
      ano: 2008,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/1/1b/Shin_Megami_Tensei_Persona_4.jpg",
      plataforma: "PS2",
      genero: "RPG",
      desenvolvedora: "Atlus",
      detalhes: {
        descricao_longa:
          "Persona 4 mistura vida escolar, investigação e batalhas por turnos, com foco em relações sociais e mistério.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/e/e6/Persona_4_gameplay.png",
        ],
        dicas: [
          "Aumente Social Links para fortalecer Personas.",
          "Planeje bem os dias para equilibrar exploração e vida social.",
        ],
      },
    },
    {
      id: "ps2-bully",
      titulo: "Bully",
      ano: 2006,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/7/7c/Bully_Coverart.png",
      plataforma: "PS2",
      genero: "Ação / Mundo Aberto",
      desenvolvedora: "Rockstar Vancouver",
      detalhes: {
        descricao_longa:
          "Bully adapta a fórmula de mundo aberto da Rockstar para um ambiente escolar, com missões, aulas e grupos sociais.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/70/Bully_gameplay.png",
        ],
        dicas: [
          "Faça as aulas para desbloquear habilidades úteis.",
          "Explore a escola e a cidade para encontrar colecionáveis.",
        ],
      },
    },
    {
      id: "ps2-need-for-speed-underground-2",
      titulo: "Need for Speed: Underground 2",
      ano: 2004,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/1/10/NFSU2_Cover.jpg",
      plataforma: "PS2",
      genero: "Corrida",
      desenvolvedora: "EA Black Box",
      detalhes: {
        descricao_longa:
          "Need for Speed: Underground 2 marcou época com corridas urbanas, mundo aberto e forte foco em personalização de carros.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/0/0f/NFSU2_gameplay.jpg",
        ],
        dicas: [
          "Personalize o carro para liberar novas corridas.",
          "Ajuste desempenho conforme o tipo de prova.",
        ],
      },
    },
    {
      id: "ps2-dragon-ball-budokai-3",
      titulo: "Dragon Ball Z: Budokai 3",
      ano: 2004,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Dragon_Ball_Z_Budokai_3.jpg",
      plataforma: "PS2",
      genero: "Luta",
      desenvolvedora: "Dimps",
      detalhes: {
        descricao_longa:
          "Budokai 3 é um dos jogos de Dragon Ball mais lembrados do PS2, com combates rápidos, transformações e grande elenco.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/5e/Budokai_3_gameplay.jpg",
        ],
        dicas: [
          "Aprenda a usar esquivas e contra-ataques.",
          "Explore o modo história para liberar personagens e cápsulas.",
        ],
      },
    },
    {
      id: "ps2-naruto-ultimate-ninja-3",
      titulo: "Naruto: Ultimate Ninja 3",
      ano: 2005,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/6/62/Naruto_Ultimate_Ninja_3.jpg",
      plataforma: "PS2",
      genero: "Luta",
      desenvolvedora: "CyberConnect2",
      detalhes: {
        descricao_longa:
          "Ultimate Ninja 3 trouxe combates acessíveis, muitos personagens e golpes especiais inspirados no anime Naruto.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/9f/Naruto_Ultimate_Ninja_gameplay.jpg",
        ],
        dicas: [
          "Use substituição no momento certo para evitar combos.",
          "Teste personagens diferentes para encontrar seu estilo.",
        ],
      },
    },
    {
      id: "ps2-midnight-club-3",
      titulo: "Midnight Club 3: DUB Edition",
      ano: 2005,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/8/8c/Midnight_Club_3_Dub_Edition_Coverart.jpg",
      plataforma: "PS2",
      genero: "Corrida / Mundo Aberto",
      desenvolvedora: "Rockstar San Diego",
      detalhes: {
        descricao_longa:
          "Midnight Club 3 combina corridas de rua, mundo aberto e personalização em alta velocidade.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/f/fb/Midnight_Club_3_gameplay.jpg",
        ],
        dicas: [
          "Use atalhos urbanos para ganhar vantagem.",
          "Invista em melhorias de desempenho antes de focar só no visual.",
        ],
      },
    },
  ],
quiz: [
  {
    q: "Em que ano o PlayStation 2 foi lançado no Japão?",
    op: ["1998", "2000", "2002", "2005"],
    r: "2000",
  },
  {
    q: "Qual recurso ajudou o PS2 a ser popular como aparelho doméstico?",
    op: ["Leitor de DVD", "Tela portátil", "Controle por movimento", "Cartuchos"],
    r: "Leitor de DVD",
  },
  {
    q: "Qual jogo do PS2 se passa no estado fictício de San Andreas?",
    op: ["GTA III", "GTA: Vice City", "GTA: San Andreas", "Bully"],
    r: "GTA: San Andreas",
  },
  {
    q: "Quem é o protagonista de God of War?",
    op: ["Dante", "Kratos", "Snake", "Sora"],
    r: "Kratos",
  },
  {
    q: "Qual jogo do PS2 é famoso por enfrentar colossos gigantes?",
    op: ["Ico", "Shadow of the Colossus", "Ōkami", "Onimusha"],
    r: "Shadow of the Colossus",
  },
  {
    q: "Qual RPG do PS2 apresenta Tidus e Yuna?",
    op: ["Final Fantasy X", "Persona 4", "Kingdom Hearts", "Dragon Quest VIII"],
    r: "Final Fantasy X",
  },
  {
    q: "Qual jogo mistura Disney e Final Fantasy?",
    op: ["Kingdom Hearts", "Persona 4", "Okami", "Jak II"],
    r: "Kingdom Hearts",
  },
  {
    q: "Qual jogo de terror psicológico do PS2 é conhecido por James Sunderland?",
    op: ["Resident Evil 4", "Silent Hill 2", "Dino Crisis", "Onimusha"],
    r: "Silent Hill 2",
  },
  {
    q: "Qual jogo de corrida do PS2 ficou famoso por personalização urbana de carros?",
    op: ["Burnout 3", "Need for Speed: Underground 2", "Gran Turismo", "Midnight Club"],
    r: "Need for Speed: Underground 2",
  },
  {
    q: "Qual jogo do PS2 usa o Pincel Celestial como mecânica principal?",
    op: ["Ōkami", "Ico", "Sly Cooper", "Prince of Persia"],
    r: "Ōkami",
  },
],};