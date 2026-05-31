import type { NarrativeUnit } from '@/src/types/narrative';

export const scene4: NarrativeUnit[] = [
  // ─── INTRO PARTIE 1 ───────────────────────────────────────────────────────
  {
    id: "ch1-s04-u01",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.4.1",
    title: "00H41",
    location: "Bureau principal",
    timeLabel: "00:41",
    imagePrompt: "Thomas_Telephone_Nuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Il est 00h41 quand le téléphone vibre.",
      "Thomas relève la tête sans comprendre tout de suite d'où vient le bruit. Pendant une seconde, il croit que c'est encore l'ordinateur — une alerte système, le claquement discret d'une fenêtre qu'il aurait laissée ouverte. Puis il voit l'écran allumé, posé à côté du carnet.",
      "Un message. Il tend la main. Mehdi.",
      "Le nom suffit à modifier la pièce. Pas violemment. D'un cran seulement. Comme si l'air du bureau venait de perdre un peu de sa neutralité.",
      "Thomas ouvre le message : T'es encore là ? Passe me voir demain matin 8h. J'ai un truc à te montrer.",
      "Il le relit. Puis une deuxième fois. L'heure d'envoi d'abord : 00h41. Mehdi n'écrit presque jamais à cette heure-là. Pas sans formule d'ouverture, pas sans contexte, pas sans cet étrange mélange de familiarité rapide et d'imprécision. J'ai un truc à te montrer. Pas : il faut qu'on parle. Juste ça. Un truc."
    ],
    deskUpdate: {
      systemNotes: [
        "Message reçu de Mehdi à 00h41.",
        "Rendez-vous demain matin à 8h00.",
        "Contexte absent — formulation inhabituelle."
      ],
      journalEntry: {
        summary: "Thomas reçoit un message nocturne de Mehdi lui demandant de passer à 8h. Le ton bref et l'heure tardive créent une dissonance.",
        tone: "tense",
        tags: ["Mehdi", "message", "nuit", "rendez-vous", "signal"]
      }
    },
    choices: [
      {
        id: "analyse-message",
        label: "Analyser la situation",
        hint: "Laisser le contexte de la soirée peser sur la lecture du message.",
        nextUnitId: "1.4.2"
      }
    ]
  },

  // ─── INTRO PARTIE 2 — L'ÉCHIQUIER ─────────────────────────────────────────
  {
    id: "ch1-s04-u02",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.4.2",
    title: "L'ÉCHIQUIER",
    location: "Bureau principal",
    timeLabel: "00:41",
    imagePrompt: "Thomas_Reflexion_Nuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas garde le téléphone dans la main, le regard fixé sur l'écran déjà éteint. Mehdi peut vouloir lui montrer n'importe quoi — un dossier budgétaire, une note de direction, une projection de charge.",
      "Et pourtant.",
      "Sur le bureau, les courbes sont encore ouvertes ou rangées. La soirée au bar avec Samir est encore présente, presque physiquement. Et maintenant Mehdi écrit à 00h41 pour le voir à huit heures. Tôt. Avant l'arrivée de la plupart des équipes. Avant que les choses aient une audience.",
      "Il pense à Samir. À huit heures quinze. Les deux horaires se touchent presque.",
      "Cette proximité suffit à produire un léger déplacement dans sa lecture du monde. Pas une conclusion. Pas encore une alarme. Seulement la sensation de n'être plus tout à fait seul à bouger sur un échiquier dont il ne voit pas encore toutes les cases.",
      "Dans la vitre, son reflet flotte au-dessus du bureau sombre. L'institution vient de frapper à la porte, à une heure où elle devrait dormir. Un simple message nocturne peut être une coïncidence, ou le signe que le système commence à le regarder en retour."
    ],
    deskUpdate: {
      systemNotes: [
        "Deux rendez-vous au matin : Mehdi 8h00, Samir 8h15.",
        "Coïncidence temporelle non confirmée — lecture ouverte."
      ],
      journalEntry: {
        summary: "Thomas mesure la proximité des deux rendez-vous et perçoit la possibilité de ne plus être seul à bouger.",
        tone: "tense",
        tags: ["échiquier", "coïncidence", "Mehdi", "Samir", "signal"]
      }
    },
    choices: [
      {
        id: "reply-ok",
        label: "La normalité de façade (Répondre OK)",
        hint: "Traiter le message comme un échange professionnel ordinaire.",
        nextUnitId: "1.4.3",
        effects: { discretion: 15, pression: -10 }
      },
      {
        id: "no-reply-analytical",
        label: "L'attente analytique (Ne pas répondre)",
        hint: "Maintenir l'ambiguïté plutôt que de choisir une interprétation.",
        nextUnitId: "1.4.5",
        effects: { preparation: 10, pression: 10 }
      },
      {
        id: "red-alert",
        label: "L'alerte rouge (Le lire comme un signe)",
        hint: "Intégrer le message dans le motif déjà en cours.",
        nextUnitId: "1.4.7",
        effects: { alerte: 20, isolement: 10 }
      },
      {
        id: "defensive-procedure",
        label: "La procédure défensive (Créer une trace)",
        hint: "Préparer un appui extérieur avant d'entrer dans le rendez-vous.",
        nextUnitId: "1.4.9",
        effects: { preparation: 20, isolement: 15 }
      }
    ]
  },

  // ─── BRANCHE C1 — LA NORMALITÉ DE FAÇADE ──────────────────────────────────
  {
    id: "ch1-s04-u03",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.4.3",
    title: "LA NORMALITÉ DE FAÇADE",
    location: "Bureau principal",
    timeLabel: "00:43",
    imagePrompt: "Thomas_Telephone_Reponse",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas relit le message une dernière fois, puis ouvre le clavier.",
      "Il ne cherche pas longtemps sa réponse. C'est même cette absence d'hésitation qui décide pour lui. S'il commence à peser chaque mot, il transformera un message encore banal en pièce à conviction. Il écrit : OK, je passe à 8h.",
      "Il envoie. La double coche apparaît presque aussitôt. Mehdi ne répond pas. Thomas garde quelques secondes le téléphone dans la main. Le silence qui suit l'envoi n'a rien d'étrange ; pourtant il sent en lui cette légère déception qui naît quand un échange qu'on a choisi de traiter normalement refuse de redevenir complètement normal.",
      "Il repose l'appareil. Le rendez-vous avec Mehdi. Le rendez-vous avec Samir. Trois lignes qui convergeront demain matin, ou peut-être pas. Thomas note l'heure d'envoi de sa réponse dans le carnet. Toute la décision tenait à cela : ne pas donner au message plus de poids qu'il n'en exigeait objectivement."
    ],
    deskUpdate: {
      systemNotes: [
        "Réponse envoyée à Mehdi : OK, je passe à 8h.",
        "Traitement du message comme échange ordinaire."
      ],
      journalEntry: {
        summary: "Thomas répond avec une normalité de façade, refusant de charger le message d'un poids qu'il ne mérite peut-être pas.",
        tone: "cold",
        tags: ["façade", "réponse", "Mehdi", "normalité"]
      }
    },
    choices: [
      {
        id: "close-office-c1",
        label: "Fermer le bureau",
        hint: "Laisser la nuit tenir sa propre logique.",
        nextUnitId: "1.4.4"
      }
    ]
  },
  {
    id: "ch1-s04-u04",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.4.4",
    title: "LA NORMALITÉ DE FAÇADE",
    location: "Bureau principal",
    timeLabel: "00:45",
    imagePrompt: "Thomas_Quitte_Bureau",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Le monde professionnel produit chaque jour des coïncidences qui ressemblent, vues de fatigue, à des alignements. Thomas le sait. C'est pour cela qu'il a répondu. Une méthode simple : tant qu'un fait peut recevoir une lecture ordinaire sans violence faite à la réalité, il mérite de la recevoir.",
      "Il ajoute seulement dans le carnet : Mehdi — 8h confirmé. La phrase est sèche. Elle lui convient. Pas d'hypothèse déguisée en note de travail.",
      "Thomas éteint enfin le téléphone. Demain matin, il passera voir Mehdi à huit heures. Il le fera comme on exécute une suite logique. Mais au moment de quitter le bureau, une pensée persiste malgré lui, discrète, tenace :",
      "Ce n'est pas parce qu'on répond normalement à un message que le monde autour redevient normal avec lui."
    ],
    deskUpdate: {
      systemNotes: [
        "Carnet : Mehdi — 8h confirmé.",
        "Bureau fermé. Décision de traitement ordinaire maintenue."
      ],
      journalEntry: {
        summary: "Thomas quitte le bureau après avoir refusé de transformer une coïncidence en preuve. La pensée finale résiste pourtant.",
        tone: "cold",
        tags: ["normalité", "clôture", "doute résiduel"]
      }
    },
    choices: [
      {
        id: "go-sleep-c1",
        label: "Aller dormir",
        hint: "La nuit se referme sur ses propres ambiguïtés.",
        nextUnitId: "1.5.1"
      }
    ]
  },

  // ─── BRANCHE C2 — L'ATTENTE ANALYTIQUE ────────────────────────────────────
  {
    id: "ch1-s04-u05",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.4.5",
    title: "L'ATTENTE ANALYTIQUE",
    location: "Bureau principal",
    timeLabel: "00:43",
    imagePrompt: "Thomas_Telephone_Ecran_Allume",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas garde le téléphone dans la main sans taper un mot.",
      "L'écran s'éteint. Il le rallume d'un mouvement du pouce, relit le message, puis l'éteint de nouveau. Il essaie de mesurer à quel point le texte change selon l'état dans lequel on le lit. J'ai un truc à te montrer. Pris seul, ce n'est presque rien. Mais rien, ce soir, n'arrive seul.",
      "Il repose le téléphone près du carnet ouvert. Il pourrait répondre OK et refermer la scène. Mais répondre tout de suite aurait aussi un autre effet : cela l'obligerait à se comporter comme si l'heure, le ton, le manque de contexte ne signifiaient rien du tout. Or ils signifient au moins ceci : Mehdi veut le voir tôt, seul, avant que la journée ne commence vraiment."
    ],
    deskUpdate: {
      systemNotes: [
        "Pas de réponse envoyée à Mehdi.",
        "Message laissé en suspens — ambiguïté maintenue."
      ],
      journalEntry: {
        summary: "Thomas refuse de répondre immédiatement pour ne pas choisir une interprétation avant d'avoir dormi.",
        tone: "tense",
        tags: ["attente", "analyse", "ambiguïté", "Mehdi"]
      }
    },
    choices: [
      {
        id: "leave-suspended-c2",
        label: "Laisser en suspens",
        hint: "Dormir avant de décider.",
        nextUnitId: "1.4.6"
      }
    ]
  },
  {
    id: "ch1-s04-u06",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.4.6",
    title: "L'ATTENTE ANALYTIQUE",
    location: "Bureau principal",
    timeLabel: "00:46",
    imagePrompt: "Thomas_Reflexion_Fenetre",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Savoir que le bruit de fond existe n'empêche pas d'entendre, parfois, une forme dedans. Thomas se lève, fait deux pas jusqu'à la fenêtre. La prudence, dans ces moments-là, ne consiste pas toujours à répondre vite. Parfois elle consiste à laisser les choses en suspens assez longtemps pour voir ce qu'elles provoquent en vous.",
      "Dans le carnet, il ajoute : Mehdi, 00h41. \"Passe me voir demain matin 8h.\"",
      "Chaque réponse possible engage déjà une lecture du message, et c'est précisément ce qu'il refuse pour l'instant : choisir une interprétation avant d'avoir dormi, avant d'avoir revu Samir. Alors il ne répond pas. La décision n'a rien de spectaculaire. C'est un maintien de l'ambiguïté.",
      "Quand il quitte le bureau quelques minutes plus tard, le message attend toujours sa réponse."
    ],
    deskUpdate: {
      systemNotes: [
        "Carnet : Mehdi, 00h41. Rendez-vous non confirmé.",
        "Bureau fermé sans réponse envoyée."
      ],
      journalEntry: {
        summary: "Thomas quitte le bureau en maintenant délibérément l'ambiguïté, refusant toute interprétation prématurée.",
        tone: "tense",
        tags: ["ambiguïté", "clôture", "prudence", "Mehdi"]
      }
    },
    choices: [
      {
        id: "go-sleep-c2",
        label: "Aller dormir",
        hint: "Laisser la nuit tenir sa propre logique.",
        nextUnitId: "1.5.1"
      }
    ]
  },

  // ─── BRANCHE C3 — L'ALERTE ROUGE ──────────────────────────────────────────
  {
    id: "ch1-s04-u07",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.4.7",
    title: "L'ALERTE ROUGE",
    location: "Bureau principal",
    timeLabel: "00:44",
    imagePrompt: "Thomas_Carnet_Tension",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas relit le message une quatrième fois.",
      "Cette fois, il cesse d'essayer de le maintenir dans la catégorie des échanges ordinaires. Si ce message était arrivé hier, il l'aurait lu autrement. Ce n'est pas seulement le message qui a changé de poids. C'est le monde autour. Le rendez-vous tôt, l'imprécision de un truc. Ensemble, ces éléments composent quelque chose de légèrement trop bien ajusté à ce qu'il vit depuis quatorze heures trente-sept.",
      "Il pense à la courbe, à Samir, aux fichiers déplacés. La possibilité que la circulation ne se fasse pas seulement dans les données, mais autour d'elles. Dans les couloirs. Le signal n'est peut-être pas seulement technique. Je ne suis peut-être pas le seul à avoir bougé aujourd'hui.",
      "Il note la formule dans le carnet : Si coïncidence, coïncidence très exacte."
    ],
    deskUpdate: {
      systemNotes: [
        "Carnet : Si coïncidence, coïncidence très exacte.",
        "Lecture du message intégrée au motif général de la soirée."
      ],
      journalEntry: {
        summary: "Thomas cesse de maintenir le message dans la catégorie ordinaire. La coïncidence des horaires devient un signal.",
        tone: "critical",
        tags: ["alerte", "motif", "Mehdi", "coïncidence", "signal"]
      }
    },
    choices: [
      {
        id: "no-reply-c3",
        label: "Ne pas répondre",
        hint: "Refuser de choisir trop tôt entre banalité et alerte.",
        nextUnitId: "1.4.8"
      }
    ]
  },
  {
    id: "ch1-s04-u08",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.4.8",
    title: "L'ALERTE ROUGE",
    location: "Bureau principal",
    timeLabel: "00:47",
    imagePrompt: "Thomas_Reflexion_Fenetre_Nuit",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Le problème n'est pas de savoir si Mehdi sait. Le problème est qu'il se met déjà à lire le message à partir de cette hypothèse. C'est là que le doute devient dangereux : non quand il conclut, mais quand il commence à organiser la perception.",
      "Il ne répond pas. Pas parce qu'il a décidé que Mehdi fait partie d'un dispositif, mais parce qu'il refuse de faire semblant que cette possibilité n'existe pas. Il écrit une dernière ligne : Rester exact.",
      "Quand il quitte le bureau, il laisse le message sans réponse. Non pour gagner du pouvoir. Pour ne pas choisir trop tôt entre traiter une alerte comme une banalité, ou transformer une banalité en alerte. Mais au fond de lui, une ligne a déjà bougé.",
      "Le message de Mehdi n'est plus seulement un message. C'est le premier objet extérieur que Thomas regarde comme s'il pouvait faire partie du même motif."
    ],
    deskUpdate: {
      systemNotes: [
        "Carnet : Rester exact.",
        "Message laissé sans réponse. Première lecture d'un objet extérieur comme partie d'un motif."
      ],
      journalEntry: {
        summary: "Thomas quitte le bureau avec une ligne intérieure déplacée. Le message de Mehdi est devenu un objet du motif.",
        tone: "dark",
        tags: ["alerte", "motif", "glissement", "perception"]
      }
    },
    choices: [
      {
        id: "go-sleep-c3",
        label: "Aller dormir",
        hint: "La nuit referme quelque chose qui ne reviendra pas.",
        nextUnitId: "1.5.1"
      }
    ]
  },

  // ─── BRANCHE C4 — LA PROCÉDURE DÉFENSIVE ──────────────────────────────────
  {
    id: "ch1-s04-u09",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.4.9",
    title: "LA PROCÉDURE DÉFENSIVE",
    location: "Bureau principal",
    timeLabel: "00:44",
    imagePrompt: "Thomas_Clavier_Dossier",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Thomas lit le message une fois. Puis une deuxième.",
      "À la troisième lecture, il ne se demande plus seulement ce que Mehdi veut. Il se demande ce qu'il lui faudrait, à lui, pour ne pas entrer demain matin dans ce rendez-vous sans aucun appui extérieur à sa propre parole. Le message est bref, vague, presque impossible à contester. C'est précisément ce qui le rend inutilisable comme preuve et troublant comme contexte.",
      "Il sent très nettement qu'un seuil se présente. Jusqu'ici, toute la soirée a tenu dans une logique interne : vérifier, reprendre les données. Le message de Mehdi introduit la possibilité qu'il faille bientôt penser aussi à la manière dont les faits circulent, se couvrent, se formulent.",
      "Il ouvre un fichier vierge. Il inscrit l'heure. Le résumé le plus neutre possible de la journée. Le geste est sec. Une pièce de recours, au cas où."
    ],
    deskUpdate: {
      systemNotes: [
        "Ouverture d'un fichier de trace chronologique.",
        "Résumé neutre de la journée rédigé."
      ],
      journalEntry: {
        summary: "Thomas franchit un seuil : il ne vérifie plus seulement des données, il commence à construire sa défense.",
        tone: "dark",
        tags: ["défense", "trace", "procédure", "seuil"]
      }
    },
    choices: [
      {
        id: "create-trace-c4",
        label: "Créer la trace",
        hint: "Finaliser le fichier et le sécuriser.",
        nextUnitId: "1.4.10"
      }
    ]
  },
  {
    id: "ch1-s04-u10",
    chapterId: "chapter-1",
    chapterNumber: 1,
    unitNumber: "1.4.10",
    title: "LA PROCÉDURE DÉFENSIVE",
    location: "Bureau principal",
    timeLabel: "00:49",
    imagePrompt: "Thomas_Ecran_PDF",
    accessLevel: "public",
    countdownVisible: false,
    textBlocks: [
      "Il exporte le fichier en PDF, le date, le range sur la partition chiffrée dans un dossier séparé de NW-7. Envoyer une copie hors de chez lui ? À une adresse personnelle ? Il n'en fait rien. Pas encore. Mais le simple fait d'avoir envisagé ce geste suffit. Il l'oblige à se voir un instant autrement : non plus comme un analyste, mais comme quelqu'un qui commence à prévoir qu'un jour il pourrait avoir à se défendre avec méthode.",
      "Dans le carnet, il ajoute : Préparer n'est pas accuser.",
      "Sur l'écran, le dossier NW-7 attend. Sur le téléphone, le message attend. Entre les deux, Thomas vient d'ajouter une trace de lui-même, datée, séparée.",
      "Quand il quitte la pièce, il ne traverse plus la nuit comme un homme qui pense seulement au réseau. Il pense à la version des faits qu'il faudra peut-être établir."
    ],
    deskUpdate: {
      systemNotes: [
        "Carnet : Préparer n'est pas accuser.",
        "Trace chronologique exportée en PDF sur partition chiffrée."
      ],
      journalEntry: {
        summary: "Thomas quitte le bureau comme quelqu'un qui prépare sa défense. La nuit a franchi un seuil définitif.",
        tone: "dark",
        tags: ["défense", "trace", "PDF", "seuil", "version des faits"]
      },
      unlockArchives: ["trace_chronologique_pdf"]
    },
    choices: [
      {
        id: "go-sleep-c4",
        label: "Aller dormir",
        hint: "La nuit referme quelque chose qui ne reviendra pas.",
        nextUnitId: "1.5.1",
        unlockArchive: "trace_chronologique_pdf"
      }
    ]
  }
];
