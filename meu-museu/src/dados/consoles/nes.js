export const nes = {
  id: "nes",
  nome: "Nintendo Entertainment System (NES)",
  ano: 1985,
  geracao: "3ª Geração",
  geracaoId: "3a",
  fabricante: "Nintendo",
  fabricanteId: "nintendo",
  imagem_url:
    "https://upload.wikimedia.org/wikipedia/commons/b/b2/NES-Console-Set.png",
    historia:
    `A arquitetura do Nintendo Entertainment System é baseada no processador customizado de 8 bits Ricoh 2A03, derivado do MOS Technology 6502. O hardware opera com uma frequência de 1,79 MHz em sistemas NTSC e possui uma Unidade de Processamento de Imagem (PPU) dedicada para a renderização de sprites de até 8x16 pixels. O sistema de áudio é composto por cinco canais de som, incluindo modulação de código delta (DPCM) e geradores de pulso.

No Brasil, o NES teve uma trajetória singular devido à Lei de Informática, que impedia a importação direta de eletrônicos. Isso resultou na proliferação de "clones" nacionais baseados em engenharia reversa, como o Phantom System da Gradiente e o Dynavision da Dynacom. A Nintendo estabeleceu representação oficial apenas em 1993, através da Playtronic (uma parceria entre Gradiente e Estrela), mas a popularidade prévia dos clones moldou permanentemente o mercado de 8 bits no país.

A mídia física padrão consistia em cartuchos com capacidades variadas, frequentemente expandidas por chips de mapeamento de memória (Mappers) integrados à placa do próprio jogo. Essa modularidade permitiu ao hardware de 1985 rodar títulos tecnicamente complexos no início da década de 90. A saída de vídeo nativa utiliza o modulador RF ou vídeo composto RCA, dependendo da revisão do console.`,
    jogos: [
    {
      id: "nes-mario-3",
      titulo: "Super Mario Bros. 3",
      ano: 1988,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/pt/a/a5/Super_Mario_Bros._3_coverart.png",
      plataforma: "NES",
      genero: "Plataforma",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Considerado um dos melhores jogos de plataforma da era 8-bits, Super Mario Bros. 3 expandiu a fórmula da série com novos power-ups, mapa de mundo, fases variadas e grande criatividade visual.",
        imagens_galeria: [
          "https://cdn.mobygames.com/screenshots/10190973-super-mario-bros-3-nes-title-screen.jpg",
          "https://cdn.mobygames.com/885720de-ac0d-11ed-9915-02420a000134.webp",
          "https://cdn.mobygames.com/screenshots/10144522-super-mario-bros-3-nes-world-map.jpg",
        ],
        dicas: [
          "Use as Flautas Mágicas para pular mundos.",
          "O P-Wing permite voar durante uma fase inteira.",
        ],
      },
    },
    {
      id: "nes-zelda",
      titulo: "The Legend of Zelda",
      ano: 1986,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/pt/thumb/9/96/The_Legend_of_Zelda_1_capa.png/330px-The_Legend_of_Zelda_1_capa.png",
      plataforma: "NES",
      genero: "Aventura",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "O primeiro The Legend of Zelda introduziu exploração livre, itens, masmorras e segredos em um mundo aberto 8-bits, criando uma das franquias mais importantes da Nintendo.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/d/d2/Zelda_NES_screenshot.png",
        ],
        dicas: [
          "Use bombas em paredes suspeitas para encontrar passagens secretas.",
          "Explore o mapa com calma para encontrar itens essenciais.",
        ],
      },
    },
    {
      id: "nes-megaman-2",
      titulo: "Mega Man 2",
      ano: 1988,
      imagem_url:
        "https://i.pinimg.com/736x/2c/cb/35/2ccb35e5cc369858558dbe818d1654f6.jpg",
      plataforma: "NES",
      genero: "Ação / Plataforma",
      desenvolvedora: "Capcom",
      detalhes: {
        descricao_longa:
          "Mega Man 2 consolidou a fórmula clássica da série, permitindo enfrentar chefes em qualquer ordem e usar suas armas para explorar fraquezas dos inimigos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/a/a2/Mega_Man_2_screenshot.png",
        ],
        dicas: [
          "Use o Metal Blade contra muitos inimigos, pois é uma das armas mais versáteis.",
          "Escolher a ordem certa dos chefes facilita bastante a campanha.",
        ],
      },
    },
    {
      id: "nes-castlevania",
      titulo: "Castlevania",
      ano: 1986,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/5/51/Castlevania_1_cover.png",
      plataforma: "NES",
      genero: "Plataforma / Ação",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Castlevania colocou o jogador no papel de Simon Belmont em uma jornada gótica contra Drácula, usando o chicote Vampire Killer e armas secundárias.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/77/Castlevania_gameplay_screenshot.png",
        ],
        dicas: [
          "Use o Machado contra inimigos aéreos.",
          "Aprenda o padrão dos chefes antes de gastar corações com armas secundárias.",
        ],
      },
    },
    {
      id: "nes-contra",
      titulo: "Contra",
      ano: 1988,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/6/65/Contra_cover.jpg",
      plataforma: "NES",
      genero: "Run and Gun",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Contra é um clássico jogo de tiro e ação lateral, famoso pela dificuldade elevada, modo cooperativo e pelo conhecido Konami Code.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/52/Contra_gameplay.png",
        ],
        dicas: [
          "A arma Spread é uma das mais fortes do jogo.",
          "Memorize os padrões dos inimigos para sobreviver por mais tempo.",
        ],
      },
    },
    {
      id: "nes-final-fantasy",
      titulo: "Final Fantasy",
      ano: 1987,
      imagem_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmapgmPwvwFHrpHWpSzcZxAZat2z2T6afdQ&s",
      plataforma: "NES",
      genero: "RPG",
      desenvolvedora: "Square",
      detalhes: {
        descricao_longa:
          "Final Fantasy iniciou uma das franquias de RPG mais famosas dos videogames, trazendo grupos de heróis, combate por turnos, magias e exploração de mundo.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/8/8b/Final_Fantasy_NES_battle.png",
        ],
        dicas: [
          "Monte uma equipe equilibrada com ataque, cura e magia.",
          "Faça batalhas extras no início para ganhar dinheiro e experiência.",
        ],
      },
    },
    {
      id: "nes-punch-out",
      titulo: "Punch-Out!!",
      ano: 1987,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/3/3d/Punch-out_mrdream_boxart.PNG",
      plataforma: "NES",
      genero: "Esporte / Boxe",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Punch-Out!! coloca o jogador no papel de Little Mac, enfrentando lutadores carismáticos em combates baseados em reflexo, observação e memorização de padrões.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/c/c5/Punchout_nes.png",
        ],
        dicas: [
          "Observe os sinais dos oponentes antes de esquivar.",
          "Use Star Punches em momentos seguros para causar grande dano.",
        ],
      },
    },
    {
      id: "nes-metroid",
      titulo: "Metroid",
      ano: 1986,
      imagem_url:
        "https://i.ebayimg.com/images/g/zGkAAOSwlC1kXEEX/s-l1200.jpg",
      plataforma: "NES",
      genero: "Ação / Aventura",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Metroid apresentou Samus Aran e uma estrutura de exploração não linear, com power-ups que permitem acessar novas áreas em um grande labirinto subterrâneo.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/1/18/Metroid_NES_gameplay.png",
        ],
        dicas: [
          "Atire em paredes e blocos para encontrar caminhos secretos.",
          "Volte a áreas antigas depois de obter novos upgrades.",
        ],
      },
    },
    {
      id: "nes-kirby",
      titulo: "Kirby's Adventure",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/a/ae/Kirby%27s_Adventure_Coverart.png",
      plataforma: "NES",
      genero: "Plataforma",
      desenvolvedora: "HAL Laboratory",
      detalhes: {
        descricao_longa:
          "Kirby's Adventure foi um dos últimos grandes jogos do NES e introduziu a habilidade de Kirby copiar poderes de inimigos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/b/b3/Kirby%27s_Adventure_gameplay.png",
        ],
        dicas: [
          "Experimente diferentes poderes para encontrar seu estilo favorito.",
          "Procure portas e caminhos escondidos nas fases.",
        ],
      },
    },
    {
      id: "nes-excitebike",
      titulo: "Excitebike",
      ano: 1985,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/pt/thumb/0/0f/Excitebike_capa.png/330px-Excitebike_capa.png",
      plataforma: "NES",
      genero: "Corrida",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Excitebike é um jogo de motocross 2D focado em controle de inclinação, saltos e gerenciamento do turbo para evitar superaquecimento.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/8/87/Excitebike_screenshot.png",
        ],
        dicas: [
          "Use o turbo com moderação para não superaquecer.",
          "Aterrisse com as duas rodas alinhadas para manter velocidade.",
        ],
      },
    },
    {
      id: "nes-ducktales",
      titulo: "DuckTales",
      ano: 1989,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/pt/6/64/DuckTales_NES_Cover.png",
      plataforma: "NES",
      genero: "Plataforma",
      desenvolvedora: "Capcom",
      detalhes: {
        descricao_longa:
          "DuckTales é um jogo de plataforma baseado no desenho animado, conhecido pelo pogo jump do Tio Patinhas e fases livres para exploração.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/b/b5/Ducktales_gameplay.png",
        ],
        dicas: [
          "Use o pogo jump para atacar inimigos e alcançar plataformas.",
          "A ordem das fases é livre, então experimente diferentes caminhos.",
        ],
      },
    },
    {
      id: "nes-bionic-commando",
      titulo: "Bionic Commando",
      ano: 1988,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/1/1e/BionicCommando.jpg",
      plataforma: "NES",
      genero: "Plataforma / Ação",
      desenvolvedora: "Capcom",
      detalhes: {
        descricao_longa:
          "Bionic Commando se diferencia por não permitir pulo tradicional. O jogador usa um braço biônico para se balançar, alcançar plataformas e atravessar obstáculos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/4e/Bionic_Commando_screenshot.png",
        ],
        dicas: [
          "Domine o braço biônico, pois ele substitui o pulo.",
          "Converse com NPCs para obter pistas importantes.",
        ],
      },
    },
    {
      id: "nes-tmnt-2",
      titulo: "Teenage Mutant Ninja Turtles II: The Arcade Game",
      ano: 1990,
      imagem_url:
        "https://i.pinimg.com/736x/6b/a3/8a/6ba38af6fccb2e97b7be68ec6e741cb1.jpg",
      plataforma: "NES",
      genero: "Beat 'em up",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Adaptação do arcade das Tartarugas Ninja, com ação cooperativa, fases urbanas e combates contra inimigos clássicos da franquia.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/7b/Tmnt2_nes_gameplay.png",
        ],
        dicas: [
          "Use ataques de salto para lidar com grupos de inimigos.",
          "No cooperativo, mantenha os jogadores próximos para controlar melhor a tela.",
        ],
      },
    },
    {
      id: "nes-dr-mario",
      titulo: "Dr. Mario",
      ano: 1990,
      imagem_url:
        "https://i.ebayimg.com/images/g/d84AAOSwiwFkPzCQ/s-l1200.jpg",
      plataforma: "NES",
      genero: "Quebra-Cabeça",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Dr. Mario é um jogo de quebra-cabeça em que cápsulas coloridas devem ser alinhadas para eliminar vírus dentro do frasco.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/a/ad/Dr_Mario_gameplay.png",
        ],
        dicas: [
          "Elimine vírus da parte inferior primeiro para liberar espaço.",
          "Planeje a queda das cápsulas para criar combinações em sequência.",
        ],
      },
    },
    {
      id: "nes-rc-pro-am",
      titulo: "R.C. Pro-Am",
      ano: 1988,
      imagem_url:
        "https://hoz14nes.wordpress.com/wp-content/uploads/2019/05/rcproam-label.jpg?w=640",
      plataforma: "NES",
      genero: "Corrida / Combate",
      desenvolvedora: "Rare",
      detalhes: {
        descricao_longa:
          "R.C. Pro-Am é um jogo de corrida isométrica com carrinhos de controle remoto, power-ups, armas e pistas cheias de curvas.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/3/3f/RC_Pro-Am_gameplay.png",
        ],
        dicas: [
          "Colete upgrades para aumentar desempenho do carro.",
          "Use armas para atrapalhar rivais em momentos estratégicos.",
        ],
      },
    },
    {
      id: "nes-balloon-fight",
      titulo: "Balloon Fight",
      ano: 1985,
      imagem_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7cZZJpdLwZmN8cldzJUu-FhABWIELEmi98w&s",
      plataforma: "NES",
      genero: "Ação",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Balloon Fight é um jogo de ação em que o jogador precisa estourar os balões dos inimigos enquanto evita obstáculos e perigos da fase.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/1/1a/Balloon_Fight_gameplay.png",
        ],
        dicas: [
          "Fique acima dos inimigos para estourar seus balões.",
          "Cuidado com o peixe gigante que aparece na água.",
        ],
      },
    },
    {
      id: "nes-double-dragon-2",
      titulo: "Double Dragon II: The Revenge",
      ano: 1989,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/NES_Double_Dragon_II_packaging_front.jpg/250px-NES_Double_Dragon_II_packaging_front.jpg",
      plataforma: "NES",
      genero: "Beat 'em up",
      desenvolvedora: "Technōs Japan",
      detalhes: {
        descricao_longa:
          "Double Dragon II melhorou a fórmula do primeiro jogo, trazendo ação cooperativa, golpes variados e combates em fases urbanas.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/1/1d/Double_Dragon_II_The_Revenge_gameplay.png",
        ],
        dicas: [
          "Use golpes giratórios em grupos de inimigos.",
          "Aprenda a diferença dos ataques dependendo da direção do personagem.",
        ],
      },
    },
    {
      id: "nes-ice-climber",
      titulo: "Ice Climber",
      ano: 1985,
      imagem_url:
        "https://i.ebayimg.com/images/g/SuMAAOSwK-dkjjtf/s-l1200.jpg",
      plataforma: "NES",
      genero: "Plataforma",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Ice Climber é um jogo de plataforma vertical em que Popo e Nana sobem montanhas de gelo quebrando blocos e evitando inimigos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/7b/Ice_Climber_gameplay.png",
        ],
        dicas: [
          "Suba rapidamente para evitar inimigos que vêm de baixo.",
          "Use o martelo para quebrar blocos e se defender.",
        ],
      },
    },
    {
      id: "nes-ninja-gaiden",
      titulo: "Ninja Gaiden",
      ano: 1988,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/7/7d/Ninja_Gaiden_%28NES%29_boxart.jpg",
      plataforma: "NES",
      genero: "Ação / Plataforma",
      desenvolvedora: "Tecmo",
      detalhes: {
        descricao_longa:
          "Ninja Gaiden é lembrado por sua dificuldade elevada, cenas narrativas cinematográficas e ação rápida com o ninja Ryu Hayabusa.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/8/8e/Ninja_Gaiden_NES_gameplay.png",
        ],
        dicas: [
          "Memorize a posição dos inimigos para evitar quedas.",
          "Use armas secundárias contra chefes e inimigos distantes.",
        ],
      },
    },
    {
      id: "nes-battletoads",
      titulo: "Battletoads",
      ano: 1991,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/1/1a/Battletoads_Coverart.png",
      plataforma: "NES",
      genero: "Beat 'em up / Plataforma",
      desenvolvedora: "Rare",
      detalhes: {
        descricao_longa:
          "Battletoads ficou famoso pela dificuldade extrema, variedade de fases e mistura de beat 'em up, corrida, plataforma e desafios de reflexo.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/8/8a/Battletoads_gameplay.png",
        ],
        dicas: [
          "Na fase da moto, memorize os obstáculos.",
          "Use ataques fortes quando os inimigos estiverem atordoados.",
        ],
      },
    },
    {
      id: "nes-gradius",
      titulo: "Gradius",
      ano: 1986,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/7/7f/Gradius_box_art.jpg",
      plataforma: "NES",
      genero: "Shoot 'em up",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Gradius é um clássico shoot 'em up horizontal, conhecido por seu sistema de power-ups e fases cheias de inimigos e projéteis.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/7e/Gradius_gameplay.png",
        ],
        dicas: [
          "Escolha power-ups com cuidado, pois perder uma vida reduz muito seu poder.",
          "Options são extremamente úteis para aumentar o poder de fogo.",
        ],
      },
    },
    {
      id: "nes-tetris",
      titulo: "Tetris",
      ano: 1989,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/9/9c/Tetris_Boxshot.jpg",
      plataforma: "NES",
      genero: "Quebra-Cabeça",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Tetris é um dos jogos de quebra-cabeça mais famosos da história, baseado em encaixar peças geométricas para completar linhas.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/97/Tetris_NES_gameplay.png",
        ],
        dicas: [
          "Mantenha um espaço lateral para encaixar a peça longa.",
          "Evite criar buracos difíceis de limpar.",
        ],
      },
    },
    {
      id: "nes-bomberman",
      titulo: "Bomberman",
      ano: 1985,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Bomberman_cover.jpg",
      plataforma: "NES",
      genero: "Ação / Estratégia",
      desenvolvedora: "Hudson Soft",
      detalhes: {
        descricao_longa:
          "Bomberman combina ação e estratégia, colocando o jogador em labirintos onde bombas são usadas para destruir blocos e derrotar inimigos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/2/2b/Bomberman_gameplay.png",
        ],
        dicas: [
          "Cuidado para não ficar preso na explosão das próprias bombas.",
          "Colete power-ups para aumentar alcance e quantidade de bombas.",
        ],
      },
    },
    {
      id: "nes-kid-icarus",
      titulo: "Kid Icarus",
      ano: 1986,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/8/88/Kid_Icarus_box_art.jpg",
      plataforma: "NES",
      genero: "Plataforma / Ação",
      desenvolvedora: "Nintendo",
      detalhes: {
        descricao_longa:
          "Kid Icarus mistura plataforma, ação e elementos de aventura em uma jornada mitológica estrelada por Pit.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/e/e2/Kid_Icarus_gameplay.png",
        ],
        dicas: [
          "Cuidado com a rolagem vertical, pois cair pode ser fatal.",
          "Colete corações para comprar itens úteis.",
        ],
      },
    },
    {
      id: "nes-mother",
      titulo: "Mother",
      ano: 1989,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/8/8f/Mother_Famicom_cover.jpg",
      plataforma: "NES",
      genero: "RPG",
      desenvolvedora: "Ape / Nintendo",
      detalhes: {
        descricao_longa:
          "Mother é um RPG com ambientação moderna, humor peculiar e elementos que mais tarde influenciariam EarthBound.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/8/8c/Mother_gameplay.png",
        ],
        dicas: [
          "Fale com NPCs para descobrir pistas importantes.",
          "Prepare-se para batalhas aleatórias frequentes.",
        ],
      },
    },
    {
      id: "nes-adventure-island",
      titulo: "Adventure Island",
      ano: 1986,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/2/27/Adventure_Island_cover.jpg",
      plataforma: "NES",
      genero: "Plataforma",
      desenvolvedora: "Hudson Soft",
      detalhes: {
        descricao_longa:
          "Adventure Island é um jogo de plataforma rápido em que Master Higgins atravessa fases cheias de inimigos, frutas e obstáculos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/9e/Adventure_Island_gameplay.png",
        ],
        dicas: [
          "Colete frutas para manter a barra de energia.",
          "Use o skate com cuidado, pois ele aumenta a velocidade.",
        ],
      },
    },
    {
      id: "nes-gauntlet",
      titulo: "Gauntlet",
      ano: 1987,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/6/6e/Gauntlet_NES_cover.jpg",
      plataforma: "NES",
      genero: "Ação / Dungeon Crawler",
      desenvolvedora: "Atari Games",
      detalhes: {
        descricao_longa:
          "Gauntlet é um dungeon crawler de ação em que personagens com classes diferentes enfrentam hordas de inimigos em labirintos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/0/04/Gauntlet_gameplay.png",
        ],
        dicas: [
          "Escolha o personagem de acordo com seu estilo de jogo.",
          "Destrua geradores de inimigos rapidamente para controlar a fase.",
        ],
      },
    },
    {
      id: "nes-blaster-master",
      titulo: "Blaster Master",
      ano: 1988,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/9/95/Blaster_Master_cover.jpg",
      plataforma: "NES",
      genero: "Ação / Plataforma",
      desenvolvedora: "Sunsoft",
      detalhes: {
        descricao_longa:
          "Blaster Master mistura exploração com veículo, fases laterais e seções em visão superior, criando uma aventura variada e desafiadora.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/9f/Blaster_Master_gameplay.png",
        ],
        dicas: [
          "Use o veículo para explorar áreas maiores.",
          "Procure upgrades para alcançar caminhos antes inacessíveis.",
        ],
      },
    },
    {
      id: "nes-lolo",
      titulo: "Adventures of Lolo",
      ano: 1989,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/2/27/Adventures_of_Lolo_cover.jpg",
      plataforma: "NES",
      genero: "Quebra-Cabeça",
      desenvolvedora: "HAL Laboratory",
      detalhes: {
        descricao_longa:
          "Adventures of Lolo é um jogo de puzzle com salas cheias de inimigos e blocos, exigindo planejamento para coletar corações e abrir caminho.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/9f/Adventures_of_Lolo_gameplay.png",
        ],
        dicas: [
          "Pense antes de mover blocos, pois uma decisão errada pode travar a sala.",
          "Observe o padrão dos inimigos antes de agir.",
        ],
      },
    },
    {
      id: "nes-tecmo-bowl",
      titulo: "Tecmo Bowl",
      ano: 1989,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/Tecmo_Bowl_cover.jpg",
      plataforma: "NES",
      genero: "Esporte / Futebol Americano",
      desenvolvedora: "Tecmo",
      detalhes: {
        descricao_longa:
          "Tecmo Bowl é um dos jogos esportivos mais lembrados do NES, com partidas rápidas e jogabilidade acessível de futebol americano.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/2/2b/Tecmo_Bowl_gameplay.png",
        ],
        dicas: [
          "Escolha jogadas variadas para confundir a defesa.",
          "Use jogadores rápidos para corridas longas.",
        ],
      },
    },
  ],
quiz: [
  {
    q: "Em que ano o NES foi lançado nos Estados Unidos?",
    op: ["1981", "1983", "1985", "1989"],
    r: "1985",
  },
  {
    q: "Qual jogo ajudou a popularizar o NES mundialmente?",
    op: ["Super Mario Bros.", "Crash Bandicoot", "Sonic the Hedgehog", "Halo"],
    r: "Super Mario Bros.",
  },
  {
    q: "Qual recurso do controle do NES se tornou muito conhecido?",
    op: ["Tela sensível ao toque", "D-Pad", "Controle por movimento", "Analógico duplo"],
    r: "D-Pad",
  },
  {
    q: "Qual empresa fabricou o NES?",
    op: ["Sony", "Sega", "Nintendo", "Atari"],
    r: "Nintendo",
  },
  {
    q: "Qual jogo do NES apresentou Link em sua primeira aventura?",
    op: ["Metroid", "The Legend of Zelda", "Kid Icarus", "Final Fantasy"],
    r: "The Legend of Zelda",
  },
  {
    q: "Qual personagem é protagonista da série Metroid?",
    op: ["Samus Aran", "Princess Peach", "Lara Croft", "Chun-Li"],
    r: "Samus Aran",
  },
  {
    q: "Qual jogo do NES é famoso pelo Konami Code?",
    op: ["Contra", "Dr. Mario", "Excitebike", "Punch-Out!!"],
    r: "Contra",
  },
  {
    q: "Qual gênero melhor descreve Mega Man 2?",
    op: ["Corrida", "Ação / Plataforma", "RPG tático", "Simulação"],
    r: "Ação / Plataforma",
  },
  {
    q: "Em Punch-Out!!, qual é o nome do boxeador controlado pelo jogador?",
    op: ["Glass Joe", "Little Mac", "Mike Tyson", "King Hippo"],
    r: "Little Mac",
  },
  {
    q: "Qual destes jogos do NES é um RPG?",
    op: ["Final Fantasy", "Balloon Fight", "Excitebike", "Ice Climber"],
    r: "Final Fantasy",
  },
],
};