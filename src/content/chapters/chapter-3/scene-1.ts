import type { NarrativeUnit } from '@/types/src/narrative';

export const scene1: NarrativeUnit[] = [
  {
    id: "3.1.1",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.1",
    title: "LE NOM DANS LA CAGE THORACIQUE",
    location: "Laboratoire de Corven, vieille ville",
    timeLabel: "02:38",
    accessLevel: "free",
    textBlocks: [
      "Mara.",
      "Le nom ne s’est pas contenté d’entrer en moi. Il a trouvé tout de suite l’endroit exact où se logeaient encore les années que j’avais passées à faire semblant de survivre. Il a poussé. Le reste a cédé.",
      "Le laboratoire de Corven est resté debout autour de moi — les écrans, les câbles, l’odeur médicale, l’eau derrière les murs — mais une partie du monde venait de prendre un angle légèrement faux. Pas assez pour tomber. Assez pour ne plus jamais tenir droit de la même manière.",
      "Je sentais mon implant vibrer encore par intermittence sous la peau de ma nuque. Le Cartel insistait. Corven attendait. Et au milieu, il y avait ce nom. Mara. Non plus comme un deuil. Comme une preuve possible. Ce qui était pire."
    ],
    choices: [
      {
        id: "c311_hold_line",
        label: "Rester parfaitement maître de vous.",
        hint: "Ne rien montrer à Corven.",
        nextUnitId: "3.1.2a",
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
        journalNote: "J’ai tenu debout par pure discipline."
      },
      {
        id: "c311_breathe",
        label: "Encaisser en silence et reprendre pied.",
        hint: "Accepter la secousse sans vous effondrer.",
        nextUnitId: "3.1.2b",
        effects: {
          humanite: 1
        },
        journalNote: "Le nom de Mara m’a atteint, mais je suis resté présent."
      }
    ]
  },

  {
    id: "3.1.2a",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.2a",
    title: "VISAGE D’ACIER",
    location: "Laboratoire de Corven",
    timeLabel: "02:39",
    accessLevel: "free",
    textBlocks: [
      "Je n’ai rien laissé passer. Ni les yeux, ni la bouche, ni le souffle. Le genre de maîtrise qui finit toujours par coûter plus tard, mais qui permet au moins de choisir l’instant de l’effondrement.",
      "Corven m’a observé une seconde de trop. Il avait l’air presque déçu. Les hommes comme lui aiment voir leurs vérités produire un effet mesurable.",
      "— Continue, ai-je dit. Et choisis très bien ton prochain mot."
    ],
    choices: [
      {
        id: "c312a_merge",
        label: "Le faire parler.",
        nextUnitId: "3.1.3"
      }
    ]
  },

  {
    id: "3.1.2b",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.2b",
    title: "LE SOUFFLE AVANT LA CHUTE",
    location: "Laboratoire de Corven",
    timeLabel: "02:39",
    accessLevel: "free",
    textBlocks: [
      "J’ai fermé les yeux juste assez longtemps pour reprendre l’air qu’on venait de me retirer. Une seconde. Peut-être deux. Pas davantage. Dans certains métiers, ça suffit pour mourir. Dans d’autres, ça suffit pour redevenir humain malgré soi.",
      "Quand j’ai rouvert les yeux, Corven n’avait pas bougé. Mais il savait. Le nom avait trouvé sa cible.",
      "— Continue, ai-je dit. Ma voix n’était pas stable. Elle était simplement encore là."
    ],
    choices: [
      {
        id: "c312b_merge",
        label: "L’obliger à aller au bout.",
        nextUnitId: "3.1.3"
      }
    ]
  },

  {
    id: "3.1.3",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.3",
    title: "CE QUI SURVIT",
    location: "Laboratoire de Corven",
    timeLabel: "02:40",
    accessLevel: "free",
    textBlocks: [
      "Corven a passé la langue sur sa lèvre inférieure, geste minuscule d’un homme qui mesure la pente avant de s’y engager.",
      "— M-17 n’était pas un sujet comme les autres, a-t-il dit. Le protocole a changé plusieurs fois autour d’elle. Trop de réactions imprévues. Trop de persistance. Trop de retours.",
      "J’ai gardé l’arme basse, mais ma main n’avait plus rien de détendu.",
      "— Parle clairement.",
      "Il a baissé les yeux vers le module de lecture.",
      "— Certaines empreintes ne se sont pas contentées de survivre. Elles ont appris à se fixer dans des structures d’accueil successives. À se disperser sans se perdre tout à fait."
    ],
    choices: [
      {
        id: "c313_force_truth",
        label: "Le pousser à nommer l’horreur.",
        hint: "Refuser le vocabulaire clinique.",
        nextUnitId: "3.1.4a",
        effects: {
          humanite: 1
        },
        journalNote: "J’ai forcé Corven à cesser de se cacher derrière ses mots."
      },
      {
        id: "c313_stay_clinical",
        label: "Le laisser employer son langage technique.",
        hint: "Obtenir l’information avant tout.",
        nextUnitId: "3.1.4b",
        effects: {
          ancrage: 1,
          humanite: -1
        },
        journalNote: "J’ai accepté le langage de Corven pour aller plus vite vers les faits."
      }
    ]
  },

  {
    id: "3.1.4a",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.4a",
    title: "PAS DES EMPREINTES",
    location: "Laboratoire de Corven",
    timeLabel: "02:42",
    accessLevel: "free",
    textBlocks: [
      "— Ne me parle pas d’empreintes, ai-je dit. Ne me parle pas de structures. Si tu veux que je t’écoute encore, tu vas employer des mots qui saignent.",
      "Quelque chose a tressailli dans sa joue. Pas de honte. Le souvenir du mot honte, peut-être.",
      "— Très bien, a-t-il murmuré. Une part d’elle a survécu. Pas entière. Pas proprement. Mais assez pour contaminer d’autres transferts. Assez pour réapparaître, parfois, dans certains corps d’accueil."
    ],
    choices: [
      {
        id: "c314a_merge",
        label: "Le fixer sans cligner.",
        nextUnitId: "3.1.5"
      }
    ]
  },

  {
    id: "3.1.4b",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.4b",
    title: "LEUR LANGUE",
    location: "Laboratoire de Corven",
    timeLabel: "02:42",
    accessLevel: "free",
    textBlocks: [
      "Je l’ai laissé parler dans sa langue, celle des laboratoires, des protocoles, des ratios de réussite. La langue qui transforme les blessures en phénomènes annexes.",
      "— Une matrice-source fragmentée a généré plusieurs rémanences transversales, a-t-il dit. Certaines partielles. D’autres affectivement marquées. Une en particulier a montré une stabilité remarquable.",
      "Je le détestais d’être précis. Je le détestais davantage encore de m’être rendu dépendant de cette précision.",
      "— En clair, ai-je dit.",
      "— Une part d’elle a survécu assez longtemps pour réapparaître ailleurs."
    ],
    choices: [
      {
        id: "c314b_merge",
        label: "Aller au point crucial.",
        nextUnitId: "3.1.5"
      }
    ]
  },

  {
    id: "3.1.5",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.5",
    title: "LA FILLE OU LA TRACE",
    location: "Laboratoire de Corven",
    timeLabel: "02:44",
    accessLevel: "free",
    textBlocks: [
      "Le pire, ce n’était pas l’idée qu’une part de Mara ait survécu. Le pire, c’était la question qui venait aussitôt après, avec son goût de lame.",
      "Qu’est-ce qu’on récupère, au juste, quand on arrache quelqu’un à la mort par fragments ? Une personne ? Une survivance ? Un mensonge assez convaincant pour se faire aimer ?",
      "Corven a dû lire cela sur mon visage, car il a eu la décence de détourner les yeux.",
      "— Je ne peux pas te promettre une enfant rendue intacte, a-t-il dit. Personne ne le peut. Mais je peux te montrer où certaines traces ont convergé."
    ],
    choices: [
      {
        id: "c315_demand_now",
        label: "Exiger l’emplacement immédiatement.",
        hint: "Supporter l’ambiguïté plus tard.",
        nextUnitId: "3.1.6a",
        effects: {
          dette: 1
        },
        journalNote: "J’ai choisi la direction avant la vérité complète."
      },
      {
        id: "c315_need_answer",
        label: "L’obliger à répondre d’abord : personne ou reliquat ?",
        hint: "Refuser d’avancer sans nommer l’abîme.",
        nextUnitId: "3.1.6b",
        requirements: [
          {
            stat: "humanite",
            operator: ">=",
            value: 5,
            failText: "Humanité insuffisante"
          }
        ],
        effects: {
          humanite: 1
        },
        journalNote: "J’ai exigé de savoir ce qu’il restait d’humain avant de courir vers la piste."
      }
    ]
  },

  {
    id: "3.1.6a",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.6a",
    title: "L’ADRESSE D’ABORD",
    location: "Laboratoire de Corven",
    timeLabel: "02:45",
    accessLevel: "free",
    textBlocks: [
      "— L’endroit, ai-je dit. Maintenant.",
      "Corven m’a dévisagé avec une fatigue presque tendre, ce qui chez lui avait quelque chose d’insultant.",
      "— Il existe un site de convergence hors registre, a-t-il répondu. Un ancien sanatorium reconverti avant les inondations, puis enterré sous des couches administratives. Les derniers transferts anormaux que j’ai pu suivre pointaient vers là.",
      "Il a entrouvert un panneau latéral de la table et en a extrait une plaquette de données noire, sans marquage.",
      "— Prends-la. Mais si Anna apprend que je t’ai donné ça vivant, elle fera de moi un exemple pédagogique."
    ],
    choices: [
      {
        id: "c316a_merge",
        label: "Prendre la plaquette.",
        nextUnitId: "3.1.7"
      }
    ]
  },

  {
    id: "3.1.6b",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.6b",
    title: "LE NOM DE L’ABÎME",
    location: "Laboratoire de Corven",
    timeLabel: "02:45",
    accessLevel: "free",
    textBlocks: [
      "— Non, ai-je dit. Pas l’adresse. Pas encore. D’abord, tu vas me dire ce que je poursuis.",
      "Corven a fermé les yeux. Pas longtemps. Juste assez pour ressembler à un homme qui se rappelle soudain qu’il a eu une conscience un jour.",
      "— Les deux réponses sont vraies, a-t-il fini par dire. Et c’est pour ça que tout ceci est obscène. Ce n’est ni une fille intacte, ni un simple reliquat. C’est une continuité blessée. Quelque chose qui se souvient peut-être d’avoir été quelqu’un.",
      "Je n’ai rien dit. Parce qu’il n’existait aucune phrase supportable pour accueillir ça.",
      "Alors seulement, il a sorti une plaquette de données noire d’un compartiment latéral.",
      "— Le site de convergence est là-dessus. Si tu y vas, tu n’y trouveras pas une réponse propre."
    ],
    choices: [
      {
        id: "c316b_merge",
        label: "Prendre la plaquette malgré tout.",
        nextUnitId: "3.1.7"
      }
    ]
  },

  {
    id: "3.1.7",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.7",
    title: "INTERRUPTION",
    location: "Laboratoire de Corven",
    timeLabel: "02:47",
    accessLevel: "free",
    textBlocks: [
      "Au moment où mes doigts ont touché la plaquette, tout le laboratoire a changé de respiration.",
      "Un bourdonnement a traversé les cloisons. Puis un flash bref, presque blanc, a mordu les bords des écrans. Le générateur secondaire s’est mis à hurler dans une fréquence trop aiguë pour être naturelle.",
      "Corven a blêmi d’un seul coup.",
      "— Non, a-t-il soufflé. Ils nous ont trouvés.",
      "Comme pour lui donner raison, une première détonation étouffée a frappé au loin dans le couloir d’accès. Pas un accident. Pas une panne. Une charge d’ouverture."
    ],
    choices: [
      {
        id: "c317_hide_data",
        label: "Cacher immédiatement la plaquette sur vous.",
        hint: "Sauver la preuve avant tout.",
        nextUnitId: "3.1.8a",
        effects: {
          ancrage: 1
        },
        journalNote: "Mon premier réflexe a été de sécuriser la donnée."
      },
      {
        id: "c317_cover_corven",
        label: "Attraper Corven et chercher une sortie.",
        hint: "Sauver la source vivante.",
        nextUnitId: "3.1.8b",
        effects: {
          humanite: 1
        },
        journalNote: "J’ai choisi de sauver l’homme plutôt que le seul objet."
      }
    ]
  },

  {
    id: "3.1.8a",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.8a",
    title: "LA DONNÉE D’ABORD",
    location: "Laboratoire de Corven",
    timeLabel: "02:48",
    accessLevel: "free",
    textBlocks: [
      "J’ai glissé la plaquette à l’intérieur de ma veste, contre la doublure, au plus près du thorax. Un geste rapide, sale, instinctif. Une manière de choisir avant d’avoir le courage de reconnaître ce que je choisissais.",
      "Corven m’a vu faire. Son rire a été bref, sans joie.",
      "— Évidemment, a-t-il dit. Tu veux encore croire qu’un support suffit à tenir lieu de salut.",
      "La seconde détonation a été plus proche. La cloison du fond a vibré. De la poussière est tombée en rideau fin sur la table centrale."
    ],
    choices: [
      {
        id: "c318a_merge",
        label: "Se préparer à l’impact.",
        nextUnitId: "3.1.9"
      }
    ]
  },

  {
    id: "3.1.8b",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.8b",
    title: "LA SOURCE VIVANTE",
    location: "Laboratoire de Corven",
    timeLabel: "02:48",
    accessLevel: "free",
    textBlocks: [
      "J’ai attrapé Corven par l’avant-bras et l’ai tiré loin de la table. Il était plus léger que je ne l’aurais cru, plus proche d’un survivant usé que du monstre abstrait que j’avais poursuivi jusque-là.",
      "— Il y a une sortie ?",
      "— Oui, a-t-il dit, trop vite. Derrière l’unité froide. Passage de maintenance. Mais si on laisse la plaquette—",
      "La seconde détonation a frappé plus près. La lumière a vacillé. Quelque chose de lourd s’est effondré dans la pièce voisine."
    ],
    choices: [
      {
        id: "c318b_merge",
        label: "Se tourner vers la fuite.",
        nextUnitId: "3.1.9"
      }
    ]
  },

  {
    id: "3.1.9",
    chapterId: "chapter-3",
    chapterNumber: 3,
    unitNumber: "3.1.9",
    title: "LA PORTE CÈDE",
    location: "Laboratoire de Corven",
    timeLabel: "02:49",
    accessLevel: "free",
    textBlocks: [
      "La troisième charge a arraché la porte du couloir dans un bruit mat de métal rompu. De la fumée grise a roulé au ras du sol. Des silhouettes armées ont traversé la poussière avec la fluidité sèche des équipes qui n’entrent jamais dans une pièce pour poser des questions.",
      "Je n’ai pas vu leurs visages. Seulement les visières sombres, les armes compactes, et sur l’une des épaules le discret sigle sans nom que certaines branches du Cartel utilisent quand elles veulent rester officieusement inexistantes.",
      "Corven a murmuré quelque chose que je n’ai pas entendu. Peut-être une prière. Peut-être un calcul.",
      "Moi, je tenais encore l’arme d’une main, le nom de Mara de l’autre, et pour la première fois depuis longtemps, je ne savais plus quelle perte j’essayais de retarder."
    ],
    choices: [
      {
        id: "c319_end_scene",
        label: "Faire face à l’assaut.",
        nextUnitId: "3.2.1",
        effects: {
          dette: 1
        },
        journalNote: "Le Cartel a frappé avant que je puisse quitter Corven avec mes réponses."
      }
    ]
  }
];