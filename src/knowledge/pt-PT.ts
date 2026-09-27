import type { Article } from './types'

const articles: Article[] = [
  {
    id: 'choosing-a-chart',
    title: 'Escolher o gráfico certo',
    summary: 'Qual dos nove tipos de gráfico se adequa aos seus dados, e porquê.',
    group: 'O essencial',
    body: `Um bom gráfico responde a uma única pergunta, num relance. O tipo certo depende daquilo que quer que o leitor repare.

## Comparar quantidades

- **Bar** (colunas) é a escolha mais segura para comparar quantidades entre categorias: vendas por região, votos por opção. As pessoas avaliam o comprimento das barras com muita precisão.
- **Horizontal bar** (barras horizontais) faz o mesmo trabalho e funciona melhor quando os nomes das categorias são longos ou numerosos, porque os rótulos têm espaço para ser lidos.
- **Stacked bar** (colunas empilhadas) mostra como é composto cada total, por exemplo, as vendas por trimestre divididas por região. Os totais comparam-se facilmente; as partes acima da primeira, nem tanto.

## Mostrar a evolução ao longo do tempo

- **Line** (linhas) é a escolha natural para tudo o que é medido em sequência, como meses ou anos. Várias linhas no mesmo gráfico permitem comparar tendências.
- **Area** (áreas) é uma linha com o espaço por baixo preenchido. Realça o volume, mas áreas sobrepostas podem tapar-se umas às outras, por isso fique-se por poucas séries.

## Mostrar as partes de um todo

- **Pie** (circular) e **Donut** (anel) mostram como se reparte um total. Funcionam melhor com poucas fatias que somem algo com sentido, como 100% de um orçamento. Com muitas fatias semelhantes, um gráfico de colunas lê-se melhor. Usam apenas uma série de valores, e os valores negativos não podem ser apresentados como fatias.

## Outras formas

- **Scatter** (dispersão) coloca um número em relação a outro, para mostrar se variam em conjunto, como a altura e o peso. Ambos os eixos têm de ser números.
- **Radar** compara vários itens segundo o mesmo conjunto de medidas, dispostas em círculo. Adequa-se a poucos itens e poucas medidas; para além disso, torna-se difícil de ler.

## Algumas dicas gerais

- Dê ao gráfico um título que diga o que mostra.
- Use poucas cores e mostre a legenda apenas quando houver mais de uma série.
- Os rótulos de dados ajudam quando os valores exatos importam; a grelha ajuda quando o leitor vai estimar valores a olho.`,
  },
  {
    id: 'what-is-csv',
    title: 'O que é, afinal, o CSV',
    summary: 'O formato de texto simples por detrás da maioria dos dados que pode representar num gráfico.',
    group: 'O essencial',
    body: `CSV é a sigla de comma-separated values, ou seja, «valores separados por vírgulas». É uma das formas mais antigas e simples de guardar uma tabela: texto simples, uma linha por cada linha da tabela, com uma vírgula entre cada valor.

## Um exemplo

Uma pequena tabela de vendas poderia ficar assim em CSV:

Mês,Vendas

Jan,120

Fev,150

Num ficheiro real, cada linha ocupa a sua própria linha, sem linhas em branco entre elas. A primeira linha é o **cabeçalho**: dá nome a cada coluna. Cada linha seguinte é uma linha de dados, com os valores pela mesma ordem do cabeçalho.

## Porque é que está em todo o lado

Como o CSV é apenas texto, quase todos os programas o conseguem ler e escrever: folhas de cálculo, bases de dados, software de contabilidade, ferramentas de inquéritos e muitos sites que disponibilizam transferências. Não tem tipos de letra, cores, fórmulas nem várias folhas — apenas os valores —, e é precisamente isso que o torna tão fácil de passar de um programa para outro.

## Algumas variantes que vai encontrar

- **Outros separadores.** Alguns programas usam ponto e vírgula, tabulação ou barra vertical em vez de vírgula. O ponto e vírgula é comum em países onde a vírgula é o separador decimal, como Portugal.
- **Aspas.** Um valor que contenha uma vírgula, como um nome escrito Santos, Maria, fica entre aspas duplas, para que a vírgula não seja confundida com um separador.
- **Texto separado por tabulações.** Quando copia um bloco de células de uma folha de cálculo, ele chega normalmente à área de transferência como texto com uma tabulação entre cada valor. É suficientemente parecido com o CSV para que o Universal Charts também o consiga ler.

## Obter um CSV a partir de uma folha de cálculo

A maioria das folhas de cálculo consegue guardar ou transferir uma folha em formato CSV, muitas vezes através de Guardar como ou Transferir. No entanto, costuma ser mais rápido selecionar as células que pretende, incluindo a linha de cabeçalho, copiá-las e colá-las diretamente no Universal Charts.`,
  },
  {
    id: 'data-problems',
    title: 'Quando os seus dados não aparecem bem',
    summary: 'Separadores, vírgulas decimais, datas e colunas que não entram no gráfico.',
    group: 'Como funciona',
    body: `O Universal Charts lê a primeira linha como os nomes das colunas e deteta por si próprio quais as colunas que contêm números. Quando um gráfico parece errado, a causa é quase sempre uma das seguintes.

## Uma coluna não aparece como valor

Uma coluna só é considerada numérica se **todas** as células preenchidas forem números. Uma única entrada como n/d, a definir ou um traço transforma a coluna inteira em texto, e as colunas de texto só podem ser usadas como rótulos. Apague ou corrija a entrada diferente e toque em **Update chart**. As células vazias não são problema.

Os símbolos de moeda (£, $ e €), os sinais de percentagem, os espaços e as vírgulas são ignorados na leitura dos números, pelo que £1,200 e 45% são lidos como 1200 e 45.

## Decimais escritos com vírgula

Como as vírgulas dentro dos números são tratadas como separadores de milhares, uma vírgula decimal é mal interpretada: 3,5 passa a 35. Se os seus dados usam a vírgula para as casas decimais, substitua-a por um ponto antes de colar e retire os pontos usados para separar os milhares.

## Fica tudo numa só coluna

A aplicação deteta o separador sozinha: vírgulas, pontos e vírgulas, tabulações e barras verticais são todos reconhecidos. Se mesmo assim ficar tudo numa só coluna, verifique se todas as linhas usam o mesmo separador e se a primeira linha é mesmo o cabeçalho.

## Um valor é dividido em dois

Em dados separados por vírgulas, um valor que contenha uma vírgula tem de estar entre aspas duplas; caso contrário, será lido como dois valores e empurrará tudo o que vem a seguir uma coluna para o lado.

## Datas

As datas são lidas como rótulos, não como uma linha temporal. Aparecem exatamente pela ordem em que estão nos seus dados, por isso ordene as linhas por data antes de colar e escreva todas as datas da mesma forma. As lacunas não são preenchidas: se faltar um mês nos seus dados, também falta no gráfico.

## Colunas sem nome

Se uma célula do cabeçalho estiver vazia, a coluna passa a chamar-se Column 1, Column 2 e assim por diante, consoante a sua posição.

## O gráfico não muda

Depois de editar os dados, toque em **Update chart**. O gráfico só é redesenhado a partir do texto quando o pedir.`,
  },
  {
    id: 'how-it-works',
    title: 'Como funciona o Universal Charts',
    summary: 'Dos dados colados à imagem final, tudo dentro do seu navegador.',
    group: 'Como funciona',
    body: `O Universal Charts transforma uma tabela de números num gráfico sem que os seus dados sejam alguma vez carregados para a internet. Tudo acontece dentro do seu navegador, no seu próprio dispositivo.

## Criar um gráfico

1. Cole os seus dados na caixa Data, com os nomes das colunas na primeira linha, e toque em **Update chart**. Para experimentar primeiro, escolha um dos conjuntos de dados de exemplo.
2. A aplicação sugere um ponto de partida: a primeira coluna com texto passa a ser as categorias do eixo X, e cada coluna de números passa a ser uma série.
3. Escolha um tipo de gráfico e, se necessário, altere as colunas usadas. Para um gráfico de dispersão, escolha uma coluna de números para o eixo X.
4. Adicione um título, escolha as cores e ative ou desative a grelha, a legenda, os rótulos de dados e as curvas suavizadas.

## Exportar

- **PNG** guarda uma imagem do gráfico. Escolha 1×, 2× ou 3×: quanto maior o número, mais nítida a imagem e maior o ficheiro. 2× serve para a maioria dos documentos e apresentações.
- **SVG** guarda o gráfico como desenho vetorial, que se mantém nítido em qualquer tamanho e pode ser editado em programas de design.
- **Copy** coloca um PNG do gráfico na área de transferência, pronto a colar num documento ou mensagem. Alguns navegadores não o permitem; nesse caso, a aplicação indica-o e pode transferir um PNG em alternativa.

As exportações têm sempre fundo branco, mesmo quando a aplicação está em modo escuro, para que o mesmo gráfico tenha o mesmo aspeto onde quer que vá parar.

## A ter em conta

- **O seu trabalho não é guardado.** A aplicação não guarda nenhuma cópia dos seus dados nem do gráfico. Se recarregar a página, recomeça com os dados de exemplo. Guarde os seus dados originais, ou crie uma ligação de partilha, se quiser voltar a um gráfico.
- **Funciona offline.** Depois de carregada, a aplicação consegue criar gráficos sem ligação à internet, porque nada precisa de um servidor.
- **Tem sessão iniciada com um Universal ID?** Se a sua organização definiu uma cor da marca, esta passa automaticamente para o início da paleta de cores, ligeiramente escurecida se necessário para se destacar bem sobre o fundo branco.`,
  },
  {
    id: 'privacy-and-sharing',
    title: 'Os seus dados e as ligações de partilha',
    summary: 'O que fica no seu dispositivo e o que contém uma ligação de partilha.',
    group: 'Privacidade e segurança',
    body: `O Universal Charts não tem um servidor próprio para onde enviar os seus dados. A leitura dos dados, o desenho do gráfico e a criação da exportação acontecem todos no seu navegador, no seu dispositivo.

## O que fica no seu dispositivo

- Os dados que cola são lidos no navegador e nunca são carregados para a internet.
- O gráfico é desenhado no navegador.
- Os ficheiros PNG e SVG são criados no navegador e guardados diretamente no seu dispositivo.
- A aplicação não guarda os seus dados depois de sair: não ficam armazenados no dispositivo nem em nenhum outro lado.

## Como funciona uma ligação de partilha

**Share link** copia um endereço web que contém o gráfico inteiro — as definições **e todos os dados** — comprimido na própria ligação. A aplicação não armazena gráficos em lado nenhum: quando alguém abre a ligação, o navegador dessa pessoa reconstrói o gráfico apenas a partir da ligação.

Isto tem duas consequências que vale a pena compreender:

- **A ligação são os dados.** Qualquer pessoa que tenha a ligação pode ver todos os valores do gráfico, por isso partilhe-a apenas com quem pode ver esses dados. Além disso, as ligações tendem a ficar guardadas — no histórico do navegador, em conversas e e-mails, e onde quer que sejam reencaminhadas —, por isso trate a ligação como trataria os próprios dados.
- **As tabelas grandes dão origem a ligações longas.** A ligação cresce com a quantidade de dados. Algumas aplicações e sites podem cortar ligações muito longas, por isso as ligações de partilha são mais adequadas a tabelas pequenas e médias. Para uma tabela grande, partilhe antes uma imagem exportada.

## Universal ID

Iniciar sessão é opcional, e a aplicação funciona totalmente sem isso. Se tiver sessão iniciada com um Universal ID, a aplicação lê a cor da marca da sua organização para a poder usar nos seus gráficos. Os seus dados não fazem parte desse pedido, e a aplicação nunca escreve nada na sua conta.`,
  },
]

export default articles
