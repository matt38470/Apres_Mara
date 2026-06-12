import type { NarrativeUnit } from '@/src/types/narrative';

export const scene1: NarrativeUnit[] = [
  {
    id: "2.1.1",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.1",
    title: "LA VOIX QUI REMONTE",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:04",
    accessLevel: "free",
    textBlocks: [
      "Je tenais encore Silas en joue, mais quelque chose avait déjà quitté la scène telle que je l’avais comprise une seconde plus tôt. La pluie tombait toujours. La ruelle sentait toujours l’huile, la rouille et l’eau sale. Pourtant, plus rien n’obéissait tout à fait au même ordre.",
      "L’homme contre la grille me regardait avec des yeux trop ouverts pour son visage. Son souffle était court, cassé, mais sa posture n’était plus celle d’un trafiquant acculé. Il y avait dans sa façon de tenir le menton un déséquilibre impossible, quelque chose de plus petit, de plus nu, de plus ancien que la peur d’un adulte pris au piège.",
      "— Monsieur… ?",
      "Le mot m’a frappé plus violemment qu’un coup. Pas pour ce qu’il disait. Pour la voix qui le portait. Une voix éraflée, fragile, presque blanche. Une voix qui n’avait rien à faire dans cette gorge-là.",
      "Le bracelet dans ma poche pesait maintenant comme une pièce de métal chauffée à blanc."
    ],
    choices: [
      {
        id: "c21_hold_line",
        label: "Rester froid. Lui ordonner de reparler.",
        hint: "S’accrocher à la procédure.",
        nextUnitId: "2.1.2a",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai essayé de traiter l’anomalie comme un interrogatoire."
      },
      {
        id: "c21_shaken",
        label: "Laisser le choc me traverser une seconde.",
        hint: "Reconnaître que quelque chose cloche profondément.",
        nextUnitId: "2.1.2b",
        effects: {
          humanite: 2,
          ancrage: -2
        },
        journalNote: "La voix m’a atteint avant que je puisse la rejeter."
      }
    ]
  },

  {
    id: "2.1.2a",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.2a",
    title: "PROCÉDURE",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:05",
    accessLevel: "free",
    textBlocks: [
      "J’ai resserré ma prise sur l’arme jusqu’à sentir la jointure de mon index protester.",
      "— Reprends, ai-je dit. Doucement. Qui t’a mis sur cette affaire ?",
      "Silas a cligné des yeux, une fois, deux fois, comme s’il remontait de très loin. Ses traits ont tremblé. L’espace d’un instant, j’ai cru voir deux réponses se battre sous sa peau.",
      "— J’ai froid, a-t-il soufflé.",
      "Ce n’était pas la bonne phrase. Pas dans cette scène. Pas dans cette bouche. Et c’est précisément pour ça qu’elle a commencé à me faire peur."
    ],
    choices: [
      {
        id: "c21a_merge",
        label: "Le garder en joue.",
        nextUnitId: "2.1.3"
      }
    ]
  },

  {
    id: "2.1.2b",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.2b",
    title: "LA FAILLE",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:05",
    accessLevel: "free",
    textBlocks: [
      "Je n’ai pas baissé l’arme. Pas vraiment. Mais le monde a pris un léger retard sur lui-même, comme si chaque goutte de pluie devait d’abord traverser un souvenir avant d’atteindre le sol.",
      "Le mot m’avait ouvert quelque chose sous les côtes. Un espace trop ancien. Une douleur si familière qu’elle en devenait obscène.",
      "— Répète, ai-je dit, et ma voix ne m’a pas appartenu tout de suite.",
      "Silas m’a regardé avec une confusion enfantine qui ne pouvait pas exister là, pas dans cet homme ruisselant, pas à cette heure, pas après les abattoirs.",
      "— J’ai froid, a-t-il murmuré."
    ],
    choices: [
      {
        id: "c21b_merge",
        label: "Me forcer à revenir au présent.",
        nextUnitId: "2.1.3"
      }
    ]
  },

  {
    id: "2.1.3",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.3",
    title: "LE VISAGE MAL AJUSTÉ",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:06",
    accessLevel: "free",
    textBlocks: [
      "Je me suis approché d’un demi-pas. Juste assez pour voir que ce n’était pas seulement la voix. Le visage lui-même semblait mal accroché à ce qu’il devait être. Pas une transformation. Plutôt une série d’accidents minuscules : un regard trop haut, une bouche trop petite, une peur trop pure.",
      "Puis c’est revenu. Une secousse dans la mâchoire. Un pli mauvais au coin des lèvres. L’adulte remontant à la surface comme un noyé rancunier.",
      "— Vous comprenez pas, a dit Silas. Vous comprenez rien. Ils les tiennent pas longtemps. Ça glisse. Ça casse. Ça ressort n’importe comment.",
      "Le vent a chassé la pluie dans la ruelle. Quelque part derrière les hangars, une sirène portuaire a mugi. J’ai senti le quai entier se resserrer autour de nous.",
      "— Qui ça, “ils” ?",
      "Il a fermé les yeux une seconde, comme si le mot suffisait déjà à lui déchirer la gorge."
    ],
    choices: [
      {
        id: "c21_press_names",
        label: "Exiger des noms tout de suite.",
        hint: "Forcer l’information.",
        nextUnitId: "2.1.4a",
        effects: {
          humanite: -2
        },
        journalNote: "J’ai serré l’interrogatoire au moment où Silas vacillait."
      },
      {
        id: "c21_control_breath",
        label: "Le laisser reprendre son souffle une seconde.",
        hint: "Obtenir une parole plus stable.",
        nextUnitId: "2.1.4b",
        effects: {
          humanite: 2
        },
        journalNote: "J’ai choisi de ralentir pour entendre ce qu’il pouvait encore dire."
      }
    ]
  },

  {
    id: "2.1.4a",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.4a",
    title: "SERRER",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:07",
    accessLevel: "free",
    textBlocks: [
      "— Les noms, ai-je coupé. Maintenant.",
      "Silas a sursauté comme si j’avais levé la main sur lui.",
      "— Je faisais que passer, a-t-il craché. Le transport, les points relais, les boîtes de transit… c’est tout.",
      "— Et les enfants ?",
      "La question est sortie avant que je puisse l’empêcher.",
      "Ses yeux ont changé. Peur, oui. Honte peut-être. Mais surtout ce réflexe abject de l’homme qui comprend que le mensonge ne tiendra plus très longtemps."
    ],
    choices: [
      {
        id: "c214a_merge",
        label: "Le maintenir sous pression.",
        nextUnitId: "2.1.5"
      }
    ]
  },

  {
    id: "2.1.4b",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.4b",
    title: "LAISSEZ PASSER L’AIR",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:07",
    accessLevel: "free",
    textBlocks: [
      "Je n’ai rien dit pendant deux secondes. Juste assez pour que son souffle retrouve un rythme à peu près humain.",
      "Silas a dégluti. L’eau coulait de son menton en filets irréguliers.",
      "— Je faisais que passer, a-t-il fini par dire. Le transport, les points relais, les boîtes de transit… c’est tout.",
      "Il a baissé les yeux. Pas comme un menteur qui construit sa version. Comme un homme qui découvre qu’il va devoir prononcer quelque chose qu’il ne pourra plus reprendre.",
      "— Ils ont commencé à tester sur des gosses trop abîmés pour intéresser les cliniques. Des petits corps. Des consciences plus souples. Ça tenait mal. Alors ils recommençaient."
    ],
    choices: [
      {
        id: "c214b_merge",
        label: "Encaisser et poursuivre.",
        nextUnitId: "2.1.5"
      }
    ]
  },

  {
    id: "2.1.5",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.5",
    title: "CE QUI CASSE",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:08",
    accessLevel: "free",
    textBlocks: [
      "Je n’ai pas senti le moment exact où ma main gauche s’est refermée à vide. Peut-être que j’avais cherché un mur. Peut-être que j’avais cherché autre chose.",
      "Le bracelet dans ma poche me brûlait presque. Fil rouge. Breloque en étoile. Un rien. Un objet de rien. Et pourtant tout mon corps s’acharnait à le reconnaître avant même que mon esprit accepte de le regarder en face.",
      "— Recommençaient comment ? ai-je demandé.",
      "Silas tremblait maintenant de partout.",
      "— Quand ça prenait mal… quand deux voix restaient coincées dans le même corps… ils vidaient et ils remettaient. Encore. Encore. Jusqu’à ce qu’il reste quelque chose d’exploitable.",
      "La ruelle s’est contractée autour de cette phrase. Il y a des mots qui ne décrivent pas le monde : ils le salissent."
    ],
    choices: [
      {
        id: "c215_keep_control",
        label: "Le forcer à dire où ça se passe.",
        hint: "Rester sur la piste.",
        nextUnitId: "2.1.6a",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai choisi de continuer l’enquête malgré l’horreur."
      },
      {
        id: "c215_show_bracelet",
        label: "Sortir le bracelet et le lui montrer.",
        hint: "Tester sa réaction.",
        nextUnitId: "2.1.6b",
        effects: {
          humanite: 3,
          ancrage: -2
        },
        journalNote: "J’ai montré le bracelet à Silas pour forcer une vérité plus intime."
      }
    ]
  },

  {
    id: "2.1.6a",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.6a",
    title: "RESTER DEBOUT",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:09",
    accessLevel: "free",
    textBlocks: [
      "— Où ? ai-je demandé. Où est le centre ?",
      "Silas m’a regardé comme s’il pesait la valeur de sa propre peau.",
      "— Pas ici. Les abattoirs, c’était pour trier. Pour casser les traces. Le vrai travail se fait ailleurs.",
      "— Où ailleurs ?",
      "Il a eu un rire sec, presque admiratif de sa propre lâcheté.",
      "— Sous la ville. Sous ce qui reste des fondations d’avant la montée des eaux. Là où même la milice ne descend pas sans mandat du Cartel."
    ],
    choices: [
      {
        id: "c216a_merge",
        label: "Le faire continuer.",
        nextUnitId: "2.1.7"
      }
    ]
  },

  {
    id: "2.1.6b",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.6b",
    title: "L’ÉTOILE ROUGE",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:09",
    accessLevel: "free",
    textBlocks: [
      "J’ai sorti le bracelet de ma poche sans quitter Silas des yeux.",
      "Le fil rouge collait à ma paume humide. La petite étoile d’étain a capté un éclat de lumière jaune, dérisoire, presque tendre dans cette ruelle pourrie.",
      "Quand Silas l’a vu, son visage s’est vidé d’un coup. Plus vite qu’avec l’arme. Plus profondément.",
      "— Où tu as trouvé ça ?",
      "Je n’ai pas répondu.",
      "Il a fait un bruit dans sa gorge. Ni un mot, ni un sanglot. Le genre de son qu’on arrache quand on comprend qu’un secret vous a déjà dépassé.",
      "— Ils leur laissent parfois un objet, a-t-il soufflé. Pour tester ce qui remonte. Une ancre. Un souvenir. Un moyen de voir si la bonne voix revient."
    ],
    choices: [
      {
        id: "c216b_merge",
        label: "L’obliger à préciser.",
        nextUnitId: "2.1.7"
      }
    ]
  },

  {
    id: "2.1.7",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.7",
    title: "LA DETTE ENTRE DANS LA NUIT",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:10",
    accessLevel: "free",
    textBlocks: [
      "J’allais parler quand mon implant a vibré sous la peau de ma nuque.",
      "Une seule pulsation. Courte. Précise. Inimitable.",
      "Le Cartel.",
      "Il n’appelait jamais pour demander comment j’allais.",
      "La sensation s’est répandue le long de ma colonne comme une lame tiède. Pas de douleur réelle. Pire que ça : un rappel. Une signature. La preuve qu’ils savaient exactement où me trouver dans mon propre corps.",
      "Silas l’a vu passer sur mon visage. Il a compris assez pour avoir peur autrement."
    ],
    choices: [
      {
        id: "c217_answer_now",
        label: "Répondre tout de suite à l’appel du Cartel.",
        hint: "Ne pas les faire attendre.",
        nextUnitId: "2.1.8a",
        effects: {
          dette: -1,
          humanite: -1
        },
        journalNote: "J’ai répondu immédiatement au rappel du Cartel."
      },
      {
        id: "c217_make_him_wait",
        label: "Finir avec Silas avant de répondre.",
        hint: "Prendre le risque de les contrarier.",
        nextUnitId: "2.1.8b",
        effects: {
          dette: 2,
          ancrage: 1
        },
        journalNote: "J’ai fait attendre le Cartel pour obtenir encore quelques secondes avec Silas."
      }
    ]
  },

  {
    id: "2.1.8a",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.8a",
    title: "OBÉISSANCE",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:11",
    accessLevel: "free",
    textBlocks: [
      "J’ai fermé les yeux une fraction de seconde et j’ai activé la réception.",
      "La voix n’est pas passée par mes oreilles. Elle s’est ouverte directement dans ma tête, propre, douce, presque polie. C’est comme ça qu’ils font. Ils paient cher pour que la menace ait de bonnes manières.",
      "— Vance, a dit Anna. J’espère que tu n’es pas en train de compliquer un problème qui ne t’appartient pas.",
      "La nuit a reculé d’un pas autour de moi. Pas à cause d’elle. À cause de ce que son calme disait du reste.",
      "Silas s’est mis à trembler plus fort."
    ],
    choices: [
      {
        id: "c218a_merge",
        label: "Écouter jusqu’au bout.",
        nextUnitId: "2.1.9"
      }
    ]
  },

  {
    id: "2.1.8b",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.8b",
    title: "LES FAIRE ATTENDRE",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:11",
    accessLevel: "free",
    textBlocks: [
      "J’ai ignoré la première pulsation.",
      "Puis la deuxième est venue, plus profonde, comme si l’implant avait trouvé un os pour y taper.",
      "Je me suis forcé à rester sur Silas.",
      "— Continue, ai-je dit.",
      "Il a secoué la tête avec une panique nouvelle.",
      "— Réponds, a-t-il soufflé. Réponds tout de suite. Si c’est eux, réponds.",
      "Alors seulement j’ai activé la réception, avec ce demi-retard qui coûte toujours plus cher qu’on voudrait le croire."
    ],
    choices: [
      {
        id: "c218b_merge",
        label: "Prendre l’appel.",
        nextUnitId: "2.1.9"
      }
    ]
  },

  {
    id: "2.1.9",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.1.9",
    title: "ANNA",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:12",
    accessLevel: "free",
    textBlocks: [
      "La voix d’Anna s’est dépliée dans ma tête avec cette douceur chirurgicale que seuls les gens vraiment dangereux savent conserver.",
      "— Tu vas m’écouter attentivement, Victor.",
      "Je détestais quand elle utilisait mon prénom.",
      "— L’homme que tu tiens n’est pas à toi. Le site que tu as trouvé n’est pas à toi. Et la question que tu es en train de te poser ne t’appartient déjà plus.",
      "Je n’ai rien dit.",
      "Silas me regardait comme un condamné qui entend déjà le mécanisme avant la sentence.",
      "— Tu vas quitter le quai. Tout de suite. Tu vas laisser ce petit déchet respirer jusqu’à nouvel ordre. Et demain, tu viendras me voir. Seul.",
      "Un silence bref a suivi. Le genre de silence qu’Anna laisse toujours quand elle veut que la suite vous ouvre proprement le ventre.",
      "— Nous allons parler de ta fille."
    ],
    choices: [
      {
        id: "c219_end_scene",
        label: "Rester immobile une seconde de trop.",
        nextUnitId: "2.2.1",
        effects: {
          ancrage: -8
        },
        journalNote: "Anna a prononcé les mots que je passais ma vie à contourner : ta fille."
      }
    ]
  }
];