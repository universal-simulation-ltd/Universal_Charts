import type { Article } from './types'

const articles: Article[] = [
  {
    id: 'choosing-a-chart',
    title: 'Doğru grafiği seçmek',
    summary: 'Dokuz grafik türünden hangisinin verilerinize uyduğu ve nedeni.',
    group: 'Temel bilgiler',
    body: `İyi bir grafik tek bir soruyu bir bakışta yanıtlar. Doğru tür, okuyucunun neyi fark etmesini istediğinize bağlıdır.

## Miktarları karşılaştırmak

- **Bar** (sütun), kategoriler arasında miktarları karşılaştırmak için en güvenli seçimdir: bölgeye göre satışlar, seçeneğe göre oylar gibi. İnsanlar çubukların uzunluğunu çok doğru değerlendirir.
- **Horizontal bar** (yatay çubuk) aynı işi görür ve kategori adları uzun ya da çok sayıda olduğunda daha iyi sonuç verir, çünkü etiketlerin okunacak yeri olur.
- **Stacked bar** (yığılmış sütun) her toplamın nasıl oluştuğunu gösterir; örneğin çeyreklere göre satışların bölgelere dağılımı. Toplamlar kolayca karşılaştırılır; en alttakinin üzerindeki parçalar ise daha zor.

## Zaman içindeki değişimi göstermek

- **Line** (çizgi), aylar ya da yıllar gibi sırayla ölçülen her şey için doğal seçimdir. Tek bir grafikteki birkaç çizgi, eğilimleri karşılaştırmanızı sağlar.
- **Area** (alan), altındaki boşluğu doldurulmuş bir çizgidir. Hacmi öne çıkarır, ancak üst üste binen alanlar birbirini gizleyebilir; bu nedenle birkaç seriyle sınırlı kalın.

## Bir bütünün parçalarını göstermek

- **Pie** (pasta) ve **Donut** (halka), bir toplamın nasıl bölündüğünü gösterir. Bir bütçenin yüzde 100’ü gibi anlamlı bir bütün oluşturan birkaç dilimle en iyi sonucu verir. Birbirine benzeyen çok sayıda dilim varsa sütun grafiği daha kolay okunur. Yalnızca tek bir değer serisi kullanırlar ve sıfırın altındaki değerler dilim olarak gösterilemez.

## Diğer biçimler

- **Scatter** (dağılım), bir sayıyı başka bir sayıya karşı çizer ve boy ile kilo gibi ikisinin birlikte değişip değişmediğini gösterir. İki eksen de sayı olmalıdır.
- **Radar**, birkaç öğeyi daire şeklinde dizilmiş aynı ölçütler kümesi üzerinden karşılaştırır. Az sayıda öğe ve ölçüt için uygundur; daha fazlasında okunması zorlaşır.

## Birkaç genel ipucu

- Grafiğe ne gösterdiğini söyleyen bir başlık verin.
- Renkleri az tutun ve göstergeyi yalnızca birden fazla seri olduğunda kullanın.
- Veri etiketleri, kesin değerlerin önemli olduğu durumlarda; kılavuz çizgileri ise okuyucunun değerleri gözle tahmin edeceği durumlarda işe yarar.`,
  },
  {
    id: 'what-is-csv',
    title: 'CSV aslında nedir',
    summary: 'Grafiğe dökebileceğiniz verilerin çoğunun ardındaki basit metin biçimi.',
    group: 'Temel bilgiler',
    body: `CSV, comma-separated values, yani “virgülle ayrılmış değerler” ifadesinin kısaltmasıdır. Bir tabloyu saklamanın en eski ve en basit yollarından biridir: düz metin, her tablo satırı için bir satır ve her değerin arasında bir virgül.

## Bir örnek

Küçük bir satış tablosu CSV olarak şöyle görünebilir:

Ay,Satış

Oca,120

Şub,150

Gerçek bir dosyada her satır kendi satırında durur ve aralarında boş satır olmaz. İlk satır **başlık satırıdır**: her sütunu adlandırır. Sonraki her satır bir veri satırıdır ve değerleri başlıktaki sırayla yer alır.

## Neden her yerde

CSV yalnızca metin olduğu için neredeyse her program onu okuyabilir ve yazabilir: elektronik tablolar, veritabanları, muhasebe yazılımları, anket araçları ve indirme sunan birçok web sitesi. Yazı tipi, renk, formül ya da birden fazla sayfa içermez; yalnızca değerleri içerir ve onu programlar arasında taşımayı bu kadar kolaylaştıran da tam olarak budur.

## Karşılaşacağınız bazı çeşitler

- **Başka ayırıcılar.** Bazı programlar virgül yerine noktalı virgül, sekme ya da dikey çizgi kullanır. Noktalı virgül, Türkiye gibi virgülün ondalık ayırıcı olduğu ülkelerde yaygındır.
- **Tırnak işaretleri.** Kendisi virgül içeren bir değer, örneğin Yılmaz, Ayşe şeklinde yazılmış bir ad, virgülün ayırıcı sanılmaması için çift tırnak içine alınır.
- **Sekmeyle ayrılmış metin.** Bir elektronik tablodan bir hücre bloğunu kopyaladığınızda, genellikle panoya her değerin arasında bir sekme bulunan metin olarak gelir. Bu, Universal Charts’ın onu da okuyabileceği kadar CSV’ye yakındır.

## Bir elektronik tablodan CSV almak

Çoğu elektronik tablo programı bir sayfayı CSV olarak kaydedebilir ya da indirebilir; bu seçenek genellikle Farklı kaydet veya İndir altında bulunur. Yine de istediğiniz hücreleri başlık satırıyla birlikte seçip kopyalamak ve doğrudan Universal Charts’a yapıştırmak genellikle daha hızlıdır.`,
  },
  {
    id: 'data-problems',
    title: 'Verileriniz doğru görünmediğinde',
    summary: 'Ayırıcılar, ondalık virgüller, tarihler ve grafiğe girmeyen sütunlar.',
    group: 'Nasıl çalışır',
    body: `Universal Charts ilk satırı sütun adları olarak okur ve hangi sütunların sayı içerdiğini kendisi belirler. Bir grafik yanlış göründüğünde neden neredeyse her zaman aşağıdakilerden biridir.

## Bir sütun değer olarak görünmüyor

Bir sütun, ancak içindeki dolu hücrelerin **tamamı** sayıysa sayısal kabul edilir. Yok, belirsiz ya da bir kısa çizgi gibi tek bir giriş bile sütunun tamamını metne dönüştürür ve metin sütunları yalnızca etiket olarak kullanılabilir. Uyumsuz girişi silin ya da düzeltin, ardından **Update chart** düğmesine dokunun. Boş hücreler sorun yaratmaz.

Sayılar okunurken para birimi simgeleri (£, $ ve €), yüzde işaretleri, boşluklar ve virgüller yok sayılır; bu nedenle £1,200 ve 45% değerleri 1200 ve 45 olarak okunur.

## Virgülle yazılmış ondalıklar

Sayıların içindeki virgüller binlik ayırıcı olarak işlendiğinden, ondalık virgül yanlış okunur: 3,5 değeri 35 olur. Verileriniz ondalıklar için virgül kullanıyorsa, yapıştırmadan önce virgülleri noktayla değiştirin ve binlikleri ayırmak için kullanılan noktaları kaldırın.

## Her şey tek bir sütuna düşüyor

Uygulama ayırıcıyı kendisi bulur: virgüller, noktalı virgüller, sekmeler ve dikey çizgilerin hepsi tanınır. Her şey yine de tek bir sütuna düşüyorsa, her satırın aynı ayırıcıyı kullandığını ve ilk satırın gerçekten başlık satırı olduğunu kontrol edin.

## Bir değer ikiye bölünüyor

Virgülle ayrılmış verilerde, virgül içeren bir değer çift tırnak içine alınmalıdır; aksi takdirde iki değer olarak okunur ve kendisinden sonra gelen her şeyi bir sütun kaydırır.

## Tarihler

Tarihler bir zaman çizelgesi olarak değil, etiket olarak okunur. Verilerinizdeki sırayla aynen görünürler; bu nedenle yapıştırmadan önce satırları tarihe göre sıralayın ve tüm tarihleri aynı şekilde yazın. Boşluklar doldurulmaz: verilerinizde bir ay eksikse grafikte de eksik olur.

## Adı olmayan sütunlar

Bir başlık hücresi boşsa sütun, konumuna göre Column 1, Column 2 şeklinde adlandırılır.

## Grafik değişmiyor

Verileri düzenledikten sonra **Update chart** düğmesine dokunun. Grafik, yalnızca siz istediğinizde metinden yeniden çizilir.`,
  },
  {
    id: 'how-it-works',
    title: 'Universal Charts nasıl çalışır',
    summary: 'Yapıştırılan verilerden bitmiş görsele kadar her şey tarayıcınızda.',
    group: 'Nasıl çalışır',
    body: `Universal Charts, verileriniz hiçbir zaman yüklenmeden bir sayı tablosunu grafiğe dönüştürür. Her şey tarayıcınızın içinde, kendi cihazınızda gerçekleşir.

## Grafik oluşturmak

1. Verilerinizi, ilk satırda sütun adları olacak şekilde Data kutusuna yapıştırın ve **Update chart** düğmesine dokunun. Önce denemek isterseniz örnek veri kümelerinden birini seçin.
2. Uygulama bir başlangıç noktası önerir: metin içeren ilk sütun X eksenindeki kategoriler olur ve her sayı sütunu bir seri olur.
3. Bir grafik türü seçin ve gerekirse kullanılan sütunları değiştirin. Dağılım grafiği için X ekseninde bir sayı sütunu seçin.
4. Bir başlık ekleyin, renkleri seçin ve kılavuz çizgilerini, göstergeyi, veri etiketlerini ve yumuşak eğrileri açıp kapatın.

## Dışa aktarmak

- **PNG**, grafiğin bir görselini kaydeder. 1×, 2× ya da 3× seçin: sayı ne kadar yüksekse görsel o kadar net, dosya da o kadar büyük olur. 2× çoğu belge ve sunum için uygundur.
- **SVG**, grafiği her boyutta net kalan ve tasarım yazılımlarında düzenlenebilen bir vektör çizimi olarak kaydeder.
- **Copy**, grafiğin PNG görselini bir belgeye ya da mesaja yapıştırılmaya hazır biçimde panoya koyar. Bazı tarayıcılar buna izin vermez; bu durumda uygulama bunu belirtir ve bunun yerine bir PNG indirebilirsiniz.

Dışa aktarılan dosyaların arka planı, uygulama karanlık moddayken bile her zaman beyazdır; böylece aynı grafik nereye giderse gitsin aynı görünür.

## Bilmeniz gerekenler

- **Çalışmanız kaydedilmez.** Uygulama, verilerinizin ya da grafiğinizin hiçbir kopyasını tutmaz. Sayfayı yeniden yüklerseniz örnek verilerle yeniden başlar. Bir grafiğe geri dönmek isteyebilirseniz özgün verilerinizi saklayın ya da bir paylaşım bağlantısı oluşturun.
- **Çevrimdışı çalışır.** Uygulama yüklendikten sonra internet bağlantısı olmadan grafik oluşturabilir, çünkü hiçbir şey sunucu gerektirmez.
- **Universal ID ile oturum açtınız mı?** Kuruluşunuz bir marka rengi belirlediyse bu renk otomatik olarak renk paletinin başına geçer; beyaz arka planda net biçimde öne çıkması için gerekirse biraz koyulaştırılır.`,
  },
  {
    id: 'privacy-and-sharing',
    title: 'Verileriniz ve paylaşım bağlantıları',
    summary: 'Cihazınızda nelerin kaldığı ve bir paylaşım bağlantısının neler içerdiği.',
    group: 'Gizlilik ve güvenlik',
    body: `Universal Charts’ın verilerinizi gönderebileceği kendine ait bir sunucusu yoktur. Verilerinizin okunması, grafiğin çizilmesi ve dışa aktarmanın oluşturulması tamamen tarayıcınızda, cihazınızda gerçekleşir.

## Cihazınızda kalanlar

- Yapıştırdığınız veriler tarayıcınızda okunur ve asla yüklenmez.
- Grafik tarayıcınızda çizilir.
- PNG ve SVG dosyaları tarayıcınızda oluşturulur ve doğrudan cihazınıza kaydedilir.
- Uygulama siz ayrıldıktan sonra verilerinizi tutmaz: veriler ne cihazda ne de başka bir yerde saklanır.

## Paylaşım bağlantısı nasıl çalışır

**Share link**, grafiğin tamamını (ayarlarını **ve tüm verilerini**) bağlantının içine sıkıştırılmış olarak içeren bir web adresini kopyalar. Uygulama grafikleri hiçbir yerde saklamaz: biri bağlantıyı açtığında, onun tarayıcısı grafiği yalnızca bağlantıdan yeniden oluşturur.

Grafik, bağlantının # işaretinden sonraki bölümünde taşınır. Tarayıcılar bu bölümü hiçbir zaman bir web sitesine göndermez; bu nedenle bir paylaşım bağlantısını açmak verileri sunucumuza da iletmez.

Bunun anlaşılmaya değer iki sonucu vardır:

- **Bağlantı, verinin kendisidir.** Bağlantıya sahip olan herkes grafikteki her değeri görebilir; bu nedenle bağlantıyı yalnızca verileri görmesinde sakınca olmayan kişilerle paylaşın. Bağlantılar ayrıca bir yerlerde kalma eğilimindedir (tarayıcı geçmişinde, sohbetlerde ve e-postalarda, iletildikleri her yerde); bu nedenle bağlantıya verilerin kendisine davrandığınız gibi davranın.
- **Büyük tablolar uzun bağlantılar oluşturur.** Bağlantı, veri miktarıyla birlikte uzar. Bazı uygulamalar ve web siteleri çok uzun bağlantıları kesebilir; bu nedenle paylaşım bağlantıları en çok küçük ve orta boy tablolar için uygundur. Büyük bir tablo için bunun yerine dışa aktarılmış bir görsel paylaşın.

## Universal ID

Oturum açmak isteğe bağlıdır ve uygulama oturum açmadan da tam olarak çalışır. Universal ID ile oturum açtıysanız uygulama, grafiklerinizde kullanabilmek için kuruluşunuzun marka rengini okur. Verileriniz bu isteğin bir parçası değildir ve uygulama hesabınıza asla bir şey yazmaz.`,
  },
]

export default articles
