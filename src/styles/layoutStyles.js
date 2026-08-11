// src/styles/layoutStyles.js

export const layoutStyles = {
  /*
   * Sayfanın en dış katmanı.
   * Ekranın tamamını kaplar ve genel sayfa boşluklarını belirler.
   *
   * Kullanım:
   * <main className={layoutStyles.page}>
   */
  page: "min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8",

  /*
   * İçeriğin çok geniş ekranlarda gereğinden fazla yayılmasını engeller.
   * Sayfanın ortasında, maksimum 1280px genişliğinde bir alan oluşturur.
   *
   * Kullanım:
   * <div className={layoutStyles.container}>
   */
  container: "mx-auto w-full max-w-7xl",

  /*
   * Daha dar içerikler için kullanılır.
   * Form, ayarlar sayfası, profil düzenleme gibi ekranlara uygundur.
   */
  narrowContainer: "mx-auto w-full max-w-2xl",

  /*
   * Makale, açıklama veya okuma ağırlıklı içerikler içindir.
   * Satırların aşırı uzamasını önler.
   */
  readingContainer: "mx-auto w-full max-w-3xl",

  /*
   * Bir sayfanın doğrudan alt bölümleri arasına dikey boşluk koyar.
   *
   * Örnek:
   * Header
   * İstatistikler
   * Son aktiviteler
   */
  pageStack: "flex flex-col gap-8",

  /*
   * Bir section içindeki ilişkili içerikleri dikey dizer.
   * pageStack'e göre daha küçük boşluk kullanır.
   */
  sectionStack: "flex flex-col gap-6",

  /*
   * Form alanları veya birbirine yakın küçük içerikler içindir.
   */
  contentStack: "flex flex-col gap-4",

  /*
   * Başlık ve açıklama gibi birbirine çok yakın elemanlar içindir.
   */
  compactStack: "flex flex-col gap-2",

  /*
   * İçerikleri yatay dizer ve aralarında boşluk bırakır.
   * Küçük ekranda alt alta, sm ekranından itibaren yan yana geçer.
   *
   * Form butonları ve filtre alanlarında kullanılabilir.
   */
  responsiveRow: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",

  /*
   * İçerikleri her ekran boyutunda yatay ve ortalanmış biçimde dizer.
   * Icon + metin veya küçük action grupları için uygundur.
   */
  inlineRow: "flex items-center gap-3",

  /*
   * Bir tarafı sola, diğer tarafı sağa yaslar.
   * Card başlığı + action butonu gibi yerlerde kullanılır.
   */
  splitRow: "flex items-center justify-between gap-4",

  /*
   * Dashboard kartları veya ürün listeleri için responsive grid.
   *
   * Mobil: 1 sütun
   * Küçük ekran: 2 sütun
   * Büyük ekran: 3 sütun
   */
  grid: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",

  /*
   * Dashboard istatistik kartları için daha yoğun grid.
   *
   * Mobil: 1 sütun
   * Küçük ekran: 2 sütun
   * Çok geniş ekran: 4 sütun
   */
  statsGrid: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",

  /*
   * Ana içerik + sidebar düzeni.
   * Mobilde alt alta görünür.
   * Büyük ekranda sidebar ve ana içerik yan yana gelir.
   *
   * İlk child sidebar, ikinci child ana içerik olabilir.
   */
  sidebarLayout: "grid grid-cols-1 gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]",

  /*
   * Ana içeriğin solda, sidebar'ın sağda olduğu düzen.
   */
  rightSidebarLayout: "grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]",

  /*
   * Login, boş durum, loading ekranı gibi içerikleri
   * ekranın merkezine yerleştirir.
   */
  centeredScreen: "flex min-h-screen items-center justify-center px-4 py-8",

  /*
   * Bulunduğu parent alanının merkezine yerleştirir.
   * Tam ekran yüksekliği zorlamaz.
   */
  centeredContent: "flex items-center justify-center",

  /*
   * Sayfa başlığı ve sağ taraftaki action alanı.
   * Mobilde alt alta, geniş ekranda yan yana görünür.
   */
  pageHeader:
    "flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-start sm:justify-between",

  /*
   * Section başlığı ve o section'a ait action alanı.
   * pageHeader'a göre daha hafif bir yapıdır.
   */
  sectionHeader: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",

  /*
   * Sayfanın altında bulunan işlem butonları.
   * Mobilde alt alta, geniş ekranda sağa yaslı görünür.
   */
  actions: "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",

  /*
   * Uzun yatay içeriklerin mobilde sayfa düzenini bozmasını engeller.
   * Özellikle table çevresinde kullanılır.
   */
  horizontalScroll: "w-full overflow-x-auto",

  /*
   * Sidebar veya sabit kalması gereken yardımcı panel.
   * Yalnızca büyük ekranlarda sticky davranır.
   */
  stickyPanel: "lg:sticky lg:top-6 lg:self-start",
};
