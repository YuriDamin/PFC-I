// --- BASE DE DADOS DO MUSEU DIGITAL RETROGAMES ---
// Substitua as URLs se preferir usar imagens locais (ex: '/imagens/megadrive.jpg')

export const consoles = [
  {
    id: "nes",
    nome: "Nintendo Entertainment System (NES)",
    ano: 1985,
    geracao: "3ª Geração",
    fabricante: "Nintendo",
    imagem_url: "/imagens/snes/supermariobros3.png",
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
      },
      {
        id: "nes-castlevania",
        titulo: "Castlevania",
        ano: 1986,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/1/1a/Castlevania_Coverart.png",
        plataforma: "NES",
        genero: "Plataforma / Ação",
        desenvolvedora: "Konami",
        detalhes: {
          descricao_longa: "Um jogo de plataforma gótico sobre Simon Belmont caçando Drácula com seu chicote, o Vampire Killer.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/7/77/Castlevania_gameplay_screenshot.png"
          ],
          dicas: [
            "Use o Machado para inimigos aéreos.",
            "O Coração de Gelo congela inimigos por um curto período."
          ]
        }
      },
      {
        id: "nes-contra",
        titulo: "Contra",
        ano: 1988,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/8/87/Contra_NES_Coverart.png",
        plataforma: "NES",
        genero: "Run and Gun",
        desenvolvedora: "Konami",
        detalhes: {
          descricao_longa: "Um clássico jogo de tiro conhecido por sua dificuldade intensa e o famoso 'Konami Code'.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/5/52/Contra_gameplay.png"
          ],
          dicas: [
            "O Konami Code é Cima, Cima, Baixo, Baixo, Esquerda, Direita, Esquerda, Direita, B, A, Start.",
            "A arma Spread (S) é a mais poderosa do jogo."
          ]
        }
      },
      {
        id: "nes-final-fantasy",
        titulo: "Final Fantasy",
        ano: 1987,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/a/a7/Final_Fantasy_I_Coverart.png",
        plataforma: "NES",
        genero: "RPG",
        desenvolvedora: "Square",
        detalhes: {
          descricao_longa: "O jogo que salvou a Square da falência e deu origem a uma das maiores franquias de RPG de todos os tempos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/8/8b/Final_Fantasy_NES_battle.png"
          ],
          dicas: [
            "Escolha Guerreiro e Mago Branco/Preto para uma equipe balanceada.",
            "Faça grinding nas áreas iniciais para farmar dinheiro."
          ]
        }
      },
      {
        id: "nes-punch-out",
        titulo: "Punch-Out!!",
        ano: 1987,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/1/18/Punch-Out%21%21_Coverart.png",
        plataforma: "NES",
        genero: "Esporte / Boxe",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Põe o jogador no papel de Little Mac, enfrentando adversários caricatos como Glass Joe e Mike Tyson (na versão original).",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/c/c5/Punchout_nes.png"
          ],
          dicas: [
            "Observe os 'tells' (sinais) dos oponentes para saber a hora de esquivar.",
            "Seus socos de estrela (Star Punches) são essenciais nos chefes mais difíceis."
          ]
        }
      },
      {
        id: "nes-metroid",
        titulo: "Metroid",
        ano: 1986,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/5/5d/Metroid_Coverart.png",
        plataforma: "NES",
        genero: "Ação / Aventura",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Introduziu Samus Aran e o conceito de exploração não linear com power-ups em um vasto mapa subterrâneo.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/1/18/Metroid_NES_gameplay.png"
          ],
          dicas: [
            "Atire em cada bloco para encontrar power-ups escondidos.",
            "Existe um final secreto se você completar o jogo rápido."
          ]
        }
      },
      {
        id: "nes-kirby",
        titulo: "Kirby's Adventure",
        ano: 1993,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/0/03/Kirby%27s_Adventure_Coverart.png",
        plataforma: "NES",
        genero: "Plataforma",
        desenvolvedora: "HAL Laboratory",
        detalhes: {
          descricao_longa: "Um dos últimos grandes jogos do NES, introduzindo a habilidade de Kirby de copiar poderes de inimigos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/b/b3/Kirby%27s_Adventure_gameplay.png"
          ],
          dicas: [
            "Experimente todos os poderes para encontrar seus favoritos.",
            "O jogo é longo, mas tem um sistema de save via password (ou bateria)."
          ]
        }
      },
      {
        id: "nes-excitebike",
        titulo: "Excitebike",
        ano: 1985,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/0/02/Excitebike_Coverart.png",
        plataforma: "NES",
        genero: "Corrida",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Um dos primeiros jogos do NES, focado em corridas de motocross 2D com a adição de inclinação da moto para controlar saltos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/8/87/Excitebike_screenshot.png"
          ],
          dicas: [
            "Use o 'turbo' (botão B) com moderação para não superaquecer o motor.",
            "Aterrisse com as duas rodas no chão para manter o impulso."
          ]
        }
      },
      {
        id: "nes-ducktales",
        titulo: "DuckTales",
        ano: 1989,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/2/23/Ducktales_cover.jpg",
        plataforma: "NES",
        genero: "Plataforma",
        desenvolvedora: "Capcom",
        detalhes: {
          descricao_longa: "Um jogo de plataforma aclamado baseado no desenho animado. Apresentou o famoso 'pogo jump' do Tio Patinhas.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/b/b5/Ducktales_gameplay.png"
          ],
          dicas: [
            "O pogo jump quebra blocos e é o ataque primário.",
            "A ordem das fases é totalmente livre."
          ]
        }
      },
      {
        id: "nes-bionic-commando",
        titulo: "Bionic Commando",
        ano: 1988,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/2/21/Bionic_Commando_Coverart.png",
        plataforma: "NES",
        genero: "Plataforma / Ação",
        desenvolvedora: "Capcom",
        detalhes: {
          descricao_longa: "Um jogo onde o protagonista, Rad Spencer, não pode pular. Em vez disso, ele deve usar seu braço biônico para balançar e se locomover.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/4/4e/Bionic_Commando_screenshot.png"
          ],
          dicas: [
            "Aprenda a dominar o braço biônico; é a única forma de atravessar buracos.",
            "Converse com todos os NPCs para obter informações valiosas."
          ]
        }
      },
      {
        id: "nes-tmnt-2",
        titulo: "Teenage Mutant Ninja Turtles II: The Arcade Game",
        ano: 1990,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/e/e0/Tmnt2_nes_cover.jpg",
        plataforma: "NES",
        genero: "Beat 'em up",
        desenvolvedora: "Konami",
        detalhes: {
          descricao_longa: "Adaptação fiel do popular arcade, um dos melhores 'beat 'em ups' para o console, com modo cooperativo.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/7/7b/Tmnt2_nes_gameplay.png"
          ],
          dicas: [
            "Use o ataque de salto (jump kick) para se proteger de grupos.",
            "Mantenha-se perto do seu parceiro no modo cooperativo."
          ]
        }
      },
      {
        id: "nes-dr-mario",
        titulo: "Dr. Mario",
        ano: 1990,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/3/3d/Dr_Mario_Coverart.png",
        plataforma: "NES",
        genero: "Quebra-Cabeça",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Jogo de quebra-cabeça onde Mario assume o papel de médico e usa cápsulas para erradicar vírus coloridos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/a/ad/Dr_Mario_gameplay.png"
          ],
          dicas: [
            "Tente eliminar os vírus inferiores primeiro para causar quedas de cápsulas.",
            "Aumente a velocidade para obter mais pontos de bônus."
          ]
        }
      },
      {
        id: "nes-rc-pro-am",
        titulo: "R.C. Pro-Am",
        ano: 1988,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/1/1e/RC_Pro-Am_Coverart.png",
        plataforma: "NES",
        genero: "Corrida / Combate",
        desenvolvedora: "Rare",
        detalhes: {
          descricao_longa: "Corrida de carrinhos de controle remoto com visão isométrica. Foi um dos primeiros jogos a misturar corrida com combate.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/3/3f/RC_Pro-Am_gameplay.png"
          ],
          dicas: [
            "Mantenha-se na linha de corrida ideal para evitar perder velocidade.",
            "Colete o 'Míssil' rapidamente para atacar os rivais."
          ]
        }
      },
      {
        id: "nes-balloon-fight",
        titulo: "Balloon Fight",
        ano: 1985,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/8/87/Balloon_Fight_Coverart.png",
        plataforma: "NES",
        genero: "Ação",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Um jogo de ação inicial onde o objetivo é estourar os balões dos inimigos. Apresenta um modo cooperativo e um modo 'Balloon Trip' empolgante.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/1/1a/Balloon_Fight_gameplay.png"
          ],
          dicas: [
            "Fique acima do inimigo para estourar seu balão.",
            "Cuidado com o peixe gigante (Piranha) no modo de jogo principal."
          ]
        }
      },
      {
        id: "nes-double-dragon-2",
        titulo: "Double Dragon II: The Revenge",
        ano: 1989,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/c/c2/Double_Dragon_II_The_Revenge_Coverart.png",
        plataforma: "NES",
        genero: "Beat 'em up",
        desenvolvedora: "Technōs Japan",
        detalhes: {
          descricao_longa: "Melhorou significativamente o primeiro jogo, oferecendo melhor jogabilidade e permitindo cooperativo para dois jogadores simultaneamente.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/1/1d/Double_Dragon_II_The_Revenge_gameplay.png"
          ],
          dicas: [
            "Use o 'Cyclone Kick' para limpar a tela em momentos de aperto.",
            "Aprenda a diferença entre os ataques virados para a direita e esquerda."
          ]
        }
      },
      {
        id: "nes-ice-climber",
        titulo: "Ice Climber",
        ano: 1985,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/9/93/Ice_Climber_Coverart.png",
        plataforma: "NES",
        genero: "Plataforma",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Um clássico de plataforma focado na escalada, onde Popo e Nana precisam quebrar blocos de gelo para subir a montanha e recuperar vegetais roubados.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/7/7b/Ice_Climber_gameplay.png"
          ],
          dicas: [
            "Sempre tente subir ao topo da tela para escapar dos inimigos de baixo.",
            "O Martelo é sua única arma contra os inimigos."
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
      },
      {
        id: "md-phantasy-star-4",
        titulo: "Phantasy Star IV: The End of the Millennium",
        ano: 1993,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/8/86/Phantasy_Star_IV_Coverart.png",
        plataforma: "Mega Drive",
        genero: "RPG",
        desenvolvedora: "Sega",
        detalhes: {
          descricao_longa: "O ápice da série Phantasy Star no Mega Drive, com narrativa cinematográfica e um sistema de macros inovador.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/3/30/Phantasy_Star_IV_battle_screen.png"
          ],
          dicas: [
            "Configure macros de batalha para agilizar turnos.",
            "A sidequest de 'Silence' é essencial para o melhor final."
          ]
        }
      },
      {
        id: "md-shining-force",
        titulo: "Shining Force II",
        ano: 1993,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/a/ac/Shining_Force_II_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Strategy RPG",
        desenvolvedora: "Sega",
        detalhes: {
          descricao_longa: "Um dos melhores RPGs táticos da geração 16-bits, com um vasto mundo a ser explorado e centenas de batalhas.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/f/f6/Shining_Force_II_gameplay.png"
          ],
          dicas: [
            "Sempre promova seus personagens quando atingirem o nível máximo.",
            "Use o 'Lemon' para cura total em momentos críticos."
          ]
        }
      },
      {
        id: "md-castlevania-bloodlines",
        titulo: "Castlevania: Bloodlines",
        ano: 1994,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/a/a8/Castlevania_Bloodlines_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Plataforma / Ação",
        desenvolvedora: "Konami",
        detalhes: {
          descricao_longa: "O único Castlevania para Mega Drive, destacando-se por seus dois personagens jogáveis (Eric e John) e uso criativo do hardware da Sega.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/1/18/Castlevania_Bloodlines_gameplay.png"
          ],
          dicas: [
            "Use o chicote de John para se balançar e a lança de Eric para atacar de longe.",
            "O terceiro nível apresenta efeitos gráficos impressionantes de distorção."
          ]
        }
      },
      {
        id: "md-vectorman",
        titulo: "Vectorman",
        ano: 1995,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/2/23/Vectorman_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Run and Gun / Plataforma",
        desenvolvedora: "BlueSky Software",
        detalhes: {
          descricao_longa: "Gráficos pré-renderizados impressionantes e jogabilidade rápida marcaram este jogo de ação, onde um robô 'Orbot' luta contra o lixo espacial.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/e/e4/Vectorman_gameplay.png"
          ],
          dicas: [
            "Vectorman pode se transformar em várias formas (como uma broca ou uma bomba).",
            "Procure as caixas de bônus escondidas nos cenários."
          ]
        }
      },
      {
        id: "md-gunstar-heroes",
        titulo: "Gunstar Heroes",
        ano: 1993,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/e/ea/Gunstar_Heroes_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Run and Gun",
        desenvolvedora: "Treasure",
        detalhes: {
          descricao_longa: "Um jogo frenético e visualmente impressionante, conhecido por seus chefes gigantescos, combos de armas personalizáveis e ação ininterrupta.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/f/f6/Gunstar_Heroes_gameplay.png"
          ],
          dicas: [
            "Combine as armas Laser (vermelho) e Fire (amarelo) para o ataque mais forte do jogo.",
            "O modo cooperativo é um caos divertido, mas desafiador."
          ]
        }
      },
      {
        id: "md-thunder-force-4",
        titulo: "Thunder Force IV (Lightening Force)",
        ano: 1992,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/6/6f/Thunder_Force_IV_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Shoot 'em up (Shmup)",
        desenvolvedora: "Technosoft",
        detalhes: {
          descricao_longa: "Considerado um dos melhores shmups horizontais do console, famoso por sua dificuldade, trilha sonora heavy metal e uso criativo de paralaxe.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/1/11/Thunder_Force_IV_gameplay.png"
          ],
          dicas: [
            "Use o 'Hunter' para rastrear inimigos pequenos e o 'Blade' para chefes.",
            "O jogo permite escolher a ordem das primeiras fases."
          ]
        }
      },
      {
        id: "md-mortal-kombat-2",
        titulo: "Mortal Kombat II",
        ano: 1993,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/f/fd/Mortal_Kombat_II_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Luta",
        desenvolvedora: "Midway / Probe Entertainment",
        detalhes: {
          descricao_longa: "Versão aclamada que, diferentemente da SNES, manteve o sangue e os fatalities originais, satisfazendo os fãs mais adultos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/d/d7/Mortal_Kombat_II_gameplay.png"
          ],
          dicas: [
            "Digite o código 'A, C, Cima, B, Cima, B, A, Baixo' na tela de início para ativar sangue (versão Sega).",
            "Mantenha distância de Shao Kahn para evitar seus golpes mais fortes."
          ]
        }
      },
      {
        id: "md-decap-attack",
        titulo: "Decap Attack",
        ano: 1991,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/1/18/Decap_Attack_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Plataforma",
        desenvolvedora: "Vic Tokai",
        detalhes: {
          descricao_longa: "Um jogo de plataforma bizarro e cômico, onde o protagonista, Chuck D. Head, usa sua própria cabeça (ou a falta dela) como arma.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/a/a5/Decap_Attack_gameplay.png"
          ],
          dicas: [
            "O 'crânio' que você arremessa (o ataque primário) é seu item mais importante.",
            "Procure os 'Ídolos' para obter power-ups temporários."
          ]
        }
      },
      {
        id: "md-toe-jam-earl",
        titulo: "ToeJam & Earl",
        ano: 1991,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/f/f0/ToeJam_%26_Earl_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Ação / Roguelike",
        desenvolvedora: "ToeJam & Earl Productions",
        detalhes: {
          descricao_longa: "Um jogo de aventura isométrico com forte foco na exploração e modo cooperativo 'split-screen' dinâmico, onde alienígenas buscam peças de sua nave na Terra.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/c/c2/ToeJam_%26_Earl_gameplay.png"
          ],
          dicas: [
            "O modo cooperativo revela a tela completa quando os personagens estão próximos.",
            "Use o 'Funk Scan' frequentemente para revelar itens escondidos."
          ]
        }
      },
      {
        id: "md-micro-machines",
        titulo: "Micro Machines",
        ano: 1991,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/a/a8/Micro_Machines_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Corrida",
        desenvolvedora: "Codemasters",
        detalhes: {
          descricao_longa: "Jogo de corrida com visão top-down, onde carrinhos em miniatura correm em pistas construídas em ambientes domésticos (mesas, banheiras, etc.).",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/2/23/Micro_Machines_gameplay.png"
          ],
          dicas: [
            "Mantenha o foco nos cantos da tela; a câmera muda o tempo todo.",
            "O jogo é um clássico para multiplayer competitivo."
          ]
        }
      },
      {
        id: "md-comix-zone",
        titulo: "Comix Zone",
        ano: 1995,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/b/b3/Comix_Zone_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Beat 'em up / Ação",
        desenvolvedora: "Sega Technical Institute",
        detalhes: {
          descricao_longa: "Um jogo visualmente único onde o herói é sugado para dentro de uma história em quadrinhos. O jogador se move através de painéis.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/8/87/Comix_Zone_gameplay.png"
          ],
          dicas: [
            "Cuidado ao usar ataques que consomem vida (como o do ratinho)!",
            "Há diversos caminhos alternativos entre os painéis."
          ]
        }
      },
      {
        id: "md-shining-in-the-darkness",
        titulo: "Shining in the Darkness",
        ano: 1991,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/0/07/Shining_in_the_Darkness_Coverart.png",
        plataforma: "Mega Drive",
        genero: "RPG de Masmorra (Dungeon Crawler)",
        desenvolvedora: "Sega",
        detalhes: {
          descricao_longa: "Primeiro jogo da série 'Shining', um RPG 3D de primeira pessoa, focado na exploração de masmorras e combate por turnos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/c/c3/Shining_in_the_Darkness_gameplay.png"
          ],
          dicas: [
            "Faça um mapa manual das masmorras; é crucial para progredir.",
            "O menu de 'Save' é crucial para não perder o progresso."
          ]
        }
      },
      {
        id: "md-wonder-boy-in-monster-world",
        titulo: "Wonder Boy in Monster World",
        ano: 1991,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/3/30/Wonder_Boy_in_Monster_World_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Action RPG / Plataforma",
        desenvolvedora: "Westone",
        detalhes: {
          descricao_longa: "Um Action RPG colorido e divertido com elementos de plataforma, onde o herói Shion adquire novas armas e armaduras em um mundo de fantasia.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/5/5e/Wonder_Boy_in_Monster_World_gameplay.png"
          ],
          dicas: [
            "Invista em novas botas (Boots) para pular mais alto.",
            "Sempre fale com os moradores das cidades para descobrir segredos."
          ]
        }
      },
      {
        id: "md-aladdin",
        titulo: "Disney's Aladdin",
        ano: 1993,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/8/8e/Disney%27s_Aladdin_Mega_Drive_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Plataforma",
        desenvolvedora: "Virgin Games",
        detalhes: {
          descricao_longa: "Versão aclamada do filme da Disney, famosa por sua animação fluida (rotoscopia) e pela espada de Aladdin, ao contrário da versão SNES (que usava maçãs).",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/8/81/Aladdin_Mega_Drive_gameplay.png"
          ],
          dicas: [
            "Use a espada em combinação com pulos para atingir inimigos altos.",
            "Procure pelos ícones de Genie para obter continues."
          ]
        }
      },
      {
        id: "md-road-rash-2",
        titulo: "Road Rash II",
        ano: 1992,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/f/fe/Road_Rash_II_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Corrida / Combate",
        desenvolvedora: "Electronic Arts",
        detalhes: {
          descricao_longa: "Aprimoramento do original, adicionando bicicletas e armas únicas, além de um modo cooperativo e de tela dividida competitivo.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/0/04/Road_Rash_II_gameplay.png"
          ],
          dicas: [
            "Use o 'chain' (corrente) para derrubar rivais com eficiência.",
            "Economize dinheiro para comprar motos mais rápidas."
          ]
        }
      },
      {
        id: "md-kid-chameleon",
        titulo: "Kid Chameleon",
        ano: 1992,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/f/f0/Kid_Chameleon_Coverart.png",
        plataforma: "Mega Drive",
        genero: "Plataforma",
        desenvolvedora: "Sega Technical Institute",
        detalhes: {
          descricao_longa: "Um jogo de plataforma desafiador conhecido por seu grande número de fases e a habilidade do herói de mudar de forma ao pegar capacetes, ganhando poderes distintos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/f/f6/Kid_Chameleon_gameplay.png"
          ],
          dicas: [
            "O capacete de 'Iron Man' é o mais útil para atravessar buracos.",
            "Muitas fases são opcionais, mas contêm jóias importantes."
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
      },
      {
        id: "snes-mario-world",
        titulo: "Super Mario World",
        ano: 1990,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png",
        plataforma: "SNES",
        genero: "Plataforma",
        desenvolvedora: "Nintendo EAD",
        detalhes: {
          descricao_longa: "Título de lançamento que introduziu Yoshi, o mapa do mundo e saídas secretas nas fases.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_World_gameplay.png"
          ],
          dicas: [
            "Use a pena para voar e descobrir atalhos.",
            "Encontre todas as 96 saídas para o final verdadeiro."
          ]
        }
      },
      {
        id: "snes-zelda-ltp",
        titulo: "The Legend of Zelda: A Link to the Past",
        ano: 1991,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/2/2f/A_Link_to_the_Past_Box_Art.png",
        plataforma: "SNES",
        genero: "Ação / Aventura",
        desenvolvedora: "Nintendo EAD",
        detalhes: {
          descricao_longa: "Introduziu o conceito de dois mundos (Light World e Dark World), que redefiniu a série Zelda.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/c/c5/Zelda_a_link_to_the_past_gameplay.png"
          ],
          dicas: [
            "O Espelho Mágico (Magic Mirror) é essencial para viajar entre os mundos.",
            "Procure o Master Sword antes de entrar no Dark World."
          ]
        }
      },
      {
        id: "snes-ff6",
        titulo: "Final Fantasy VI",
        ano: 1994,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Final_Fantasy_VI_Coverart.jpg/640px-Final_Fantasy_VI_Coverart.jpg",
        plataforma: "SNES",
        genero: "RPG",
        desenvolvedora: "Square",
        detalhes: {
          descricao_longa: "Um RPG com foco em tecnologia e um elenco enorme de personagens jogáveis, cada um com sua história e habilidades únicas (Magitek).",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/9/91/Final_Fantasy_VI_battle.png"
          ],
          dicas: [
            "O sistema de Magicite é crucial para aprender magias.",
            "Não perca Gogo e Umaro no 'World of Ruin'."
          ]
        }
      },
      {
        id: "snes-mario-kart",
        titulo: "Super Mario Kart",
        ano: 1992,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/1/10/Super_Mario_Kart_Coverart.png",
        plataforma: "SNES",
        genero: "Corrida / Kart",
        desenvolvedora: "Nintendo EAD",
        detalhes: {
          descricao_longa: "Criou o gênero 'kart racing' (corrida de kart) e popularizou o uso de power-ups para combate em corridas. Usa o Modo 7.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/7/77/Super_Mario_Kart_gameplay.png"
          ],
          dicas: [
            "Use o derrapagem para fazer curvas fechadas sem perder velocidade.",
            "Conheça a pista para usar os power-ups de forma estratégica."
          ]
        }
      },
      {
        id: "snes-star-fox",
        titulo: "Star Fox (Starwing)",
        ano: 1993,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Star_Fox_Box_Art.jpg/640px-Star_Fox_Box_Art.jpg",
        plataforma: "SNES",
        genero: "Rail Shooter 3D",
        desenvolvedora: "Nintendo / Argonaut Software",
        detalhes: {
          descricao_longa: "Revolucionário para a época, utilizou o chip Super FX para renderizar gráficos poligonais 3D, sendo um dos primeiros jogos totalmente 3D da Nintendo.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/2/2f/Star_Fox_gameplay.png"
          ],
          dicas: [
            "Use o 'barrel roll' para desviar de lasers.",
            "Há três rotas de dificuldade (fases) para completar o jogo."
          ]
        }
      },
      {
        id: "snes-fzero",
        titulo: "F-Zero",
        ano: 1990,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/1/1a/F-Zero_Cover.png",
        plataforma: "SNES",
        genero: "Corrida Futuista",
        desenvolvedora: "Nintendo EAD",
        detalhes: {
          descricao_longa: "Outro título de lançamento que usava o Modo 7, criando uma sensação de velocidade e perspectiva 3D em pistas futuristas.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/7/7c/F-Zero_gameplay.png"
          ],
          dicas: [
            "Use o turbo na reta final e o 'side attack' para atingir inimigos.",
            "As zonas de pit stop (setas verdes) recuperam energia."
          ]
        }
      },
      {
        id: "snes-sf2",
        titulo: "Street Fighter II Turbo",
        ano: 1993,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/6/67/Street_Fighter_II_Turbo_Coverart.png",
        plataforma: "SNES",
        genero: "Luta",
        desenvolvedora: "Capcom",
        detalhes: {
          descricao_longa: "Versão definitiva do clássico de luta no SNES. Adicionou velocidade ajustável e movimentos especiais novos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/c/c5/Street_Fighter_II_Turbo_gameplay.png"
          ],
          dicas: [
            "Domine os 'Combos' e 'Super Combos'.",
            "O Bison é um dos chefes mais difíceis do jogo."
          ]
        }
      },
      {
        id: "snes-secret-mana",
        titulo: "Secret of Mana",
        ano: 1993,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/0/07/Secret_of_Mana_Cover.png",
        plataforma: "SNES",
        genero: "Action RPG",
        desenvolvedora: "Square",
        detalhes: {
          descricao_longa: "Conhecido por seu sistema de combate em tempo real e modo cooperativo para até três jogadores.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/e/e0/Secret_of_Mana_gameplay.png"
          ],
          dicas: [
            "Recarregue o medidor de ataque para causar mais dano.",
            "As magias devem ser lançadas com timing para não serem interrompidas."
          ]
        }
      },
      {
        id: "snes-earthbound",
        titulo: "EarthBound (Mother 2)",
        ano: 1994,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/2/29/EarthBound_Coverart.png",
        plataforma: "SNES",
        genero: "RPG",
        desenvolvedora: "Ape / HAL Laboratory",
        detalhes: {
          descricao_longa: "Um RPG com temática moderna e humor, famoso por seu estilo de arte e narrativa única.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/b/b2/Earthbound-battle.png"
          ],
          dicas: [
            "Use o 'Rolling HP Meter' a seu favor nos combates.",
            "Compre e use itens de cura frequentemente, pois o combate é difícil."
          ]
        }
      },
      {
        id: "snes-megamanx",
        titulo: "Mega Man X",
        ano: 1993,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/1/1d/Mega_Man_X_Coverart.png",
        plataforma: "SNES",
        genero: "Ação / Plataforma",
        desenvolvedora: "Capcom",
        detalhes: {
          descricao_longa: "Início da série X, apresentando um tom mais sombrio, dash e a possibilidade de adquirir upgrades e armaduras permanentes.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/4/4b/Mega_Man_X_gameplay.png"
          ],
          dicas: [
            "Encontre os tanques de energia (E-Tanks) para sobreviver.",
            "A ordem dos chefes é crucial para aproveitar as fraquezas."
          ]
        }
      },
      {
        id: "snes-contra-3",
        titulo: "Contra III: The Alien Wars",
        ano: 1992,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/a/a2/Contra_III_Coverart.png",
        plataforma: "SNES",
        genero: "Run and Gun",
        desenvolvedora: "Konami",
        detalhes: {
          descricao_longa: "A terceira parcela da série, com gráficos avançados, perspectiva Mode 7 em algumas fases e jogabilidade desafiadora.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/b/b8/Contra_III_The_Alien_Wars_gameplay.png"
          ],
          dicas: [
            "Mude de arma rapidamente para se adaptar aos inimigos.",
            "O jogo permite que você carregue duas armas simultaneamente."
          ]
        }
      },
      {
        id: "snes-pilotwings",
        titulo: "Pilotwings",
        ano: 1990,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Pilotwings_Cover.jpg/640px-Pilotwings_Cover.jpg",
        plataforma: "SNES",
        genero: "Simulador / Voo",
        desenvolvedora: "Nintendo EAD",
        detalhes: {
          descricao_longa: "Um dos títulos de lançamento que demonstrou o poder do Modo 7, oferecendo diferentes desafios de voo (parapente, girocóptero, etc.).",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/c/cc/Pilotwings_gameplay.png"
          ],
          dicas: [
            "Mantenha o ângulo de descida suave para o pouso.",
            "Use o 'Roll' para corrigir a direção da queda no skydiving."
          ]
        }
      },
      {
        id: "snes-mario-rpg",
        titulo: "Super Mario RPG: Legend of the Seven Stars",
        ano: 1996,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/b/b5/Super_Mario_RPG_Coverart.png",
        plataforma: "SNES",
        genero: "RPG",
        desenvolvedora: "Square",
        detalhes: {
          descricao_longa: "Primeiro RPG da série Mario, combinando a plataforma da Nintendo com o sistema de batalha por turnos da Square, incluindo comandos de ação ('Timed Hits').",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/6/69/SMRPG_gameplay.png"
          ],
          dicas: [
            "Domine os 'Timed Hits' para multiplicar seu dano.",
            "Geno e Bowser são personagens chave para a batalha final."
          ]
        }
      },
      {
        id: "snes-tmnt-4",
        titulo: "Teenage Mutant Ninja Turtles IV: Turtles in Time",
        ano: 1992,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/d/db/Turtles_in_Time_Coverart.png",
        plataforma: "SNES",
        genero: "Beat 'em up",
        desenvolvedora: "Konami",
        detalhes: {
          descricao_longa: "Baseado no arcade, este é considerado um dos melhores 'beat 'em ups' para SNES, com gráficos e músicas aprimoradas.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/2/22/Turtles_in_Time_gameplay.png"
          ],
          dicas: [
            "Use o ataque de arremesso contra inimigos para causar dano em área.",
            "O jogo permite que você corra (dash)."
          ]
        }
      },
      {
        id: "snes-mk2",
        titulo: "Mortal Kombat II",
        ano: 1993,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/f/fd/Mortal_Kombat_II_Coverart.png",
        plataforma: "SNES",
        genero: "Luta",
        desenvolvedora: "Midway / Sculptured Software",
        detalhes: {
          descricao_longa: "Sequência de sucesso que melhorou o combate, adicionou mais Fatalities, e introduziu Friendships e Babalities.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/d/d7/Mortal_Kombat_II_gameplay.png"
          ],
          dicas: [
            "Os códigos de Fatalities devem ser executados com precisão e distância correta.",
            "Kintaro e Shao Kahn são chefes extremamente agressivos."
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
      },
      {
        id: "ps1-re2",
        titulo: "Resident Evil 2",
        ano: 1998,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Resident_Evil_2_Coverart.png/640px-Resident_Evil_2_Coverart.png",
        plataforma: "PS1",
        genero: "Survival Horror",
        desenvolvedora: "Capcom",
        detalhes: {
          descricao_longa: "Um clássico do terror de sobrevivência que expandiu o mundo de Resident Evil. Oferece dois cenários interligados (Leon e Claire).",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/b/b5/Resident_Evil_2_gameplay.png"
          ],
          dicas: [
            "Corra de inimigos sempre que possível para economizar munição.",
            "Jogue os dois cenários ('A' e 'B') para ver a história completa."
          ]
        }
      },
      {
        id: "ps1-gran-turismo",
        titulo: "Gran Turismo",
        ano: 1997,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Gran_Turismo_Coverart.png/640px-Gran_Turismo_Coverart.png",
        plataforma: "PS1",
        genero: "Corrida / Simulação",
        desenvolvedora: "Polyphony Digital",
        detalhes: {
          descricao_longa: "Considerado o pai dos simuladores de corrida modernos, apresentando centenas de carros e uma física realista para a época.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/d/dc/Gran_Turismo_gameplay.png"
          ],
          dicas: [
            "Obter as licenças é crucial para desbloquear as corridas.",
            "Invista em pneus e freios antes de melhorar a potência do motor."
          ]
        }
      },
      {
        id: "ps1-tekken3",
        titulo: "Tekken 3",
        ano: 1998,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Tekken_3_Coverart.png/640px-Tekken_3_Coverart.png",
        plataforma: "PS1",
        genero: "Luta 3D",
        desenvolvedora: "Namco",
        detalhes: {
          descricao_longa: "Um marco nos jogos de luta 3D, introduzindo movimento lateral (sidestepping) e um vasto elenco de novos personagens.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/7/7e/Tekken_3_gameplay.png"
          ],
          dicas: [
            "Use o 'sidestep' para desviar de ataques lineares.",
            "O modo 'Tekken Force' oferece um divertido beat 'em up lateral."
          ]
        }
      },
      {
        id: "ps1-tomb-raider-2",
        titulo: "Tomb Raider II",
        ano: 1997,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Tomb_Raiderr_II_Coverart.png/640px-Tomb_Raiderr_II_Coverart.png",
        plataforma: "PS1",
        genero: "Ação / Aventura",
        desenvolvedora: "Core Design",
        detalhes: {
          descricao_longa: "Popularizou a heroína Lara Croft. Este jogo expandiu a exploração 3D, adicionando veículos e ambientes maiores.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/9/90/Tomb_Raider_II_gameplay.png"
          ],
          dicas: [
            "Use a mira livre (manual aiming) em combates difíceis.",
            "Procure por chaves e itens em locais de difícil acesso."
          ]
        }
      },
      {
        id: "ps1-rayman",
        titulo: "Rayman",
        ano: 1995,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Rayman_Coverart.jpg/640px-Rayman_Coverart.jpg",
        plataforma: "PS1",
        genero: "Plataforma 2D",
        desenvolvedora: "Ubisoft",
        detalhes: {
          descricao_longa: "Conhecido por seus gráficos 2D vibrantes, animação fluida e dificuldade desafiadora, foi um dos destaques do console em seu lançamento.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/8/87/Rayman_gameplay.png"
          ],
          dicas: [
            "O poder 'Helicóptero' (cabelo de Rayman) é essencial para atravessar longas distâncias.",
            "Colete todos os Electoons para o final verdadeiro."
          ]
        }
      },
      {
        id: "ps1-castlevania-sotn",
        titulo: "Castlevania: Symphony of the Night",
        ano: 1997,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Castlevania_Symphony_of_the_Night_Coverart.jpg/640px-Castlevania_Symphony_of_the_Night_Coverart.png",
        plataforma: "PS1",
        genero: "Action RPG / Metroidvania",
        desenvolvedora: "Konami",
        detalhes: {
          descricao_longa: "Revolucionou a série Castlevania, misturando elementos de RPG com a exploração de Metroid. Possui um segundo castelo invertido.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/d/d7/Symphony_of_the_Night_gameplay.png"
          ],
          dicas: [
            "O segundo castelo é acessível após derrotar Richter Belmont com as joias especiais.",
            "Procure pela espada lendária 'Crissaegrim'."
          ]
        }
      },
      {
        id: "ps1-tony-hawk-2",
        titulo: "Tony Hawk's Pro Skater 2",
        ano: 2000,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Tony_Hawk%27s_Pro_Skater_2_Coverart.png/640px-Tony_Hawk%27s_Pro_Skater_2_Coverart.png",
        plataforma: "PS1",
        genero: "Esporte / Skateboarding",
        desenvolvedora: "Neversoft",
        detalhes: {
          descricao_longa: "Considerado por muitos o melhor jogo de skate de todos os tempos. Adicionou o 'Manual' e a criação de parques e skatistas.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/6/64/THPS2_gameplay.png"
          ],
          dicas: [
            "Use o 'Manual' para ligar combos de Grind e Air, maximizando a pontuação.",
            "O 'Create-a-Skater' permite customizar totalmente seu personagem."
          ]
        }
      },
      {
        id: "ps1-silent-hill",
        titulo: "Silent Hill",
        ano: 1999,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Silent_Hill_Cover.jpg/640px-Silent_Hill_Cover.jpg",
        plataforma: "PS1",
        genero: "Survival Horror Psicológico",
        desenvolvedora: "Konami",
        detalhes: {
          descricao_longa: "Um jogo que se destacou por seu terror atmosférico, névoa densa e trilha sonora angustiante, focando no medo psicológico em vez do 'jump scare'.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/4/4c/Silent_Hill_gameplay.png"
          ],
          dicas: [
            "O rádio estático avisa sobre a presença de inimigos.",
            "Existem múltiplos finais dependendo das ações do jogador."
          ]
        }
      },
      {
        id: "ps1-spyro",
        titulo: "Spyro the Dragon",
        ano: 1998,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Spyro_the_Dragon_Coverart.png/640px-Spyro_the_Dragon_Coverart.png",
        plataforma: "PS1",
        genero: "Plataforma 3D",
        desenvolvedora: "Insomniac Games",
        detalhes: {
          descricao_longa: "Um jogo de plataforma 3D aclamado, onde o dragão Spyro precisa resgatar seus amigos e coletar gemas em mundos abertos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/1/14/Spyro_the_Dragon_gameplay.png"
          ],
          dicas: [
            "Use o 'charge' (investida) para se locomover mais rápido.",
            "O 'super-investida' é necessário para quebrar baús de metal."
          ]
        }
      },
      {
        id: "ps1-medievil",
        titulo: "MediEvil",
        ano: 1998,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Medievil_Cover.jpg/640px-Medievil_Cover.jpg",
        plataforma: "PS1",
        genero: "Ação / Aventura",
        desenvolvedora: "SCE Cambridge Studio",
        detalhes: {
          descricao_longa: "Conta a história do cavaleiro esqueleto Sir Daniel Fortesque, que recebe uma segunda chance para se tornar um herói.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/4/4e/MediEvil_gameplay.png"
          ],
          dicas: [
            "Colete o 'Cálice de Almas' em cada fase para desbloquear novas armas.",
            "Armas de longo alcance (como arcos) são vitais contra inimigos voadores."
          ]
        }
      },
      {
        id: "ps1-wipeout",
        titulo: "Wipeout",
        ano: 1995,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Wipeout_Coverart.png/640px-Wipeout_Coverart.png",
        plataforma: "PS1",
        genero: "Corrida Anti-Gravidade",
        desenvolvedora: "Psygnosis",
        detalhes: {
          descricao_longa: "Um dos jogos de lançamento do PS1, combinando velocidade futurista, combate e uma estética techno/rave que definiu o console.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/b/b5/Wipeout_gameplay.png"
          ],
          dicas: [
            "Use os 'air brakes' (freios de ar) nas curvas fechadas para manter a velocidade.",
            "Colete power-ups para atacar ou defender contra rivais."
          ]
        }
      },
      {
        id: "ps1-twisted-metal-2",
        titulo: "Twisted Metal 2",
        ano: 1996,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Twisted_Metal_2_Coverart.png/640px-Twisted_Metal_2_Coverart.png",
        plataforma: "PS1",
        genero: "Combate Veicular",
        desenvolvedora: "SingleTrac",
        detalhes: {
          descricao_longa: "Sequência que aprimorou o combate caótico entre veículos, com estágios destrutíveis e armas mais criativas.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/b/b5/Twisted_Metal_2_gameplay.png"
          ],
          dicas: [
            "Aprenda os códigos de ataque secreto (Super Attack) para cada veículo.",
            "O modo multiplayer é o destaque do jogo."
          ]
        }
      },
      {
        id: "ps1-parasite-eve",
        titulo: "Parasite Eve",
        ano: 1998,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Parasite_Eve_Coverart.png/640px-Parasite_Eve_Coverart.png",
        plataforma: "PS1",
        genero: "Action RPG / Survival Horror",
        desenvolvedora: "Square",
        detalhes: {
          descricao_longa: "Mistura de RPG por turnos com elementos de Survival Horror. Inspirado no livro japonês de mesmo nome, focado na detetive Aya Brea.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/8/87/Parasite_Eve_gameplay.png"
          ],
          dicas: [
            "Use a habilidade 'PE' (Parasite Energy) como sua magia.",
            "Retorne ao Chrysler Building no 'New Game Plus' para o desafio final."
          ]
        }
      },
      {
        id: "ps1-v-rally",
        titulo: "V-Rally: Championship Edition",
        ano: 1997,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/V-Rally_Coverart.png/640px-V-Rally_Coverart.png",
        plataforma: "PS1",
        genero: "Corrida / Rally",
        desenvolvedora: "Eden Studios",
        detalhes: {
          descricao_longa: "Um dos jogos de Rally mais aclamados do PS1, oferecendo simulação realista e uma variedade de carros e pistas de terra.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/c/c5/V-Rally_gameplay.png"
          ],
          dicas: [
            "O 'Handbrake' (freio de mão) é essencial para fazer curvas em rali.",
            "Siga as chamadas do co-piloto para antecipar as curvas."
          ]
        }
      },
      {
        id: "ps1-oddworld-abe",
        titulo: "Oddworld: Abe's Oddysee",
        ano: 1997,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Abe%27s_Oddysee_Coverart.png/640px-Abe%27s_Oddysee_Coverart.png",
        plataforma: "PS1",
        genero: "Plataforma / Quebra-Cabeça",
        desenvolvedora: "Oddworld Inhabitants",
        detalhes: {
          descricao_longa: "Um jogo de plataforma com quebra-cabeças complexos e foco em 'Gamespeak' (comunicação com NPCs). O objetivo é resgatar 99 Mudokons.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/c/c5/Abe%27s_Oddysee_gameplay.png"
          ],
          dicas: [
            "Salve o máximo de Mudokons possível para obter o final bom.",
            "Use o 'GameSpeak' (Hello, Follow Me) para guiar os Mudokons em segurança."
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
      },
      {
        id: "n64-mariokart64",
        titulo: "Mario Kart 64",
        ano: 1996,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/7/75/Mario_Kart_64_box_art.png",
        plataforma: "N64",
        genero: "Corrida / Kart",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Trouxe o kart racing para o 3D, sendo um dos pilares do multiplayer local no console.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/e/e5/Mario_Kart_64_gameplay.png"
          ],
          dicas: [
            "Domine o 'mini-turbo' (após derrapar) para ganhar velocidade.",
            "Ataque o inimigo na liderança com a 'Spiny Shell' (casco azul)."
          ]
        }
      },
      {
        id: "n64-smashbros",
        titulo: "Super Smash Bros.",
        ano: 1999,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/d/d3/Super_Smash_Bros._box_art.png",
        plataforma: "N64",
        genero: "Luta / Plataforma",
        desenvolvedora: "HAL Laboratory",
        detalhes: {
          descricao_longa: "O primeiro jogo da franquia, unindo personagens icônicos da Nintendo em um combate de plataforma caótico e divertido.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/4/4b/Super_Smash_Bros._gameplay.png"
          ],
          dicas: [
            "O objetivo principal não é reduzir a vida, mas sim aumentar o percentual de dano para 'arremessar' o oponente para fora da arena.",
            "Use o ataque de recuperação no ar (up special) com sabedoria."
          ]
        }
      },
      {
        id: "n64-perfectdark",
        titulo: "Perfect Dark",
        ano: 2000,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/9/91/PerfectDarkCover.png",
        plataforma: "N64",
        genero: "FPS",
        desenvolvedora: "Rare",
        detalhes: {
          descricao_longa: "Sucessor espiritual de GoldenEye 007, expandiu o FPS com jogabilidade futurista, inteligência artificial avançada e multiplayer personalizável.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/7/7b/Perfect_Dark_gameplay.png"
          ],
          dicas: [
            "Muitas armas possuem modos de tiro secundários (secondary modes).",
            "O 'Farsight' é um rifle de precisão que vê através das paredes."
          ]
        }
      },
      {
        id: "n64-banjokazooie",
        titulo: "Banjo-Kazooie",
        ano: 1998,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/6/60/Banjo-Kazooie_Coverart.png",
        plataforma: "N64",
        genero: "Plataforma 3D / Colecionável",
        desenvolvedora: "Rare",
        detalhes: {
          descricao_longa: "Um dos grandes jogos de plataforma 3D que competiu com Mario 64, famoso por seus personagens carismáticos, vastos mundos de exploração e humor.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/a/a2/Banjo-Kazooie_gameplay.png"
          ],
          dicas: [
            "Use Kazooie (a galinha na mochila) para pular e atacar.",
            "Colete todas as 'Jiggies' (peças de quebra-cabeça) para progredir."
          ]
        }
      },
      {
        id: "n64-starfox64",
        titulo: "Star Fox 64 (Lylat Wars)",
        ano: 1997,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Fox_64_box_art.png",
        plataforma: "N64",
        genero: "Rail Shooter 3D",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "O primeiro jogo a usar o Rumble Pak (função de vibração) do N64 e introduziu o sistema de rotas alternativas em fases.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Fox_64_gameplay.png"
          ],
          dicas: [
            "Use o 'boost' (aceleração) e 'brake' (freio) para acessar caminhos secretos.",
            "O modo 'All-Range Mode' permite combate aéreo livre."
          ]
        }
      },
      {
        id: "n64-marioparty",
        titulo: "Mario Party",
        ano: 1998,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/7/7c/Mario_Party_Box_Art.jpg",
        plataforma: "N64",
        genero: "Festa / Minigames",
        desenvolvedora: "Hudson Soft",
        detalhes: {
          descricao_longa: "O jogo que iniciou a franquia de festa da Nintendo, com mini-jogos competitivos e um tabuleiro virtual para disputar estrelas.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/1/1a/Mario_Party_gameplay.png"
          ],
          dicas: [
            "Alguns mini-jogos iniciais requeriam rotação rápida do analógico, podendo danificar o controle.",
            "A estrela (Star) é o objetivo final; gerencie seu dinheiro para comprá-la."
          ]
        }
      },
      {
        id: "n64-fzero-x",
        titulo: "F-Zero X",
        ano: 1998,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/b/b3/F-Zero_X_box_art.png",
        plataforma: "N64",
        genero: "Corrida Futurista",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Sequência que focou em alta velocidade e 30 pilotos competindo simultaneamente. Famoso por seu modo 'Death Race'.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/f/f7/F-Zero_X_gameplay.png"
          ],
          dicas: [
            "Use o 'Spin Attack' para desviar de colisões e eliminar adversários.",
            "O modo 'Death Race' é excelente para ganhar novos veículos."
          ]
        }
      },
      {
        id: "n64-pokemonsnap",
        titulo: "Pokémon Snap",
        ano: 1999,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/1/11/Pokemon_Snap_Box_Art.jpg",
        plataforma: "N64",
        genero: "Fotografia / Rail Shooter",
        desenvolvedora: "HAL Laboratory",
        detalhes: {
          descricao_longa: "Um jogo único onde o objetivo é fotografar Pokémon em seu habitat natural, usando itens para induzir poses melhores.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/b/b5/Pokemon_Snap_gameplay.png"
          ],
          dicas: [
            "Use as 'Pester Balls' para forçar Pokémon a sair do esconderijo.",
            "Encontre o Professor Oak para avaliar suas fotos e desbloquear fases."
          ]
        }
      },
      {
        id: "n64-dk64",
        titulo: "Donkey Kong 64",
        ano: 1999,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/c/c8/Donkey_Kong_64_box_art.png",
        plataforma: "N64",
        genero: "Plataforma 3D / Colecionável",
        desenvolvedora: "Rare",
        detalhes: {
          descricao_longa: "Conhecido por seu foco extremo em colecionáveis, com cinco personagens jogáveis e a expansão do universo DK para o 3D.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/9/94/Donkey_Kong_64_gameplay.png"
          ],
          dicas: [
            "A expansão de memória (Expansion Pak) é obrigatória para jogar este título.",
            "Cada Kong tem itens e cores de banana exclusivos para coletar."
          ]
        }
      },
      {
        id: "n64-wave-race",
        titulo: "Wave Race 64",
        ano: 1996,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/b/b0/Wave_Race_64_Coverart.png",
        plataforma: "N64",
        genero: "Corrida / Jet Ski",
        desenvolvedora: "Nintendo",
        detalhes: {
          descricao_longa: "Demonstrou a física da água do console de forma impressionante. É um jogo de corrida de jet ski focado em atravessar bandeiras.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/2/22/Wave_Race_64_gameplay.png"
          ],
          dicas: [
            "Mantenha a linha de corrida apertada e evite bater nas boias.",
            "O nível da água e as ondas afetam a jogabilidade drasticamente."
          ]
        }
      },
      {
        id: "n64-roguesquadron",
        titulo: "Star Wars: Rogue Squadron",
        ano: 1998,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/0/02/Rogue_Squadron_Coverart.png",
        plataforma: "N64",
        genero: "Ação / Combate Aéreo",
        desenvolvedora: "Factor 5",
        detalhes: {
          descricao_longa: "Coloca o jogador na cabine de pilotagem de várias naves icônicas de Star Wars, com gráficos impressionantes para o console (otimizado com Expansion Pak).",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/9/91/Rogue_Squadron_gameplay.png"
          ],
          dicas: [
            "O uso do 'Harpoon and Tow Cable' é crucial em missões de ataque a veículos terrestres (como AT-ATs).",
            "Concluir missões com medalha de ouro libera naves secretas."
          ]
        }
      },
      {
        id: "n64-excitibike64",
        titulo: "Excitebike 64",
        ano: 2000,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/1/1a/Excitebike_64_Coverart.png",
        plataforma: "N64",
        genero: "Corrida / Motocross 3D",
        desenvolvedora: "Left Field Productions",
        detalhes: {
          descricao_longa: "Levou o conceito do Excitebike original para o 3D, com controles complexos para truques e ajustes de ângulo nos saltos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/6/64/Excitebike_64_gameplay.png"
          ],
          dicas: [
            "Equilibrar a moto no ar é vital para uma aterrissagem perfeita e ganhar turbo.",
            "O modo 'Stunt Track' é ótimo para praticar manobras."
          ]
        }
      },
      {
        id: "n64-papermario",
        titulo: "Paper Mario",
        ano: 2000,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/2/2b/Paper_Mario_N64.png",
        plataforma: "N64",
        genero: "RPG",
        desenvolvedora: "Intelligent Systems",
        detalhes: {
          descricao_longa: "Mistura de elementos de plataforma com batalhas RPG por turnos que usam 'Timed Hits' (ataques com timing). Distingue-se por seu visual de 'papel'.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/9/99/Paper_Mario_gameplay.png"
          ],
          dicas: [
            "Use 'Badges' (insígnias) para customizar as habilidades de Mario.",
            "Os 'Timed Hits' são necessários tanto na defesa quanto no ataque."
          ]
        }
      },
      {
        id: "n64-cruisn-usa",
        titulo: "Cruis'n USA",
        ano: 1996,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/a/ab/Cruis%27n_USA_Cover.png",
        plataforma: "N64",
        genero: "Corrida Arcade",
        desenvolvedora: "Midway",
        detalhes: {
          descricao_longa: "Port do popular arcade, focado em alta velocidade e corridas através de pontos turísticos dos Estados Unidos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/7/75/Cruis%27n_USA_gameplay.png"
          ],
          dicas: [
            "Use o 'Nitro' em retas longas ou ao sair de curvas.",
            "Aperte o acelerador no momento certo da contagem regressiva para um 'Start Rush'."
          ]
        }
      },
      {
        id: "n64-residentevil2",
        titulo: "Resident Evil 2",
        ano: 1999,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Resident_Evil_2_Coverart.png/640px-Resident_Evil_2_Coverart.png",
        plataforma: "N64",
        genero: "Survival Horror",
        desenvolvedora: "Capcom / Angel Studios",
        detalhes: {
          descricao_longa: "Port técnico impressionante do PS1 para cartucho, incluindo melhorias gráficas e um modo de documentos aleatórios (randomizer).",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/b/b5/Resident_Evil_2_gameplay.png"
          ],
          dicas: [
            "O port do N64 permite escolher diferentes esquemas de controle.",
            "A versão N64 possui maior qualidade de áudio para alguns efeitos sonoros (devido à compressão)."
          ]
        }
      },
      {
        id: "n64-rogue-squadron-3d",
        titulo: "Star Wars Episode I: Battle for Naboo",
        ano: 2000,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/3/30/Battlefornaboocover.jpg",
        plataforma: "N64",
        genero: "Ação / Combate Aéreo",
        desenvolvedora: "Factor 5",
        detalhes: {
          descricao_longa: "Sequência que manteve a jogabilidade de Rogue Squadron, focando na história e nos veículos do Episódio I: A Ameaça Fantasma.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/4/4b/Battle_for_Naboo_gameplay.png"
          ],
          dicas: [
            "O jogo exige o Expansion Pak para rodar em alta resolução (se ativado).",
            "O Naboo Starfighter é a aeronave mais rápida e frágil."
          ]
        }
      },
      {
        id: "n64-jetforcegemini",
        titulo: "Jet Force Gemini",
        ano: 1999,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/a/a2/Jet_Force_Gemini_Coverart.png",
        plataforma: "N64",
        genero: "Third-Person Shooter / Aventura",
        desenvolvedora: "Rare",
        detalhes: {
          descricao_longa: "Combina exploração 3D, combate de tiro em terceira pessoa e elementos de plataforma, com três protagonistas jogáveis.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/b/b5/Jet_Force_Gemini_gameplay.png"
          ],
          dicas: [
            "Alternar entre os três personagens é necessário para completar todas as fases.",
            "O jogo requer que você colete todos os 'Tribals' (pequenos nativos) para destravar o final."
          ]
        }
      },
      {
        id: "n64-bomberman64",
        titulo: "Bomberman 64",
        ano: 1997,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/d/dc/Bomberman_64_Coverart.png",
        plataforma: "N64",
        genero: "Plataforma / Ação / Party",
        desenvolvedora: "Hudson Soft",
        detalhes: {
          descricao_longa: "Aventura 3D focada em ação e puzzles com bombas. Famoso por seu modo de batalha multiplayer com arenas 3D.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/f/f0/Bomberman_64_gameplay.png"
          ],
          dicas: [
            "Domine o 'Bomb Kick' e o 'Bomb Jump' para alcançar plataformas altas.",
            "O modo 'Battle' é onde o jogo brilha, com 4 jogadores simultâneos."
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
    imagem_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/PS2-Versions.jpg/1016px-PS2-Versions.jpg?20130620234911",
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
        imagem_url: "https://images.launchbox-app.com/e0525716-30ba-4c1d-8522-669e10bf21f4.jpg",
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
        imagem_url: "https://images.launchbox-app.com/e666e456-200b-460d-ac92-b3a92a2cb249.jpg",
        plataforma: "PS2",
        genero: "Aventura",
        desenvolvedora: "Team Ico",
        detalhes: {
          descricao_longa: "Uma experiência artística e emocional, onde o jogador enfrenta 16 colossos em busca de salvar uma vida.",
          imagens_galeria: [
            "https://upload.wikimedia.e666e456/wikipedia/en/1/1e/Shadow_of_the_Colossus_gameplay.png"
          ],
          dicas: [
            "Observe o padrão de cada colosso antes de atacar.",
            "Suba apenas quando o colosso estiver parado."
          ]
        }
      },
      // --- 15 NOVOS JOGOS PARA PS2 ---
      {
        id: "ps2-ffx",
        titulo: "Final Fantasy X",
        ano: 2001,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Final_Fantasy_X_cover.jpg/640px-Final_Fantasy_X_cover.jpg",
        plataforma: "PS2",
        genero: "RPG",
        desenvolvedora: "Square",
        detalhes: {
          descricao_longa: "O primeiro Final Fantasy da era PS2, com foco em gráficos 3D detalhados, voz atuada e o sistema de progressão 'Sphere Grid'.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/e/e5/Final_Fantasy_X_gameplay.png"
          ],
          dicas: [
            "Use o 'Sphere Grid' para personalizar a evolução de cada personagem.",
            "Domine o sistema de 'Overdrive' para causar dano massivo em chefes."
          ]
        }
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
          descricao_longa: "Um jogo que elevou os padrões de narrativa cinematográfica e jogabilidade stealth, introduzindo Raiden como protagonista.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/f/f6/Metal_Gear_Solid_2_gameplay.png"
          ],
          dicas: [
            "Use o modo primeira pessoa para mirar em partes específicas do corpo.",
            "Guarde a pistola tranquilizante (tranq gun) para um final com pontuação alta."
          ]
        }
      },
      {
        id: "ps2-resident-evil-4",
        titulo: "Resident Evil 4",
        ano: 2005,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Resident_Evil_4_Cover.jpg/640px-Resident_Evil_4_Cover.jpg",
        plataforma: "PS2",
        genero: "Survival Horror / Ação",
        desenvolvedora: "Capcom",
        detalhes: {
          descricao_longa: "Revolucionou a série, mudando de câmera fixa para perspectiva sobre o ombro, focando mais em ação e combate contra hordas de inimigos.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/3/3d/Resident_Evil_4_gameplay.png"
          ],
          dicas: [
            "Atire nas pernas ou cabeça para stunar inimigos e usar o ataque de proximidade (roundhouse kick).",
            "O PS2 incluiu o modo 'Separate Ways' com Ada Wong."
          ]
        }
      },
      {
        id: "ps2-devil-may-cry",
        titulo: "Devil May Cry",
        ano: 2001,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Devil_May_Cry_Coverart.png/640px-Devil_May_Cry_Coverart.png",
        plataforma: "PS2",
        genero: "Hack and Slash",
        desenvolvedora: "Capcom",
        detalhes: {
          descricao_longa: "Estabeleceu o gênero 'stylish action' (ação estilosa), com Dante em combates rápidos e cheios de combos, combinando espada e armas de fogo.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/f/f4/Devil_May_Cry_gameplay.png"
          ],
          dicas: [
            "A pontuação de estilo (Stylish Rank) aumenta ao variar seus ataques.",
            "Use a forma 'Devil Trigger' (gatilho demoníaco) para regenerar vida e aumentar o dano."
          ]
        }
      },
      {
        id: "ps2-tekken-5",
        titulo: "Tekken 5",
        ano: 2005,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Tekken_5_Cover.jpg/640px-Tekken_5_Cover.jpg",
        plataforma: "PS2",
        genero: "Luta 3D",
        desenvolvedora: "Namco",
        detalhes: {
          descricao_longa: "Melhoria da jogabilidade de Tekken, com retorno ao sistema de combos mais rápido e a inclusão do modo 'Devil Within' (plataforma/ação).",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/5/5e/Tekken_5_gameplay.png"
          ],
          dicas: [
            "Aprenda o 'crush system' para ataques que esquivam de golpes de altura específica.",
            "O modo 'Arcade History' permite jogar as versões originais de Tekken 1, 2 e 3."
          ]
        }
      },
      {
        id: "ps2-jak-and-daxter",
        titulo: "Jak and Daxter: The Precursor Legacy",
        ano: 2001,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Jak_and_Daxter_The_Precursor_Legacy_Coverart.png/640px-Jak_and_Daxter_The_Precursor_Legacy_Coverart.png",
        plataforma: "PS2",
        genero: "Plataforma 3D",
        desenvolvedora: "Naughty Dog",
        detalhes: {
          descricao_longa: "Um jogo de plataforma 3D que se destaca por ser totalmente sem telas de carregamento entre as áreas do vasto mundo aberto.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/4/4c/Jak_and_Daxter_gameplay.png"
          ],
          dicas: [
            "Colete 'Precursor Orbs' para desbloquear novos ataques e habilidades.",
            "O 'Dark Eco' oferece habilidades temporárias de combate."
          ]
        }
      },
      {
        id: "ps2-burnout-3",
        titulo: "Burnout 3: Takedown",
        ano: 2004,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Burnout_3_Takedown_Coverart.jpg/640px-Burnout_3_Takedown_Coverart.jpg",
        plataforma: "PS2",
        genero: "Corrida / Combate Veicular",
        desenvolvedora: "Criterion Games",
        detalhes: {
          descricao_longa: "Focou em batidas e takedowns (derrubadas) para ganhar turbo. É considerado um dos melhores jogos de corrida de estilo arcade.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/5/53/Burnout_3_Takedown_gameplay.png"
          ],
          dicas: [
            "Quanto mais perigosa a condução (near miss), mais rápido você enche a barra de turbo.",
            "O modo 'Crash' recompensa por causar a maior destruição possível."
          ]
        }
      },
      {
        id: "ps2-kh",
        titulo: "Kingdom Hearts",
        ano: 2002,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Kingdom_Hearts_Cover.jpg/640px-Kingdom_Hearts_Cover.jpg",
        plataforma: "PS2",
        genero: "Action RPG",
        desenvolvedora: "Square",
        detalhes: {
          descricao_longa: "Crossover da Disney e Final Fantasy, com combate em tempo real. Segue a história de Sora em busca de seus amigos em vários mundos Disney.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/0/05/Kingdom_Hearts_gameplay.png"
          ],
          dicas: [
            "Foque em magias de cura e proteção para enfrentar chefes difíceis.",
            "A ordem de escolha das armas (Sword, Shield, Staff) no início afeta a evolução dos seus status."
          ]
        }
      },
      {
        id: "ps2-onimusha",
        titulo: "Onimusha: Warlords",
        ano: 2001,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Onimusha_Warlords_Coverart.png/640px-Onimusha_Warlords_Coverart.png",
        plataforma: "PS2",
        genero: "Survival Horror / Ação",
        desenvolvedora: "Capcom",
        detalhes: {
          descricao_longa: "Um jogo de ação e aventura com foco em espadachins samurais e câmeras fixas (estilo Resident Evil), ambientado no Japão feudal.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/2/28/Onimusha_Warlords_gameplay.png"
          ],
          dicas: [
            "O 'Issen' (contra-ataque instantâneo) é crucial para derrotar inimigos mais fortes rapidamente.",
            "Absorva as almas dos inimigos caídos para aumentar o poder das suas armas e magia."
          ]
        }
      },
      {
        id: "ps2-prince-of-persia",
        titulo: "Prince of Persia: The Sands of Time",
        ano: 2003,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Prince_of_Persia_The_Sands_of_Time_Coverart.jpg/640px-Prince_of_Persia_The_Sands_of_Time_Coverart.jpg",
        plataforma: "PS2",
        genero: "Ação / Aventura / Plataforma",
        desenvolvedora: "Ubisoft Montreal",
        detalhes: {
          descricao_longa: "Revitalizou a série Prince of Persia com foco em parkour 3D fluido e a capacidade de retroceder o tempo para corrigir erros.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/3/3d/Prince_of_Persia_The_Sands_of_Time_gameplay.png"
          ],
          dicas: [
            "Use o poder do tempo (rewind) após cair em armadilhas.",
            "O combate é mais sobre esquiva e posicionamento do que ataque direto."
          ]
        }
      },
      {
        id: "ps2-ratchet-clank",
        titulo: "Ratchet & Clank: Up Your Arsenal",
        ano: 2004,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Ratchet_and_Clank_Up_Your_Arsenal_Coverart.png/640px-Ratchet_and_Clank_Up_Your_Arsenal_Coverart.png",
        plataforma: "PS2",
        genero: "Plataforma / Tiro",
        desenvolvedora: "Insomniac Games",
        detalhes: {
          descricao_longa: "Terceiro jogo da série, conhecido por seu vasto arsenal de armas criativas e hilárias, e jogabilidade de tiro em terceira pessoa aprimorada.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/4/4e/Ratchet_and_Clank_Up_Your_Arsenal_gameplay.png"
          ],
          dicas: [
            "Mantenha o uso de todas as armas; elas evoluem de nível conforme você as usa.",
            "Jogue o modo multiplayer local para estender a diversão."
          ]
        }
      },
      {
        id: "ps2-splinter-cell",
        titulo: "Tom Clancy's Splinter Cell",
        ano: 2003,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Tom_Clancy%27s_Splinter_Cell_Coverart.png/640px-Tom_Clancy%27s_Splinter_Cell_Coverart.png",
        plataforma: "PS2",
        genero: "Stealth",
        desenvolvedora: "Ubisoft Montreal",
        detalhes: {
          descricao_longa: "Apresentou Sam Fisher e o foco extremo em luz e sombra como mecânica de stealth. Altamente técnico e imersivo.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/5/5e/Tom_Clancy%27s_Splinter_Cell_gameplay.png"
          ],
          dicas: [
            "Fique sempre na sombra; o medidor de luz é vital.",
            "Use as habilidades de espionagem (pick-locking, optic cable) para evitar confrontos diretos."
          ]
        }
      },
      {
        id: "ps2-guitar-hero",
        titulo: "Guitar Hero",
        ano: 2005,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Guitar_Hero_Coverart.png/640px-Guitar_Hero_Coverart.png",
        plataforma: "PS2",
        genero: "Musical / Ritmo",
        desenvolvedora: "Harmonix",
        detalhes: {
          descricao_longa: "Iniciou a mania dos jogos de ritmo com instrumentos de plástico, simulando o rock and roll com uma trilha sonora icônica.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/5/5e/Guitar_Hero_gameplay.png"
          ],
          dicas: [
            "O 'Star Power' (inclinar a guitarra) deve ser usado em seções de pontuação alta.",
            "Pratique as músicas no modo 'Practice' para dominar as partes difíceis."
          ]
        }
      },
      {
        id: "ps2-socom",
        titulo: "SOCOM U.S. Navy SEALs",
        ano: 2002,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/SOCOM_U.S._Navy_SEALs_Coverart.png/640px-SOCOM_U.S._Navy_SEALs_Coverart.png",
        plataforma: "PS2",
        genero: "Tiro Tático / Online",
        desenvolvedora: "Zipper Interactive",
        detalhes: {
          descricao_longa: "Um dos pioneiros dos jogos de tiro tático online para console, utilizando o adaptador de rede do PS2. Focado em missões de esquadrão tático.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/9/91/SOCOM_U.S._Navy_SEALs_gameplay.png"
          ],
          dicas: [
            "O microfone (headset) é essencial para o multiplayer e para comandar a IA do esquadrão no single-player.",
            "O modo online era a principal atração do jogo."
          ]
        }
      },
      {
        id: "ps2-ssx-tricky",
        titulo: "SSX Tricky",
        ano: 2001,
        imagem_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/SSX_Tricky_Coverart.png/640px-SSX_Tricky_Coverart.png",
        plataforma: "PS2",
        genero: "Esporte / Snowboarding",
        desenvolvedora: "EA Canada",
        detalhes: {
          descricao_longa: "Jogo de snowboard arcade, conhecido por seus truques exagerados ('Über Tricks'), personagens carismáticos e trilha sonora hip-hop e eletrônica licenciada.",
          imagens_galeria: [
            "https://upload.wikimedia.org/wikipedia/en/b/b5/SSX_Tricky_gameplay.png"
          ],
          dicas: [
            "Complete os 'Über Tricks' para ganhar o 'Boost' (turbo) ilimitado temporariamente.",
            "Competir no 'Showoff Mode' é a melhor maneira de praticar manobras e desbloquear segredos."
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