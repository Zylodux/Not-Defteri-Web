 Projeyi Nasıl Oluşturdum — Adım Adım
1. Proje Kurulumu

Kurulum için terminalde şu komutları çalıştırdım:

npx create-vite@latest ./ --template react   # React + Vite projesi oluşturdum

npm install tailwindcss @tailwindcss/vite     # Tailwind CSS kurdum

npm install                                  # Bağımlılıkları yükledim

3. Klasör Yapısını Oluşturdum

src/

── Components/    → UI bileşenleri (butonlar, formlar, kartlar)

── Pages/         → Sayfa bileşenleri (ana sayfa)

── Interfaces/    → Veri işlemleri (localStorage CRUD)


1️⃣	src/Interfaces/TodoService.js localStorage ile CRUD (Ekle, Oku, Güncelle, Sil) fonksiyonları + 5 hazır örnek not yazdım	Bu dosya veri katmanı

2️⃣	src/Components/TodoForm.jsx Not ekleme formu yazdım: başlık input, içerik textarea, renk seçici, Ekle butonu	useState ile form verilerini yönetiyorum

3️⃣	src/Components/TodoItem.jsx Tek bir not kartı yazdım: renkli arka plan, düzenle/sil butonları, inline düzenleme modu	En karmaşık bileşen — isEditing state'i ile mod değiştiriyor

4️⃣	src/Components/TodoList.jsx Notları grid (ızgara) düzeninde listeleyen bileşen yazdım	map() ile her not için bir kart oluşturuyor

5️⃣	src/Pages/HomePage.jsx Ana sayfa — tüm CRUD fonksiyonlarını ve bileşenleri birleştirdim	useEffect ile sayfa yüklenince verileri çekiyor

4. Stil ve Tasarım

App.css dosyasında @import "tailwindcss" ile dahil ettim


Renkli kartlar, grid düzeni, hover efektleri hep Tailwind sınıflarıyla yapıldı

Proje Ekran Görüntüsü

<img width="1174" height="880" alt="Ekran görüntüsü 2026-02-22 140359" src="https://github.com/user-attachments/assets/b2934edc-6754-49a9-966c-f9f340782235" />

