# Klinik Psikolog Rıfat Can Telci - Web Sitesi

Uzm. Klinik Psikolog Rıfat Can Telci için özel olarak tasarlanmış, **modern, sade, huzur verici ve profesyonel** tek sayfalık (single-page) web sitesi.

---

## 🌿 Tasarım ve Konsept Özellikleri

1. **Renk Paleti & Atmosfer:**
   - Kliniğinizin ortamını yansıtan **Adaçayı ve Orman Yeşili** (`#38513C`, `#223427`), **Sıcak Ahşap & Meşe Tonları** (`#B08968`, `#7F5A41`) ve göz yormayan **Krem / Kırık Beyaz / Sıcak Tuval** (`#FAF8F5`, `#F5F1EB`).
   - Hem modernliği hem de klinik görüşmelerin gerektirdiği ciddiyet ve güveni aynı anda hissettiren estetik yapı.

2. **Tipografi:**
   - **Başlıklar:** *Cormorant Garamond* (Zarif, edebi, dingin ve saygın serif yazı tipi).
   - **Gövde Metinleri:** *Plus Jakarta Sans* (Son derece okunaklı, berrak ve çağdaş sans-serif yazı tipi).

3. **Özel Bölümler:**
   - **Giriş (Hero) & Manifestonuz:** Belirttiğiniz o etkileyici açılış metni, sayfada özel bir tırnaklı okuma kartı ve alt bölümlere geçiş sağlayan kılavuz metinler olarak konumlandırıldı:
     > *"Bazen bir şeylerin yolunda gitmediğini fark ederiz. Bazen anlatacak çok şey vardır; bazen de nereden başlayacağımızı bilemeyiz..."*
   - **Hakkımda:** Akademik geçmişinizi (Başkent Psk & Klinik Psk YL, Hacettepe MBA, UCA Veri Analitiği), TPD & APS üyeliklerinizi içeren sade ve profesyonel bölüm.
   - **Çalışma Alanları:** İlişki sorunları, kaygı/stres, anlam arayışı, karar verme güçlükleri, duygu düzenleme vb. için 6 özel kart.
   - **Görüşme Süreci (Adım Adım):** Danışanın ilk andan itibaren neyle karşılaşacağını özetleyen 4 adımlı rehber.
   - **Yazılar & Notlar:** Ana sayfada öne çıkan 9 özgün klinik yazı kartı ve tıklandığında açılan tam metin modal okuma deneyimi.
   - **Ayrı Yazılar Sayfası (`yazilar.html`):** 15 özgün psikoloji yazısının tamamını içeren, kategorilere göre anlık filtrelenebilen arşiv sayfası.
   - **Sıkça Sorulan Sorular (SSS):** Görüşme süreleri, çevrimiçi danışmanlık, ilk görüşme ve gizlilik esasına dair açılır-kapanır akordiyon sistemi.
   - **İnteraktif Randevu Talep Formu:** İsim, e-posta, görüşme türü, not, KVKK onayı ve **Anti-Spam / Robot Koruması** (honeypot + matematiksel güvenlik doğrulaması) içeren form.
   - **Hızlı Randevu Modalı:** Menüdeki "Randevu Al" butonuna basıldığında açılan ve robot korumalı şık pop-up pencere.
   - **Özel Favicon:** Adaçayı yeşili ve sıcak ahşap tonunda özel tasarlanmış Psi (Ψ) ikonlu favicon (`favicon.svg`, `favicon.png`).
   - **Yasal & Etik Çerçeve:** Evrensel mesleki etik ve gizlilik standartları, 6698 sayılı KVKK Aydınlatma Metni ve Çerez Politikası.

---

## 🚀 Siteyi Bilgisayarınızda Önizleme

Web sitesi herhangi bir kuruluma veya sunucu bağımlılığına ihtiyaç duymaz. Doğrudan tarayıcınızda açabilirsiniz:

### Yöntem 1: Doğrudan Açma
Klasördeki `index.html` dosyasına çift tıklayarak varsayılan tarayıcınızda (Chrome, Safari vb.) hemen görüntüleyebilirsiniz.

### Yöntem 2: Yerel Sunucu Başlatma (Tavsiye Edilen)
Terminali bu klasörde açıp şu komutu çalıştırabilirsiniz:
```bash
python3 -m http.server 8000
```
Ardından tarayıcınızda `http://localhost:8000` adresine gidebilirsiniz.

---

## 📸 Fotoğraf ve Görsel Düzenleme

- **Profil Portresi:** Son ilettiğiniz doğal, net ve profesyonel stüdyo fotoğrafınız (`profil.jpg` / `profil-kare.jpg`) ana sayfa karşılama alanında yer almaktadır.
- **Gerçek Ofis Fotoğrafı:** Çankaya ofisinizin gerçek fotoğrafı (`ofis_genel.jpg`) "Hakkımda" bölümünde yer almakta olup altında yalnızca *"Güvenli bir Görüşme Ortamı"* başlığı bulunmaktadır. Diğer koltuk/tablo fotoğrafı (`ofis_koltuk_tablo.jpg`) ise ileride başka bir bölümde kullanılmak üzere hazır bekletilmektedir.

---

## ✏️ Güncel İletişim Bilgileri

- **Ofis Adresi:** Mustafa Kemal Mahallesi, Çankaya, Ankara
- **İletişim Kanalı:** Web sitesindeki interaktif randevu formu ve doğrudan e-posta.
- **E-Posta:** `rifatcan@gmail.com`
- **Etik & Yasal Uyum:** Mesleki Etik İlkeler, 6698 sayılı KVKK Aydınlatma Metni ve Çerez Politikası entegre edilmiştir.
- **Sosyal Medya:** Sayfalarınız hazırlandığında menüye ve alt bilgiye (footer) doğrudan bağlantı eklenecektir.

---

## 🌐 Yayına Alma (Canlıya Çıkma) Önerileri

Bu site **sıfır bağımlılıklı saf HTML/CSS/JS** olarak tasarlandığı için aşağıdaki platformlarda 2 dakika içinde **tamamen ücretsiz** olarak yayına alınabilir:
- **Vercel** veya **Netlify:** Klasörü sürükleyip bırakmanız yeterlidir.
- **GitHub Pages:** Ücretsiz barındırma.
- **Kendi Domaininiz:** Bir hosting firması üzerinden `rifatcantelci.com` aldığınızda dosyaları `public_html` içine yükleyerek anında yayına alabilirsiniz.
