import type { NarrativeUnit } from '@/src/types/narrative';

export const scene2: NarrativeUnit[] = [
  {
    id: "2.2.1",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.1",
    title: "LE LENDEMAIN COMMENCE TROP TÔT",
    location: "Sortie du quai 9",
    timeLabel: "00:19",
    accessLevel: "free",
    textBlocks: [
      "Je suis resté immobile une seconde de trop après qu’Anna a prononcé les mots. Ma fille. Deux syllabes. Rien de spectaculaire. Pourtant, dans ma tête, elles ont ouvert une porte condamnée depuis des années.",
      "Silas n’a pas tenté de fuir. Il me regardait avec cette peur de deuxième main qu’ont les hommes quand ils comprennent qu’ils ne sont plus au centre du danger. Il avait cessé d’être l’urgence. Il n’était plus qu’un morceau sale d’un mécanisme plus vaste.",
      "La pluie tombait toujours sur le quai, régulière, froide, presque administrative. J’ai baissé l’arme sans la ranger. Quelque part, un navire a poussé une plainte grave dans la brume, comme si le port lui-même voulait me rappeler qu’ici tout finit attaché à une chaîne.",
      "Le Cartel ne m’invitait jamais. Il me convoquait. Et Anna ne disait jamais “ta fille” sans avoir déjà décidé quel morceau de moi elle comptait utiliser ensuite."
    ],
    choices: [
      {
        id: "c221_finish_silas",
        label: "Presser Silas une dernière fois avant de partir.",
        hint: "Tenter d’arracher un détail utile.",
        nextUnitId: "2.2.2a",
        effects: {
          humanite: -2
        },
        journalNote: "J’ai voulu prendre encore quelque chose à Silas avant de quitter le quai."
      },
      {
        id: "c221_leave_now",
        label: "Le laisser là et partir immédiatement.",
        hint: "Ne pas faire attendre Anna davantage.",
        nextUnitId: "2.2.2b",
        effects: {
          dette: -1
        },
        journalNote: "J’ai choisi de quitter le quai sans prolonger l’échange."
      }
    ]
  },

  {
    id: "2.2.2a",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.2a",
    title: "LE RESTE D’UN HOMME",
    location: "Quai 9",
    timeLabel: "00:20",
    accessLevel: "free",
    textBlocks: [
      "Je me suis rapproché de Silas une dernière fois. Il s’est tassé contre la grille comme si mon ombre seule suffisait encore à lui faire mal.",
      "— Si tu veux voir demain, ai-je dit, donne-moi quelque chose que je puisse emporter.",
      "Il a eu un rire sec, sans salive.",
      "— Demain ? Pour moi ?",
      "Puis il a craché à côté de sa chaussure et levé vers moi des yeux trop lucides pour un homme déjà presque mort.",
      "— Tour Alecto. Niveau médian. Pas l’entrée officielle. Ils te feront passer par les cuisines. Comme les domestiques. Comme les chiens."
    ],
    choices: [
      {
        id: "c222a_merge",
        label: "Mémoriser et partir.",
        nextUnitId: "2.2.3"
      }
    ]
  },

  {
    id: "2.2.2b",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.2b",
    title: "LE PRIX DU RETARD",
    location: "Quai 9",
    timeLabel: "00:20",
    accessLevel: "free",
    textBlocks: [
      "Je n’ai rien ajouté. Il y a des instants où continuer à parler revient seulement à donner au monde une chance de vous entendre trembler.",
      "J’ai reculé d’un pas, puis d’un autre. Silas n’a pas bougé. Peut-être qu’il savait déjà qu’il ne sortirait pas de cette nuit avec autre chose qu’un sursis sale et trop court.",
      "Au moment où je me détournais, il a parlé tout seul, comme parlent parfois les hommes qui comprennent que le silence les enterrera plus vite que les mots.",
      "— Tour Alecto, a-t-il lancé derrière moi. Niveau médian. Ils t’attendent déjà.",
      "Je ne me suis pas retourné. Les informations les plus utiles ont souvent la politesse d’arriver trop tard."
    ],
    choices: [
      {
        id: "c222b_merge",
        label: "Quitter le quai.",
        nextUnitId: "2.2.3"
      }
    ]
  },

  {
    id: "2.2.3",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.3",
    title: "TOUR ALECTO",
    location: "Transit vers la Canopée",
    timeLabel: "00:46",
    accessLevel: "free",
    textBlocks: [
      "La Tour Alecto perçait la nuit comme une aiguille propre plantée dans la gorge de la ville. En bas, le Quartier Sud pataugeait dans sa boue, ses néons cassés et ses circuits pourris. Là-haut, la pierre lisse, le verre noir et les ascenseurs muets racontaient une autre version du monde : celle où la violence a appris à porter des gants.",
      "Le Cartel adorait les bâtiments qui ressemblent à une idée de l’ordre. C’est plus rassurant, pour les gens riches, quand le mal se présente avec un hall poli et des lignes parfaites.",
      "Je suis arrivé par l’accès de service, comme annoncé. Une porte discrète, un couloir sans fenêtres, un monte-charge plus propre que certains salons de la ville basse. Ils tenaient beaucoup à leurs symboles. Même quand ils vous humiliaient, ils tenaient à le faire avec élégance.",
      "À mesure que je remontais, l’implant dans ma nuque vibrait de cette chaleur sèche qui n’était pas encore de la douleur, mais déjà une laisse."
    ],
    choices: [
      {
        id: "c223_composed",
        label: "Entrer parfaitement maîtrisé.",
        hint: "Ne rien leur montrer.",
        nextUnitId: "2.2.4a",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai choisi d’entrer chez Anna comme si rien en moi n’avait bougé."
      },
      {
        id: "c223_obsessive",
        label: "Entrer avec une seule idée : ma fille.",
        hint: "Laisser l’obsession conduire.",
        nextUnitId: "2.2.4b",
        effects: {
          humanite: 2,
          ancrage: -2
        },
        journalNote: "Je suis entré chez Anna déjà tiré hors de moi par le mot “fille”."
      }
    ]
  },

  {
    id: "2.2.4a",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.4a",
    title: "VISAGE FERMÉ",
    location: "Tour Alecto, niveau médian",
    timeLabel: "00:52",
    accessLevel: "free",
    textBlocks: [
      "Quand les portes se sont ouvertes, j’avais remis mon visage à sa place. Pas celui d’un homme calme. Celui d’un homme coûteux à casser.",
      "Le niveau médian du Cartel ressemblait à tout ce que les gens puissants appellent le bon goût : pierres pâles, éclairage indirect, silence feutré, lignes nettes, art abstrait aux murs pour prouver qu’on pouvait s’offrir le luxe de ne rien représenter.",
      "Une femme en gris m’attendait près d’une alcôve vitrée. Pas armée visiblement. Ce qui, chez eux, ne voulait jamais dire désarmée.",
      "— Monsieur Vance. Madame Anna vous reçoit."
    ],
    choices: [
      {
        id: "c224a_merge",
        label: "La suivre.",
        nextUnitId: "2.2.5"
      }
    ]
  },

  {
    id: "2.2.4b",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.4b",
    title: "LE MOT QUI RONGE",
    location: "Tour Alecto, niveau médian",
    timeLabel: "00:52",
    accessLevel: "free",
    textBlocks: [
      "Quand les portes se sont ouvertes, je n’ai vu d’abord ni le marbre, ni les tableaux, ni les lampes. J’ai vu un monde entier organisé pour permettre à quelqu’un comme Anna de prononcer les mots “ta fille” sans trembler.",
      "Le niveau médian du Cartel avait la propreté obscène des lieux où l’on décide du sort des autres sans jamais salir ses propres chaussures. Tout y respirait la maîtrise : les angles, la lumière, le silence, jusqu’au parfum sec qui flottait dans l’air comme une menace bien éduquée.",
      "Une femme en gris m’attendait près d’une alcôve vitrée. Elle a pris une seconde de trop à me regarder. Peut-être qu’elle avait perçu quelque chose de fendu sous ma peau.",
      "— Monsieur Vance. Madame Anna vous reçoit."
    ],
    choices: [
      {
        id: "c224b_merge",
        label: "La suivre sans répondre.",
        nextUnitId: "2.2.5"
      }
    ]
  },

  {
    id: "2.2.5",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.5",
    title: "ANNA DANS LA LUMIÈRE COUPANTE",
    location: "Bureau d’Anna, Tour Alecto",
    timeLabel: "00:55",
    accessLevel: "free",
    textBlocks: [
      "Le bureau d’Anna dominait la ville comme un poste de commandement religieux. Baies noires du sol au plafond. Bureau trop long. Deux fauteuils bas pour les visiteurs, calculés pour vous faire légèrement lever les yeux. Une carafe de verre, deux verres, rien d’autre. La sobriété chez les puissants est toujours un luxe ostentatoire.",
      "Anna se tenait debout près de la vitre. Robe sombre, coupe impeccable, nuque dégagée. Pas un bijou de trop. Pas une émotion de trop. Elle avait cette beauté sévère qu’acquièrent certains visages après avoir longtemps pratiqué le pouvoir comme une hygiène.",
      "Elle ne m’a pas demandé de m’asseoir. Elle ne l’a jamais fait quand elle voulait que la conversation commence déjà en déséquilibre.",
      "— Victor.",
      "Je n’ai pas répondu à mon prénom. Elle s’y attendait."
    ],
    choices: [
      {
        id: "c225_press_immediately",
        label: "L’attaquer tout de suite sur ma fille.",
        hint: "Refuser son tempo.",
        nextUnitId: "2.2.6a",
        effects: {
          humanite: 2,
          ancrage: -1
        },
        journalNote: "J’ai refusé le cérémonial d’Anna pour aller droit à l’essentiel."
      },
      {
        id: "c225_play_her_game",
        label: "Attendre qu’elle pose ses règles.",
        hint: "Laisser Anna se découvrir.",
        nextUnitId: "2.2.6b",
        effects: {
          dette: -1
        },
        journalNote: "J’ai accepté, pour l’instant, de jouer sur le terrain d’Anna."
      }
    ]
  },

  {
    id: "2.2.6a",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.6a",
    title: "LE MOT AVANT ELLE",
    location: "Bureau d’Anna, Tour Alecto",
    timeLabel: "00:56",
    accessLevel: "free",
    textBlocks: [
      "— Ma fille, ai-je dit.",
      "Je n’ai pas élevé la voix. Pas besoin. Certains mots arrivent déjà armés.",
      "Anna a tourné la tête vers moi avec cette lenteur précise qu’ont les prédateurs quand quelque chose les amuse enfin.",
      "— Oui, a-t-elle répondu. Je me demandais combien de secondes tu tiendrais.",
      "Elle est revenue vers le bureau, a posé deux doigts sur le verre vide le plus proche, puis a ajouté :",
      "— Le problème avec le deuil, Victor, c’est qu’il rend les hommes très manipulables. Surtout quand on leur offre l’idée d’une exception."
    ],
    choices: [
      {
        id: "c226a_merge",
        label: "La laisser continuer.",
        nextUnitId: "2.2.7"
      }
    ]
  },

  {
    id: "2.2.6b",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.6b",
    title: "SON TERRAIN",
    location: "Bureau d’Anna, Tour Alecto",
    timeLabel: "00:56",
    accessLevel: "free",
    textBlocks: [
      "Je me suis tu. Anna aime les silences pour la même raison que d’autres aiment les couteaux : ils donnent une forme nette à ce qui va suivre.",
      "Elle a attendu encore une seconde, pour vérifier que j’acceptais bien la dissymétrie. Puis elle s’est avancée vers le bureau.",
      "— Tu as vu quelque chose cette nuit, a-t-elle dit. Quelque chose que tu n’étais pas censé relier si tôt.",
      "Ses yeux ne me quittaient pas.",
      "— Le problème avec le deuil, Victor, c’est qu’il fabrique de très bons détecteurs de coïncidences."
    ],
    choices: [
      {
        id: "c226b_merge",
        label: "Encaisser et écouter.",
        nextUnitId: "2.2.7"
      }
    ]
  },

  {
    id: "2.2.7",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.7",
    title: "L’OFFRE QUI N’EN EST PAS UNE",
    location: "Bureau d’Anna, Tour Alecto",
    timeLabel: "00:58",
    accessLevel: "free",
    textBlocks: [
      "Anna a effleuré la surface du bureau. Un écran discret s’est allumé dans le bois noir, révélant une suite de lignes, de dates et de références médicales cryptées. Des dossiers. Des essais. Des numéros de lots. Rien qu’un regard normal puisse comprendre. Mais assez pour qu’un homme brisé reconnaisse une piste quand on la lui jette comme un os.",
      "— Ce que tu as entendu chez Silas n’était pas un miracle, a-t-elle dit. C’était un résidu. Une persistance. Un retour partiel à travers une architecture cognitive instable.",
      "Sa voix restait calme, clinique, presque pédagogique. J’avais envie de lui fracasser quelque chose pour l’obliger à redevenir humaine.",
      "— Il existe des dossiers plus anciens. Plus sensibles. Plus profonds. Certains impliquent des sujets juvéniles que nos partenaires n’auraient jamais dû approcher.",
      "Elle a marqué une pause minuscule.",
      "— Tu veux savoir si ta fille fait partie de ces dossiers."
    ],
    choices: [
      {
        id: "c227_take_bait",
        label: "Dire oui sans négocier.",
        hint: "Céder au besoin de savoir.",
        nextUnitId: "2.2.8a",
        effects: {
          dette: 2,
          ancrage: -2
        },
        journalNote: "J’ai mordu à l’hameçon d’Anna avant même d’en connaître le prix."
      },
      {
        id: "c227_force_price",
        label: "Demander le prix exact.",
        hint: "Refuser de feindre l’ignorance.",
        nextUnitId: "2.2.8b",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai exigé le prix avant d’accepter la moindre information."
      }
    ]
  },

  {
    id: "2.2.8a",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.8a",
    title: "LA FAIM PARLE D’ABORD",
    location: "Bureau d’Anna, Tour Alecto",
    timeLabel: "00:59",
    accessLevel: "free",
    textBlocks: [
      "— Oui, ai-je dit.",
      "Le mot est sorti trop vite. Je l’ai entendu tomber entre nous avec la docilité d’un homme que sa blessure vient de trahir.",
      "Anna n’a pas souri. Ce qui, chez elle, revenait souvent à savourer plus discrètement.",
      "— Bien, a-t-elle dit. Alors tu vas travailler pour moi à nouveau, mais cette fois sans détour, sans petite morale privée, et sans improviser dans les ruelles."
    ],
    choices: [
      {
        id: "c228a_merge",
        label: "La laisser poser sa mission.",
        nextUnitId: "2.2.9"
      }
    ]
  },

  {
    id: "2.2.8b",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.8b",
    title: "LE PRIX AVANT LE POISON",
    location: "Bureau d’Anna, Tour Alecto",
    timeLabel: "00:59",
    accessLevel: "free",
    textBlocks: [
      "— Combien ? ai-je demandé.",
      "Anna a penché légèrement la tête. Pas surprise. Presque satisfaite.",
      "— Enfin une question adulte.",
      "Elle a refermé l’écran du bout des doigts.",
      "— Tu vas travailler pour moi à nouveau. Officiellement, tu remontes une fuite interne liée à des protocoles de transfert dévoyés. Officieusement, tu me récupères ce qui manque à certains dossiers avant que d’autres factions n’y mettent la main.",
      "Elle a laissé flotter le reste. Chez Anna, le prix exact n’arrive jamais d’un coup. Il s’installe."
    ],
    choices: [
      {
        id: "c228b_merge",
        label: "L’écouter jusqu’au bout.",
        nextUnitId: "2.2.9"
      }
    ]
  },

  {
    id: "2.2.9",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.2.9",
    title: "LA NOUVELLE CHAÎNE",
    location: "Bureau d’Anna, Tour Alecto",
    timeLabel: "01:01",
    accessLevel: "free",
    textBlocks: [
      "Anna m’a donné un nom, puis un lieu. Pas assez pour résoudre quoi que ce soit. Juste assez pour m’empêcher de dormir. Un certain docteur Corven. Un ancien architecte de transfert. Disparu des registres officiels depuis huit ans. Réapparu, peut-être, dans les souterrains humides sous la vieille ville.",
      "— Tu vas le trouver, a-t-elle dit. Et tu vas m’apporter tout ce qu’il a conservé. Sauvegardes, journaux, fragments, matrices, noms de clients. Tout.",
      "Je n’ai pas demandé ce qui arriverait à Corven si je le trouvais avant eux. Certaines réponses salissent celui qui les entend.",
      "Anna s’est enfin assise, ce qui signifiait que l’entretien touchait à sa fin.",
      "— Et Victor ?",
      "Je me suis arrêté à la porte.",
      "— Si tu me mens, ou si tu gardes quelque chose pour toi, je ne tuerai pas ton espoir. Je ferai mieux que ça.",
      "Sa voix était presque douce.",
      "— Je te laisserai vivre assez longtemps pour le nourrir."
    ],
    choices: [
      {
        id: "c229_end_scene",
        label: "Quitter le bureau avec le nom de Corven.",
        nextUnitId: "2.3.1",
        effects: {
          dette: 2
        },
        journalNote: "Anna m’a lancé sur la trace du docteur Corven, avec l’espoir comme laisse."
      }
    ]
  }
];