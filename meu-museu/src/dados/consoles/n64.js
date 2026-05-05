export const n64 = {
  id: "n64",
  nome: "Nintendo 64",
  ano: 1996,
  geracao: "5ª Geração",
  geracaoId: "5a",
  fabricante: "Nintendo",
  fabricanteId: "nintendo",
  imagem_url: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Nintendo-64-wController-R.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    historia:
    `A arquitetura do Nintendo 64 é fundamentada no processador NEC VR4300 de 64 bits, operando a 93,75 MHz, e no co-processador Reality Co-Processor (RCP) desenvolvido pela Silicon Graphics (SGI). O RCP integra o Reality Drawing Processor (RDP) para rasterização de imagens e o Reality Signal Processor (RSP) para transformações geométricas e áudio. O sistema utiliza uma arquitetura de memória unificada (UMA) de 4 MB de RAM RDRAM, expansível para 8 MB via Expansion Pak.

No Brasil, o console foi distribuído pela Playtronic e, posteriormente, pela Gradiente Entertainment. O lançamento brasileiro foi marcado pela continuidade da produção local em Manaus, garantindo assistência técnica oficial e manuais em português. Embora tenha enfrentado forte concorrência do PlayStation devido ao alto custo dos cartuchos importados, o Nintendo 64 manteve uma base fiel no país graças ao forte apelo do multiplayer para quatro jogadores e títulos localizados.

Tecnicamente, o N64 introduziu inovações como filtragem bilinear de texturas, anti-aliasing por hardware e z-buffering nativo. O controle do sistema foi o primeiro do mercado de massa a popularizar a alavanca analógica e o sistema de vibração via Rumble Pak. Apesar do hardware potente, a capacidade limitada dos cartuchos (máximo de 64 MB) e a latência da memória RDRAM impuseram desafios significativos aos desenvolvedores da época.`,
    jogos: [
    {
      id: "n64-mario64",
      titulo: "Super Mario 64",
      ano: 1996,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg",
      plataforma: "N64",
      genero: "Plataforma 3D",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Super Mario 64 redefiniu o gênero de plataforma ao trazer liberdade total de movimento em ambientes 3D, exploração por estrelas e controle analógico preciso.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/77/Super_Mario_64_gameplay.png",
        ],
        dicas: [
          "Explore cada quadro com calma, pois cada fase possui várias estrelas.",
          "Use o pulo triplo e o salto na parede para alcançar áreas secretas.",
        ],
      },
    },
    {
      id: "n64-zeldaoot",
      titulo: "The Legend of Zelda: Ocarina of Time",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/8/88/The_Legend_of_Zelda_Ocarina_of_Time_box_art.png",
      plataforma: "N64",
      genero: "Aventura / RPG",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Um dos jogos mais aclamados da história, Ocarina of Time levou Zelda ao 3D com exploração, combate com mira travada, masmorras complexas e viagem no tempo.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/2/28/Ocarina_of_Time_gameplay.png",
        ],
        dicas: [
          "Aprenda as músicas da Ocarina para liberar atalhos e segredos.",
          "Use o Z-Targeting para lutar com mais precisão.",
        ],
      },
    },
    {
      id: "n64-goldeneye",
      titulo: "GoldenEye 007",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/6/66/GoldenEye007box.jpg",
      plataforma: "N64",
      genero: "FPS",
      desenvolvedora: "Rare",
      detalhes: {
        descricao_longa:
          "GoldenEye 007 popularizou os jogos de tiro em primeira pessoa nos consoles, com campanha baseada no filme e multiplayer local extremamente marcante.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/1/1c/GoldenEye007_gameplay.png",
        ],
        dicas: [
          "Use armas com silenciador para evitar alertar inimigos.",
          "No multiplayer, conheça bem os mapas para pegar armas melhores antes dos rivais.",
        ],
      },
    },
    {
      id: "n64-mariokart64",
      titulo: "Mario Kart 64",
      ano: 1996,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/7/75/Mario_Kart_64_box_art.png",
      plataforma: "N64",
      genero: "Corrida / Kart",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Mario Kart 64 levou a série para pistas em 3D, com multiplayer local para até quatro jogadores e itens clássicos da franquia.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/e/e5/Mario_Kart_64_gameplay.png",
        ],
        dicas: [
          "Domine o mini-turbo após derrapar.",
          "Use itens defensivos quando estiver em primeiro lugar.",
        ],
      },
    },
    {
      id: "n64-smashbros",
      titulo: "Super Smash Bros.",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/d/d3/Super_Smash_Bros._box_art.png",
      plataforma: "N64",
      genero: "Luta / Plataforma",
      desenvolvedora: "HAL Laboratory",
      detalhes: {
        descricao_longa:
          "O primeiro Super Smash Bros. reuniu personagens da Nintendo em combates de plataforma, onde o objetivo é lançar o adversário para fora da arena.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/4b/Super_Smash_Bros._gameplay.png",
        ],
        dicas: [
          "Aumente o percentual de dano do oponente antes de tentar arremessá-lo.",
          "Use o golpe especial para cima para voltar à arena.",
        ],
      },
    },
    {
      id: "n64-perfectdark",
      titulo: "Perfect Dark",
      ano: 2000,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/9/91/PerfectDarkCover.png",
      plataforma: "N64",
      genero: "FPS",
      desenvolvedora: "Rare",
      detalhes: {
        descricao_longa:
          "Perfect Dark é considerado sucessor espiritual de GoldenEye, trazendo tema futurista, armas com funções secundárias e multiplayer muito completo.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/7b/Perfect_Dark_gameplay.png",
        ],
        dicas: [
          "Teste o modo secundário de cada arma.",
          "Use bots no multiplayer para treinar estratégias.",
        ],
      },
    },
    {
      id: "n64-banjokazooie",
      titulo: "Banjo-Kazooie",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/6/60/Banjo-Kazooie_Coverart.png",
      plataforma: "N64",
      genero: "Plataforma 3D / Colecionável",
      desenvolvedora: "Rare",
      detalhes: {
        descricao_longa:
          "Banjo-Kazooie é um dos grandes jogos de plataforma 3D do Nintendo 64, com mundos abertos, humor, personagens carismáticos e muitos colecionáveis.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/a/a2/Banjo-Kazooie_gameplay.png",
        ],
        dicas: [
          "Colete Jiggies para abrir novos mundos.",
          "Aprenda novos movimentos com Bottles para acessar áreas bloqueadas.",
        ],
      },
    },
    {
      id: "n64-starfox64",
      titulo: "Star Fox 64",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Fox_64_box_art.png",
      plataforma: "N64",
      genero: "Rail Shooter 3D",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Star Fox 64 trouxe combates espaciais cinematográficos, rotas alternativas e foi um dos primeiros jogos a usar o Rumble Pak.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Fox_64_gameplay.png",
        ],
        dicas: [
          "Use barrel roll para refletir tiros inimigos.",
          "Certas ações nas fases liberam rotas alternativas.",
        ],
      },
    },
    {
      id: "n64-marioparty",
      titulo: "Mario Party",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/7/7c/Mario_Party_Box_Art.jpg",
      plataforma: "N64",
      genero: "Festa / Minigames",
      desenvolvedora: "Hudson Soft",
      detalhes: {
        descricao_longa:
          "Mario Party iniciou a famosa franquia de jogos de tabuleiro virtual com minigames competitivos e muita disputa entre amigos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/1/1a/Mario_Party_gameplay.png",
        ],
        dicas: [
          "Junte moedas para comprar estrelas.",
          "Conhecer os minigames ajuda muito na pontuação final.",
        ],
      },
    },
    {
      id: "n64-fzero-x",
      titulo: "F-Zero X",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/b/b3/F-Zero_X_box_art.png",
      plataforma: "N64",
      genero: "Corrida Futurista",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "F-Zero X trouxe corridas em altíssima velocidade com muitos pilotos simultâneos, pistas radicais e trilha sonora pesada.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/f/f7/F-Zero_X_gameplay.png",
        ],
        dicas: [
          "Use o ataque giratório para atingir adversários.",
          "Controle bem o boost para não gastar toda a energia.",
        ],
      },
    },
    {
      id: "n64-pokemonsnap",
      titulo: "Pokémon Snap",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/1/11/Pokemon_Snap_Box_Art.jpg",
      plataforma: "N64",
      genero: "Fotografia / Rail Shooter",
      desenvolvedora: "HAL Laboratory",
      detalhes: {
        descricao_longa:
          "Pokémon Snap é um jogo criativo em que o objetivo é fotografar Pokémon em ambientes naturais, usando itens para provocar reações especiais.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/b/b5/Pokemon_Snap_gameplay.png",
        ],
        dicas: [
          "Use itens para fazer Pokémon aparecerem ou mudarem de pose.",
          "Fotos centralizadas e próximas rendem mais pontos.",
        ],
      },
    },
    {
      id: "n64-dk64",
      titulo: "Donkey Kong 64",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/c/c8/Donkey_Kong_64_box_art.png",
      plataforma: "N64",
      genero: "Plataforma 3D / Colecionável",
      desenvolvedora: "Rare",
      detalhes: {
        descricao_longa:
          "Donkey Kong 64 expandiu a série para o 3D com cinco personagens jogáveis, muitos colecionáveis e mundos grandes para explorar.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/94/Donkey_Kong_64_gameplay.png",
        ],
        dicas: [
          "Cada Kong coleta itens específicos, então troque de personagem com frequência.",
          "A Expansion Pak é necessária para jogar.",
        ],
      },
    },
    {
      id: "n64-wave-race",
      titulo: "Wave Race 64",
      ano: 1996,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/b/b0/Wave_Race_64_Coverart.png",
      plataforma: "N64",
      genero: "Corrida / Jet Ski",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Wave Race 64 impressionou pela física da água e por corridas de jet ski com ondas que afetam diretamente a pilotagem.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/2/22/Wave_Race_64_gameplay.png",
        ],
        dicas: [
          "Passe corretamente entre as boias para manter velocidade.",
          "As ondas mudam a forma de fazer curvas e saltos.",
        ],
      },
    },
    {
      id: "n64-roguesquadron",
      titulo: "Star Wars: Rogue Squadron",
      ano: 1998,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Rogue_Squadron_Coverart.png",
      plataforma: "N64",
      genero: "Ação / Combate Aéreo",
      desenvolvedora: "Factor 5",
      detalhes: {
        descricao_longa:
          "Rogue Squadron colocou o jogador no controle de naves icônicas de Star Wars em missões de combate aéreo e ataques terrestres.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/91/Rogue_Squadron_gameplay.png",
        ],
        dicas: [
          "Use cada nave de acordo com a missão.",
          "Conseguir medalhas libera conteúdo extra.",
        ],
      },
    },
    {
      id: "n64-excitebike64",
      titulo: "Excitebike 64",
      ano: 2000,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/1/1a/Excitebike_64_Coverart.png",
      plataforma: "N64",
      genero: "Corrida / Motocross 3D",
      desenvolvedora: "Left Field Productions",
      detalhes: {
        descricao_longa:
          "Excitebike 64 levou o motocross clássico da Nintendo para o 3D, com pistas técnicas, manobras e controle de equilíbrio no ar.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/6/64/Excitebike_64_gameplay.png",
        ],
        dicas: [
          "Controle o ângulo da moto antes de aterrissar.",
          "Use o modo de treino para dominar curvas e saltos.",
        ],
      },
    },
    {
      id: "n64-papermario",
      titulo: "Paper Mario",
      ano: 2000,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/2/2b/Paper_Mario_N64.png",
      plataforma: "N64",
      genero: "RPG",
      desenvolvedora: "Intelligent Systems",
      detalhes: {
        descricao_longa:
          "Paper Mario mistura RPG por turnos, humor e visual de papel em uma aventura charmosa no universo Mario.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/99/Paper_Mario_gameplay.png",
        ],
        dicas: [
          "Use Badges para personalizar as habilidades do Mario.",
          "Acerte o timing dos comandos para atacar e defender melhor.",
        ],
      },
    },
    {
      id: "n64-cruisn-usa",
      titulo: "Cruis'n USA",
      ano: 1996,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/a/ab/Cruis%27n_USA_Cover.png",
      plataforma: "N64",
      genero: "Corrida Arcade",
      desenvolvedora: "Midway",
      detalhes: {
        descricao_longa:
          "Cruis'n USA é uma corrida arcade rápida e exagerada, passando por locais inspirados em pontos turísticos dos Estados Unidos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/75/Cruis%27n_USA_gameplay.png",
        ],
        dicas: [
          "Use nitro nas retas longas.",
          "Aprenda as curvas das pistas para manter velocidade.",
        ],
      },
    },
    {
      id: "n64-residentevil2",
      titulo: "Resident Evil 2",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Resident_Evil_2_Coverart.png/640px-Resident_Evil_2_Coverart.png",
      plataforma: "N64",
      genero: "Survival Horror",
      desenvolvedora: "Capcom / Angel Studios",
      detalhes: {
        descricao_longa:
          "A versão de Resident Evil 2 para Nintendo 64 foi um port técnico impressionante, adaptando um jogo originalmente em CD para cartucho.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/b/b5/Resident_Evil_2_gameplay.png",
        ],
        dicas: [
          "Economize munição e itens de cura.",
          "Explore os dois cenários para ver a história completa.",
        ],
      },
    },
    {
      id: "n64-battle-for-naboo",
      titulo: "Star Wars Episode I: Battle for Naboo",
      ano: 2000,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/3/30/Battlefornaboocover.jpg",
      plataforma: "N64",
      genero: "Ação / Combate Aéreo",
      desenvolvedora: "Factor 5",
      detalhes: {
        descricao_longa:
          "Battle for Naboo segue a linha de Rogue Squadron, com missões baseadas no universo de Star Wars: Episódio I e veículos variados.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/4b/Battle_for_Naboo_gameplay.png",
        ],
        dicas: [
          "Use o veículo mais adequado para cada tipo de objetivo.",
          "Conquistar medalhas libera extras.",
        ],
      },
    },
    {
      id: "n64-jetforcegemini",
      titulo: "Jet Force Gemini",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/a/a2/Jet_Force_Gemini_Coverart.png",
      plataforma: "N64",
      genero: "Third-Person Shooter / Aventura",
      desenvolvedora: "Rare",
      detalhes: {
        descricao_longa:
          "Jet Force Gemini mistura tiro em terceira pessoa, exploração e aventura espacial com três protagonistas jogáveis.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/b/b5/Jet_Force_Gemini_gameplay.png",
        ],
        dicas: [
          "Alterne entre personagens para acessar áreas diferentes.",
          "Explore bem as fases para encontrar todos os Tribals.",
        ],
      },
    },
    {
      id: "n64-bomberman64",
      titulo: "Bomberman 64",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/d/dc/Bomberman_64_Coverart.png",
      plataforma: "N64",
      genero: "Ação / Puzzle / Party",
      desenvolvedora: "Hudson Soft",
      detalhes: {
        descricao_longa:
          "Bomberman 64 levou a franquia para ambientes 3D, combinando puzzles com bombas e modo multiplayer competitivo.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/f/f0/Bomberman_64_gameplay.png",
        ],
        dicas: [
          "Use bombas para alcançar plataformas e resolver puzzles.",
          "No modo batalha, controle bem o espaço da arena.",
        ],
      },
    },
    {
      id: "n64-yoshis-story",
      titulo: "Yoshi's Story",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/3/3f/Yoshi%27s_Story_box_art.jpg",
      plataforma: "N64",
      genero: "Plataforma",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Yoshi's Story é um jogo de plataforma colorido e leve, com visual de livro infantil e fases focadas em coletar frutas.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/1/1f/Yoshi%27s_Story_gameplay.png",
        ],
        dicas: [
          "Colete frutas favoritas para ganhar mais pontos.",
          "Explore caminhos alternativos para liberar novas fases.",
        ],
      },
    },
    {
      id: "n64-kirby64",
      titulo: "Kirby 64: The Crystal Shards",
      ano: 2000,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/2/27/Kirby_64_box.jpg",
      plataforma: "N64",
      genero: "Plataforma",
      desenvolvedora: "HAL Laboratory",
      detalhes: {
        descricao_longa:
          "Kirby 64 trouxe a fórmula clássica de Kirby para gráficos 2.5D, com combinação de poderes e fases coloridas.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/7e/Kirby_64_gameplay.png",
        ],
        dicas: [
          "Combine poderes diferentes para criar habilidades únicas.",
          "Procure fragmentos de cristal escondidos nas fases.",
        ],
      },
    },
    {
      id: "n64-mariogolf",
      titulo: "Mario Golf",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/6/6f/Mario_Golf_N64_box_art.jpg",
      plataforma: "N64",
      genero: "Esporte / Golfe",
      desenvolvedora: "Camelot",
      detalhes: {
        descricao_longa:
          "Mario Golf transforma o golfe em uma experiência acessível e divertida, misturando técnica, personagens Nintendo e modos variados.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/99/Mario_Golf_N64_gameplay.png",
        ],
        dicas: [
          "Observe vento e inclinação antes de bater.",
          "Escolha personagens com força e controle adequados ao campo.",
        ],
      },
    },
    {
      id: "n64-mariotennis",
      titulo: "Mario Tennis",
      ano: 2000,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/5/5f/Mario_Tennis_N64_box_art.jpg",
      plataforma: "N64",
      genero: "Esporte / Tênis",
      desenvolvedora: "Camelot",
      detalhes: {
        descricao_longa:
          "Mario Tennis trouxe partidas rápidas, personagens variados e jogabilidade simples de aprender, mas com espaço para técnica.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/9b/Mario_Tennis_N64_gameplay.png",
        ],
        dicas: [
          "Use golpes diferentes para controlar a posição do adversário.",
          "Aproxime-se da rede apenas em momentos seguros.",
        ],
      },
    },
    {
      id: "n64-snowboardkids",
      titulo: "Snowboard Kids",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/1/13/Snowboard_Kids_cover.jpg",
      plataforma: "N64",
      genero: "Corrida / Snowboard",
      desenvolvedora: "Racdym",
      detalhes: {
        descricao_longa:
          "Snowboard Kids mistura corrida de snowboard com itens e humor, criando uma experiência competitiva no estilo arcade.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/4c/Snowboard_Kids_gameplay.png",
        ],
        dicas: [
          "Use itens para atrapalhar adversários em curvas e rampas.",
          "Controle bem o pouso para não perder velocidade.",
        ],
      },
    },
    {
      id: "n64-turok",
      titulo: "Turok: Dinosaur Hunter",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/0/0f/Turok_Dinosaur_Hunter_Coverart.png",
      plataforma: "N64",
      genero: "FPS / Aventura",
      desenvolvedora: "Iguana Entertainment",
      detalhes: {
        descricao_longa:
          "Turok: Dinosaur Hunter foi um FPS marcante no Nintendo 64, com exploração, armas variadas e combate contra dinossauros.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/8/82/Turok_gameplay.png",
        ],
        dicas: [
          "Explore para encontrar chaves necessárias ao progresso.",
          "Use armas pesadas contra inimigos maiores.",
        ],
      },
    },
    {
      id: "n64-doom64",
      titulo: "Doom 64",
      ano: 1997,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Doom_64_box.jpg",
      plataforma: "N64",
      genero: "FPS",
      desenvolvedora: "Midway Games",
      detalhes: {
        descricao_longa:
          "Doom 64 trouxe uma versão mais sombria e atmosférica da franquia Doom, com novas fases, iluminação diferente e ação intensa.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/0/01/Doom_64_gameplay.png",
        ],
        dicas: [
          "Economize munição pesada para inimigos fortes.",
          "Explore paredes suspeitas para encontrar áreas secretas.",
        ],
      },
    },
    {
      id: "n64-rayman2",
      titulo: "Rayman 2: The Great Escape",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/4/47/Rayman_2_cover.png",
      plataforma: "N64",
      genero: "Plataforma 3D",
      desenvolvedora: "Ubisoft",
      detalhes: {
        descricao_longa:
          "Rayman 2 levou a série para o 3D com mundos coloridos, boa jogabilidade e uma aventura charmosa.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/2/25/Rayman_2_gameplay.png",
        ],
        dicas: [
          "Colete Lums para completar melhor cada fase.",
          "Use o cabelo-helicóptero para atravessar grandes espaços.",
        ],
      },
    },
    {
      id: "n64-ogre-battle64",
      titulo: "Ogre Battle 64: Person of Lordly Caliber",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/7/7e/Ogre_Battle_64_Coverart.png",
      plataforma: "N64",
      genero: "RPG Tático",
      desenvolvedora: "Quest",
      detalhes: {
        descricao_longa:
          "Ogre Battle 64 é um RPG tático com foco em estratégia, formação de unidades e decisões que influenciam a narrativa.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/49/Ogre_Battle_64_gameplay.png",
        ],
        dicas: [
          "Monte unidades equilibradas com ataque, defesa e suporte.",
          "Suas escolhas podem alterar o rumo da história.",
        ],
      },
    },
    {
      id: "n64-beetle-adventure-racing",
      titulo: "Beetle Adventure Racing",
      ano: 1999,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/7/70/Beetle_Adventure_Racing_Coverart.png",
      plataforma: "N64",
      genero: "Corrida",
      desenvolvedora: "Paradigm Entertainment",
      detalhes: {
        descricao_longa:
          "Beetle Adventure Racing é um jogo de corrida arcade com pistas longas, atalhos e foco em exploração dentro das corridas.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/7f/Beetle_Adventure_Racing_gameplay.png",
        ],
        dicas: [
          "Procure caixas e atalhos escondidos pelas pistas.",
          "Usar caminhos alternativos pode economizar muito tempo.",
        ],
      },
    },
  ],
  quiz: [
  {
    q: "Em que ano o Nintendo 64 foi lançado no Japão?",
    op: ["1994", "1996", "1998", "2000"],
    r: "1996",
  },
  {
    q: "Qual inovação marcou o controle do Nintendo 64?",
    op: ["Tela touch", "Controle analógico", "Sensor de movimento", "Controle sem fio padrão"],
    r: "Controle analógico",
  },
  {
    q: "Qual jogo ajudou a definir os jogos de plataforma 3D?",
    op: ["Super Mario 64", "Crash Team Racing", "Rayman", "Sonic 2"],
    r: "Super Mario 64",
  },
  {
    q: "Qual jogo do N64 é famoso por popularizar FPS em consoles?",
    op: ["GoldenEye 007", "Doom 64", "Turok", "Perfect Dark"],
    r: "GoldenEye 007",
  },
  {
    q: "Qual empresa desenvolveu GoldenEye 007?",
    op: ["Rare", "Capcom", "Konami", "Namco"],
    r: "Rare",
  },
  {
    q: "Qual jogo do N64 usa uma ocarina como elemento central?",
    op: ["Banjo-Kazooie", "Ocarina of Time", "Paper Mario", "Star Fox 64"],
    r: "Ocarina of Time",
  },
  {
    q: "Qual acessório era necessário para jogar Donkey Kong 64?",
    op: ["Rumble Pak", "Expansion Pak", "Transfer Pak", "Memory Card"],
    r: "Expansion Pak",
  },
  {
    q: "Qual jogo do N64 envolve fotografar Pokémon?",
    op: ["Pokémon Stadium", "Pokémon Snap", "Hey You, Pikachu!", "Paper Mario"],
    r: "Pokémon Snap",
  },
  {
    q: "Qual jogo do N64 iniciou a franquia Super Smash Bros.?",
    op: ["Super Smash Bros.", "Mario Party", "Mario Tennis", "F-Zero X"],
    r: "Super Smash Bros.",
  },
  {
    q: "Qual jogo do N64 é um RPG com visual de papel?",
    op: ["Paper Mario", "Ogre Battle 64", "Quest 64", "Banjo-Kazooie"],
    r: "Paper Mario",
  },
],



};