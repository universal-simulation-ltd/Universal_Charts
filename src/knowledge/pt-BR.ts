import type { Article } from './types'

const articles: Article[] = [
  {
    id: 'choosing-a-chart',
    title: 'Como escolher o gráfico certo',
    summary: 'Qual dos nove tipos de gráfico combina com os seus dados, e por quê.',
    group: 'O básico',
    body: `Um bom gráfico responde a uma única pergunta, em um piscar de olhos. O tipo certo depende do que você quer que o leitor perceba.

## Comparar quantidades

- **Bar** (colunas) é a escolha mais segura para comparar quantidades entre categorias: vendas por região, votos por opção. As pessoas avaliam o comprimento das barras com muita precisão.
- **Horizontal bar** (barras horizontais) faz o mesmo trabalho e funciona melhor quando os nomes das categorias são longos ou numerosos, porque os rótulos têm espaço para ser lidos.
- **Stacked bar** (colunas empilhadas) mostra como cada total é formado, por exemplo, vendas por trimestre divididas por região. Os totais são fáceis de comparar; as partes acima da primeira, nem tanto.

## Mostrar mudanças ao longo do tempo

- **Line** (linhas) é a escolha natural para qualquer coisa medida em sequência, como meses ou anos. Várias linhas em um mesmo gráfico permitem comparar tendências.
- **Area** (áreas) é uma linha com o espaço abaixo dela preenchido. Ela destaca o volume, mas áreas sobrepostas podem esconder umas às outras, então use poucas séries.

## Mostrar as partes de um todo

- **Pie** (pizza) e **Donut** (rosca) mostram como um total se divide. Funcionam melhor com poucas fatias que somam algo com sentido, como 100% de um orçamento. Com muitas fatias parecidas, um gráfico de colunas é mais fácil de ler. Eles usam só uma série de valores, e valores negativos não podem ser mostrados como fatias.

## Outros formatos

- **Scatter** (dispersão) coloca um número em relação a outro, para mostrar se eles variam juntos, como altura e peso. Os dois eixos precisam ser números.
- **Radar** compara vários itens com base no mesmo conjunto de medidas, dispostas em círculo. Funciona para poucos itens e poucas medidas; além disso, fica difícil de ler.

## Algumas dicas gerais

- Dê ao gráfico um título que diga o que ele mostra.
- Use poucas cores e mostre a legenda só quando houver mais de uma série.
- Rótulos de dados ajudam quando os valores exatos importam; linhas de grade ajudam quando o leitor vai estimar valores a olho.`,
  },
  {
    id: 'what-is-csv',
    title: 'O que é CSV, afinal',
    summary: 'O formato de texto simples por trás da maioria dos dados que você pode colocar em um gráfico.',
    group: 'O básico',
    body: `CSV é a sigla de comma-separated values, ou seja, "valores separados por vírgulas". É uma das formas mais antigas e simples de guardar uma tabela: texto puro, uma linha para cada linha da tabela, com uma vírgula entre cada valor.

## Um exemplo

Uma pequena tabela de vendas poderia ficar assim em CSV:

Mês,Vendas

Jan,120

Fev,150

Em um arquivo de verdade, cada linha fica sozinha, sem linhas em branco entre elas. A primeira linha é o **cabeçalho**: ela dá nome a cada coluna. Cada linha seguinte é uma linha de dados, com os valores na mesma ordem do cabeçalho.

## Por que ele está em toda parte

Como o CSV é só texto, quase todo programa consegue ler e gravar esse formato: planilhas, bancos de dados, programas de contabilidade, ferramentas de pesquisa e muitos sites que oferecem downloads. Ele não tem fontes, cores, fórmulas nem várias abas — só os valores —, e é justamente isso que o torna tão fácil de levar de um programa para outro.

## Algumas variações que você vai encontrar

- **Outros separadores.** Alguns programas usam ponto e vírgula, tabulação ou barra vertical em vez de vírgula. O ponto e vírgula é comum em países onde a vírgula é o separador decimal, como o Brasil.
- **Aspas.** Um valor que contém uma vírgula, como um nome escrito Silva, João, fica entre aspas duplas para que a vírgula não seja confundida com um separador.
- **Texto separado por tabulação.** Quando você copia um bloco de células de uma planilha, ele normalmente vai para a área de transferência como texto com uma tabulação entre cada valor. Isso é parecido o bastante com CSV para que o Universal Charts também consiga ler.

## Tirando um CSV de uma planilha

A maioria dos programas de planilha consegue salvar ou baixar uma planilha como CSV, geralmente em Salvar como ou Fazer download. Mas costuma ser mais rápido selecionar as células que você quer, incluindo a linha de cabeçalho, copiar e colar direto no Universal Charts.`,
  },
  {
    id: 'data-problems',
    title: 'Quando os seus dados não aparecem direito',
    summary: 'Separadores, vírgulas decimais, datas e colunas que não entram no gráfico.',
    group: 'Como funciona',
    body: `O Universal Charts lê a primeira linha como os nomes das colunas e descobre sozinho quais colunas têm números. Quando um gráfico parece errado, a causa quase sempre é uma das seguintes.

## Uma coluna não aparece como valor

Uma coluna só é considerada numérica se **todas** as células preenchidas nela forem números. Uma única entrada como n/d, a definir ou um traço transforma a coluna inteira em texto, e colunas de texto só podem ser usadas como rótulos. Apague ou corrija a entrada diferente e toque em **Update chart**. Células vazias não são problema.

Símbolos de moeda (£, $ e €), sinais de porcentagem, espaços e vírgulas são ignorados na leitura dos números, então £1,200 e 45% são lidos como 1200 e 45.

## Decimais escritos com vírgula

Como as vírgulas dentro dos números são tratadas como separadores de milhar, uma vírgula decimal é lida errado: 3,5 vira 35. Se os seus dados usam vírgula para decimais, troque por ponto antes de colar e tire os pontos usados para separar milhares.

## Tudo cai em uma coluna só

O app descobre o separador sozinho: vírgulas, pontos e vírgulas, tabulações e barras verticais são todos reconhecidos. Se mesmo assim tudo cair em uma coluna só, confira se todas as linhas usam o mesmo separador e se a primeira linha é mesmo o cabeçalho.

## Um valor é dividido em dois

Em dados separados por vírgula, um valor que contém uma vírgula precisa estar entre aspas duplas; senão, ele será lido como dois valores e vai empurrar tudo o que vem depois uma coluna para o lado.

## Datas

As datas são lidas como rótulos, não como uma linha do tempo. Elas aparecem exatamente na ordem em que estão nos seus dados, então ordene as linhas por data antes de colar e escreva todas as datas do mesmo jeito. Lacunas não são preenchidas: se falta um mês nos seus dados, ele também falta no gráfico.

## Colunas sem nome

Se uma célula do cabeçalho estiver vazia, a coluna recebe o nome Column 1, Column 2 e assim por diante, de acordo com a posição.

## O gráfico não muda

Depois de editar os dados, toque em **Update chart**. O gráfico só é redesenhado a partir do texto quando você pede.`,
  },
  {
    id: 'how-it-works',
    title: 'Como o Universal Charts funciona',
    summary: 'Dos dados colados à imagem pronta, tudo dentro do seu navegador.',
    group: 'Como funciona',
    body: `O Universal Charts transforma uma tabela de números em um gráfico sem que os seus dados sejam enviados para lugar nenhum. Tudo acontece dentro do seu navegador, no seu próprio dispositivo.

## Criando um gráfico

1. Cole os seus dados na caixa Data, com os nomes das colunas na primeira linha, e toque em **Update chart**. Para testar antes, escolha um dos conjuntos de dados de exemplo.
2. O app sugere um ponto de partida: a primeira coluna com texto vira as categorias do eixo X, e cada coluna de números vira uma série.
3. Escolha um tipo de gráfico e, se precisar, mude as colunas usadas. Para um gráfico de dispersão, escolha uma coluna de números para o eixo X.
4. Adicione um título, escolha as cores e ligue ou desligue as linhas de grade, a legenda, os rótulos de dados e as curvas suavizadas.

## Exportando

- **PNG** salva uma imagem do gráfico. Escolha 1×, 2× ou 3×: quanto maior o número, mais nítida a imagem e maior o arquivo. 2× serve para a maioria dos documentos e apresentações.
- **SVG** salva o gráfico como um desenho vetorial, que continua nítido em qualquer tamanho e pode ser editado em programas de design.
- **Copy** coloca um PNG do gráfico na área de transferência, pronto para colar em um documento ou mensagem. Alguns navegadores não permitem isso; nesse caso, o app avisa e você pode baixar um PNG.

As exportações sempre têm fundo branco, mesmo quando o app está no modo escuro, para que o mesmo gráfico fique igual em qualquer lugar.

## Bom saber

- **O seu trabalho não é salvo.** O app não guarda nenhuma cópia dos seus dados nem do gráfico. Se você recarregar a página, ele começa de novo com os dados de exemplo. Guarde os seus dados originais, ou crie um link de compartilhamento, se quiser voltar a um gráfico depois.
- **Funciona off-line.** Depois de carregado, o app consegue criar gráficos sem conexão com a internet, porque nada depende de um servidor.
- **Entrou com um Universal ID?** Se a sua organização definiu uma cor da marca, ela passa a ser a primeira da paleta automaticamente, um pouco escurecida se necessário para se destacar bem no fundo branco.`,
  },
  {
    id: 'privacy-and-sharing',
    title: 'Os seus dados e os links de compartilhamento',
    summary: 'O que fica no seu dispositivo e o que um link de compartilhamento contém.',
    group: 'Privacidade e segurança',
    body: `O Universal Charts não tem um servidor próprio para onde enviar os seus dados. Ler os dados, desenhar o gráfico e gerar a exportação são coisas que acontecem no seu navegador, no seu dispositivo.

## O que fica no seu dispositivo

- Os dados que você cola são lidos no navegador e nunca são enviados.
- O gráfico é desenhado no navegador.
- Os arquivos PNG e SVG são criados no navegador e salvos direto no seu dispositivo.
- O app não guarda os seus dados depois que você sai: eles não ficam armazenados no dispositivo nem em nenhum outro lugar.

## Como funciona um link de compartilhamento

**Share link** copia um endereço da web que contém o gráfico inteiro — as configurações **e todos os dados** — compactado dentro do próprio link. O app não armazena gráficos em lugar nenhum: quando alguém abre o link, o navegador dessa pessoa monta o gráfico de novo só a partir do link.

Isso tem duas consequências que vale a pena entender:

- **O link é os dados.** Qualquer pessoa com o link pode ver todos os valores do gráfico, então compartilhe só com quem pode ver esses dados. Os links também costumam ficar guardados — no histórico do navegador, em conversas e e-mails, e em todo lugar para onde forem encaminhados —, então trate o link como você trataria os próprios dados.
- **Tabelas grandes geram links longos.** O link cresce com a quantidade de dados. Alguns apps e sites podem cortar links muito longos, então os links de compartilhamento funcionam melhor para tabelas pequenas e médias. Para uma tabela grande, compartilhe uma imagem exportada.

## Universal ID

Entrar na conta é opcional, e o app funciona por completo sem isso. Se você entrou com um Universal ID, o app lê a cor da marca da sua organização para poder usá-la nos seus gráficos. Os seus dados não fazem parte dessa consulta, e o app nunca grava nada na sua conta.`,
  },
]

export default articles
