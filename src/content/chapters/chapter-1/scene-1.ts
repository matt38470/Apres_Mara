import type { NarrativeUnit } from '@/src/types/narrative';

export const scene1: NarrativeUnit[] = [
  {
    id: "1.1.1",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.1.1",
    title: "LA DESCENTE",
    location: "Penthouse Sterling, Canopée",
    timeLabel: "22:41",
    accessLevel: "free",
    textBlocks: [
      "Les riches de San Telmo vivent au-dessus des nuages, là où l’air conditionné a le goût de l’argent propre et où la pluie a la décence de ne pas tomber. Moi, je transpirais dans un costume de lin qui avait connu de meilleurs enterrements, douze mille pieds au-dessus de ma propre vie.",
      "L’ascenseur privé des Sterling glissait sans bruit, comme un cercueil bien huilé. Dans la paroi de la cabine, mon reflet me rendait la monnaie de ma fatigue : yeux cernés, barbe trop sombre sur des joues tirées, col mal fermé, et cette cassure au coin de la bouche qui n’était plus un pli mais une habitude.",
      "Quand les portes se sont ouvertes, l’air froid m’a frappé au visage. Chez les Sterling, même la température se comportait comme un domestique. Le vestibule sentait la cire, le bois noble, le parfum fané et cette propreté clinique qu’ont les maisons où l’on a remplacé la peur de mourir par la peur de perdre ce qu’on a payé pour ne plus mourir.",
      "Le majordome m’a conduit jusqu’au grand salon. Le marbre clair y était fendu par une traînée de liquide de stase, sombre et irisée comme une nappe de pétrole. Au milieu de la flaque, le Caisson de Transfert restait ouvert comme un sarcophage profané. Les câbles de nuque pendaient hors de la coque avec la mollesse écœurante de nerfs arrachés.",
      "Valerius m’attendait près du bar, un verre de rhum vieux à la main. Les flics de la Canopée ne ressemblaient jamais à des flics. Ils ressemblaient à des notaires qui auraient appris à menacer sans hausser le ton.",
      "— Vance, a-t-il dit sans chaleur.",
      "— Valerius."
    ],
    choices: [
      {
        id: "c1_attitude_provocation",
        label: "Le provoquer d’entrée.",
        hint: "Installer un rapport de force brutal.",
        nextUnitId: "1.1.2",
        effects: {
          humanite: -5,
          ancrage: -2
        },
        journalNote: "J’ai choisi de provoquer Valerius dès les premières secondes."
      },
      {
        id: "c1_attitude_controle",
        label: "Rester froid et tenu.",
        hint: "Garder le contrôle et observer.",
        nextUnitId: "1.1.3",
        effects: {
          humanite: 5
        },
        journalNote: "J’ai contenu ma rancœur pour laisser Valerius parler."
      }
    ]
  },

  {
    id: "1.1.2",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.1.2",
    title: "MAUVAISE HUILE",
    location: "Penthouse Sterling, Canopée",
    timeLabel: "22:43",
    accessLevel: "free",
    textBlocks: [
      "Je l’ai laissé mariner une seconde avec son verre et son costume bien taillé. Puis je lui ai offert ce que les gens comme lui détestent le plus : un mépris sans effort.",
      "— J’ignorais que la milice servait aussi les digestifs, ai-je dit.",
      "Son regard n’a pas bougé, mais quelque chose s’est tendu dans sa mâchoire. J’aurais presque préféré qu’il se mette en colère. La politesse chez les hommes corrompus n’est qu’une autre façon de montrer les dents.",
      "Je l’ai dépassé sans lui demander la permission et me suis accroupi près de la flaque. L’odeur m’a pris à la gorge : ozone, antiseptique, métal tiède, et ce fond presque sucré qu’on retrouve toujours quand une conscience a été déplacée trop vite.",
      "Pas un travail d’amateur. Pas un cambriolage improvisé. Une extraction propre, nerveuse, faite par quelqu’un qui connaissait la chair.",
      "— Ils l’ont prise pendant son sommeil, a dit Valerius derrière moi. Pas de lutte. Pas de cris. Les sédatifs étaient encore dans le circuit."
    ],
    choices: [
      {
        id: "c1_after_provocation",
        label: "Examiner le caisson de plus près.",
        nextUnitId: "1.1.4"
      }
    ]
  },

  {
    id: "1.1.3",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.1.3",
    title: "GLACE MINCE",
    location: "Penthouse Sterling, Canopée",
    timeLabel: "22:43",
    accessLevel: "free",
    textBlocks: [
      "Je lui ai accordé un simple signe de tête. Pas assez pour appeler ça de la courtoisie. Juste ce qu’il fallait pour qu’il se détende d’un demi-centimètre et commette l’erreur de croire qu’il tenait le terrain.",
      "— Tu tiens la pièce, ai-je dit. Je regarde le cadavre invisible.",
      "Valerius a laissé échapper un souffle par le nez, quelque part entre l’agacement et l’amusement. Avec les hommes comme lui, tout ce qui ressemble à du calme passe pour une concession. Ils confondent toujours la retenue avec l’obéissance.",
      "Je me suis approché du caisson sans plus lui accorder d’importance. L’odeur m’a saisi immédiatement : ozone, antiseptique, métal tiède, et cette note organique presque douceâtre qui annonce qu’on a fait voyager une âme plus vite que le corps ne pouvait l’encaisser.",
      "Travail net. Méthodique. Pas l’œuvre d’un pauvre type paniqué.",
      "— Ils l’ont prise pendant son sommeil, a dit Valerius. Les sédatifs étaient encore dans le circuit."
    ],
    choices: [
      {
        id: "c1_after_controle",
        label: "Poursuivre l’examen.",
        nextUnitId: "1.1.4"
      }
    ]
  },

  {
    id: "1.1.4",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.1.4",
    title: "LE POSTE À LAMPES",
    location: "Penthouse Sterling, Canopée",
    timeLabel: "22:46",
    accessLevel: "free",
    textBlocks: [
      "J’ai passé deux doigts sur les points d’ancrage brisés derrière la têtière. Une coquille de chair, pas du synthétique. Une enveloppe jeune, coûteuse, travaillée pour durer. Le genre de corps que les vieilles fortunes s’offrent pour recommencer à mentir au monde avec une peau neuve.",
      "— Où l’ont-ils mise ? ai-je demandé.",
      "Valerius a répondu d’un mouvement du menton.",
      "Sur la table basse, entre un cendrier en cristal et un bouquet de lys déjà en train de tourner, trônait un vieux poste à lampes. Cabossé, repeint plusieurs fois, poignée de cuir craquelé, cadran jaune malade. Une antiquité de dock. Son ventilateur toussait comme un vieillard qu’on aurait forcé à avaler des clous.",
      "— Échange standard, a dit Valerius. Ils ont siphonné la vieille hors de sa coquille de luxe et l’ont recrachée là-dedans. La famille a reçu un message. Paiement avant l’aube, sinon surcharge.",
      "Je me suis approché de la boîte encore chaude. On ne s’habitue jamais à ça. À l’idée qu’une personne puisse être réduite à une vibration dans du métal fatigué. J’ai branché mon lecteur de terrain. Le cadran à aiguille a frissonné, hésité, puis s’est mis à suivre une piste.",
      "Derrière moi, la voix de Valerius est devenue plus dure.",
      "— Tu bosses pour la famille, Vance. Ce que ton jouet trouve, tu me le donnes."
    ],
    choices: [
      {
        id: "c1_share_address",
        label: "Donner l’adresse à Valerius.",
        hint: "Faire affaire avec la milice pour avancer plus vite.",
        nextUnitId: "1.1.5",
        effects: {
          dette: -2,
          humanite: -8
        },
        journalNote: "J’ai partagé la piste des docks avec Valerius."
      },
      {
        id: "c1_hide_address",
        label: "Mentir. Garder la piste pour vous.",
        hint: "Partir seul vers les docks.",
        nextUnitId: "1.1.6",
        effects: {
          ancrage: 3,
          humanite: 8
        },
        journalNote: "J’ai menti à Valerius pour garder le contrôle de la traque."
      }
    ]
  },

  {
    id: "1.1.5",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.1.5",
    title: "PACTE SALE",
    location: "Penthouse Sterling, Canopée",
    timeLabel: "22:49",
    accessLevel: "free",
    textBlocks: [
      "L’aiguille s’était stabilisée sur le Quartier Sud, du côté des anciens abattoirs. J’ai laissé le lecteur branché une seconde de plus, juste assez pour sentir monter l’odeur de brûlé du poste à lampes.",
      "Puis je me suis redressé et j’ai regardé Valerius en face.",
      "— Les docks, ai-je dit. Les anciens abattoirs.",
      "Il a à peine souri. Pas un sourire de gratitude. Un sourire de propriétaire. Comme si l’information lui revenait de droit et que ma présence dans la pièce relevait d’une simple formalité administrative.",
      "— Je savais qu’on finirait par se comprendre.",
      "— Ne vous emballe pas, ai-je répondu. On va au même endroit. Ce n’est pas la même chose.",
      "Au-dehors, un éclair a découpé les vitres du salon. Très loin en dessous, la pluie tombait sur les quartiers pauvres avec une régularité de châtiment. Les docks m’attendaient. Cette fois, ils m’attendraient avec un flic propre sur lui dans les talons."
    ],
    choices: [
      {
        id: "c1_end_shared",
        label: "Descendre vers le Quartier Sud.",
        nextUnitId: "1.2.1a"
      }
    ]
  },

  {
    id: "1.1.6",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.1.6",
    title: "SEUL DANS LA PLUIE",
    location: "Penthouse Sterling, Canopée",
    timeLabel: "22:49",
    accessLevel: "free",
    textBlocks: [
      "L’aiguille s’était stabilisée sur le Quartier Sud, du côté des anciens abattoirs. J’ai mémorisé le signal, puis j’ai débranché d’un geste sec.",
      "— Alors ? a demandé Valerius.",
      "J’ai regardé le cadran mort dans ma main, puis son costume trop net, son verre encore plein, ses yeux de comptable armé.",
      "— Brouillé, ai-je menti. Trop de rebonds. Celui qui a monté ça savait masquer sa trace.",
      "Il m’a observé sans parler. Il n’était pas convaincu. Les hommes comme lui ne croient jamais vraiment. Ils classent, ils retiennent, ils attendent leur heure.",
      "— Si tu me mènes en bateau, Vance…",
      "— Tu feras quoi ? m’acheter un deuxième costume ?",
      "Je n’ai pas attendu sa réponse. J’ai rangé le lecteur dans ma poche et me suis dirigé vers la sortie. Au-dehors, la ville ruisselait sous l’orage. Les anciens abattoirs m’attendaient, avec leur boue, leur rouille et leurs chiens maigres. J’irais seul. C’était plus dangereux. C’était aussi plus honnête."
    ],
    choices: [
      {
        id: "c1_end_hidden",
        label: "Prendre l’ascenseur et partir seul.",
        nextUnitId: "1.2.1b"
      }
    ]
  }
];