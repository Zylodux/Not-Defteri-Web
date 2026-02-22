 # 🚀 Projeyi Nasıl Oluşturdum — Adım Adım

### 1. Proje Kurulumu
Terminalde ilgili dizinde şu komutları çalıştırdım:

```bash
npx create-vite@latest ./                   # React + Vite projesi
npm install tailwindcss @tailwindcss/vite   # Tailwind CSS kurulumu
npm install                                 # Bağımlılıkların yüklenmesi
```
2. Klasör Yapısı
Projeyi şu hiyerarşiyle kurguladım:
```
src/Components/ → UI bileşenleri (butonlar, formlar, kartlar)

src/Pages/ → Sayfa bileşenleri (ana sayfa)

src/Interfaces/ → Veri işlemleri (localStorage CRUD)
```
3. Geliştirme Süreci
```
src/Components/TodoForm.jsx: Not ekleme formu. Başlık input, içerik textarea, renk seçici ve Ekle butonu. useState ile form verilerini yönetiyorum.

src/Components/TodoItem.jsx: Tek bir not kartı. Renkli arka plan, düzenle/sil butonları ve inline düzenleme modu. En karmaşık bileşen; isEditing state'i ile mod değiştiriyor.

src/Components/TodoList.jsx: Notları grid (ızgara) düzeninde listeleyen bileşen. map() ile her not için bir kart oluşturuyor.

src/Pages/HomePage.jsx: Ana sayfa. Tüm CRUD fonksiyonlarını ve bileşenleri birleştirdim. useEffect ile sayfa yüklenince verileri çekiyor.

src/Interfaces/TodoService.js: localStorage ile CRUD (Ekle, Oku, Güncelle, Sil) fonksiyonları + 5 hazır örnek not yazdım. Bu dosya projenin veri katmanı.
```
4. Stil ve Tasarım
```
Tamamen Tailwind CSS kullandım:

App.css dosyasında @import "tailwindcss" ile dahil ettim.

Renkli kartlar, grid düzeni ve hover efektlerinin tamamı Tailwind sınıflarıyla yapıldı.
```
🛠️ Çalıştırma
Projeyi ayağa kaldırmak için şu komutu kullanabilirsiniz:

```Bash
npm run dev
```
Proje Ekran Görüntüsü 

<img width="1174" height="880" alt="Ekran görüntüsü 2026-02-22 140359" src="https://github.com/user-attachments/assets/b2934edc-6754-49a9-966c-f9f340782235" />

