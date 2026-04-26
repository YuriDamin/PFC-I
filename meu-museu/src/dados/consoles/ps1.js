export const ps1 = {
  id: "ps1",
  nome: "PlayStation (PS1)",
  ano: 1994,
  geracao: "5ª Geração",
  geracaoId: "5a",
  fabricante: "Sony",
  fabricanteId: "sony",
  imagem_url:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PSX-Console-wController.jpg/640px-PSX-Console-wController.jpg",
    historia:
    `O PlayStation baseia sua operação na CPU MIPS R3000A de 32 bits, operando a 33,8 MHz, com unidades integradas para processamento geométrico (GTE) e descompressão de vídeo (MDEC). O sistema possui 2 MB de RAM principal e 1 MB de VRAM dedicada à GPU, que é capaz de processar até 360.000 polígonos por segundo com mapeamento de texturas. A unidade de áudio (SPU) suporta 24 canais de som ADPCM com qualidade superior a CD.

A introdução do console no Brasil ocorreu predominantemente através do "mercado cinza" (importações informais) durante a segunda metade da década de 1990. A facilidade de desbloqueio do hardware e a ampla disponibilidade de mídias piratas tornaram o PlayStation o console dominante no país, apesar da falta de representação oficial da Sony Computer Entertainment na época. Essa penetração informal estabeleceu as bases para a Sony entrar oficialmente no Brasil anos depois.

A escolha do CD-ROM como mídia de armazenamento foi fundamental para a arquitetura, oferecendo 660 MB de espaço em comparação aos poucos megabytes dos cartuchos da concorrência. Isso permitiu a inclusão de áudio Red Book e sequências de vídeo em movimento (FMV) de alta fidelidade. O sistema também introduziu o Memory Card como padrão para armazenamento de dados voláteis, eliminando a necessidade de baterias internas nos jogos.`,
    jogos: [
    {
      id: "ps1-metal-gear",
      titulo: "Metal Gear Solid",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/pt/3/33/Metal_Gear_Solid_capa.jpg",
      plataforma: "PS1",
      genero: "Stealth",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Dirigido por Hideo Kojima, Metal Gear Solid marcou época ao misturar espionagem, narrativa cinematográfica e jogabilidade furtiva.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/pt/4/4b/Mgs-psycho_mantis.png",
        ],
        dicas: [
          "Use o radar para observar a visão dos inimigos.",
          "Contra Psycho Mantis, a solução clássica envolve trocar a entrada do controle.",
        ],
      },
    },
    {
      id: "ps1-final-fantasy-vii",
      titulo: "Final Fantasy VII",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/9/98/Final_Fantasy_VII_Box_Art.jpg",
      plataforma: "PS1",
      genero: "RPG",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Um dos RPGs mais importantes da história dos videogames, com narrativa épica, sistema de Materia e personagens marcantes.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/e/e0/Final_Fantasy_VII_gameplay.png",
        ],
        dicas: [
          "Combine Materias para criar efeitos mais fortes.",
          "Explore bem o mapa para encontrar invocações e equipamentos raros.",
        ],
      },
    },
    {
      id: "ps1-crash",
      titulo: "Crash Bandicoot 3: Warped",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Crash_Bandicoot_Warped_Cover.png",
      plataforma: "PS1",
      genero: "Plataforma",
      desenvolvedora: "Naughty Dog",
      detalhes: {
        descricao_longa:
          "Crash Bandicoot 3 trouxe fases criativas, viagens no tempo e uma jogabilidade refinada para a franquia.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/7b/Crash_Bandicoot_3_gameplay.png",
        ],
        dicas: [
          "Complete fases de relíquia para liberar novos desafios.",
          "Use os poderes ganhos contra chefes para voltar em fases antigas.",
        ],
      },
    },
    {
      id: "ps1-re2",
      titulo: "Resident Evil 2",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Resident_Evil_2_Coverart.png/640px-Resident_Evil_2_Coverart.png",
      plataforma: "PS1",
      genero: "Survival Horror",
      desenvolvedora: "Capcom",
      detalhes: {
        descricao_longa:
          "Um clássico do terror de sobrevivência que expandiu o universo Resident Evil com dois protagonistas e cenários interligados.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/b/b5/Resident_Evil_2_gameplay.png",
        ],
        dicas: [
          "Economize munição sempre que possível.",
          "Jogue os cenários A e B para entender a história completa.",
        ],
      },
    },
    {
      id: "ps1-gran-turismo",
      titulo: "Gran Turismo",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Gran_Turismo_Coverart.png/640px-Gran_Turismo_Coverart.png",
      plataforma: "PS1",
      genero: "Corrida / Simulação",
      desenvolvedora: "Polyphony Digital",
      detalhes: {
        descricao_longa:
          "Gran Turismo elevou o padrão dos jogos de corrida no console, trazendo muitos carros, licenças e uma proposta mais próxima da simulação.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/d/dc/Gran_Turismo_gameplay.png",
        ],
        dicas: [
          "Faça as licenças para desbloquear novas competições.",
          "Melhore pneus e freios antes de focar apenas em potência.",
        ],
      },
    },
    {
      id: "ps1-tekken3",
      titulo: "Tekken 3",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Tekken_3_Coverart.png/640px-Tekken_3_Coverart.png",
      plataforma: "PS1",
      genero: "Luta 3D",
      desenvolvedora: "Namco",
      detalhes: {
        descricao_longa:
          "Tekken 3 é um dos maiores jogos de luta do PS1, com combate rápido, elenco marcante e vários modos extras.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/7e/Tekken_3_gameplay.png",
        ],
        dicas: [
          "Aprenda combos simples antes de tentar sequências longas.",
          "Use movimentação lateral para escapar de ataques previsíveis.",
        ],
      },
    },
    {
      id: "ps1-tomb-raider-2",
      titulo: "Tomb Raider II",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Tomb_Raiderr_II_Coverart.png/640px-Tomb_Raiderr_II_Coverart.png",
      plataforma: "PS1",
      genero: "Ação / Aventura",
      desenvolvedora: "Core Design",
      detalhes: {
        descricao_longa:
          "Tomb Raider II expandiu a exploração 3D com ambientes maiores, veículos e mais ação com Lara Croft.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/90/Tomb_Raider_II_gameplay.png",
        ],
        dicas: [
          "Observe bem o cenário para encontrar chaves e alavancas.",
          "Use pulos calculados para alcançar plataformas distantes.",
        ],
      },
    },
    {
      id: "ps1-rayman",
      titulo: "Rayman",
      ano: 1995,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Rayman_Coverart.jpg/640px-Rayman_Coverart.jpg",
      plataforma: "PS1",
      genero: "Plataforma 2D",
      desenvolvedora: "Ubisoft",
      detalhes: {
        descricao_longa:
          "Rayman se destacou por seus gráficos 2D coloridos, animações fluidas e fases bastante desafiadoras.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/8/87/Rayman_gameplay.png",
        ],
        dicas: [
          "Explore as fases para libertar todos os Electoons.",
          "Use o cabelo-helicóptero para atravessar áreas perigosas.",
        ],
      },
    },
    {
      id: "ps1-castlevania-sotn",
      titulo: "Castlevania: Symphony of the Night",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Castlevania_Symphony_of_the_Night_Coverart.jpg/640px-Castlevania_Symphony_of_the_Night_Coverart.png",
      plataforma: "PS1",
      genero: "Action RPG / Metroidvania",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Um dos jogos mais importantes do gênero metroidvania, combinando exploração livre, evolução de personagem e atmosfera gótica.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/d/d7/Symphony_of_the_Night_gameplay.png",
        ],
        dicas: [
          "Explore áreas antigas depois de ganhar novas habilidades.",
          "Equipamentos raros podem mudar bastante seu estilo de jogo.",
        ],
      },
    },
    {
      id: "ps1-tony-hawk-2",
      titulo: "Tony Hawk's Pro Skater 2",
      ano: 2000,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Tony_Hawk%27s_Pro_Skater_2_Coverart.png/640px-Tony_Hawk%27s_Pro_Skater_2_Coverart.png",
      plataforma: "PS1",
      genero: "Esporte / Skateboarding",
      desenvolvedora: "Neversoft",
      detalhes: {
        descricao_longa:
          "Tony Hawk's Pro Skater 2 refinou a fórmula do skate arcade, com combos, manobras e trilha sonora marcante.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/6/64/THPS2_gameplay.png",
        ],
        dicas: [
          "Use o Manual para ligar combos maiores.",
          "Complete objetivos das fases para desbloquear novos conteúdos.",
        ],
      },
    },
    {
      id: "ps1-silent-hill",
      titulo: "Silent Hill",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Silent_Hill_Cover.jpg/640px-Silent_Hill_Cover.jpg",
      plataforma: "PS1",
      genero: "Survival Horror Psicológico",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Silent Hill marcou o terror psicológico nos videogames com clima sombrio, névoa, sons perturbadores e narrativa misteriosa.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/4c/Silent_Hill_gameplay.png",
        ],
        dicas: [
          "O rádio avisa quando inimigos estão próximos.",
          "Explore com calma, pois existem múltiplos finais.",
        ],
      },
    },
    {
      id: "ps1-spyro",
      titulo: "Spyro the Dragon",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Spyro_the_Dragon_Coverart.png/640px-Spyro_the_Dragon_Coverart.png",
      plataforma: "PS1",
      genero: "Plataforma 3D",
      desenvolvedora: "Insomniac Games",
      detalhes: {
        descricao_longa:
          "Spyro the Dragon trouxe mundos coloridos, exploração 3D e uma jogabilidade acessível com foco em coletáveis.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/1/14/Spyro_the_Dragon_gameplay.png",
        ],
        dicas: [
          "Use a investida para se mover mais rápido.",
          "Colete gemas e liberte dragões para completar os mundos.",
        ],
      },
    },
    {
      id: "ps1-medievil",
      titulo: "MediEvil",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Medievil_Cover.jpg/640px-Medievil_Cover.jpg",
      plataforma: "PS1",
      genero: "Ação / Aventura",
      desenvolvedora: "SCE Cambridge Studio",
      detalhes: {
        descricao_longa:
          "MediEvil acompanha Sir Daniel Fortesque em uma aventura sombria e bem-humorada, com visual gótico e combate em terceira pessoa.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/4e/MediEvil_gameplay.png",
        ],
        dicas: [
          "Colete o Cálice de Almas para liberar novas armas.",
          "Use armas de longo alcance contra inimigos voadores.",
        ],
      },
    },
    {
      id: "ps1-wipeout",
      titulo: "Wipeout",
      ano: 1995,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Wipeout_Coverart.png/640px-Wipeout_Coverart.png",
      plataforma: "PS1",
      genero: "Corrida Anti-Gravidade",
      desenvolvedora: "Psygnosis",
      detalhes: {
        descricao_longa:
          "Wipeout combinou corrida futurista, velocidade, armas e estética eletrônica, ajudando a definir a identidade inicial do PlayStation.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/b/b5/Wipeout_gameplay.png",
        ],
        dicas: [
          "Use os freios laterais nas curvas fechadas.",
          "Guarde power-ups defensivos para momentos críticos.",
        ],
      },
    },
    {
      id: "ps1-twisted-metal-2",
      titulo: "Twisted Metal 2",
      ano: 1996,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Twisted_Metal_2_Coverart.png/640px-Twisted_Metal_2_Coverart.png",
      plataforma: "PS1",
      genero: "Combate Veicular",
      desenvolvedora: "SingleTrac",
      detalhes: {
        descricao_longa:
          "Twisted Metal 2 aprimorou o combate entre veículos, com arenas destrutíveis, personagens excêntricos e muita ação.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/b/b5/Twisted_Metal_2_gameplay.png",
        ],
        dicas: [
          "Aprenda os ataques especiais de cada veículo.",
          "Use o cenário para se proteger e emboscar inimigos.",
        ],
      },
    },
    {
      id: "ps1-parasite-eve",
      titulo: "Parasite Eve",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Parasite_Eve_Coverart.png/640px-Parasite_Eve_Coverart.png",
      plataforma: "PS1",
      genero: "Action RPG / Survival Horror",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Parasite Eve mistura RPG, ação e terror biológico em uma experiência diferente dentro da biblioteca do PS1.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/8/87/Parasite_Eve_gameplay.png",
        ],
        dicas: [
          "Use Parasite Energy como recurso estratégico.",
          "Melhore armas com cuidado para não desperdiçar recursos.",
        ],
      },
    },
    {
      id: "ps1-v-rally",
      titulo: "V-Rally: Championship Edition",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/V-Rally_Coverart.png/640px-V-Rally_Coverart.png",
      plataforma: "PS1",
      genero: "Corrida / Rally",
      desenvolvedora: "Eden Studios",
      detalhes: {
        descricao_longa:
          "V-Rally trouxe corridas de rali com pistas variadas, curvas difíceis e foco em pilotagem mais técnica.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/c/c5/V-Rally_gameplay.png",
        ],
        dicas: [
          "Use o freio de mão nas curvas mais fechadas.",
          "Preste atenção nas chamadas do percurso para antecipar obstáculos.",
        ],
      },
    },
    {
      id: "ps1-oddworld-abe",
      titulo: "Oddworld: Abe's Oddysee",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Abe%27s_Oddysee_Coverart.png/640px-Abe%27s_Oddysee_Coverart.png",
      plataforma: "PS1",
      genero: "Plataforma / Quebra-Cabeça",
      desenvolvedora: "Oddworld Inhabitants",
      detalhes: {
        descricao_longa:
          "Oddworld combina plataforma, quebra-cabeças e crítica social em uma aventura criativa estrelada por Abe.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/c/c5/Abe%27s_Oddysee_gameplay.png",
        ],
        dicas: [
          "Use comandos de fala para guiar os Mudokons.",
          "Salvar mais Mudokons influencia o final do jogo.",
        ],
      },
    },
    {
      id: "ps1-crash-team-racing",
      titulo: "Crash Team Racing",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/4/4f/Crash_Team_Racing_Boxart.png",
      plataforma: "PS1",
      genero: "Corrida / Kart",
      desenvolvedora: "Naughty Dog",
      detalhes: {
        descricao_longa:
          "Crash Team Racing levou a franquia Crash para as corridas de kart, com pistas criativas, personagens marcantes e foco em derrapagens.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Crash_Team_Racing_gameplay.png",
        ],
        dicas: [
          "Domine o turbo durante a derrapagem.",
          "Aprenda os atalhos das pistas para vencer nos modos mais difíceis.",
        ],
      },
    },
    {
      id: "ps1-spyro-2",
      titulo: "Spyro 2: Ripto's Rage!",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/8/8f/Spyro_2_Ripto%27s_Rage%21_Coverart.png",
      plataforma: "PS1",
      genero: "Plataforma 3D",
      desenvolvedora: "Insomniac Games",
      detalhes: {
        descricao_longa:
          "Spyro 2 expandiu a fórmula do primeiro jogo com novos personagens, habilidades e mundos mais variados.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/77/Spyro_2_gameplay.png",
        ],
        dicas: [
          "Compre novas habilidades com Moneybags para acessar áreas bloqueadas.",
          "Volte a fases antigas depois de liberar novas habilidades.",
        ],
      },
    },
    {
      id: "ps1-final-fantasy-viii",
      titulo: "Final Fantasy VIII",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/6/6b/Final_Fantasy_VIII_Box_Art.jpg",
      plataforma: "PS1",
      genero: "RPG",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Final Fantasy VIII apresenta uma história mais romântica e política, com sistema de Junction e invocações chamadas Guardian Forces.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/4c/Final_Fantasy_VIII_battle.png",
        ],
        dicas: [
          "Use o sistema de Junction para fortalecer atributos.",
          "Colete cartas no Triple Triad para conseguir itens e magias.",
        ],
      },
    },
    {
      id: "ps1-final-fantasy-ix",
      titulo: "Final Fantasy IX",
      ano: 2000,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/5/51/Ffixbox.jpg",
      plataforma: "PS1",
      genero: "RPG",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Final Fantasy IX retorna a uma fantasia mais clássica, com personagens carismáticos e temas sobre identidade, vida e destino.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/59/Final_Fantasy_IX_battle.png",
        ],
        dicas: [
          "Aprenda habilidades equipando armas e armaduras.",
          "Explore cidades e converse com NPCs para encontrar itens escondidos.",
        ],
      },
    },
    {
      id: "ps1-xenogears",
      titulo: "Xenogears",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/7/75/Xenogears_box.jpg",
      plataforma: "PS1",
      genero: "RPG",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Xenogears é um RPG ambicioso, conhecido por sua narrativa complexa, temas filosóficos e batalhas com robôs gigantes chamados Gears.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/7e/Xenogears_battle.png",
        ],
        dicas: [
          "Aprenda Deathblows usando combinações de ataques.",
          "Gerencie combustível dos Gears nas batalhas mais longas.",
        ],
      },
    },
    {
      id: "ps1-suikoden-2",
      titulo: "Suikoden II",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/5/5d/Suikoden_II_Coverart.png",
      plataforma: "PS1",
      genero: "RPG",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Suikoden II é um RPG de guerra e amizade, famoso por sua grande quantidade de personagens recrutáveis e narrativa emocionante.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/5c/Suikoden_II_gameplay.png",
        ],
        dicas: [
          "Recrute o máximo de personagens possível.",
          "Algumas decisões podem alterar eventos e disponibilidade de aliados.",
        ],
      },
    },
    {
      id: "ps1-vagrant-story",
      titulo: "Vagrant Story",
      ano: 2000,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/8/8d/Vagrant_Story_Coverart.png",
      plataforma: "PS1",
      genero: "Action RPG",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Vagrant Story combina exploração, combate estratégico e uma ambientação sombria em um dos jogos mais técnicos do PS1.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/2/2a/Vagrant_Story_gameplay.png",
        ],
        dicas: [
          "Entenda os tipos de armas e inimigos para causar mais dano.",
          "Gerencie o risco durante os combates para não perder precisão.",
        ],
      },
    },
    {
      id: "ps1-gran-turismo-2",
      titulo: "Gran Turismo 2",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/3/34/Gran_Turismo_2_Coverart.png",
      plataforma: "PS1",
      genero: "Corrida / Simulação",
      desenvolvedora: "Polyphony Digital",
      detalhes: {
        descricao_longa:
          "Gran Turismo 2 ampliou enormemente o conteúdo do primeiro jogo, trazendo mais carros, pistas e modos de corrida.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/8/8b/Gran_Turismo_2_gameplay.png",
        ],
        dicas: [
          "Comece com carros baratos e evolua aos poucos.",
          "Ajustes de suspensão e transmissão podem fazer diferença em provas difíceis.",
        ],
      },
    },
    {
      id: "ps1-driver",
      titulo: "Driver",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/8/8e/Driver_video_game_cover.jpg",
      plataforma: "PS1",
      genero: "Ação / Direção",
      desenvolvedora: "Reflections Interactive",
      detalhes: {
        descricao_longa:
          "Driver colocou o jogador em perseguições cinematográficas, com foco em direção urbana e missões inspiradas em filmes policiais.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/78/Driver_gameplay.png",
        ],
        dicas: [
          "Treine bastante no estacionamento inicial.",
          "Use curvas fechadas e becos para despistar perseguidores.",
        ],
      },
    },
    {
      id: "ps1-ape-escape",
      titulo: "Ape Escape",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/1/1f/Ape_Escape_Coverart.png",
      plataforma: "PS1",
      genero: "Plataforma 3D",
      desenvolvedora: "Japan Studio",
      detalhes: {
        descricao_longa:
          "Ape Escape ficou conhecido por usar fortemente os dois analógicos do controle DualShock, com fases criativas e captura de macacos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/4b/Ape_Escape_gameplay.png",
        ],
        dicas: [
          "Use cada gadget de acordo com o comportamento dos macacos.",
          "Volte às fases antigas quando desbloquear novas ferramentas.",
        ],
      },
    },
    {
      id: "ps1-dino-crisis",
      titulo: "Dino Crisis",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/4/4d/Dino_Crisis_Coverart.png",
      plataforma: "PS1",
      genero: "Survival Horror",
      desenvolvedora: "Capcom",
      detalhes: {
        descricao_longa:
          "Dino Crisis mistura a fórmula survival horror da Capcom com dinossauros, cenários em 3D e tensão constante.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/e/e8/Dino_Crisis_gameplay.png",
        ],
        dicas: [
          "Economize munição, pois os dinossauros são resistentes.",
          "Use tranquilizantes para evitar gastar balas em alguns momentos.",
        ],
      },
    },
    {
      id: "ps1-soul-reaver",
      titulo: "Legacy of Kain: Soul Reaver",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/f/f8/Soul_Reaver_Coverart.png",
      plataforma: "PS1",
      genero: "Ação / Aventura",
      desenvolvedora: "Crystal Dynamics",
      detalhes: {
        descricao_longa:
          "Soul Reaver combina exploração, combate e mudança entre planos espiritual e material em uma aventura sombria e atmosférica.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/7e/Soul_Reaver_gameplay.png",
        ],
        dicas: [
          "Use a troca entre planos para resolver puzzles.",
          "Explore bem o mapa para encontrar melhorias e novas áreas.",
        ],
      },
    },
  ],
quiz: [
  {
    q: "Em que ano o PlayStation foi lançado no Japão?",
    op: ["1991", "1994", "1997", "2000"],
    r: "1994",
  },
  {
    q: "Qual mídia ajudou o PlayStation a popularizar jogos maiores?",
    op: ["Cartucho", "CD-ROM", "Blu-ray", "Disquete"],
    r: "CD-ROM",
  },
  {
    q: "Qual jogo do PS1 é estrelado por Solid Snake?",
    op: ["Resident Evil 2", "Metal Gear Solid", "Tekken 3", "Driver"],
    r: "Metal Gear Solid",
  },
  {
    q: "Qual RPG do PS1 é famoso pelo sistema de Materia?",
    op: ["Final Fantasy VII", "Final Fantasy IX", "Xenogears", "Parasite Eve"],
    r: "Final Fantasy VII",
  },
  {
    q: "Qual jogo de terror psicológico marcou o PS1 com névoa e rádio?",
    op: ["Resident Evil 2", "Dino Crisis", "Silent Hill", "Parasite Eve"],
    r: "Silent Hill",
  },
  {
    q: "Qual jogo de luta 3D é um dos mais famosos do PS1?",
    op: ["Tekken 3", "Street Fighter II", "Mortal Kombat II", "Virtua Fighter 5"],
    r: "Tekken 3",
  },
  {
    q: "Qual personagem é protagonista de Tomb Raider?",
    op: ["Jill Valentine", "Aya Brea", "Lara Croft", "Regina"],
    r: "Lara Croft",
  },
  {
    q: "Qual jogo do PS1 popularizou o skate arcade com combos?",
    op: ["Tony Hawk's Pro Skater 2", "Gran Turismo", "V-Rally", "Wipeout"],
    r: "Tony Hawk's Pro Skater 2",
  },
  {
    q: "Qual jogo do PS1 é conhecido por corridas futuristas anti-gravidade?",
    op: ["Wipeout", "Gran Turismo", "Crash Team Racing", "Driver"],
    r: "Wipeout",
  },
  {
    q: "Qual destes jogos do PS1 é um survival horror com dinossauros?",
    op: ["Dino Crisis", "MediEvil", "Soul Reaver", "Ape Escape"],
    r: "Dino Crisis",
  },
],
};