import type { Article } from './types'

const articles: Article[] = [
  {
    id: 'choosing-a-chart',
    title: 'Scegliere il grafico giusto',
    summary: 'Quale dei nove tipi di grafico si adatta ai tuoi dati, e perché.',
    group: 'Le basi',
    body: `Un buon grafico risponde a una sola domanda, a colpo d’occhio. Il tipo giusto dipende da cosa vuoi che il lettore noti.

## Confrontare quantità

- **Bar** (barre) è la scelta più sicura per confrontare quantità tra categorie: vendite per regione, voti per opzione. Le persone valutano con grande precisione la lunghezza delle barre.
- **Horizontal bar** (barre orizzontali) fa lo stesso lavoro e funziona meglio quando i nomi delle categorie sono lunghi o numerosi, perché le etichette hanno spazio per essere lette.
- **Stacked bar** (barre in pila) mostra come è composto ogni totale, per esempio le vendite per trimestre suddivise per regione. I totali si confrontano facilmente; le parti sopra la prima, meno.

## Mostrare un cambiamento nel tempo

- **Line** (linee) è la scelta naturale per tutto ciò che si misura in sequenza, come mesi o anni. Più linee sullo stesso grafico ti permettono di confrontare le tendenze.
- **Area** (aree) è una linea con lo spazio sottostante riempito. Mette in risalto il volume, ma aree sovrapposte possono nascondersi a vicenda, quindi limitati a poche serie.

## Mostrare le parti di un intero

- **Pie** (torta) e **Donut** (ciambella) mostrano come si suddivide un totale. Funzionano meglio con poche fette che formano un insieme sensato, come il 100 per cento di un budget. Con molte fette simili, un grafico a barre si legge meglio. Usano una sola serie di valori, e i valori negativi non possono essere mostrati come fette.

## Altre forme

- **Scatter** (dispersione) mette un numero in relazione con un altro, per mostrare se variano insieme, come altezza e peso. Entrambi gli assi devono essere numeri.
- **Radar** confronta più elementi sulla stessa serie di misure, disposte in cerchio. È adatto a pochi elementi e poche misure; oltre, diventa difficile da leggere.

## Qualche consiglio generale

- Dai al grafico un titolo che dica cosa mostra.
- Usa pochi colori, e mostra la legenda solo quando c’è più di una serie.
- Le etichette dei dati aiutano quando contano i valori esatti; la griglia aiuta quando il lettore stimerà i valori a occhio.`,
  },
  {
    id: 'what-is-csv',
    title: 'Che cos’è davvero il CSV',
    summary: 'Il semplice formato di testo dietro la maggior parte dei dati che puoi rappresentare.',
    group: 'Le basi',
    body: `CSV sta per comma-separated values, cioè «valori separati da virgole». È uno dei modi più antichi e semplici per salvare una tabella: testo semplice, una riga per ogni riga della tabella, con una virgola tra un valore e l’altro.

## Un esempio

Una piccola tabella di vendite potrebbe apparire così in CSV:

Mese,Vendite

Gen,120

Feb,150

In un file vero ogni riga sta su una linea a sé, senza righe vuote in mezzo. La prima riga è l’**intestazione**: dà un nome a ogni colonna. Ogni riga successiva è una riga di dati, con i valori nello stesso ordine dell’intestazione.

## Perché è ovunque

Dato che il CSV è solo testo, quasi tutti i programmi sanno leggerlo e scriverlo: fogli di calcolo, database, software di contabilità, strumenti per sondaggi e molti siti che offrono download. Non ha caratteri, colori, formule o più fogli, ma solo i valori, ed è proprio questo che lo rende così facile da spostare da un programma all’altro.

## Alcune varianti che incontrerai

- **Altri separatori.** Alcuni programmi usano il punto e virgola, la tabulazione o la barra verticale al posto della virgola. Il punto e virgola è comune nei paesi in cui la virgola è il separatore decimale, come l’Italia.
- **Virgolette.** Un valore che contiene a sua volta una virgola, come un nome scritto Rossi, Mario, viene racchiuso tra virgolette doppie, così la virgola non viene scambiata per un separatore.
- **Testo separato da tabulazioni.** Quando copi un blocco di celle da un foglio di calcolo, di solito arriva negli appunti come testo con una tabulazione tra un valore e l’altro. È abbastanza simile al CSV perché Universal Charts lo legga comunque.

## Ottenere un CSV da un foglio di calcolo

La maggior parte dei fogli di calcolo può salvare o scaricare un foglio in formato CSV, spesso da Salva con nome o Scarica. Di solito però è più rapido selezionare le celle che ti servono, compresa la riga di intestazione, copiarle e incollarle direttamente in Universal Charts.`,
  },
  {
    id: 'data-problems',
    title: 'Quando i tuoi dati non vengono mostrati bene',
    summary: 'Separatori, virgole decimali, date e colonne che non vengono rappresentate.',
    group: 'Come funziona',
    body: `Universal Charts legge la prima riga come nomi delle colonne e capisce da solo quali colonne contengono numeri. Quando un grafico sembra sbagliato, la causa è quasi sempre una delle seguenti.

## Una colonna non compare tra i valori

Una colonna viene considerata numerica solo se **tutte** le sue celle compilate contengono un numero. Basta un’unica voce come n/d, da definire o un trattino per trasformare l’intera colonna in testo, e le colonne di testo possono essere usate solo come etichette. Cancella o correggi la voce anomala, poi premi **Update chart**. Le celle vuote vanno bene.

I simboli di valuta (£, $ ed €), i segni di percentuale, gli spazi e le virgole vengono ignorati nella lettura dei numeri, quindi £1,200 e 45% vengono letti come 1200 e 45.

## Decimali scritti con la virgola

Poiché le virgole all’interno dei numeri vengono trattate come separatori delle migliaia, una virgola decimale viene letta male: 3,5 diventa 35. Se i tuoi dati usano la virgola per i decimali, sostituiscila con un punto prima di incollare, e togli gli eventuali punti usati per separare le migliaia.

## Tutto finisce in un’unica colonna

L’app riconosce da sola il separatore: virgole, punti e virgola, tabulazioni e barre verticali vengono tutti riconosciuti. Se tutto finisce comunque in un’unica colonna, controlla che ogni riga usi lo stesso separatore e che la prima riga sia davvero l’intestazione.

## Un valore viene diviso in due

Nei dati separati da virgole, un valore che contiene una virgola deve essere racchiuso tra virgolette doppie, altrimenti verrà letto come due valori e sposterà di una colonna tutto ciò che segue.

## Le date

Le date vengono lette come etichette, non come una linea del tempo. Compaiono esattamente nell’ordine in cui si trovano nei tuoi dati, quindi ordina le righe per data prima di incollare e scrivi tutte le date nello stesso modo. I vuoti non vengono colmati: se nei tuoi dati manca un mese, manca anche nel grafico.

## Colonne senza nome

Se una cella dell’intestazione è vuota, la colonna viene chiamata Column 1, Column 2 e così via, in base alla sua posizione.

## Il grafico non cambia

Dopo aver modificato i dati, premi **Update chart**. Il grafico viene ridisegnato a partire dal testo solo quando lo chiedi tu.`,
  },
  {
    id: 'how-it-works',
    title: 'Come funziona Universal Charts',
    summary: 'Dai dati incollati all’immagine finita, tutto dentro il tuo browser.',
    group: 'Come funziona',
    body: `Universal Charts trasforma una tabella di numeri in un grafico senza che i tuoi dati vengano mai caricati online. Tutto avviene nel tuo browser, sul tuo dispositivo.

## Creare un grafico

1. Incolla i tuoi dati nel riquadro Data, con i nomi delle colonne nella prima riga, e premi **Update chart**. Per fare prima una prova, scegli uno dei set di dati di esempio.
2. L’app propone un punto di partenza: la prima colonna con del testo diventa le categorie sull’asse X, e ogni colonna di numeri diventa una serie.
3. Scegli un tipo di grafico e, se serve, cambia le colonne usate. Per un grafico a dispersione, scegli una colonna di numeri per l’asse X.
4. Aggiungi un titolo, scegli i colori e attiva o disattiva griglia, legenda, etichette dei dati e curve smussate.

## Esportare

- **PNG** salva un’immagine del grafico. Scegli 1×, 2× o 3×: più alto è il numero, più nitida è l’immagine e più grande è il file. 2× va bene per la maggior parte di documenti e presentazioni.
- **SVG** salva il grafico come disegno vettoriale, che resta nitido a qualsiasi dimensione e si può modificare con un programma di grafica.
- **Copy** mette un PNG del grafico negli appunti, pronto da incollare in un documento o in un messaggio. Alcuni browser non lo consentono; in quel caso l’app te lo segnala e puoi scaricare un PNG.

Le esportazioni hanno sempre lo sfondo bianco, anche quando l’app è in modalità scura, così lo stesso grafico ha lo stesso aspetto ovunque finisca.

## Da sapere

- **Il tuo lavoro non viene salvato.** L’app non conserva alcuna copia dei tuoi dati o del grafico. Se ricarichi la pagina, riparte dai dati di esempio. Conserva i dati originali, o crea un link di condivisione, se pensi di tornare su un grafico.
- **Funziona offline.** Una volta caricata, l’app può creare grafici senza connessione a Internet, perché nulla richiede un server.
- **Hai effettuato l’accesso con un Universal ID?** Se la tua organizzazione ha impostato un colore del marchio, questo diventa automaticamente il primo della tavolozza, leggermente scurito se serve perché risalti bene sullo sfondo bianco.`,
  },
  {
    id: 'privacy-and-sharing',
    title: 'I tuoi dati e i link di condivisione',
    summary: 'Cosa resta sul tuo dispositivo e cosa contiene un link di condivisione.',
    group: 'Privacy e sicurezza',
    body: `Universal Charts non ha un server a cui inviare i tuoi dati. La lettura dei dati, il disegno del grafico e la creazione dell’esportazione avvengono tutti nel tuo browser, sul tuo dispositivo.

## Cosa resta sul tuo dispositivo

- I dati che incolli vengono letti nel browser e non vengono mai caricati online.
- Il grafico viene disegnato nel browser.
- I file PNG e SVG vengono creati nel browser e salvati direttamente sul tuo dispositivo.
- L’app non conserva i tuoi dati dopo che hai chiuso: non vengono salvati né sul dispositivo né altrove.

## Come funziona un link di condivisione

**Share link** copia un indirizzo web che contiene l’intero grafico (le sue impostazioni **e tutti i suoi dati**) compresso nel link stesso. L’app non salva grafici da nessuna parte: quando qualcuno apre il link, il suo browser ricostruisce il grafico solo a partire dal link.

Il grafico si trova nella parte del link dopo il simbolo #. I browser non inviano mai quella parte a un sito web, quindi aprire un link di condivisione non fa arrivare i dati nemmeno al nostro server.

Questo ha due conseguenze che vale la pena capire:

- **Il link sono i dati.** Chiunque abbia il link può vedere ogni valore del grafico, quindi condividilo solo con chi può vedere quei dati. I link inoltre tendono a restare in giro (nella cronologia del browser, nelle chat e nelle email, e ovunque vengano inoltrati), quindi tratta il link come tratteresti i dati stessi.
- **Le tabelle grandi producono link lunghi.** Il link cresce con la quantità di dati. Alcune app e alcuni siti possono troncare i link molto lunghi, quindi i link di condivisione sono più adatti a tabelle piccole e medie. Per una tabella grande, condividi piuttosto un’immagine esportata.

## Universal ID

L’accesso è facoltativo, e l’app funziona completamente anche senza. Se hai effettuato l’accesso con un Universal ID, l’app legge il colore del marchio della tua organizzazione per poterlo usare nei tuoi grafici. I tuoi dati non fanno parte di questa richiesta, e l’app non scrive mai nulla nel tuo account.`,
  },
]

export default articles
