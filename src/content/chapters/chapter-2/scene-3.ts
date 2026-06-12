import type { NarrativeUnit } from '@/src/types/narrative';

export const scene3: NarrativeUnit[] = [
  {
    id: "2.3.1",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.1",
    title: "SOUS LA VILLE",
    location: "Vieille ville engloutie, accès de maintenance",
    timeLabel: "02:11",
    accessLevel: "free",
    textBlocks: [
      "Les accès à la vieille ville ne figurent sur aucune carte publique. Officiellement, ils n’existent plus. Officieusement, tout le monde important sait qu’ils continuent de respirer sous San Telmo comme des branchies sales.",
      "J’ai quitté la Tour Alecto avec le nom de Corven dans la tête et le reste d’Anna planté sous les côtes. Un véhicule sans marque m’a déposé à la lisière d’un quartier abandonné depuis la montée des eaux. Après ça, j’ai continué seul.",
      "L’entrée se trouvait derrière une ancienne station de traitement, mangée de sel et de moisissure. Une porte de service, une cage d’escalier, puis la ville propre au-dessus de moi a cessé d’exister. L’air s’est épaissi. Le béton a remplacé le verre. L’eau a repris ses droits.",
      "Sous San Telmo, tout semblait plus vieux que son âge. Les murs suintaient. Les câbles pendaient en grappes noires. Les couloirs sentaient la rouille, la vase et le plastique brûlé. C’était un endroit conçu pour rester oublié. Le genre d’endroit que les hommes comme Corven choisissent quand ils ont besoin de silence pour faire parler les morts."
    ],
    choices: [
      {
        id: "c231_slow",
        label: "Avancer lentement et écouter avant chaque embranchement.",
        hint: "Privilégier la prudence.",
        nextUnitId: "2.3.2a",
        effects: {
          ancrage: 2
        },
        journalNote: "J’ai choisi d’aborder les souterrains avec méthode."
      },
      {
        id: "c231_fast",
        label: "Accélérer avant que quelqu’un ne nettoie les traces.",
        hint: "Privilégier la vitesse.",
        nextUnitId: "2.3.2b",
        effects: {
          ancrage: -2
        },
        journalNote: "J’ai choisi de foncer avant que la piste ne refroidisse."
      }
    ]
  },

  {
    id: "2.3.2a",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.2a",
    title: "LE BRUIT DE L’EAU",
    location: "Couloirs techniques, vieille ville",
    timeLabel: "02:18",
    accessLevel: "free",
    textBlocks: [
      "J’ai progressé en prenant mon temps. Chaque intersection avait sa respiration propre : un goutte-à-goutte plus régulier, un ronflement électrique plus bas, un courant d’air plus chargé de moisissure. On apprend à lire ce genre de choses quand on a trop longtemps travaillé dans les marges du monde.",
      "Deux fois, je me suis arrêté net. Une fois pour laisser passer au loin une paire de voix. Une autre à cause d’un bruit métallique qui n’appartenait ni aux conduites ni à l’eau. Un outil. Une porte. Une présence humaine.",
      "La piste de Corven n’était pas nette, mais elle avait une logique. Câbles plus récents. Traces de bottes dans la poussière humide. Une caisse d’alimentation encore tiède derrière une cloison éventrée. Quelqu’un travaillait ici. Peut-être encore."
    ],
    choices: [
      {
        id: "c232a_merge",
        label: "Continuer vers la zone éclairée.",
        nextUnitId: "2.3.3"
      }
    ]
  },

  {
    id: "2.3.2b",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.2b",
    title: "PLUS VITE QUE LE DOUTE",
    location: "Couloirs techniques, vieille ville",
    timeLabel: "02:18",
    accessLevel: "free",
    textBlocks: [
      "J’ai avancé vite, trop vite peut-être, en laissant mes épaules décider pour le reste. Les souterrains défilaient par segments de béton fissuré, de tuyaux suintants et de lumières mortes. Ici, ralentir revenait à donner au lieu le temps de se refermer sur vous.",
      "J’ai manqué une marche noyée dans l’ombre et me suis rattrapé à une rampe gluante de rouille. L’écho du choc a couru loin devant moi comme un avertissement donné gratuitement.",
      "Tant pis. La discrétion est un luxe qu’on abandonne parfois quand on a l’impression de poursuivre un souvenir avant qu’il ne change encore de visage."
    ],
    choices: [
      {
        id: "c232b_merge",
        label: "Poursuivre malgré le bruit.",
        nextUnitId: "2.3.3"
      }
    ]
  },

  {
    id: "2.3.3",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.3",
    title: "L’ATELIER NOYÉ",
    location: "Ancien nœud de maintenance, vieille ville",
    timeLabel: "02:26",
    accessLevel: "free",
    textBlocks: [
      "Le couloir a débouché sur un ancien nœud de maintenance transformé en atelier. Trois pièces reliées par des cloisons démontées, des tables de travail, des générateurs silencieux, des blocs de refroidissement rafistolés et des écrans de récupération suspendus à des bras métalliques. Tout portait la marque d’un homme qui savait travailler dans le manque sans perdre son obsession de la précision.",
      "Des bacs de stockage alignés contre le mur contenaient des unités mémorielles, des fragments d’interface, des nerfs synthétiques et des boîtiers de transfert portables. Sur une table inox, un casque de lecture neuronale baignait encore dans un gel translucide. Il venait d’être utilisé.",
      "J’ai trouvé Corven avant de le voir. Sa présence tenait dans l’ordre malsain de la pièce. Dans la façon dont les outils avaient été nettoyés. Dans l’odeur sèche des produits médicaux qui tentent toujours de recouvrir ce qu’ils rendent possible.",
      "Puis une voix s’est élevée derrière une vitre opaque, dans la pièce du fond.",
      "— Si Anna t’a envoyé, entre. Si tu viens pour me tuer, attends ton tour."
    ],
    choices: [
      {
        id: "c233_direct",
        label: "Entrer frontalement.",
        hint: "Ne rien lui céder.",
        nextUnitId: "2.3.4a",
        effects: {
          humanite: -1
        },
        journalNote: "J’ai choisi d’entrer dans le laboratoire sans détour."
      },
      {
        id: "c233_observe",
        label: "Observer d’abord par la vitre.",
        hint: "Le jauger avant le face-à-face.",
        nextUnitId: "2.3.4b",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai préféré regarder Corven avant de me révéler."
      }
    ]
  },

  {
    id: "2.3.4a",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.4a",
    title: "PAS DE PRÉLUDE",
    location: "Laboratoire de Corven",
    timeLabel: "02:29",
    accessLevel: "free",
    textBlocks: [
      "J’ai poussé la porte du plat de la main. Les gonds ont protesté dans un chuintement humide.",
      "Corven se tenait au milieu de la pièce, mince, voûté, blouse grise ouverte sur une chemise sombre. La cinquantaine mangée par les insomnies. Des yeux clairs, trop intelligents pour être honnêtes. Des mains fines, tachées au niveau des ongles par les solvants et le gel conducteur.",
      "Il ne paraissait pas surpris. Seulement fatigué de l’être à l’avance.",
      "— Ah, a-t-il dit. Le limier privé du Cartel. Tu arrives plus tôt que prévu."
    ],
    choices: [
      {
        id: "c234a_merge",
        label: "Le garder dans votre viseur.",
        nextUnitId: "2.3.5"
      }
    ]
  },

  {
    id: "2.3.4b",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.4b",
    title: "À TRAVERS LA VITRE",
    location: "Seuil du laboratoire de Corven",
    timeLabel: "02:29",
    accessLevel: "free",
    textBlocks: [
      "Je me suis décalé jusqu’à l’angle de la vitre trouble et j’ai regardé à travers les zones moins opaques. Corven travaillait seul. Pas d’arme visible. Pas de garde. Seulement lui, ses machines, et sur la table centrale un module de lecture ouvert comme un cœur mécanique.",
      "Il a levé les yeux sans tourner la tête, comme s’il m’avait entendu respirer à travers la cloison.",
      "— Tu peux entrer, a-t-il dit. Les gens décidés ont toujours la même manière d’occuper un silence.",
      "Il a enfin pivoté vers moi. Le visage de ceux qui savent trop bien ce qu’ils ont fait, mais ont cessé depuis longtemps de chercher un tribunal à leur mesure."
    ],
    choices: [
      {
        id: "c234b_merge",
        label: "Entrer à votre tour.",
        nextUnitId: "2.3.5"
      }
    ]
  },

  {
    id: "2.3.5",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.5",
    title: "CORVEN",
    location: "Laboratoire de Corven",
    timeLabel: "02:31",
    accessLevel: "free",
    textBlocks: [
      "Le laboratoire était plus propre que les abattoirs, plus propre que le quai, plus propre même que certaines cliniques de la ville haute. C’était ça, le pire. L’idée que l’horreur puisse finir par préférer les surfaces nettes.",
      "Je n’ai pas baissé mon arme.",
      "— Anna me doit déjà trop de visites surprises, a repris Corven. Si elle t’a envoyé, elle est en retard. Si tu es venu seul, alors tu es plus intéressant.",
      "— Je cherche des dossiers, ai-je dit. Des protocoles anciens. Des sujets juvéniles.",
      "Pour la première fois, quelque chose a traversé son regard. Pas de la peur. Une lassitude plus ancienne que la prudence.",
      "— Bien sûr, a-t-il murmuré. Ça finit toujours par arriver là."
    ],
    choices: [
      {
        id: "c235_push",
        label: "Le pousser immédiatement sur les enfants.",
        hint: "Aller au cœur du crime.",
        nextUnitId: "2.3.6a",
        effects: {
          humanite: 1
        },
        journalNote: "J’ai forcé Corven à regarder le vrai sujet en face."
      },
      {
        id: "c235_circle",
        label: "Le laisser parler pour qu’il se trahisse.",
        hint: "Chercher la faille dans son récit.",
        nextUnitId: "2.3.6b",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai choisi de laisser Corven dérouler sa propre logique."
      }
    ]
  },

  {
    id: "2.3.6a",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.6a",
    title: "LES PETITS CORPS",
    location: "Laboratoire de Corven",
    timeLabel: "02:33",
    accessLevel: "free",
    textBlocks: [
      "— Les enfants, ai-je dit. Commence par eux.",
      "Corven a baissé les yeux vers la table centrale, comme si le métal pouvait encore lui servir de refuge.",
      "— Les adultes résistent mal à certaines formes de fragmentation, a-t-il répondu d’une voix égale. Ils tiennent à leur cohérence. Leur identité se défend. Chez les plus jeunes, l’architecture est plus souple. Plus perméable. Plus facile à reconfigurer.",
      "Chaque mot arrivait propre. Classé. Sans trembler. La monstruosité devient souvent très banale dès qu’un homme assez intelligent se convainc qu’il n’a fait qu’optimiser un problème.",
      "— On cherchait la persistance, a-t-il ajouté. Le retour partiel. La trace qui ne veut pas mourir."
    ],
    choices: [
      {
        id: "c236a_merge",
        label: "Le forcer à préciser.",
        nextUnitId: "2.3.7"
      }
    ]
  },

  {
    id: "2.3.6b",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.6b",
    title: "LE LANGAGE DES HOMMES PROPRES",
    location: "Laboratoire de Corven",
    timeLabel: "02:33",
    accessLevel: "free",
    textBlocks: [
      "Je n’ai rien dit. Corven fait partie de ces hommes qui commencent à se dénuder dès qu’on leur laisse croire qu’ils dominent le vocabulaire.",
      "Il a passé deux doigts sur le bord d’un écran éteint.",
      "— Le transfert n’est pas un simple passage, a-t-il repris. C’est une négociation entre une structure d’accueil et une structure résiduelle. Chez les sujets jeunes, nous avons observé une plasticité hors norme.",
      "Nous. Le mot a glissé là, tranquille, comme si la pluralité suffisait à partager la faute.",
      "— Certains fragments survivaient mieux que prévu, a-t-il dit. Des habitudes. Des intonations. Des attachements. Des gestes."
    ],
    choices: [
      {
        id: "c236b_merge",
        label: "Le ramener au concret.",
        nextUnitId: "2.3.7"
      }
    ]
  },

  {
    id: "2.3.7",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.7",
    title: "L’ARCHIVE VIVANTE",
    location: "Laboratoire de Corven",
    timeLabel: "02:35",
    accessLevel: "free",
    textBlocks: [
      "Corven s’est approché de la table centrale avec la prudence d’un prêtre devant son propre autel. Il a posé la main sur le module de lecture ouvert.",
      "— Anna te ment sur un point essentiel, a-t-il dit.",
      "Je n’ai pas bougé.",
      "— Il ne s’agit pas seulement de dossiers. Pas seulement de données. Certaines tentatives ont produit des rémanences trop stables pour être effacées proprement. Alors ils ont cessé d’archiver sur des serveurs.",
      "Il a levé les yeux vers moi.",
      "— Ils ont commencé à archiver dans des personnes."
    ],
    choices: [
      {
        id: "c237_demand_name",
        label: "Exiger un nom.",
        hint: "Savoir qui porte quoi.",
        nextUnitId: "2.3.8a",
        effects: {
          ancrage: -1
        },
        journalNote: "J’ai exigé que Corven nomme enfin ce qu’il essayait de contourner."
      },
      {
        id: "c237_demand_proof",
        label: "Exiger une preuve immédiate.",
        hint: "Ne pas céder au vertige sans élément tangible.",
        nextUnitId: "2.3.8b",
        effects: {
          ancrage: 1
        },
        journalNote: "J’ai demandé une preuve avant d’accepter l’idée même de Corven."
      }
    ]
  },

  {
    id: "2.3.8a",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.8a",
    title: "NOMME-LA",
    location: "Laboratoire de Corven",
    timeLabel: "02:36",
    accessLevel: "free",
    textBlocks: [
      "— Un nom, ai-je dit.",
      "Corven m’a regardé longtemps. Pas pour décider s’il devait parler. Pour décider à quel point il pouvait encore se permettre d’être lâche.",
      "— Pas un seul, a-t-il fini par répondre. Plusieurs sujets ont servi d’archives accidentelles. Des contenants instables. Des êtres traversés. Mais il y en a un qui persiste mieux que les autres.",
      "Il s’est interrompu au moment précis où mon implant vibrait de nouveau sous la peau de ma nuque.",
      "Le Cartel. Encore."
    ],
    choices: [
      {
        id: "c238a_merge",
        label: "Le fixer sans répondre tout de suite.",
        nextUnitId: "2.3.9"
      }
    ]
  },

  {
    id: "2.3.8b",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.8b",
    title: "MONTRE-MOI",
    location: "Laboratoire de Corven",
    timeLabel: "02:36",
    accessLevel: "free",
    textBlocks: [
      "— Une preuve, ai-je dit. Pas une théorie de laboratoire.",
      "Corven a acquiescé comme s’il attendait cette exigence depuis le début.",
      "Il a activé l’écran intégré à la table. Des lignes de code clinique, des horodatages, des séquences de synchronisation et des fragments audio ont surgi dans la lumière froide.",
      "Puis une colonne de référence s’est ouverte sur la droite. Sujet archive. Persistance remarquable. Réponses affectives déclenchées par stimuli mémoriels.",
      "Au même moment, mon implant a vibré sous ma peau avec la sécheresse d’un ordre.",
      "Le Cartel. Encore."
    ],
    choices: [
      {
        id: "c238b_merge",
        label: "Ignorer la vibration une seconde de plus.",
        nextUnitId: "2.3.9"
      }
    ]
  },

  {
    id: "2.3.9",
    chapterId: "chapter-2",
    chapterNumber: 2,
    unitNumber: "2.3.9",
    title: "LE DOSSIER M-17",
    location: "Laboratoire de Corven",
    timeLabel: "02:37",
    accessLevel: "free",
    textBlocks: [
      "J’ai coupé la réception avant même qu’elle ne s’ouvre. Une faute. Peut-être. Mais il y a des moments où obéir trop vite revient à consentir au monde tel qu’il est.",
      "Corven a vu la vibration, le refus, puis ce qui a traversé mon visage. Il a cessé de tourner autour du centre.",
      "— Le dossier que tu cherches n’est pas mort, a-t-il dit. Il a été morcelé, déplacé, réinjecté, perdu, puis retrouvé par morceaux. Le code d’origine était M-17.",
      "Il a marqué une pause. Une seule. Assez pour faire de la phrase suivante un instrument.",
      "— Le prénom-source associé au noyau initial était Mara."
    ],
    choices: [
      {
        id: "c239_end_scene",
        label: "Rester debout alors que tout vacille.",
        nextUnitId: "3.1.1",
        effects: {
          ancrage: -10,
          humanite: 3
        },
        journalNote: "Corven a prononcé un nom que je croyais enterré : Mara."
      }
    ]
  }
];