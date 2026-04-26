export const megadrive = {
  id: "megadrive",
  nome: "Sega Mega Drive (Genesis)",
  ano: 1988,
  geracao: "4ª Geração",
  geracaoId: "4a",
  fabricante: "Sega",
  fabricanteId: "sega",
  imagem_url:
    "https://upload.wikimedia.org/wikipedia/commons/a/a1/Sega-Mega-Drive-JP-Mk1-Console-Set.jpg",
    historia:
    `O hardware do Mega Drive é centrado em uma CPU principal Motorola 68000 de 16/32 bits, operando a 7,67 MHz, complementada por uma CPU secundária Zilog Z80 que gerencia o processamento de áudio. O sistema é capaz de exibir até 64 cores simultâneas de uma paleta total de 512, suportando resoluções de até 320x224 pixels. A síntese sonora é realizada por um chip Yamaha YM2612 de seis canais FM, proporcionando uma identidade acústica distinta para a plataforma.

A situação do console no Brasil é considerada um dos casos de maior sucesso global para a Sega, devido à parceria exclusiva com a Tectoy. A empresa brasileira não apenas importou o console, mas montou uma linha de produção local em Manaus e desenvolveu versões exclusivas de jogos e hardware que prolongaram a vida útil do sistema por décadas após sua obsolescência internacional. Até hoje, o Mega Drive permanece em produção pela Tectoy, sendo um recordista de longevidade no mercado nacional.

A arquitetura do sistema foi projetada para ser expansível, permitindo atualizações de hardware como o Sega CD e o 32X. O barramento de dados permitia o uso de cartuchos com capacidades variadas, suportando técnicas de rolagem de paralaxe por hardware que davam profundidade aos cenários. É tecnicamente reconhecido pela eficiência em processar grandes volumes de sprites e inteligência artificial rápida para jogos de ação.`,
    jogos: [
    {
      id: "md-sonic",
      titulo: "Sonic the Hedgehog 2",
      ano: 1992,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Sonic2boxart.jpg",
      plataforma: "Mega Drive",
      genero: "Plataforma",
      desenvolvedora: "Sega",
      detalhes: {
        descricao_longa:
          "Sonic the Hedgehog 2 consolidou Sonic como mascote da Sega, trazendo fases velozes, loops, Tails como parceiro e o famoso Spin Dash.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/4/45/Sonic2_gameplay.png",
        ],
        dicas: [
          "Use o Spin Dash para ganhar velocidade rapidamente.",
          "Colete 50 anéis e entre nos bônus stages para buscar as Esmeraldas do Caos.",
        ],
        videos: [],
      },
    },
    {
      id: "md-streets",
      titulo: "Streets of Rage 2",
      ano: 1992,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/4/41/Streetsofrage2cover.jpg",
      plataforma: "Mega Drive",
      genero: "Beat 'em up",
      desenvolvedora: "Sega",
      detalhes: {
        descricao_longa:
          "Streets of Rage 2 é um dos maiores beat 'em ups da geração 16-bits, conhecido por seus personagens variados, combate fluido e trilha sonora marcante.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/a/aa/Streets_of_Rage_2_gameplay.png",
        ],
        dicas: [
          "Teste todos os personagens, pois cada um tem velocidade, força e alcance diferentes.",
          "Use ataques especiais com cuidado, porque eles podem consumir vida.",
        ],
        videos: [],
      },
    },
    {
      id: "md-goldenaxe",
      titulo: "Golden Axe",
      ano: 1989,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/d/d1/Golden_Axe_cover.png",
      plataforma: "Mega Drive",
      genero: "Ação / Fantasia",
      desenvolvedora: "Sega",
      detalhes: {
        descricao_longa:
          "Golden Axe é um clássico de ação medieval em que guerreiros enfrentam hordas de inimigos, usam magias e montam criaturas para derrotar Death Adder.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/b/b5/Golden_Axe_gameplay.png",
        ],
        dicas: [
          "Guarde magias para chefes ou grupos grandes de inimigos.",
          "Tente roubar montarias dos inimigos para ganhar vantagem.",
        ],
        videos: [],
      },
    },
    {
      id: "md-phantasy-star-4",
      titulo: "Phantasy Star IV: The End of the Millennium",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/8/86/Phantasy_Star_IV_Coverart.png",
      plataforma: "Mega Drive",
      genero: "RPG",
      desenvolvedora: "Sega",
      detalhes: {
        descricao_longa:
          "Phantasy Star IV é um dos RPGs mais importantes do Mega Drive, com narrativa cinematográfica, batalhas por turnos e elementos de ficção científica.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/3/30/Phantasy_Star_IV_battle_screen.png",
        ],
        dicas: [
          "Configure macros para acelerar batalhas repetitivas.",
          "Explore bem cidades e dungeons para encontrar equipamentos melhores.",
        ],
        videos: [],
      },
    },
    {
      id: "md-shining-force",
      titulo: "Shining Force II",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/a/ac/Shining_Force_II_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Strategy RPG",
      desenvolvedora: "Sega",
      detalhes: {
        descricao_longa:
          "Shining Force II é um RPG tático com combates em grade, evolução de personagens e uma jornada clássica de fantasia.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/f/f6/Shining_Force_II_gameplay.png",
        ],
        dicas: [
          "Mantenha curandeiros protegidos durante as batalhas.",
          "Promova personagens no momento certo para melhorar atributos.",
        ],
        videos: [],
      },
    },
    {
      id: "md-castlevania-bloodlines",
      titulo: "Castlevania: Bloodlines",
      ano: 1994,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/a/a8/Castlevania_Bloodlines_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Plataforma / Ação",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Castlevania: Bloodlines foi a entrada da série no Mega Drive, trazendo dois personagens jogáveis e fases com efeitos visuais criativos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/1/18/Castlevania_Bloodlines_gameplay.png",
        ],
        dicas: [
          "John usa chicote e Eric usa lança, então teste os dois estilos.",
          "Aprenda os padrões dos chefes para economizar vidas.",
        ],
        videos: [],
      },
    },
    {
      id: "md-vectorman",
      titulo: "Vectorman",
      ano: 1995,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/2/23/Vectorman_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Run and Gun / Plataforma",
      desenvolvedora: "BlueSky Software",
      detalhes: {
        descricao_longa:
          "Vectorman impressionou pelo visual pré-renderizado e pela ação rápida, colocando o jogador no controle de um robô em um mundo futurista.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/e/e4/Vectorman_gameplay.png",
        ],
        dicas: [
          "Procure power-ups escondidos nas fases.",
          "Use transformações temporárias para atravessar obstáculos.",
        ],
        videos: [],
      },
    },
    {
      id: "md-gunstar-heroes",
      titulo: "Gunstar Heroes",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/e/ea/Gunstar_Heroes_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Run and Gun",
      desenvolvedora: "Treasure",
      detalhes: {
        descricao_longa:
          "Gunstar Heroes é um jogo de ação frenético, conhecido por chefes criativos, cooperativo intenso e sistema de combinação de armas.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/f/f6/Gunstar_Heroes_gameplay.png",
        ],
        dicas: [
          "Experimente combinações de armas para encontrar seu estilo.",
          "No cooperativo, cuidado para não atrapalhar o parceiro em áreas apertadas.",
        ],
        videos: [],
      },
    },
    {
      id: "md-thunder-force-4",
      titulo: "Thunder Force IV",
      ano: 1992,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/6/6f/Thunder_Force_IV_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Shoot 'em up",
      desenvolvedora: "Technosoft",
      detalhes: {
        descricao_longa:
          "Thunder Force IV é um dos grandes shoot 'em ups do Mega Drive, famoso pela dificuldade, trilha sonora pesada e uso impressionante de paralaxe.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/1/11/Thunder_Force_IV_gameplay.png",
        ],
        dicas: [
          "Use armas diferentes para chefes e inimigos comuns.",
          "Memorize padrões de tiros para sobreviver nas fases avançadas.",
        ],
        videos: [],
      },
    },
    {
      id: "md-mortal-kombat-2",
      titulo: "Mortal Kombat II",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/f/fd/Mortal_Kombat_II_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Luta",
      desenvolvedora: "Midway / Probe Entertainment",
      detalhes: {
        descricao_longa:
          "Mortal Kombat II no Mega Drive manteve o estilo violento e competitivo da série, com mais personagens, golpes especiais e finalizações.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/d/d7/Mortal_Kombat_II_gameplay.png",
        ],
        dicas: [
          "Aprenda os comandos dos golpes especiais antes de tentar finalizações.",
          "Contra chefes, mantenha distância e ataque em aberturas seguras.",
        ],
        videos: [],
      },
    },
    {
      id: "md-decap-attack",
      titulo: "Decap Attack",
      ano: 1991,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/1/18/Decap_Attack_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Plataforma",
      desenvolvedora: "Vic Tokai",
      detalhes: {
        descricao_longa:
          "Decap Attack é um jogo de plataforma estranho e cômico, estrelado por Chuck D. Head em fases cheias de monstros e humor visual.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/a/a5/Decap_Attack_gameplay.png",
        ],
        dicas: [
          "Use o ataque principal para manter inimigos afastados.",
          "Explore as fases para encontrar power-ups e itens escondidos.",
        ],
        videos: [],
      },
    },
    {
      id: "md-toe-jam-earl",
      titulo: "ToeJam & Earl",
      ano: 1991,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/f/f0/ToeJam_%26_Earl_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Ação / Roguelike",
      desenvolvedora: "ToeJam & Earl Productions",
      detalhes: {
        descricao_longa:
          "ToeJam & Earl é uma aventura isométrica criativa e excêntrica, com exploração, presentes aleatórios e cooperativo divertido.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/c/c2/ToeJam_%26_Earl_gameplay.png",
        ],
        dicas: [
          "Identifique presentes aos poucos para evitar surpresas ruins.",
          "No cooperativo, mantenha os personagens próximos para compartilhar a tela.",
        ],
        videos: [],
      },
    },
    {
      id: "md-micro-machines",
      titulo: "Micro Machines",
      ano: 1991,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/a/a8/Micro_Machines_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Corrida",
      desenvolvedora: "Codemasters",
      detalhes: {
        descricao_longa:
          "Micro Machines traz corridas com miniaturas em ambientes domésticos, como mesas, banheiras e cozinhas, com câmera superior e ritmo competitivo.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/2/23/Micro_Machines_gameplay.png",
        ],
        dicas: [
          "Fique atento às bordas da pista, pois cair custa tempo.",
          "Antecipe curvas usando a posição dos outros corredores.",
        ],  
        videos: [],
      },
    },
    {
      id: "md-comix-zone",
      titulo: "Comix Zone",
      ano: 1995,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/b/b3/Comix_Zone_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Beat 'em up / Ação",
      desenvolvedora: "Sega Technical Institute",
      detalhes: {
        descricao_longa:
          "Comix Zone é um jogo visualmente único, em que o protagonista atravessa painéis de uma história em quadrinhos enquanto enfrenta inimigos desenhados.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/8/87/Comix_Zone_gameplay.png",
        ],
        dicas: [
          "Evite quebrar muitos objetos com ataques, pois isso pode consumir vida.",
          "Observe os painéis para escolher caminhos alternativos.",
        ],
        videos: [],
      },
    },
    {
      id: "md-shining-in-the-darkness",
      titulo: "Shining in the Darkness",
      ano: 1991,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/0/07/Shining_in_the_Darkness_Coverart.png",
      plataforma: "Mega Drive",
      genero: "RPG de Masmorra",
      desenvolvedora: "Sega",
      detalhes: {
        descricao_longa:
          "Shining in the Darkness é um RPG em primeira pessoa focado em exploração de masmorras, batalhas por turnos e progressão clássica.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/c/c3/Shining_in_the_Darkness_gameplay.png",
        ],
        dicas: [
          "Faça mapas mentais ou anotações das masmorras.",
          "Volte à cidade para se curar antes de avançar demais.",
        ],
          videos: [],
      },
    },
    {
      id: "md-wonder-boy-in-monster-world",
      titulo: "Wonder Boy in Monster World",
      ano: 1991,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/3/30/Wonder_Boy_in_Monster_World_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Action RPG / Plataforma",
      desenvolvedora: "Westone",
      detalhes: {
        descricao_longa:
          "Wonder Boy in Monster World mistura plataforma e Action RPG em uma aventura colorida, com equipamentos, exploração e vilarejos.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/5e/Wonder_Boy_in_Monster_World_gameplay.png",
        ],
        dicas: [
          "Invista em novas botas e equipamentos para acessar áreas diferentes.",
          "Converse com NPCs para descobrir segredos e objetivos.",
        ],
        videos: [],
      },
    },
    {
      id: "md-aladdin",
      titulo: "Disney's Aladdin",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/8/8e/Disney%27s_Aladdin_Mega_Drive_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Plataforma",
      desenvolvedora: "Virgin Games",
      detalhes: {
        descricao_longa:
          "Disney's Aladdin no Mega Drive ficou famoso por suas animações fluidas, visual fiel ao filme e jogabilidade de plataforma com espada e maçãs.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/8/81/Aladdin_Mega_Drive_gameplay.png",
        ],
        dicas: [
          "Use a espada contra inimigos próximos e maçãs para atacar de longe.",
          "Procure ícones de Genie para ganhar continues.",
        ],
        videos: [],
      },
    },
    {
      id: "md-road-rash-2",
      titulo: "Road Rash II",
      ano: 1992,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/f/fe/Road_Rash_II_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Corrida / Combate",
      desenvolvedora: "Electronic Arts",
      detalhes: {
        descricao_longa:
          "Road Rash II mistura corrida de motos com combate, permitindo atacar adversários durante provas em alta velocidade.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/0/04/Road_Rash_II_gameplay.png",
        ],
        dicas: [
          "Use armas no momento certo para derrubar rivais.",
          "Economize dinheiro para comprar motos mais rápidas.",
        ],
          videos: [],
      },
    },
    {
      id: "md-kid-chameleon",
      titulo: "Kid Chameleon",
      ano: 1992,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/f/f0/Kid_Chameleon_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Plataforma",
      desenvolvedora: "Sega Technical Institute",
      detalhes: {
        descricao_longa:
          "Kid Chameleon é um jogo de plataforma desafiador em que o protagonista usa capacetes para ganhar formas e habilidades diferentes.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/f/f6/Kid_Chameleon_gameplay.png",
        ],
        dicas: [
          "Teste cada capacete para entender seus poderes.",
          "Explore caminhos alternativos, pois muitas fases possuem rotas secretas.",
        ],
        videos: [],
      },
    },
    {
      id: "md-sonic-3",
      titulo: "Sonic the Hedgehog 3",
      ano: 1994,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/0/07/Sonic3-box-us-225.jpg",
      plataforma: "Mega Drive",
      genero: "Plataforma",
      desenvolvedora: "Sega",
      detalhes: {
        descricao_longa:
          "Sonic the Hedgehog 3 refinou a fórmula da série com fases maiores, novas habilidades, Knuckles e conexão com Sonic & Knuckles.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/6/6e/Sonic_3_gameplay.png",
        ],
        dicas: [
          "Use os escudos elementais para ganhar habilidades extras.",
          "Explore rotas superiores para encontrar bônus stages.",
        ],
          videos: [],  
      },
    },
    {
      id: "md-sonic-knuckles",
      titulo: "Sonic & Knuckles",
      ano: 1994,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/0/0e/Sonic_%26_Knuckles_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Plataforma",
      desenvolvedora: "Sega",
      detalhes: {
        descricao_longa:
          "Sonic & Knuckles trouxe Knuckles como personagem jogável, com escalada e planeio, além da famosa tecnologia lock-on.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/5c/Sonic_%26_Knuckles_gameplay.png",
        ],
        dicas: [
          "Use a escalada de Knuckles para alcançar rotas alternativas.",
          "Combine com Sonic 3 para uma experiência mais completa.",
        ],
        videos: [],
      },
    },
    {
      id: "md-earthworm-jim",
      titulo: "Earthworm Jim",
      ano: 1994,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/9/9c/Earthworm_Jim_cover.png",
      plataforma: "Mega Drive",
      genero: "Plataforma / Ação",
      desenvolvedora: "Shiny Entertainment",
      detalhes: {
        descricao_longa:
          "Earthworm Jim é um jogo de plataforma excêntrico, com humor absurdo, animações detalhadas e fases criativas.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/57/Earthworm_Jim_gameplay.png",
        ],
        dicas: [
          "Use a cabeça de minhoca como chicote para alcançar ganchos.",
          "Cuidado com inimigos e obstáculos inesperados nas fases.",
        ],
        videos: [],
      },
    },
    {
      id: "md-ristar",
      titulo: "Ristar",
      ano: 1995,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/2/21/Ristar_box_art.jpg",
      plataforma: "Mega Drive",
      genero: "Plataforma",
      desenvolvedora: "Sega",
      detalhes: {
        descricao_longa:
          "Ristar é um jogo de plataforma da Sega em que o protagonista usa braços elásticos para atacar, escalar e interagir com o cenário.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/3/34/Ristar_gameplay.png",
        ],
        dicas: [
          "Use os braços para agarrar inimigos e objetos.",
          "Procure estrelas e itens escondidos nas fases.",
        ],
        videos: [],
      },
    },
    {
      id: "md-ecco",
      titulo: "Ecco the Dolphin",
      ano: 1992,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/e/e3/Ecco_the_Dolphin_cover.png",
      plataforma: "Mega Drive",
      genero: "Aventura",
      desenvolvedora: "Novotrade",
      detalhes: {
        descricao_longa:
          "Ecco the Dolphin é uma aventura subaquática atmosférica, conhecida pela exploração, trilha sonora e dificuldade incomum.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/a/a8/Ecco_the_Dolphin_gameplay.png",
        ],
        dicas: [
          "Volte à superfície para respirar sempre que necessário.",
          "Use o sonar para interagir com criaturas e revelar caminhos.",
        ],
        videos: [],
      },
    },
    {
      id: "md-rocket-knight",
      titulo: "Rocket Knight Adventures",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/3/3f/Rocket_Knight_Adventures_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Plataforma / Ação",
      desenvolvedora: "Konami",
      detalhes: {
        descricao_longa:
          "Rocket Knight Adventures é um jogo de ação e plataforma estrelado por Sparkster, um cavaleiro gambá com mochila-foguete.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/f/fa/Rocket_Knight_Adventures_gameplay.png",
        ],
        dicas: [
          "Carregue o foguete para ataques rápidos e saltos longos.",
          "Use a espada de energia para atacar sem se aproximar demais.",
        ],
        videos: [],
      },
    },
    {
      id: "md-maximum-carnage",
      titulo: "Spider-Man and Venom: Maximum Carnage",
      ano: 1994,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/1/12/Spider-Man_and_Venom_Maximum_Carnage_cover.jpg",
      plataforma: "Mega Drive",
      genero: "Beat 'em up",
      desenvolvedora: "Software Creations",
      detalhes: {
        descricao_longa:
          "Maximum Carnage é um beat 'em up baseado nos quadrinhos da Marvel, permitindo jogar com Homem-Aranha e Venom contra Carnificina.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/5/5f/Maximum_Carnage_gameplay.png",
        ],
        dicas: [
          "Use ataques especiais contra grupos de inimigos.",
          "Colete ícones de aliados para invocar ajuda durante as fases.",
        ],
        videos: [],
      },
    },
    {
      id: "md-jurassic-park",
      titulo: "Jurassic Park",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/2/29/Jurassic_Park_Genesis_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Ação / Plataforma",
      desenvolvedora: "BlueSky Software",
      detalhes: {
        descricao_longa:
          "Jurassic Park no Mega Drive permite jogar como Dr. Grant ou como um velociraptor, oferecendo campanhas com estilos diferentes.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/9/93/Jurassic_Park_Genesis_gameplay.png",
        ],
        dicas: [
          "Com Grant, economize munição e use tranquilizantes com cuidado.",
          "Com o raptor, aproveite a mobilidade para atacar rapidamente.",
        ],
          videos: [],
      },
    },
    {
      id: "md-fifa-94",
      titulo: "FIFA International Soccer",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/0/0f/FIFA_International_Soccer_cover.jpg",
      plataforma: "Mega Drive",
      genero: "Esporte / Futebol",
      desenvolvedora: "Extended Play Productions",
      detalhes: {
        descricao_longa:
          "FIFA International Soccer iniciou uma das franquias esportivas mais populares do mundo, com visão isométrica e seleções internacionais.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/2/2c/FIFA_International_Soccer_gameplay.png",
        ],
        dicas: [
          "Use passes curtos para manter controle da bola.",
          "Chutes próximos ao gol têm mais chance de sucesso.",
        ],
          videos: [],     
      },
    },
    {
      id: "md-nba-jam",
      titulo: "NBA Jam",
      ano: 1993,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/6/68/NBA_Jam_cover.jpg",
      plataforma: "Mega Drive",
      genero: "Esporte / Basquete Arcade",
      desenvolvedora: "Midway",
      detalhes: {
        descricao_longa:
          "NBA Jam é um jogo de basquete arcade 2 contra 2, famoso por enterradas exageradas, partidas rápidas e narrador empolgado.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/3/3f/NBA_Jam_gameplay.png",
        ],
        dicas: [
          "Use empurrões para roubar a bola em momentos decisivos.",
          "Quando o jogador está 'on fire', aproveite para arremessar mais.",
        ],
          videos: [],
      },
    },
    {
      id: "md-virtual-racing",
      titulo: "Virtua Racing",
      ano: 1994,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/9/9c/Virtua_Racing_Genesis_cover.jpg",
      plataforma: "Mega Drive",
      genero: "Corrida",
      desenvolvedora: "Sega",
      detalhes: {
        descricao_longa:
          "Virtua Racing foi uma experiência técnica impressionante no Mega Drive, trazendo gráficos poligonais com o uso do chip SVP.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/1/18/Virtua_Racing_gameplay.png",
        ],
        dicas: [
          "Reduza a velocidade antes de curvas fechadas.",
          "Use a câmera que melhor se adapta ao seu estilo de pilotagem.",
        ],
      },
    },
    {
      id: "md-strider",
      titulo: "Strider",
      ano: 1990,
      imagem_url:
        "https://upload.wikimedia.org/wikipedia/en/4/4f/Strider_Coverart.png",
      plataforma: "Mega Drive",
      genero: "Ação / Plataforma",
      desenvolvedora: "Capcom",
      detalhes: {
        descricao_longa:
          "Strider é uma conversão marcante do arcade, com ação rápida, cenários variados e o ninja futurista Hiryu.",
        imagens_galeria: [
          "https://upload.wikimedia.org/wikipedia/en/7/70/Strider_gameplay.png",
        ],
        dicas: [
          "Use a mobilidade de Hiryu para atacar e escapar rapidamente.",
          "Fique atento aos padrões de chefes e obstáculos.",
        ],
      },
    },
  ],
quiz: [
  {
    q: "Como o Mega Drive ficou conhecido na América do Norte?",
    op: ["Genesis", "Saturn", "Dreamcast", "Master System"],
    r: "Genesis",
  },
  {
    q: "Qual empresa fabricou o Mega Drive?",
    op: ["Nintendo", "Sony", "Sega", "Atari"],
    r: "Sega",
  },
  {
    q: "Qual personagem se tornou o principal mascote da Sega?",
    op: ["Sonic", "Mario", "Crash", "Rayman"],
    r: "Sonic",
  },
  {
    q: "Qual jogo introduziu Tails como parceiro de Sonic?",
    op: ["Sonic the Hedgehog 2", "Sonic & Knuckles", "Ristar", "Kid Chameleon"],
    r: "Sonic the Hedgehog 2",
  },
  {
    q: "Qual destes jogos é um beat 'em up clássico do Mega Drive?",
    op: ["Streets of Rage 2", "Gran Turismo", "F-Zero X", "Tekken 3"],
    r: "Streets of Rage 2",
  },
  {
    q: "Qual RPG de ficção científica marcou o Mega Drive?",
    op: ["Phantasy Star IV", "Final Fantasy VII", "Persona 4", "Chrono Trigger"],
    r: "Phantasy Star IV",
  },
  {
    q: "Qual jogo do Mega Drive é famoso por misturar corrida de motos com combate?",
    op: ["Road Rash II", "Virtua Racing", "Micro Machines", "FIFA International Soccer"],
    r: "Road Rash II",
  },
  {
    q: "Qual jogo do Mega Drive tem visual inspirado em histórias em quadrinhos?",
    op: ["Comix Zone", "Vectorman", "Ecco the Dolphin", "Golden Axe"],
    r: "Comix Zone",
  },
  {
    q: "Qual jogo de ação do Mega Drive permite jogar com Homem-Aranha e Venom?",
    op: ["Maximum Carnage", "Strider", "Rocket Knight Adventures", "Gunstar Heroes"],
    r: "Maximum Carnage",
  },
  {
    q: "Qual jogo do Mega Drive é conhecido pela aventura subaquática de um golfinho?",
    op: ["Ecco the Dolphin", "Ristar", "ToeJam & Earl", "Aladdin"],
    r: "Ecco the Dolphin",
  },
],

};