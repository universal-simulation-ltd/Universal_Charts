import type { Article } from './types'

const articles: Article[] = [
  {
    id: 'choosing-a-chart',
    title: 'Das richtige Diagramm wählen',
    summary: 'Welcher der neun Diagrammtypen zu Ihren Daten passt, und warum.',
    group: 'Grundlagen',
    body: `Ein gutes Diagramm beantwortet auf einen Blick eine einzige Frage. Welcher Typ der richtige ist, hängt davon ab, was dem Betrachter auffallen soll.

## Mengen vergleichen

- **Bar** (Säulen) ist die sicherste Wahl, um Mengen zwischen Kategorien zu vergleichen: Umsatz nach Region, Stimmen nach Option. Die Länge von Balken schätzen Menschen sehr genau ein.
- **Horizontal bar** (Balken) erfüllt denselben Zweck und eignet sich besser, wenn die Kategorienamen lang oder zahlreich sind, weil die Beschriftungen Platz zum Lesen haben.
- **Stacked bar** (gestapelte Säulen) zeigt, wie sich jede Summe zusammensetzt, etwa der Umsatz pro Quartal aufgeteilt nach Region. Die Summen lassen sich leicht vergleichen, die einzelnen Teile oberhalb des untersten weniger gut.

## Entwicklung über die Zeit zeigen

- **Line** (Linien) ist die naheliegende Wahl für alles, was in einer Abfolge gemessen wird, etwa Monate oder Jahre. Mehrere Linien in einem Diagramm machen Trends vergleichbar.
- **Area** (Flächen) ist eine Linie, deren Fläche darunter gefüllt ist. Sie betont das Volumen, aber überlappende Flächen können sich gegenseitig verdecken – bleiben Sie also bei wenigen Datenreihen.

## Teile eines Ganzen zeigen

- **Pie** (Kreis) und **Donut** (Ring) zeigen, wie sich eine Summe aufteilt. Sie funktionieren am besten mit wenigen Segmenten, die zusammen etwas Sinnvolles ergeben, etwa 100 Prozent eines Budgets. Bei vielen ähnlichen Segmenten ist ein Säulendiagramm leichter zu lesen. Sie verwenden nur eine Datenreihe, und Werte unter null lassen sich nicht als Segmente darstellen.

## Weitere Formen

- **Scatter** (Streudiagramm) stellt eine Zahl einer anderen gegenüber, um zu zeigen, ob sie sich gemeinsam verändern, etwa Größe und Gewicht. Beide Achsen müssen Zahlen sein.
- **Radar** vergleicht mehrere Elemente anhand derselben Kennzahlen, die im Kreis angeordnet sind. Es eignet sich für wenige Elemente und wenige Kennzahlen; darüber hinaus wird es schwer lesbar.

## Ein paar allgemeine Tipps

- Geben Sie dem Diagramm einen Titel, der sagt, was es zeigt.
- Verwenden Sie wenige Farben, und blenden Sie die Legende nur ein, wenn es mehr als eine Datenreihe gibt.
- Datenbeschriftungen helfen, wenn es auf genaue Werte ankommt; Gitternetzlinien helfen, wenn Werte mit dem Auge geschätzt werden.`,
  },
  {
    id: 'what-is-csv',
    title: 'Was CSV eigentlich ist',
    summary: 'Das einfache Textformat hinter den meisten Daten, die sich darstellen lassen.',
    group: 'Grundlagen',
    body: `CSV steht für comma-separated values, also „durch Kommas getrennte Werte“. Es ist eine der ältesten und einfachsten Arten, eine Tabelle zu speichern: reiner Text, eine Zeile pro Tabellenzeile und ein Komma zwischen den Werten.

## Ein Beispiel

Eine kleine Umsatztabelle könnte als CSV so aussehen:

Monat,Umsatz

Jan,120

Feb,150

In einer echten Datei steht jede Zeile für sich, ohne Leerzeilen dazwischen. Die erste Zeile ist die **Kopfzeile**: Sie benennt jede Spalte. Jede weitere Zeile ist eine Datenzeile, deren Werte in derselben Reihenfolge stehen wie in der Kopfzeile.

## Warum es überall vorkommt

Da CSV nur Text ist, kann fast jedes Programm es lesen und schreiben: Tabellenkalkulationen, Datenbanken, Buchhaltungssoftware, Umfragewerkzeuge und viele Websites mit Download-Funktion. Es enthält keine Schriftarten, Farben, Formeln oder mehrere Tabellenblätter – nur die Werte –, und genau das macht es so leicht, Daten zwischen Programmen auszutauschen.

## Einige Varianten, die Ihnen begegnen werden

- **Andere Trennzeichen.** Manche Programme verwenden statt eines Kommas ein Semikolon, einen Tabulator oder einen senkrechten Strich. Das Semikolon ist in Ländern üblich, in denen das Komma das Dezimalzeichen ist, etwa in Deutschland.
- **Anführungszeichen.** Ein Wert, der selbst ein Komma enthält, etwa ein Name wie Müller, Anna, wird in doppelte gerade Anführungszeichen gesetzt, damit das Komma nicht als Trennzeichen gilt.
- **Tabulatorgetrennter Text.** Wenn Sie einen Zellbereich aus einer Tabellenkalkulation kopieren, landet er meist als Text mit einem Tabulator zwischen den Werten in der Zwischenablage. Das ist CSV ähnlich genug, dass Universal Charts es ebenfalls liest.

## CSV aus einer Tabellenkalkulation holen

Die meisten Tabellenkalkulationen können ein Blatt als CSV speichern oder herunterladen, oft über Speichern unter oder Herunterladen. Meist geht es aber schneller, die gewünschten Zellen einschließlich der Kopfzeile zu markieren, zu kopieren und direkt in Universal Charts einzufügen.`,
  },
  {
    id: 'data-problems',
    title: 'Wenn Ihre Daten nicht richtig aussehen',
    summary: 'Trennzeichen, Dezimalkommas, Datumsangaben und Spalten, die sich nicht darstellen lassen.',
    group: 'So funktioniert es',
    body: `Universal Charts liest die erste Zeile als Spaltennamen und erkennt selbst, welche Spalten Zahlen enthalten. Wenn ein Diagramm falsch aussieht, liegt es fast immer an einem der folgenden Punkte.

## Eine Spalte erscheint nicht als Wert

Eine Spalte gilt nur dann als Zahlenspalte, wenn **jede** ausgefüllte Zelle darin eine Zahl ist. Ein einziger Eintrag wie k. A., offen oder ein Strich macht die ganze Spalte zu Text, und Textspalten können nur als Beschriftungen verwendet werden. Löschen oder korrigieren Sie den Ausreißer und tippen Sie dann auf **Update chart**. Leere Zellen sind kein Problem.

Währungszeichen (£, $ und €), Prozentzeichen, Leerzeichen und Kommas werden beim Lesen von Zahlen ignoriert, sodass £1,200 und 45% als 1200 und 45 gelesen werden.

## Dezimalzahlen mit Komma

Da Kommas innerhalb von Zahlen als Tausendertrennzeichen behandelt werden, wird ein Dezimalkomma falsch gelesen: Aus 3,5 wird 35. Wenn Ihre Daten Kommas als Dezimalzeichen verwenden, ersetzen Sie sie vor dem Einfügen durch Punkte und entfernen Sie Punkte, die als Tausendertrennzeichen dienen.

## Alles landet in einer Spalte

Die App erkennt das Trennzeichen selbst: Kommas, Semikolons, Tabulatoren und senkrechte Striche werden alle erkannt. Wenn trotzdem alles in einer Spalte landet, prüfen Sie, ob jede Zeile dasselbe Trennzeichen verwendet und ob die erste Zeile wirklich die Kopfzeile ist.

## Ein Wert wird zweigeteilt

In kommagetrennten Daten muss ein Wert, der ein Komma enthält, in doppelte Anführungszeichen gesetzt werden. Sonst wird er als zwei Werte gelesen und verschiebt alles danach um eine Spalte.

## Datumsangaben

Datumsangaben werden als Beschriftungen gelesen, nicht als Zeitachse. Sie erscheinen genau in der Reihenfolge, in der sie in Ihren Daten stehen. Sortieren Sie die Zeilen also vor dem Einfügen nach Datum und schreiben Sie alle Datumsangaben gleich. Lücken werden nicht aufgefüllt: Fehlt ein Monat in Ihren Daten, fehlt er auch im Diagramm.

## Spalten ohne Namen

Ist eine Zelle der Kopfzeile leer, heißt die Spalte je nach Position Column 1, Column 2 und so weiter.

## Das Diagramm ändert sich nicht

Tippen Sie nach dem Bearbeiten der Daten auf **Update chart**. Das Diagramm wird erst dann aus dem Text neu gezeichnet, wenn Sie es verlangen.`,
  },
  {
    id: 'how-it-works',
    title: 'So funktioniert Universal Charts',
    summary: 'Von eingefügten Daten zum fertigen Bild, alles in Ihrem Browser.',
    group: 'So funktioniert es',
    body: `Universal Charts macht aus einer Zahlentabelle ein Diagramm, ohne dass Ihre Daten jemals hochgeladen werden. Alles geschieht in Ihrem Browser, auf Ihrem eigenen Gerät.

## Ein Diagramm erstellen

1. Fügen Sie Ihre Daten in das Feld Data ein, mit den Spaltennamen in der ersten Zeile, und tippen Sie auf **Update chart**. Wenn Sie zuerst ausprobieren möchten, wählen Sie einen der Beispieldatensätze.
2. Die App schlägt einen Ausgangspunkt vor: Die erste Spalte mit Text wird zu den Kategorien auf der X-Achse, und jede Zahlenspalte wird zu einer Datenreihe.
3. Wählen Sie einen Diagrammtyp und ändern Sie bei Bedarf, welche Spalten verwendet werden. Wählen Sie für ein Streudiagramm eine Zahlenspalte für die X-Achse.
4. Fügen Sie einen Titel hinzu, wählen Sie Farben und schalten Sie Gitternetzlinien, Legende, Datenbeschriftungen und geglättete Kurven ein oder aus.

## Exportieren

- **PNG** speichert ein Bild des Diagramms. Wählen Sie 1×, 2× oder 3×: Je höher die Zahl, desto schärfer das Bild und desto größer die Datei. 2× passt für die meisten Dokumente und Präsentationen.
- **SVG** speichert das Diagramm als Vektorgrafik, die in jeder Größe scharf bleibt und sich in Grafikprogrammen bearbeiten lässt.
- **Copy** legt ein PNG des Diagramms in die Zwischenablage, bereit zum Einfügen in ein Dokument oder eine Nachricht. Manche Browser erlauben das nicht; dann weist die App darauf hin, und Sie können stattdessen ein PNG herunterladen.

Exporte haben immer einen weißen Hintergrund, auch wenn die App im dunklen Modus ist, damit dasselbe Diagramm überall gleich aussieht.

## Gut zu wissen

- **Ihre Arbeit wird nicht gespeichert.** Die App behält keine Kopie Ihrer Daten oder Ihres Diagramms. Wenn Sie die Seite neu laden, beginnt sie wieder mit den Beispieldaten. Bewahren Sie Ihre Originaldaten auf oder erstellen Sie einen Freigabelink, wenn Sie später zu einem Diagramm zurückkehren möchten.
- **Sie funktioniert offline.** Sobald die App geladen ist, kann sie Diagramme ohne Internetverbindung erstellen, weil nichts davon einen Server braucht.
- **Mit einer Universal ID angemeldet?** Wenn Ihre Organisation eine Markenfarbe festgelegt hat, steht diese automatisch an erster Stelle der Farbpalette – bei Bedarf etwas abgedunkelt, damit sie sich deutlich vom weißen Hintergrund abhebt.`,
  },
  {
    id: 'privacy-and-sharing',
    title: 'Ihre Daten und Freigabelinks',
    summary: 'Was auf Ihrem Gerät bleibt und was ein Freigabelink enthält.',
    group: 'Datenschutz und Sicherheit',
    body: `Universal Charts hat keinen eigenen Server, an den Ihre Daten gesendet werden könnten. Das Einlesen Ihrer Daten, das Zeichnen des Diagramms und das Erstellen des Exports geschehen alle in Ihrem Browser, auf Ihrem Gerät.

## Was auf Ihrem Gerät bleibt

- Die eingefügten Daten werden in Ihrem Browser gelesen und nie hochgeladen.
- Das Diagramm wird in Ihrem Browser gezeichnet.
- PNG- und SVG-Dateien werden in Ihrem Browser erstellt und direkt auf Ihrem Gerät gespeichert.
- Die App behält Ihre Daten nicht, nachdem Sie sie verlassen haben: Sie werden weder auf dem Gerät noch anderswo gespeichert.

## So funktioniert ein Freigabelink

**Share link** kopiert eine Webadresse, die das gesamte Diagramm enthält – seine Einstellungen **und alle seine Daten** –, komprimiert im Link selbst. Die App speichert Diagramme nirgendwo: Wenn jemand den Link öffnet, baut sein Browser das Diagramm allein aus dem Link wieder auf.

Das hat zwei Folgen, die man verstehen sollte:

- **Der Link sind die Daten.** Wer den Link hat, kann jeden Wert im Diagramm sehen. Teilen Sie ihn also nur mit Personen, die die Daten sehen dürfen. Links bleiben zudem oft erhalten – im Browserverlauf, in Chats und E-Mails und überall, wohin sie weitergeleitet werden. Behandeln Sie den Link deshalb wie die Daten selbst.
- **Große Tabellen ergeben lange Links.** Der Link wächst mit der Datenmenge. Manche Apps und Websites kürzen sehr lange Links, daher eignen sich Freigabelinks am besten für kleine und mittelgroße Tabellen. Teilen Sie bei einer großen Tabelle lieber ein exportiertes Bild.

## Universal ID

Die Anmeldung ist optional, und die App funktioniert auch ohne sie vollständig. Wenn Sie mit einer Universal ID angemeldet sind, liest die App die Markenfarbe Ihrer Organisation, um sie in Ihren Diagrammen verwenden zu können. Ihre Daten sind nicht Teil dieser Abfrage, und die App schreibt nie etwas in Ihr Konto.`,
  },
]

export default articles
