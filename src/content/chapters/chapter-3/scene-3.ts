import type { NarrativeUnit } from '@/src/types/narrative';

export const scene3: NarrativeUnit[] = [
  {
    id: "3.3.1",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.1",
    title: "LE THÉÂTRE D’ANNA",
    location: "Réservoir de dérivation, vieille ville",
    timeLabel: "02:59",
    accessLevel: "free",
    textBlocks: [
      "L’eau noire remuait à peine sous les passerelles, mais toute la pièce semblait respirer au rythme d’Anna. Elle avait ce talent rare : entrer quelque part et faire croire que le lieu l’attendait depuis des années.",
      "Corven restait légèrement en retrait, pâle, la bouche entrouverte comme s’il cherchait encore quelle version de sa peur convenait à la scène. Les deux silhouettes armées n’avaient pas bougé. Elles n’en avaient pas besoin. La menace véritable, ici, ne venait pas des armes. Elle venait de l’assurance avec laquelle Anna continuait de parler sans élever la voix.",
      "— Tu voulais la vérité, Victor, a-t-elle dit. Te voilà servi.",
      "Sa façon de prononcer le mot vérité m’a donné envie de tirer. Pas parce que je la croyais. Parce que je la savais capable d’en utiliser juste assez pour rendre le mensonge inutile."
    ],
    choices: [
      {
        id: "c331_press_anna",
        label: "L’obliger à parler tout de suite de Mara.",
        hint: "Couper court à son dispositif.",
        nextUnitId: "3.3.2a",
        effects: {
          humanite: 1,
          ancrage: -1
        },
        journalNote: "J’ai attaqué Anna immédiatement sur le nom de Mara."
      },
      {
        id: "c331_read_room",
        label: "Observer d’abord le dispositif d’Anna.",
        hint: "Comprendre avant de frapper.",
        nextUnitId: "3.3.2b",
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
        journalNote: "J’ai retenu ma colère pour lire le piège avant d’y entrer."
      }
    ]
  },

  {
    id: "3.3.2a",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.2a",
    title: "TOUT DE SUITE",
    location: "Réservoir de dérivation",
    timeLabel: "03:00",
    accessLevel: "free",
    textBlocks: [
      "— Mara, ai-je dit. Maintenant.",
      "Le nom a traversé la chambre basse comme un fil tendu entre une tombe et ma gorge. Même les hommes armés ont semblé se figer une fraction de seconde, non parce qu’ils comprenaient, mais parce qu’ils avaient reconnu un mot que les puissants protègent avec un soin particulier.",
      "Anna a incliné la tête.",
      "— Voilà. C’est pour ça que tu restes utile. Tu vas toujours là où la plaie saigne le plus vite."
    ],
    choices: [
      {
        id: "c332a_merge",
        label: "L’encaisser.",
        nextUnitId: "3.3.3"
      }
    ]
  },

  {
    id: "3.3.2b",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.2b",
    title: "AVANT LE MOT",
    location: "Réservoir de dérivation",
    timeLabel: "03:00",
    accessLevel: "free",
    textBlocks: [
      "Je n’ai pas parlé tout de suite. J’ai regardé.",
      "La position d’Anna sur la passerelle. Les deux tireurs légèrement en retrait. Corven assez vivant pour être encore utile, pas assez libre pour croire à sa survie. Et surtout cette certitude tranquille chez Anna : elle n’était pas venue pour me tuer.",
      "Pas encore.",
      "— Tu n’as pas fermé la pièce, ai-je dit. Tu l’as cadrée."
    ],
    choices: [
      {
        id: "c332b_merge",
        label: "La laisser répondre.",
        nextUnitId: "3.3.3"
      }
    ]
  },

  {
    id: "3.3.3",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.3",
    title: "UTILITÉ",
    location: "Réservoir de dérivation",
    timeLabel: "03:01",
    accessLevel: "free",
    textBlocks: [
      "Anna a eu ce presque-sourire qu’elle réserve aux moments où quelqu’un formule enfin une vérité qu’elle avait déjà prévue.",
      "— Exact, a-t-elle dit. Si j’avais voulu ta mort, Victor, tu serais tombé dans le laboratoire. Si j’avais voulu ton silence, Corven n’aurait pas parlé aussi longtemps. Ce que je voulais, c’était l’effet cumulé.",
      "Corven a fermé les yeux.",
      "— Ne fais pas ça, Anna.",
      "Elle ne lui a accordé qu’un regard.",
      "— Vous autres, les techniciens, vous pensez toujours que l’information vaut par son contenu. C’est faux. L’information vaut par la personne qu’on choisit de briser avec."
    ],
    choices: [
      {
        id: "c333_protect_corven",
        label: "Revenir vers Corven, physiquement.",
        hint: "Refuser qu’elle garde seule le centre de la scène.",
        nextUnitId: "3.3.4a",
        effects: {
          humanite: 1
        },
        journalNote: "Je me suis déplacé pour couper Anna de Corven."
      },
      {
        id: "c333_hold_position",
        label: "Rester en place et la laisser dérouler.",
        hint: "Ne pas bouger sous sa pression.",
        nextUnitId: "3.3.4b",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai tenu ma position malgré la mise en scène d’Anna."
      }
    ]
  },

  {
    id: "3.3.4a",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.4a",
    title: "DÉPLACEMENT",
    location: "Réservoir de dérivation",
    timeLabel: "03:02",
    accessLevel: "free",
    textBlocks: [
      "J’ai fait un pas vers Corven. Immédiatement, l’une des silhouettes a relevé son arme d’un angle à peine perceptible. Anna n’a pas eu besoin de donner d’ordre. Le décor lui obéissait déjà.",
      "Corven m’a lancé un regard trouble, presque implorant. Il ne savait plus s’il me devait sa vie, sa perte, ou seulement la dernière témoin valable de ce qu’il avait fabriqué.",
      "— Mauvaise idée, a dit Anna doucement. Tu confonds encore compassion et marge de manœuvre."
    ],
    choices: [
      {
        id: "c334a_merge",
        label: "Rester malgré l’avertissement.",
        nextUnitId: "3.3.5"
      }
    ]
  },

  {
    id: "3.3.4b",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.4b",
    title: "IMMOBILITÉ",
    location: "Réservoir de dérivation",
    timeLabel: "03:02",
    accessLevel: "free",
    textBlocks: [
      "Je n’ai pas bougé. Dans certaines pièces, résister consiste seulement à ne pas offrir son corps à la chorégraphie de quelqu’un d’autre.",
      "Anna m’a observé avec une attention plus froide encore. Peut-être parce qu’elle préférait me voir bondir. La retenue complique toujours le travail des gens qui vivent de déclencher des réactions.",
      "— Mieux, a-t-elle dit. Tu fatigues, mais tu apprends."
    ],
    choices: [
      {
        id: "c334b_merge",
        label: "La forcer à continuer.",
        nextUnitId: "3.3.5"
      }
    ]
  },

  {
    id: "3.3.5",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.5",
    title: "LE DOSSIER N’ÉTAIT PAS PERDU",
    location: "Réservoir de dérivation",
    timeLabel: "03:03",
    accessLevel: "free",
    textBlocks: [
      "Anna a glissé une main dans la poche de son manteau et en a sorti un petit objet sombre. Pas une arme. Une capsule de mémoire, fine, mate, sans marquage. Le genre de support qui peut contenir une vie entière ou de quoi la ruiner à jamais.",
      "— Tu cherches encore un dossier dispersé, a-t-elle dit. Une trace morcelée. Une convergence hypothétique. C’est touchant.",
      "Sa voix s’est faite plus douce. Presque intime.",
      "— Le dossier M-17 n’a jamais été perdu, Victor. Il a été déplacé. Gardé. Cultivé."
    ],
    choices: [
      {
        id: "c335_demand_where",
        label: "Demander où.",
        hint: "Aller droit au centre.",
        nextUnitId: "3.3.6a",
        effects: {
          ancrage: -1
        },
        journalNote: "J’ai voulu savoir où se trouvait vraiment M-17."
      },
      {
        id: "c335_demand_who",
        label: "Demander qui le garde.",
        hint: "Chercher la main avant le lieu.",
        nextUnitId: "3.3.6b",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai voulu savoir entre quelles mains se trouvait M-17."
      }
    ]
  },

  {
    id: "3.3.6a",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.6a",
    title: "OÙ",
    location: "Réservoir de dérivation",
    timeLabel: "03:04",
    accessLevel: "free",
    textBlocks: [
      "— Où ?",
      "Le mot m’a quitté trop vite. Anna l’a entendu comme on entend une porte qu’on vient d’ouvrir soi-même.",
      "— Pas dans un lieu, a-t-elle répondu. Tu continues à penser comme un enquêteur, alors qu’on parle ici d’investissement à long terme."
    ],
    choices: [
      {
        id: "c336a_merge",
        label: "Se taire et attendre la suite.",
        nextUnitId: "3.3.7"
      }
    ]
  },

  {
    id: "3.3.6b",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.6b",
    title: "QUI",
    location: "Réservoir de dérivation",
    timeLabel: "03:04",
    accessLevel: "free",
    textBlocks: [
      "— Qui le garde ?",
      "Anna a laissé passer une seconde, comme si la formulation l’amusait davantage.",
      "— Voilà une question plus adulte, a-t-elle dit. Les lieux brûlent, fuient, coulent. Les personnes, elles, peuvent apprendre à porter un héritage."
    ],
    choices: [
      {
        id: "c336b_merge",
        label: "Encaisser la phrase.",
        nextUnitId: "3.3.7"
      }
    ]
  },

  {
    id: "3.3.7",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.7",
    title: "PORTEUR",
    location: "Réservoir de dérivation",
    timeLabel: "03:05",
    accessLevel: "free",
    textBlocks: [
      "Corven a bougé d’un coup. Pas pour fuir. Pour protester.",
      "— Anna, non.",
      "Elle ne l’a même pas regardé.",
      "— Tu vois, Victor, le problème avec les enfants, c’est qu’ils survivent parfois aux usages qu’on leur destine. Le problème avec certains pères, c’est qu’ils confondent disparition et fin.",
      "Le réservoir tout entier m’a semblé reculer de quelques centimètres.",
      "— M-17 n’est pas caché dans une archive, a-t-elle dit. M-17 est porté. Nourri. Élevé."
    ],
    choices: [
      {
        id: "c337_hold",
        label: "Tenir sans parler.",
        hint: "Ne pas lui donner votre chute.",
        nextUnitId: "3.3.8a",
        requirements: [
          {
            stat: "ancrage",
            operator: ">=",
            value: 5,
            failText: "Ancrage insuffisant"
          }
        ],
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai refusé d’offrir à Anna le spectacle de ma rupture."
      },
      {
        id: "c337_break_question",
        label: "Demander qui.",
        hint: "Forcer le nom malgré le vertige.",
        nextUnitId: "3.3.8b",
        effects: {
          humanite: 1,
          ancrage: -2
        },
        journalNote: "J’ai arraché la question avant de perdre pied."
      }
    ]
  },

  {
    id: "3.3.8a",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.8a",
    title: "NE RIEN DONNER",
    location: "Réservoir de dérivation",
    timeLabel: "03:06",
    accessLevel: "free",
    textBlocks: [
      "Je n’ai rien dit. Ma gorge brûlait. Mon implant pulsait à la base de mon crâne comme une bête nerveuse. Mais je n’ai rien donné.",
      "Pour la première fois, Anna a paru contrariée. Très légèrement. Une fissure d’un millimètre dans le contrôle.",
      "Alors c’est elle qui a avancé le dernier pas.",
      "— Tu veux vraiment savoir ?"
    ],
    choices: [
      {
        id: "c338a_merge",
        label: "La laisser prononcer la suite.",
        nextUnitId: "3.3.9"
      }
    ]
  },

  {
    id: "3.3.8b",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.8b",
    title: "LE MOT ARRACHÉ",
    location: "Réservoir de dérivation",
    timeLabel: "03:06",
    accessLevel: "free",
    textBlocks: [
      "— Qui ?",
      "Je n’ai presque pas reconnu ma propre voix. Elle venait de trop loin. D’un endroit en moi qui croyait encore que nommer la chose suffisait à la contenir.",
      "Anna a inspiré très doucement, comme une femme qui savoure déjà la seconde exacte où sa phrase va détruire quelqu’un.",
      "— Enfin, a-t-elle dit. Nous y voilà."
    ],
    choices: [
      {
        id: "c338b_merge",
        label: "L’entendre jusqu’au bout.",
        nextUnitId: "3.3.9"
      }
    ]
  },

  {
    id: "3.3.9",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.3.9",
    title: "DERNIÈRE PHRASE AVANT LA COUPURE",
    location: "Réservoir de dérivation",
    timeLabel: "03:07",
    accessLevel: "free",
    textBlocks: [
      "Anna a levé la capsule sombre entre deux doigts.",
      "— Mara n’est pas morte comme tu le crois, Victor.",
      "Elle a laissé le silence serrer la pièce entière, puis a ajouté, avec cette précision presque tendre qui la rendait plus monstrueuse encore :",
      "— Et la fillette qui la porte t’a déjà regardé dans les yeux."
    ],
    choices: [
      {
        id: "c339_end_free",
        label: "Rester immobile pendant que le monde cède.",
        nextUnitId: "4.1.1",
        effects: {
          ancrage: -3,
          humanite: 2
        },
        journalNote: "Anna a révélé que le porteur vivant de Mara a déjà croisé Victor."
      }
    ]
  }
];