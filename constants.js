const RESULTS_MAP = {
'blep': {
title: 'Ottimo valutatore di carattere',
contents: "Il vostro sguardo nasconde lo spirito da segugio che è in voi, e sa leggere gli altri e i loro desideri. Ridete quando siete confusi e sembrate straniti quando le cose sono divertenti. Vi piacciono le frasi brevi. Avete sempre voluto avere un giardino; purtroppo, le piante non sono facili da capire come gli umani, e l'ultima volta che vi siete presi  cura di un fiore non è andata così bene. Ad ogni modo, vi prendete buona cura dei vostri amici, che sono fortunati ad avervi.",
album: "Meteora", 
desc: "Meteora è il secondo album in studio del gruppo musicale statunitense Linkin Park, pubblicato il 25 marzo 2003 dalla Warner Bros. Records. Si tratta del primo album registrato dal gruppo con il bassista Phoenix."
},
'burger': {
title: 'Deciso e determinato',
contents: "E' più probabile che siate voi a influenzare le persone intorno piuttosto che il contrario. La qualità del vostro lavoro conta molto per voi. Siete dei pensatori visuali, e sapete trovare analogie tra argomenti diversi. Vi piace condividere scherzi con gli amici. Siete puntigliosi sul cibo, ma vi piace provare un nuovo piatto almeno una volta. Credete che la contraddizione sia alla base della vostra anima. A volte non ve ne rendete conto, ma molte persone vi ammirano.",
album: "Hybrid%20Theory",
desc: "Hybrid Theory è il primo album in studio del gruppo musicale statunitense Linkin Park, pubblicato il 24 ottobre 2000 dalla Warner Bros. Records."
},
'cart': {
title: 'Perfezionista con un lato tenero',
contents: "Siete calorosi a bravi a migliorare la giornata degli altri. Segretamente, vi piace l'idea di essere dei ribelli, ma la maggior parte di questa ribellione finisce nella vostra testa. Vi piace fare diagrammi di flusso. Volete sempre finire tutto quello che avete in programma per la giornata, e quando siete concentrati è difficile interrompervi. E' importante per voi aver un sfogo creativo e un'indipendenza personale. Siete fortemente motivati, il che è spesso fonte di ispirazione per gli altri.",
album: "Living%20Things",
desc:"Living Things è il quinto album in studio del gruppo musicale statunitense Linkin Park, pubblicato il 26 giugno 2012 dalla Warner Bros. Records."
},
'dopey': {
title: 'Scherzosi ma con un lato riflessivo',
contents: "Vi piace correre, saltare, scattare, camminare, fare jogging e andare sul monociclo. Il vostro nome utente online è \"L0LxXXxNawt_4_daag_96\". Occasionalmente aggiungete delle faccine vicino alla vostra firma. Indossate segretamente una catenina d'oro con un ciondolo a forma di guanti da boxe e un'etichetta con scritto \"Rocky\". Quando siete soli, però, riflettete sulla crescente commercializzazione della capacità creativa umana e vi piace ripetere Marx mentre camminate nei boschi.",
album: "The%20Hunting%20Party",
desc: "The Hunting Party è il sesto album in studio del gruppo musicale statunitense Linkin Park, pubblicato il 17 giugno 2014 dalla Warner Bros. Records."
},
'happy': {
title: 'Una forza positiva nel mondo',
contents: "Siete ottimisti e fiduciosi della vostra abilità di migliorare le cose, che siano esse un gruppo di persone, un processo lavorativo, o voi stessi. E' difficile decidere se siete introversi o estroversi. Avete tanti libri che intendete leggere, e la prossima settimana ne inizierete uno. Quando vi svegliate la mattina, avete difficoltà a ricordare cosa avete letto. Vi piace il suono della pioggia ma non starci in mezzo. Avete paura di non riuscire a fare abbastanza, mente tutti pensano che facciate più di loro.",
album: "Minutes%20to%20Midnight",
desc:"Minutes to Midnight è il terzo album in studio del gruppo musicale statunitense Linkin Park, pubblicato il 15 maggio 2007 dalla Warner Bros. Records. Prodotto da Rick Rubin e da Mike Shinoda, si tratta della prima pubblicazione del gruppo i cui componenti appaiono tutti in copertina."
},
'nerd': {
title: 'Mentalmente aperti e dal cuore grande',
contents: "Siete fan di Harry Potter, e siete stati scelti per riparare ai torti del mondo e riportare l'armonia nella Terra di Mezzo. Vi piace leggere biografie storiche e fare test di personalità che confermino che la vostra personalità sia più rara di un fiocco di neve sul dorso di un giaguaro. Avete poteri magici, ma vi consiglio di non metterli sul curriculum, perchè la gente potrebbe non capirvi.",
album: "A%20Thousand%20Suns",
desc:"A Thousand Suns è il quarto album in studio del gruppo musicale statunitense Linkin Park, pubblicato il 14 settembre 2010 dalla Warner Bros. Records."
},
'shy': {
title: 'A volte timidi, ma segretamente avventurosi',
contents: "Siete delle persone molto riflessive, sia quando pensate agli altri che quando pensate a delle idee. Vi piace la natura, in particolare il modo in cui la luce filtra tra le foglie. In un gruppo, non siete quasi mai la prima persona a parlare, ma quando lo fate gli altri vogliono che continuiate. Date più valore al futuro che al passato. Non vi piacciono i giochi di parole e vi piacciono le note scritte a mano; i giochi di parole scritti a mano vanno bene. Non avete paura di affrontare nuovo sfide, il che è molto bello.",
album: "Reanimation",
desc: "Reanimation è il primo album di remix del gruppo musicale statunitense Linkin Park, pubblicato il 30 luglio 2002 dalla Warner Bros. Records."
},
'sleeping': {
title: 'Liberi e indipendenti',
contents: "Trovate energia nel fare le cose che ritenete importanti, e diventate irrequieti se vi sembra di essere sempre la stessa persona. Siete bravi ad articolare le idee. Gli orologi sono una delle cose che vi piacciono di meno. Vi separate sempre dal vostro gruppo per esplorare un posto nuovo, e fortunatamente avete un ottimo senso dell'orientamento. Avete un talento nascosto che pochi conoscono, ma tranquilli, manterrò il segreto.",
album: "One%20More%20Light",
desc:"One More Light è il settimo album in studio del gruppo musicale statunitense Linkin Park, pubblicato il 19 maggio 2017 dalla Warner Bros. Records. Si tratta dell'ultima pubblicazione del gruppo con il cantante Chester Bennington, morto suicida il 20 luglio dello stesso anno."
},
'sleepy': {
title: 'Più forti di quanto pensiate',
contents: "La chiamate \"meditazione\", ma è più \"chiudere gli occhi tra una sveglia e l'altra\". Lo chiamate \"sollevamento pesi\", ma è più \"una buona scusa per bere Gatorade\". Le vostre battute hanno spesso un buon tempismo e piacciono a tutti. Trascendete le difficoltà della vita, schivandole agilmente. Mangiate i biscotti della fortuna, ma non leggete mai i bigliettini perchè siete già sicuri di voi. Fare pisolini è uno dei vostri talenti, ma quando vi concentrate, vi dedicate al 100% a fare qualcosa.",
album: "One%20More%20Light",
desc: "One More Light è il settimo album in studio del gruppo musicale statunitense Linkin Park, pubblicato il 19 maggio 2017 dalla Warner Bros. Records. Si tratta dell'ultima pubblicazione del gruppo con il cantante Chester Bennington, morto suicida il 20 luglio dello stesso anno."
}
};