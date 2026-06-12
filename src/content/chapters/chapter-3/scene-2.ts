import type { NarrativeUnit } from '@/src/types/narrative';

export const scene2: NarrativeUnit[] = [
  {
    id: "3.2.1",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.1",
    title: "L’ASSAUT ENTRE",
    location: "Laboratoire de Corven",
    timeLabel: "02:49",
    accessLevel: "free",
    textBlocks: [
      "La fumée a roulé au ras du sol comme une bête dressée à mordre d’abord les chevilles. Derrière elle, les silhouettes armées entraient déjà en découpe nette, visières sombres, canons compacts, gestes courts. Des professionnels. Pas des soldats ordinaires. Le genre d’équipes qu’on envoie quand on ne veut ni témoins, ni improvisation, ni seconde version des faits.",
      "Le premier tir a frappé l’unité froide derrière moi dans une gerbe blanche de gel et d’étincelles. Le bruit a été mat, contenu, plus obscène encore qu’une détonation pleine. Corven a sursauté comme si le laboratoire venait de le trahir personnellement.",
      "Je n’ai pas eu le temps de penser. Seulement celui de choisir ce que je refusais de perdre en premier."
    ],
    choices: [
      {
        id: "c321_return_fire",
        label: "Riposter immédiatement.",
        hint: "Leur faire baisser la tête.",
        nextUnitId: "3.2.2a",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai répondu à l’assaut par le feu, avant toute autre chose."
      },
      {
        id: "c321_move",
        label: "Attraper Corven et bouger.",
        hint: "Quitter la ligne de tir.",
        nextUnitId: "3.2.2b",
        effects: {
          humanite: 1
        },
        journalNote: "J’ai privilégié le mouvement et la survie immédiate."
      }
    ]
  },

  {
    id: "3.2.2a",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.2a",
    title: "RÉPONSE COURTE",
    location: "Laboratoire de Corven",
    timeLabel: "02:50",
    accessLevel: "free",
    textBlocks: [
      "J’ai tiré deux fois à travers la fumée, non pour toucher, mais pour casser leur tempo. Les impacts ont fait éclater un panneau latéral et forcé la première silhouette à pivoter juste assez pour perdre sa ligne.",
      "— Bouge ! ai-je lancé à Corven.",
      "Il a hésité une demi-seconde. Une demi-seconde de scientifique. Une demi-seconde de trop dans un métier d’hommes armés."
    ],
    choices: [
      {
        id: "c322a_merge",
        label: "Reculer vers le passage.",
        nextUnitId: "3.2.3"
      }
    ]
  },

  {
    id: "3.2.2b",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.2b",
    title: "HORS DE LA LIGNE",
    location: "Laboratoire de Corven",
    timeLabel: "02:50",
    accessLevel: "free",
    textBlocks: [
      "J’ai saisi Corven à l’épaule et l’ai jeté contre le flanc de l’unité froide au moment où une nouvelle rafale cousait l’air à hauteur de poitrine. Le laboratoire a semblé se contracter autour de nous.",
      "Les machines n’étaient plus des outils. Elles devenaient du relief, des angles, des obstacles assez solides pour offrir une seconde de vie.",
      "— Le passage ! ai-je grondé.",
      "— Derrière la cloison arrière, a-t-il dit. Si elle tient encore."
    ],
    choices: [
      {
        id: "c322b_merge",
        label: "Forcer le repli.",
        nextUnitId: "3.2.3"
      }
    ]
  },

  {
    id: "3.2.3",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.3",
    title: "LA CLOISON ARRIÈRE",
    location: "Fond du laboratoire",
    timeLabel: "02:51",
    accessLevel: "free",
    textBlocks: [
      "Nous avons reculé dans un vacarme de verre médical brisé, de boîtiers renversés et de métal frappé. Chaque pas arrachait quelque chose au laboratoire, comme si l’endroit refusait d’être quitté sans tribut.",
      "La cloison arrière n’était pas une vraie porte. Plutôt un panneau de maintenance peint dans la même teinte que le mur, avec une poignée encastrée presque invisible sous la crasse.",
      "Corven s’est jeté dessus, mains tremblantes mais gestes précis. Derrière nous, les hommes du Cartel progressaient sans hâte. Ils savaient déjà que les sorties ne servent qu’à rallonger la peur."
    ],
    choices: [
      {
        id: "c323_cover",
        label: "Couvrir Corven pendant qu’il ouvre.",
        hint: "Acheter les secondes nécessaires.",
        nextUnitId: "3.2.4a",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai tenu la ligne pendant que Corven travaillait la cloison."
      },
      {
        id: "c323_push",
        label: "Le bousculer et forcer l’ouverture avec lui.",
        hint: "Privilégier la sortie sur le duel.",
        nextUnitId: "3.2.4b",
        effects: {
          ancrage: -1
        },
        journalNote: "J’ai choisi la fuite brute plutôt que la précision."
      }
    ]
  },

  {
    id: "3.2.4a",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.4a",
    title: "TENIR",
    location: "Fond du laboratoire",
    timeLabel: "02:52",
    accessLevel: "free",
    textBlocks: [
      "Je me suis planté de biais entre la fumée et Corven, arme à deux mains, respiration coupée en segments courts. Le monde s’était réduit à des angles, à des distances, à des instants où appuyer ou non sur une détente.",
      "Une silhouette a émergé plus franchement des remous gris. J’ai tiré. Cette fois pour atteindre. Le corps a heurté une table roulante dans un fracas d’instruments.",
      "— C’est ouvert ! a soufflé Corven."
    ],
    choices: [
      {
        id: "c324a_merge",
        label: "Passer dans l’ouverture.",
        nextUnitId: "3.2.5"
      }
    ]
  },

  {
    id: "3.2.4b",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.4b",
    title: "ARRACHER",
    location: "Fond du laboratoire",
    timeLabel: "02:52",
    accessLevel: "free",
    textBlocks: [
      "Je l’ai repoussé de l’épaule et ai glissé les doigts dans la poignée encastrée. Le métal a résisté une seconde, puis la cloison a cédé d’un coup sec, libérant une haleine d’air froid et rance venue du passage derrière.",
      "Un tir a éclaté si près que quelque chose de brûlant a frôlé ma manche. Je n’ai pas vérifié si c’était le mur ou moi.",
      "— Dedans ! ai-je lancé."
    ],
    choices: [
      {
        id: "c324b_merge",
        label: "Basculer dans le passage.",
        nextUnitId: "3.2.5"
      }
    ]
  },

  {
    id: "3.2.5",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.5",
    title: "LE PASSAGE ÉTROIT",
    location: "Conduit de maintenance",
    timeLabel: "02:53",
    accessLevel: "free",
    textBlocks: [
      "Le passage de maintenance était si étroit qu’il obligeait le corps à se souvenir qu’il n’est jamais qu’un colis fragile transportant trop de mémoire. Corven avançait devant moi, de profil par moments, courbé, une main sur la paroi humide pour garder l’équilibre.",
      "Derrière nous, les tirs se sont tus. Mauvais signe. Les professionnels cessent de tirer quand ils ont trouvé une autre manière de vous rejoindre.",
      "Le conduit descendait en pente douce vers les couches plus anciennes de la vieille ville. L’air y était plus frais, plus minéral, traversé d’effluves de moisissure, de cuivre et d’eau noire.",
      "Puis Corven a ralenti.",
      "— Attends, a-t-il murmuré. Écoute."
    ],
    choices: [
      {
        id: "c325_trust",
        label: "S’arrêter et écouter vraiment.",
        hint: "Croire à son instinct du lieu.",
        nextUnitId: "3.2.6a",
        requirements: [
          {
            stat: "ancrage",
            operator: ">=",
            value: 4,
            failText: "Ancrage insuffisant"
          }
        ],
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai contenu l’urgence pour entendre ce que Corven percevait."
      },
      {
        id: "c325_push",
        label: "Le pousser à continuer sans s’arrêter.",
        hint: "Ne pas leur laisser le temps de refermer le piège.",
        nextUnitId: "3.2.6b",
        effects: {
          dette: 1
        },
        journalNote: "J’ai choisi la vitesse plutôt que l’écoute."
      }
    ]
  },

  {
    id: "3.2.6a",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.6a",
    title: "AUTRE CHOSE DEVANT",
    location: "Conduit de maintenance",
    timeLabel: "02:54",
    accessLevel: "free",
    textBlocks: [
      "Je me suis figé. Au début, je n’ai entendu que l’eau. Puis autre chose s’est séparé du bruit de fond : un frottement irrégulier, métallique, venant de l’avant. Pas derrière. Devant.",
      "Corven a tourné vers moi un visage déjà vidé de sa dernière illusion.",
      "— Ils ne nous rabattent pas, a-t-il dit. Ils nous guident.",
      "Cette phrase a laissé dans le conduit une place trop grande pour le silence."
    ],
    choices: [
      {
        id: "c326a_merge",
        label: "Continuer en sachant.",
        nextUnitId: "3.2.7"
      }
    ]
  },

  {
    id: "3.2.6b",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.6b",
    title: "TOUJOURS PLUS VITE",
    location: "Conduit de maintenance",
    timeLabel: "02:54",
    accessLevel: "free",
    textBlocks: [
      "Je l’ai poussé à reprendre sans m’arrêter. Dans les conduits, l’urgence déforme l’espace. Tout paraît plus proche, plus simple, jusqu’au moment où l’on comprend qu’on vient de courir exactement où quelqu’un voulait vous voir entrer.",
      "Le bruit a fini par nous atteindre malgré tout : un frottement métallique venu de l’avant, mince mais net. Corven s’est raidi.",
      "— Merde, a-t-il soufflé. Ils ont fermé l’autre côté aussi."
    ],
    choices: [
      {
        id: "c326b_merge",
        label: "Continuer malgré le piège.",
        nextUnitId: "3.2.7"
      }
    ]
  },

  {
    id: "3.2.7",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.7",
    title: "LA CHAMBRE BASSE",
    location: "Réservoir de dérivation",
    timeLabel: "02:56",
    accessLevel: "free",
    textBlocks: [
      "Le conduit s’est ouvert sur une chambre basse, circulaire, à moitié noyée. Quatre passerelles étroites convergeaient vers une plate-forme centrale rongée de rouille. Au-dessous, une eau noire frémissait à peine, épaisse comme si elle avait oublié depuis longtemps qu’elle devait refléter quelque chose.",
      "Et ils étaient là.",
      "Pas l’équipe du laboratoire. D’autres. Deux silhouettes immobiles sur la passerelle d’en face, armes tenues bas, comme des gens déjà certains de leur supériorité. Entre elles, une femme mince dans un manteau clair attendait sans se cacher.",
      "Je l’ai reconnue avant même que la lumière froide n’atteigne son visage.",
      "Anna."
    ],
    choices: [
      {
        id: "c327_aim",
        label: "Lever l’arme sur elle.",
        hint: "Refuser sa mise en scène.",
        nextUnitId: "3.2.8a",
        effects: {
          dette: 1
        },
        journalNote: "J’ai répondu à l’apparition d’Anna par la menace."
      },
      {
        id: "c327_listen",
        label: "Ne pas tirer. Pas encore.",
        hint: "Voir ce qu’elle a préparé.",
        nextUnitId: "3.2.8b",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai contenu le réflexe de tirer pour comprendre le théâtre d’Anna."
      }
    ]
  },

  {
    id: "3.2.8a",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.8a",
    title: "LIGNE DE VISEUR",
    location: "Réservoir de dérivation",
    timeLabel: "02:57",
    accessLevel: "free",
    textBlocks: [
      "J’ai levé l’arme sans hésiter. Le canon a trouvé Anna presque naturellement, comme si tout ce chapitre n’avait existé que pour ramener mon bras à cette seule ligne.",
      "Elle n’a pas bronché. Ce n’était même pas du courage. Plutôt cette forme de foi glacée qu’ont les gens persuadés d’avoir déjà placé la vraie violence ailleurs.",
      "— Si tu tires, Victor, a-t-elle dit, tu perds la seule version de l’histoire qui te laisse encore avancer."
    ],
    choices: [
      {
        id: "c328a_merge",
        label: "La laisser parler.",
        nextUnitId: "3.2.9"
      }
    ]
  },

  {
    id: "3.2.8b",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.8b",
    title: "PAS ENCORE",
    location: "Réservoir de dérivation",
    timeLabel: "02:57",
    accessLevel: "free",
    textBlocks: [
      "Je n’ai pas levé l’arme. Pas par confiance. Par calcul. Avec Anna, le premier mouvement visible est souvent déjà celui qu’elle a acheté.",
      "Elle a incliné légèrement la tête, juste assez pour signifier qu’elle avait remarqué la retenue, et qu’elle comptait déjà l’exploiter.",
      "— Bien, a-t-elle dit. Tu apprends encore. C’est presque touchant."
    ],
    choices: [
      {
        id: "c328b_merge",
        label: "Encaisser et écouter.",
        nextUnitId: "3.2.9"
      }
    ]
  },

  {
    id: "3.2.9",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.2.9",
    title: "CE QU’ELLE VOULAIT",
    location: "Réservoir de dérivation",
    timeLabel: "02:58",
    accessLevel: "free",
    textBlocks: [
      "Anna a regardé Corven, puis moi, comme si elle comparait deux versions inégales d’un même outil.",
      "— Tu crois encore être arrivé jusqu’ici malgré moi, a-t-elle dit. C’est ce que j’apprécie chez toi, Victor. Cette persistance presque artistique à appeler “instinct” ce qui n’est souvent qu’un couloir conçu pour toi.",
      "Corven a blêmi. Vraiment, cette fois.",
      "— Non, a-t-il murmuré.",
      "Anna a souri à peine.",
      "— Oh si. Corven devait parler. Toi, tu devais entendre. Certaines vérités ne produisent d’effet utile qu’au moment exact où on les laisse tomber."
    ],
    choices: [
      {
        id: "c329_end_scene",
        label: "Rester là, avec Corven et Anna face à face.",
        nextUnitId: "3.3.1",
        effects: {
          ancrage: -1,
          dette: 1
        },
        journalNote: "Anna a révélé que toute la fuite vers Corven faisait peut-être partie de son dispositif."
      }
    ]
  }
];