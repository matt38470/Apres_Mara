import type { NarrativeUnit } from '@/src/types/narrative';

export const scene3: NarrativeUnit[] = [
  {
    id: "1.3.1",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.1",
    title: "LE QUAI 9",
    location: "Docks de San Telmo",
    timeLabel: "23:47",
    accessLevel: "free",
    textBlocks: [
      "Le quai 9 commençait là où la ville renonçait à se faire passer pour autre chose qu’un grand animal malade. Des hangars en tôle gondolée se tassaient dans le brouillard. Les lampes au sodium dessinaient des flaques couleur bile sur le béton détrempé. Plus loin, les cargos mugissaient dans la nuit comme des bêtes qu’on égorge lentement.",
      "Le vent rabattait l’odeur du port contre les quais : sel, gasoil, vase, poisson crevé, cordages mouillés, sueur froide. Sous cette couche familière, une autre senteur traînait encore au fond de ma gorge depuis les abattoirs : celle du métal chaud et des consciences déplacées à la hâte.",
      "J’ai ralenti en approchant des entrepôts. Le rendez-vous de Silas n’avait rien d’une transaction propre. Trop de silence entre les coups de corne des navires. Trop peu de silhouettes pour une heure pareille. Quelqu’un, quelque part, s’était appliqué à vider l’endroit avant mon arrivée.",
      "Le bracelet d’enfant pesait dans ma poche comme une pensée que je n’arrivais pas à expulser. J’aurais aimé prétendre qu’il ne signifiait rien. À San Telmo, les enfants perdent leurs affaires comme les adultes perdent leurs âmes. Mais je savais déjà que je me mentais."
    ],
    choices: [
      {
        id: "c3_scout_high",
        label: "Prendre de la hauteur pour repérer les issues.",
        hint: "Approche prudente.",
        nextUnitId: "1.3.2a",
        effects: {
          ancrage: 2
        },
        journalNote: "J’ai choisi d’observer le quai avant d’approcher."
      },
      {
        id: "c3_go_between_containers",
        label: "Descendre tout de suite entre les conteneurs.",
        hint: "Approche rapide, plus risquée.",
        nextUnitId: "1.3.2b",
        effects: {
          ancrage: -2
        },
        journalNote: "J’ai foncé dans le labyrinthe du quai 9."
      }
    ]
  },

  {
    id: "1.3.2a",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.2a",
    title: "VUE D’ENSEMBLE",
    location: "Passerelle de service, quai 9",
    timeLabel: "23:50",
    accessLevel: "free",
    textBlocks: [
      "J’ai pris l’escalier de service qui longeait un ancien bâtiment frigorifique. Le métal ruisselait. Chaque marche geignait sous mon poids comme si le quai tout entier protestait contre ma présence.",
      "De là-haut, le port se révélait mieux. Trois hangars encore debout. Deux grues immobiles. Un chenal noir comme une gorge ouverte. Entre deux piles de conteneurs, une lampe torche a clignoté deux fois, puis plus rien. Un signal. Ou un test.",
      "J’ai aussi repéré une camionnette garée de travers près d’un portique éventré. Trop discrète pour être honnête. Trop mal rangée pour appartenir à quelqu’un de tranquille.",
      "Puis une silhouette a traversé la lumière malade d’un réverbère, manteau sombre collé au dos par la pluie. Pas un docker. Pas un garde. Quelqu’un qui fuyait déjà."
    ],
    choices: [
      {
        id: "c3_merge_from_high",
        label: "Redescendre et couper sa route.",
        nextUnitId: "1.3.3"
      }
    ]
  },

  {
    id: "1.3.2b",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.2b",
    title: "ENTRE LES PAROIS DE TÔLE",
    location: "Labyrinthe de conteneurs, quai 9",
    timeLabel: "23:50",
    accessLevel: "free",
    textBlocks: [
      "Je me suis glissé entre deux rangées de conteneurs sans prendre le temps de réfléchir davantage. L’endroit sentait la peinture mouillée, la rouille fraîche, l’urine et le sel. L’eau dégoulinait des parois comme si la nuit elle-même fondait sur place.",
      "Les couloirs de tôle étaient étroits, aveugles, faits pour piéger le son. Mes pas revenaient vers moi avec une demi-seconde de retard. À chaque croisement, j’avais l’impression de surprendre ma propre présence.",
      "Au bout d’une allée, une ombre a traversé la lumière d’un lampadaire fatigué. Manteau sombre. Démarche nerveuse. Une silhouette maigre, pressée, qui avançait comme si elle connaissait déjà le goût exact de la peur.",
      "Au même moment, quelque part au-dessus des conteneurs, une lampe torche a clignoté deux fois. Puis le noir."
    ],
    choices: [
      {
        id: "c3_merge_from_containers",
        label: "Suivre la silhouette.",
        nextUnitId: "1.3.3"
      }
    ]
  },

  {
    id: "1.3.3",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.3",
    title: "LA COURSE",
    location: "Quai 9",
    timeLabel: "23:55",
    accessLevel: "free",
    textBlocks: [
      "J’ai débouché sur une cour de chargement noyée d’eau sale au moment où la silhouette se retournait. Même de loin, j’ai vu ce que la panique fait aux visages : elle les vide avant de les vieillir.",
      "L’homme m’a aperçu. Son regard a changé de forme, brutalement. Il n’a pas crié. Il n’a pas tenté de parler. Il a fui.",
      "Je me suis lancé à sa suite.",
      "Il courait mal. Comme un homme qui a longtemps vécu en comptant sur les raccourcis et les portes dérobées plutôt que sur ses jambes. Mais il courait avec l’énergie sèche des proies qui savent ce qu’elles ont derrière elles.",
      "Nous avons traversé la cour, contourné des caisses bâchées, sauté par-dessus un rail mort. Devant moi, il a failli glisser, s’est rattrapé d’une main, puis a repris sa course en boitant légèrement.",
      "Silas, ai-je pensé. Ou quelqu’un qui tenait assez à lui ressembler pour mourir à sa place."
    ],
    choices: [
      {
        id: "c3_call_him",
        label: "L’appeler pour le faire hésiter.",
        hint: "Le déstabiliser verbalement.",
        nextUnitId: "1.3.4a",
        effects: {
          humanite: 2
        },
        journalNote: "J’ai tenté de l’arrêter par la voix."
      },
      {
        id: "c3_draw_weapon",
        label: "Sortir l’arme et accélérer.",
        hint: "Le forcer à paniquer.",
        nextUnitId: "1.3.4b",
        effects: {
          humanite: -4,
          ancrage: -1
        },
        journalNote: "J’ai choisi l’intimidation par l’arme."
      }
    ]
  },

  {
    id: "1.3.4a",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.4a",
    title: "LE NOM DANS LA NUIT",
    location: "Quai 9",
    timeLabel: "23:57",
    accessLevel: "free",
    textBlocks: [
      "— Silas ! ai-je gueulé par-dessus le vent.",
      "Le nom a claqué entre les hangars comme une gifle.",
      "L’homme a vacillé. Une seule seconde. Mais dans une poursuite, une seconde est une poignée qu’on vous tend.",
      "— Je veux parler ! ai-je menti.",
      "Il a tourné la tête juste assez pour me montrer un profil ravagé par la pluie. Je n’ai pas vu son visage. Seulement la certitude brutale qu’il m’avait reconnu, moi aussi."
    ],
    choices: [
      {
        id: "c3_merge_after_call",
        label: "Continuer la poursuite.",
        nextUnitId: "1.3.5"
      }
    ]
  },

  {
    id: "1.3.4b",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.4b",
    title: "CANON OUVERT",
    location: "Quai 9",
    timeLabel: "23:57",
    accessLevel: "free",
    textBlocks: [
      "J’ai sorti l’arme sans ralentir. Le métal a trouvé ma paume comme une vieille habitude qui n’a jamais demandé pardon.",
      "— Arrête-toi !",
      "La silhouette a entendu le frottement, sinon les mots. Sa course a changé tout de suite. Plus désordonnée. Plus animale. Il ne fuyait plus un homme. Il fuyait un coup de feu déjà tiré dans sa tête.",
      "Il a heurté une pile de caisses, s’est repris d’épaule, puis a plongé vers l’ombre d’une ruelle de service ouverte entre deux hangars."
    ],
    choices: [
      {
        id: "c3_merge_after_weapon",
        label: "Le suivre dans la ruelle.",
        nextUnitId: "1.3.5"
      }
    ]
  },

  {
    id: "1.3.5",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.5",
    title: "L’ANGLE MORT",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:01",
    accessLevel: "free",
    textBlocks: [
      "La ruelle était étroite, coincée entre un hangar en brique humide et un mur de tôle renforcée. L’eau de pluie y coulait en rigoles noires, charriant des mégots, des algues mortes et des éclats de verre polis par les passages.",
      "L’homme s’y est engagé trop vite. Mauvais calcul. Au bout, une grille condamnait le passage. Il s’est retourné d’un coup, poitrine soulevée, une main plaquée contre ses côtes comme s’il essayait de retenir quelque chose à l’intérieur.",
      "Je l’ai enfin vu correctement.",
      "Visage creusé. Quarante ans peut-être. Peau grise des types qui dorment peu et mangent mal. Cheveux collés au front par la pluie. Une bouche déjà prête à mentir. Et dans les yeux, pas le calme sale des trafiquants prospères — seulement une terreur si nue qu’elle en devenait presque indécente.",
      "J’ai levé l’arme. Le viseur tremblait à peine.",
      "— Silas, ai-je dit. C’est terminé."
    ],
    choices: [
      {
        id: "c3_press_talk",
        label: "Le pousser à parler.",
        hint: "Obtenir des noms avant tout.",
        nextUnitId: "1.3.6a",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai voulu le faire parler avant de bouger."
      },
      {
        id: "c3_advance_slowly",
        label: "Le garder sous la menace et avancer lentement.",
        hint: "Prendre le contrôle physique de la scène.",
        nextUnitId: "1.3.6b",
        effects: {
          humanite: -2
        },
        journalNote: "J’ai choisi la contrainte plutôt que la parole."
      }
    ]
  },

  {
    id: "1.3.6a",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.6a",
    title: "AVANT LA CHUTE",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:03",
    accessLevel: "free",
    textBlocks: [
      "— Qui t’emploie ? ai-je demandé. Qui alimente les abattoirs ?",
      "Il a ouvert la bouche, l’a refermée, puis a secoué la tête comme si les mots lui faisaient plus peur que l’arme.",
      "— Je voulais pas… a-t-il soufflé. Je devais juste livrer… juste transporter…",
      "Sa voix s’est brisée au milieu de la phrase. Pas sous l’effet de la fatigue. Sous autre chose. Une secousse intérieure. Une déchirure.",
      "J’ai vu ses traits se contracter, puis se lisser d’une façon absurde, fugitive, comme si plusieurs visages essayaient de remonter à la surface en même temps."
    ],
    choices: [
      {
        id: "c3_merge_before_shift_a",
        label: "Le tenir en joue.",
        nextUnitId: "1.3.7"
      }
    ]
  },

  {
    id: "1.3.6b",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.6b",
    title: "UN PAS DE TROP",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:03",
    accessLevel: "free",
    textBlocks: [
      "J’ai avancé d’un pas. Puis d’un autre. Suffisamment lentement pour lui faire sentir que je contrôlais encore la distance. Suffisamment vite pour lui faire comprendre qu’il n’aurait bientôt plus de place pour respirer.",
      "Il s’est tassé contre la grille, ruisselant, les lèvres tremblantes.",
      "— Bouge pas, ai-je dit.",
      "Il a remué quand même. Pas pour fuir. Comme si quelque chose en lui cherchait à prendre la parole avant lui.",
      "Son visage a tressailli. Un spasme d’abord. Puis autre chose. Une hésitation dans les traits, presque une enfance revenue de travers."
    ],
    choices: [
      {
        id: "c3_merge_before_shift_b",
        label: "Le viser en plein visage.",
        nextUnitId: "1.3.7"
      }
    ]
  },

  {
    id: "1.3.7",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.3.7",
    title: "LE PREMIER ÉCHO",
    location: "Ruelle de service, quai 9",
    timeLabel: "00:04",
    accessLevel: "free",
    textBlocks: [
      "Puis tout a changé dans sa posture.",
      "Ce n’était presque rien. Un relâchement des épaules. Un angle différent dans la nuque. Une manière de lever le menton, non plus comme un homme qui encaisse, mais comme quelqu’un de plus petit qui cherche à comprendre la colère d’un adulte.",
      "Quand il a parlé, la voix n’était plus la même.",
      "Plus aiguë. Plus fragile. Ébréchée par le froid et la peur.",
      "— Monsieur… ?",
      "Mon doigt s’est figé contre la détente.",
      "L’espace d’une seconde, la pluie elle-même a semblé reculer autour de nous. Je ne regardais plus tout à fait un trafiquant acculé. Je regardais une anomalie. Un pli dans le réel. Quelque chose que mon esprit refusait encore de nommer, mais que mon corps avait déjà reconnu avec une violence muette.",
      "L’homme — Silas, ou ce qu’il en restait — a penché la tête avec ce petit mouvement impossible qui a fendu quelque chose en moi.",
      "Le bracelet dans ma poche est devenu soudain beaucoup trop lourd."
    ],
    choices: [
      {
        id: "c3_end_scene",
        label: "Le tenir en joue malgré le vertige.",
        nextUnitId: "2.1.1",
        effects: {
          ancrage: -15
        },
        journalNote: "Sa voix a changé. Quelque chose d’impossible vient de remonter à la surface."
      }
    ]
  }
];