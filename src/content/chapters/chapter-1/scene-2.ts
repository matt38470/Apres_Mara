import type { NarrativeUnit } from '@/src/types/narrative';

export const scene2: NarrativeUnit[] = [
  {
    id: "1.2.1a",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.1a",
    title: "PLUIE D'ESCORTE",
    location: "Descente vers le Quartier Sud",
    timeLabel: "23:18",
    accessLevel: "free",
    textBlocks: [
      "La voiture de la milice glissait dans la nuit avec la discrétion d’un requin gras. À travers la vitre, San Telmo se défaisait par couches : les façades nettes de la Canopée, les hôtels où les fortunes vieillissantes rachetaient de la peau fraîche, puis les quartiers suspendus où les enseignes perdaient des lettres avant de perdre leur lumière.",
      "Valerius conduisait d’une seule main. L’autre reposait sur le volant avec cette décontraction étudiée des hommes qui n’ont jamais dû courir pour sauver quoi que ce soit. L’habitacle sentait le cuir humide, le tabac blond et le métal huilé des armes entretenues par d’autres.",
      "— Les Sterling veulent leur vieille avant l’aube, a-t-il dit.",
      "— Touchante définition de la famille.",
      "Il a eu un sourire mince. Dehors, la pluie frappait le pare-brise comme des ongles pressés.",
      "Plus on descendait, plus la ville perdait ses bonnes manières. Les murs se lézardaient, les vitrines se protégeaient derrière des grilles, et les trottoirs apprenaient à disparaître sous l’eau sale. Au loin, les docks levaient déjà leurs silhouettes de grues maigres et de hangars pourris. Les anciens abattoirs attendaient au bout du quartier, là où San Telmo cachait ce qu’elle n’avait pas le courage de jeter à la mer."
    ],
    choices: [
      {
        id: "c2a_push_valerius",
        label: "Le pousser à parler de la rançon.",
        hint: "Chercher ce qu’il cache.",
        nextUnitId: "1.2.2a",
        effects: {
          humanite: -2
        },
        journalNote: "J’ai choisi de tirer Valerius sur le terrain de l’argent."
      },
      {
        id: "c2a_silence",
        label: "Me taire et observer.",
        hint: "Rester en retrait.",
        nextUnitId: "1.2.2b",
        effects: {
          ancrage: 2
        },
        journalNote: "J’ai préféré garder le silence et regarder la ville tomber."
      }
    ]
  },

  {
    id: "1.2.1b",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.1b",
    title: "SEUL SOUS L’ORAGE",
    location: "Descente vers le Quartier Sud",
    timeLabel: "23:18",
    accessLevel: "free",
    textBlocks: [
      "L’ascenseur m’a recraché dans un hall de marbre, puis dans une rue propre, puis dans une ville qui se salissait à mesure que je lui rendais sa vraie hauteur. J’ai pris un taxi jusqu’à la dernière station sûre. Après, j’ai fini à pied. À San Telmo, il y a toujours un moment où les voitures refusent d’aller plus loin que la peur de leur chauffeur.",
      "La pluie me collait la chemise au dos. Les néons bavaient sur les flaques. Chaque coin de rue sentait le sel, l’huile brûlée, le sucre fermenté et la fatigue humaine. Le Quartier Sud commençait là où les fenêtres devenaient étroites et où les chiens savaient faire la différence entre un homme perdu et un homme armé.",
      "Je repensais au vieux poste à lampes des Sterling. À sa chaleur sale. À cette femme riche réduite à trembler dans une boîte bonne pour la casse. En haut, on appelle ça une tragédie. En bas, c’est juste mardi.",
      "Les anciens abattoirs se dessinaient déjà dans la brume : murs longs, toitures basses, cheminées mortes. Des bâtiments conçus pour vider les bêtes de leur sang, puis reconvertis pour en vider autre chose. La ville change les usages avant de changer de conscience.",
      "J’ai ralenti à l’angle d’une rue noyée. Quelqu’un pouvait m’observer. Dans ce quartier, même les flaques ont l’air d’attendre leur heure."
    ],
    choices: [
      {
        id: "c2b_main_street",
        label: "Passer par la rue principale.",
        hint: "Plus rapide, plus exposé.",
        nextUnitId: "1.2.2c",
        effects: {
          ancrage: -2
        },
        journalNote: "J’ai choisi la voie directe vers les anciens abattoirs."
      },
      {
        id: "c2b_back_alleys",
        label: "Contourner par les venelles.",
        hint: "Plus lent, plus discret.",
        nextUnitId: "1.2.2d",
        effects: {
          humanite: 2
        },
        journalNote: "J’ai préféré les détours sombres pour approcher sans bruit."
      }
    ]
  },

  {
    id: "1.2.2a",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.2a",
    title: "L’ODEUR DE L’ARGENT",
    location: "Voiture de la milice",
    timeLabel: "23:22",
    accessLevel: "free",
    textBlocks: [
      "— Combien ? ai-je demandé.",
      "Valerius n’a pas tourné la tête.",
      "— Pardon ?",
      "— La rançon. Tu n’as pas l’air d’un homme qui se déplace pour la beauté du geste.",
      "Il a ri. Un son bref, sans joie.",
      "— Les Sterling paient assez pour faire oublier des noms, a-t-il dit. Et assez peu pour qu’on ait encore envie d’en vendre d’autres.",
      "Je n’ai rien répondu. C’était presque élégant, comme aveu. Dans cette ville, les hommes honnêtes ne survivent que lorsqu’ils n’ont plus rien à protéger. Les autres négocient."
    ],
    choices: [
      {
        id: "c2a_merge",
        label: "Continuer vers les anciens abattoirs.",
        nextUnitId: "1.2.3"
      }
    ]
  },

  {
    id: "1.2.2b",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.2b",
    title: "MÂCHOIRES FERMÉES",
    location: "Voiture de la milice",
    timeLabel: "23:22",
    accessLevel: "free",
    textBlocks: [
      "Je me suis tu. J’ai regardé la ville se défaire derrière la vitre et j’ai mémorisé les sorties, les coupures de lumière, les rues où l’eau s’accumulait trop vite. On apprend ce genre de choses quand on a longtemps vécu avec l’idée qu’un trajet retour n’est jamais garanti.",
      "Valerius a fini par parler de lui-même, incapable de supporter trop longtemps un silence qui ne lui appartenait pas.",
      "— Tu sais ce que je déteste chez les riches, Vance ?",
      "— Leur respiration ?",
      "— Leur surprise. Chaque fois qu’on les vole, ils ont l’air de découvrir que l’argent rend visible.",
      "J’ai laissé la phrase tomber entre nous. La pluie faisait le reste."
    ],
    choices: [
      {
        id: "c2b_merge",
        label: "Arriver aux abattoirs.",
        nextUnitId: "1.2.3"
      }
    ]
  },

  {
    id: "1.2.2c",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.2c",
    title: "LA VOIE COURTE",
    location: "Quartier Sud",
    timeLabel: "23:22",
    accessLevel: "free",
    textBlocks: [
      "J’ai pris la rue principale. Mauvaise habitude, peut-être. Ou bonne vieille lassitude. Quand on est fatigué, on négocie parfois avec le danger comme avec un barman qu’on connaît trop bien.",
      "Des silhouettes fumaient sous des auvents tordus. Une femme a baissé les yeux en me voyant passer. Deux gamins ont disparu dans une venelle avec la vitesse de petits animaux élevés au bruit des bottes. Personne n’avait envie de parler à un homme qui marchait seul, trempé, et gardait une main trop près de sa veste.",
      "Au fond, les anciens abattoirs dressaient leurs murs noirs. Les fenêtres murées ressemblaient à des orbites crevées. La pluie y glissait comme sur une peau morte."
    ],
    choices: [
      {
        id: "c2c_merge",
        label: "Approcher du bâtiment principal.",
        nextUnitId: "1.2.3"
      }
    ]
  },

  {
    id: "1.2.2d",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.2d",
    title: "LES DÉTOURS",
    location: "Arrière-cours du Quartier Sud",
    timeLabel: "23:22",
    accessLevel: "free",
    textBlocks: [
      "J’ai coupé par les venelles, les arrière-cours, les passages étroits où la ville garde ses os à découvert. L’eau me montait parfois jusqu’à la cheville. Des linges sales battaient au vent entre les murs. Quelqu’un pleurait derrière une porte sans serrure.",
      "À cette hauteur de San Telmo, les gens n’attendent plus qu’on les sauve. Ils attendent seulement qu’on passe son chemin.",
      "J’ai longé un mur couvert d’anciennes affiches de loterie, traversé une cour où rouillaient trois scooters éventrés, puis gagné l’arrière des abattoirs. De là, le bâtiment semblait encore plus vaste, plus aveugle, plus décidé à ne rien rendre de ce qu’on y entrait."
    ],
    choices: [
      {
        id: "c2d_merge",
        label: "Trouver une entrée.",
        nextUnitId: "1.2.3"
      }
    ]
  },

  {
    id: "1.2.3",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.3",
    title: "LES ANCIENS ABATTOIRS",
    location: "Anciens abattoirs du Quartier Sud",
    timeLabel: "23:29",
    accessLevel: "free",
    textBlocks: [
      "L’intérieur sentait encore la bête, malgré les années. Pas une odeur franche. Une mémoire d’odeur. Du sang lessivé cent fois, de la graisse cuite dans les murs, de la javel, de la rouille, et maintenant quelque chose d’autre par-dessus : l’acidité sèche des transferts clandestins.",
      "Le hall principal s’ouvrait sur une enfilade de rails suspendus, de crochets vides et de salles de découpe reconverties en ateliers. Des câbles couraient au sol. Des batteries de fortune alimentaient des consoles rafistolées, des tables d’opération, des pompes, des blocs de refroidissement. On était loin du luxe stérile des Sterling. Ici, on arrachait les âmes avec des outils qui avaient encore l’air de pouvoir servir à dépecer une carcasse.",
      "Un bruit m’a fait lever la tête. Pas un cri. Un frottement. Une semelle pressée sur du ciment mouillé. Quelqu’un venait de quitter les lieux en hâte, ou croyait l’avoir fait.",
      "Sur une table métallique, un registre détrempé restait entrouvert. Une page était marquée d’un nom écrit à la hâte, suivi d’une heure et d’un lieu de rendez-vous : Silas. Quai 9. Minuit moins le quart.",
      "À côté du registre, un bracelet d’enfant reposait dans une soucoupe de métal. Fil rouge, petit fermoir d’étain, breloque en forme d’étoile. Je l’ai regardé une seconde de trop sans comprendre pourquoi."
    ],
    choices: [
      {
        id: "c2_take_register",
        label: "Prendre le registre et filer vers le quai 9.",
        hint: "Aller droit à Silas.",
        nextUnitId: "1.2.4",
        effects: {
          ancrage: -1
        },
        journalNote: "Le nom de Silas apparaît dans le registre des abattoirs."
      },
      {
        id: "c2_check_bracelet",
        label: "Examiner le bracelet avant de partir.",
        hint: "S’attarder sur le détail troublant.",
        nextUnitId: "1.2.5",
        effects: {
          humanite: 4,
          ancrage: -3
        },
        journalNote: "Un bracelet d’enfant a été trouvé dans l’atelier clandestin."
      }
    ]
  },

  {
    id: "1.2.4",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.4",
    title: "COURSE CONTRE MINUIT",
    location: "Sortie des abattoirs",
    timeLabel: "23:36",
    accessLevel: "free",
    textBlocks: [
      "J’ai arraché la page utile du registre, laissé le reste boire la pluie qui tombait à travers les verrières fendues, puis je suis reparti. Le nom de Silas battait dans ma tête au rythme de mes pas.",
      "Dehors, le vent rabattait l’eau sale contre les murs des hangars. Le quai 9 n’était pas loin, mais dans ce quartier la distance se mesure moins en mètres qu’en mauvaises rencontres.",
      "Quelqu’un m’avait précédé. Je le sentais maintenant. Dans les abattoirs, dans le registre encore humide, dans l’air brutalement vidé de sa présence. Silas bougeait vite, ou quelqu’un bougeait pour lui.",
      "Au bout de la rue, une corne de navire a grondé dans le brouillard. Minuit approchait. Le piège aussi."
    ],
    choices: [
      {
        id: "c2_end_register",
        label: "Foncer vers le quai 9.",
        nextUnitId: "1.3.1"
      }
    ]
  },

  {
    id: "1.2.5",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.2.5",
    title: "L’ÉTOILE",
    location: "Anciens abattoirs du Quartier Sud",
    timeLabel: "23:36",
    accessLevel: "free",
    textBlocks: [
      "J’ai pris le bracelet entre deux doigts. Léger. Presque rien. Pourtant, mon ventre s’est noué comme si j’avais touché un fil sous tension.",
      "Le métal était tiède. Impossible. Le lieu était froid, la table aussi, tout autour sentait l’eau morte et les machines de fortune. Mais l’étoile d’étain avait gardé une chaleur dérisoire, intime, comme un objet resté trop longtemps dans une petite main.",
      "Je n’ai pas cherché à comprendre. Pas encore. Je l’ai glissé dans ma poche avec une précaution absurde, puis j’ai repris le registre. Silas. Quai 9. Minuit moins le quart.",
      "Quand je suis ressorti sous la pluie, quelque chose en moi s’était déplacé d’un demi-centimètre. Rien d’assez net pour porter un nom. Juste la sensation qu’au bout de cette traque m’attendait autre chose qu’un simple voleur de corps."
    ],
    choices: [
      {
        id: "c2_end_bracelet",
        label: "Partir pour le quai 9.",
        nextUnitId: "1.3.1"
      }
    ]
  }
];