import type { Article } from './types'

const articles: Article[] = [
  {
    id: 'choosing-a-chart',
    title: 'Choisir le bon graphique',
    summary: 'Lequel des neuf types de graphique convient à vos données, et pourquoi.',
    group: 'Les bases',
    body: `Un bon graphique répond à une seule question, d’un coup d’œil. Le bon type dépend de ce que vous voulez que le lecteur remarque.

## Comparer des quantités

- **Bar** (barres) est le choix le plus sûr pour comparer des quantités entre catégories : ventes par région, votes par option. On évalue très précisément la longueur des barres.
- **Horizontal bar** (barres horizontales) fait le même travail, et convient mieux lorsque les noms des catégories sont longs ou nombreux, car les étiquettes ont la place d’être lues.
- **Stacked bar** (barres empilées) montre comment chaque total se compose, par exemple les ventes par trimestre réparties par région. Les totaux se comparent facilement ; les éléments situés au-dessus du premier, moins.

## Montrer une évolution dans le temps

- **Line** (courbe) est le choix naturel pour tout ce qui se mesure dans l’ordre, comme des mois ou des années. Plusieurs courbes sur un même graphique permettent de comparer des tendances.
- **Area** (aires) est une courbe dont l’espace en dessous est rempli. Elle met l’accent sur le volume, mais des aires qui se chevauchent peuvent se masquer : limitez-vous à quelques séries.

## Montrer les parts d’un tout

- **Pie** (secteurs) et **Donut** (anneau) montrent comment un total se répartit. Ils fonctionnent mieux avec quelques parts qui forment un tout cohérent, comme 100 % d’un budget. Avec de nombreuses parts similaires, un graphique en barres est plus lisible. Ils n’utilisent qu’une seule série de valeurs, et les valeurs négatives ne peuvent pas être représentées sous forme de parts.

## Autres formes

- **Scatter** (nuage de points) place un nombre en regard d’un autre, pour montrer s’ils évoluent ensemble, comme la taille et le poids. Les deux axes doivent être des nombres.
- **Radar** compare plusieurs éléments selon les mêmes critères, disposés en cercle. Il convient à quelques éléments et quelques critères ; au-delà, il devient difficile à lire.

## Quelques conseils généraux

- Donnez au graphique un titre qui dit ce qu’il montre.
- Limitez les couleurs, et n’affichez la légende que s’il y a plus d’une série.
- Les étiquettes de données sont utiles quand les valeurs exactes comptent ; le quadrillage aide quand le lecteur estime les valeurs à l’œil.`,
  },
  {
    id: 'what-is-csv',
    title: 'Ce qu’est vraiment le CSV',
    summary: 'Le format texte tout simple derrière la plupart des données que l’on peut représenter.',
    group: 'Les bases',
    body: `CSV signifie comma-separated values, c’est-à-dire « valeurs séparées par des virgules ». C’est l’une des manières les plus anciennes et les plus simples d’enregistrer un tableau : du texte brut, une ligne par rangée, avec une virgule entre chaque valeur.

## Un exemple

Un petit tableau de ventes pourrait ressembler à ceci en CSV :

Mois,Ventes

Janv,120

Févr,150

Dans un vrai fichier, chaque rangée occupe sa propre ligne, sans ligne vide entre elles. La première ligne est l’**en-tête** : elle nomme chaque colonne. Chaque ligne suivante est une rangée de données, avec ses valeurs dans le même ordre que l’en-tête.

## Pourquoi on le trouve partout

Comme le CSV n’est que du texte, presque tous les programmes savent le lire et l’écrire : tableurs, bases de données, logiciels de comptabilité, outils d’enquête et de nombreux sites proposant un téléchargement. Il ne contient ni polices, ni couleurs, ni formules, ni onglets — seulement les valeurs — et c’est justement ce qui le rend si facile à passer d’un programme à l’autre.

## Quelques variantes que vous rencontrerez

- **D’autres séparateurs.** Certains programmes utilisent un point-virgule, une tabulation ou une barre verticale au lieu d’une virgule. Le point-virgule est courant dans les pays où la virgule sert de séparateur décimal, comme en France.
- **Les guillemets.** Une valeur qui contient elle-même une virgule, par exemple un nom écrit Dupont, Jean, est placée entre guillemets droits pour que la virgule ne soit pas prise pour un séparateur.
- **Le texte séparé par des tabulations.** Lorsque vous copiez un bloc de cellules dans un tableur, il arrive généralement dans le presse-papiers sous forme de texte avec une tabulation entre chaque valeur. C’est assez proche du CSV pour que Universal Charts le lise aussi.

## Obtenir du CSV depuis un tableur

La plupart des tableurs peuvent enregistrer ou télécharger une feuille au format CSV, souvent via Enregistrer sous ou Télécharger. Il est toutefois généralement plus rapide de sélectionner les cellules voulues, ligne d’en-tête comprise, de les copier et de les coller directement dans Universal Charts.`,
  },
  {
    id: 'data-problems',
    title: 'Quand vos données ne s’affichent pas correctement',
    summary: 'Séparateurs, virgules décimales, dates et colonnes qui refusent de s’afficher.',
    group: 'Fonctionnement',
    body: `Universal Charts lit la première ligne comme les noms des colonnes et détermine lui-même quelles colonnes contiennent des nombres. Quand un graphique semble faux, la cause est presque toujours l’une des suivantes.

## Une colonne n’apparaît pas comme valeur

Une colonne n’est considérée comme numérique que si **toutes** ses cellules remplies contiennent un nombre. Une seule entrée comme n/a, à définir ou un tiret transforme toute la colonne en texte, et les colonnes de texte ne peuvent servir que d’étiquettes. Effacez ou corrigez l’entrée en cause, puis appuyez sur **Update chart**. Les cellules vides ne posent pas de problème.

Les symboles monétaires (£, $ et €), les signes de pourcentage, les espaces et les virgules sont ignorés à la lecture des nombres : £1,200 et 45% sont lus comme 1200 et 45.

## Des décimales écrites avec une virgule

Comme les virgules à l’intérieur des nombres sont traitées comme des séparateurs de milliers, une virgule décimale est mal interprétée : 3,5 devient 35. Si vos données utilisent la virgule pour les décimales, remplacez-la par un point avant de coller, et supprimez les points éventuellement utilisés pour séparer les milliers.

## Tout arrive dans une seule colonne

L’application détecte le séparateur toute seule : virgules, points-virgules, tabulations et barres verticales sont tous reconnus. Si tout arrive encore dans une seule colonne, vérifiez que chaque ligne utilise le même séparateur et que la première ligne est bien l’en-tête.

## Une valeur est coupée en deux

Dans des données séparées par des virgules, une valeur contenant une virgule doit être placée entre guillemets droits, sinon elle sera lue comme deux valeurs et décalera tout ce qui suit d’une colonne.

## Les dates

Les dates sont lues comme des étiquettes, pas comme une échelle de temps. Elles apparaissent exactement dans l’ordre où elles figurent dans vos données : triez donc les lignes par date avant de coller, et écrivez toutes les dates de la même manière. Les trous ne sont pas comblés : s’il manque un mois dans vos données, il manque aussi dans le graphique.

## Des colonnes sans nom

Si une cellule d’en-tête est vide, la colonne est appelée Column 1, Column 2, etc., selon sa position.

## Le graphique ne change pas

Après avoir modifié les données, appuyez sur **Update chart**. Le graphique n’est redessiné à partir du texte que lorsque vous le demandez.`,
  },
  {
    id: 'how-it-works',
    title: 'Comment fonctionne Universal Charts',
    summary: 'Des données collées à l’image finale, entièrement dans votre navigateur.',
    group: 'Fonctionnement',
    body: `Universal Charts transforme un tableau de nombres en graphique sans que vos données soient jamais envoyées en ligne. Tout se passe dans votre navigateur, sur votre propre appareil.

## Créer un graphique

1. Collez vos données dans la zone Data, avec les noms des colonnes sur la première ligne, puis appuyez sur **Update chart**. Pour faire un essai d’abord, choisissez l’un des jeux de données d’exemple.
2. L’application propose un point de départ : la première colonne contenant du texte devient les catégories de l’axe X, et chaque colonne de nombres devient une série.
3. Choisissez un type de graphique et modifiez si besoin les colonnes utilisées. Pour un nuage de points, choisissez une colonne de nombres pour l’axe X.
4. Ajoutez un titre, choisissez les couleurs, et activez ou désactivez le quadrillage, la légende, les étiquettes de données et les courbes lissées.

## Exporter

- **PNG** enregistre une image du graphique. Choisissez 1×, 2× ou 3× : plus le chiffre est élevé, plus l’image est nette et plus le fichier est lourd. 2× convient à la plupart des documents et présentations.
- **SVG** enregistre le graphique sous forme de dessin vectoriel, qui reste net à n’importe quelle taille et peut être modifié dans un logiciel de graphisme.
- **Copy** place une image PNG du graphique dans votre presse-papiers, prête à être collée dans un document ou un message. Certains navigateurs ne le permettent pas ; dans ce cas, l’application vous le signale et vous pouvez télécharger un PNG à la place.

Les exports ont toujours un fond blanc, même lorsque l’application est en mode sombre, afin qu’un même graphique ait le même aspect partout où il est utilisé.

## À savoir

- **Votre travail n’est pas enregistré.** L’application ne conserve aucune copie de vos données ni de votre graphique. Si vous rechargez la page, elle repart des données d’exemple. Gardez vos données d’origine, ou créez un lien de partage, si vous pensez revenir sur un graphique.
- **Elle fonctionne hors ligne.** Une fois l’application chargée, elle peut créer des graphiques sans connexion Internet, car rien ne nécessite de serveur.
- **Connecté avec un Universal ID ?** Si votre organisation a défini une couleur de marque, celle-ci passe automatiquement en tête de la palette, légèrement assombrie si nécessaire pour bien ressortir sur le fond blanc.`,
  },
  {
    id: 'privacy-and-sharing',
    title: 'Vos données et les liens de partage',
    summary: 'Ce qui reste sur votre appareil, et ce que contient un lien de partage.',
    group: 'Confidentialité et sécurité',
    body: `Universal Charts n’a pas de serveur à lui auquel envoyer vos données. La lecture de vos données, le dessin du graphique et la création de l’export se font tous dans votre navigateur, sur votre appareil.

## Ce qui reste sur votre appareil

- Les données que vous collez sont lues dans votre navigateur et ne sont jamais envoyées en ligne.
- Le graphique est dessiné dans votre navigateur.
- Les fichiers PNG et SVG sont créés dans votre navigateur et enregistrés directement sur votre appareil.
- L’application ne conserve pas vos données après votre départ : elles ne sont stockées ni sur l’appareil ni ailleurs.

## Comment fonctionne un lien de partage

**Share link** copie une adresse web qui contient tout le graphique — ses réglages **et toutes ses données** — compressé dans le lien lui-même. L’application ne stocke aucun graphique : lorsque quelqu’un ouvre le lien, son navigateur reconstruit le graphique à partir du lien seul.

Le graphique se trouve dans la partie du lien qui suit le signe #. Les navigateurs n’envoient jamais cette partie à un site web : ouvrir un lien de partage ne transmet donc pas non plus les données à notre serveur.

Cela a deux conséquences qu’il vaut la peine de comprendre :

- **Le lien, ce sont les données.** Toute personne qui possède le lien peut voir chaque valeur du graphique : ne le partagez donc qu’avec des personnes autorisées à voir ces données. Les liens ont aussi tendance à être conservés — dans l’historique du navigateur, dans les discussions et les e-mails, et partout où ils sont transférés — : traitez donc le lien comme vous traiteriez les données elles-mêmes.
- **Les grands tableaux donnent des liens longs.** Le lien s’allonge avec la quantité de données. Certaines applications et certains sites peuvent tronquer les liens très longs : les liens de partage conviennent donc surtout aux tableaux petits et moyens. Pour un grand tableau, partagez plutôt une image exportée.

## Universal ID

La connexion est facultative, et l’application fonctionne pleinement sans elle. Si vous êtes connecté avec un Universal ID, l’application lit la couleur de marque de votre organisation afin de pouvoir l’utiliser dans vos graphiques. Vos données ne font pas partie de cette demande, et l’application n’écrit jamais rien dans votre compte.`,
  },
]

export default articles
