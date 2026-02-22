// NotService.js — Not Veri Servisi
// ==================================
// Bu dosya tüm CRUD işlemlerini yönetir.
// CRUD = Create (Oluştur), Read (Oku), Update (Güncelle), Delete (Sil)
//
// Veriler tarayıcının localStorage'ında saklanır.
// localStorage — tarayıcıda veri kaydetmemizi sağlayan basit bir depolama sistemi.
// Sayfa kapansa bile veriler silinmez!

// localStorage'da kullanacağımız anahtar ismi
const STORAGE_KEY = 'react-not-defteri'

// ===== BAŞLANGIÇ VERİLERİ =====
// Uygulama ilk açıldığında gösterilecek örnek notlar
const DEFAULT_NOTES = [
    {
        id: 1,
        title: 'React Nedir?',
        content: 'React, Facebook tarafından geliştirilen bir UI kütüphanesidir. Bileşen (component) tabanlı yapısıyla modern web uygulamaları oluşturmayı kolaylaştırır.',
        color: 'bg-blue-100',
        createdAt: '2026-02-20T10:00:00.000Z',
    },
    {
        id: 2,
        title: 'Alışveriş Listesi',
        content: 'Süt, ekmek, yumurta, peynir, domates, salatalık',
        color: 'bg-yellow-100',
        createdAt: '2026-02-20T11:00:00.000Z',
    },
    {
        id: 3,
        title: 'Film Önerileri',
        content: 'Inception, Interstellar, The Matrix, Prestige',
        color: 'bg-green-100',
        createdAt: '2026-02-21T09:00:00.000Z',
    },
    {
        id: 4,
        title: 'Haftasonu Planları',
        content: 'Sabah koşu, öğlen kahvaltı, akşam arkadaşlarla buluşma',
        color: 'bg-pink-100',
        createdAt: '2026-02-21T14:00:00.000Z',
    },
    {
        id: 5,
        title: 'Öğrenilecekler',
        content: 'Tailwind CSS, React Hooks, LocalStorage API, Git & GitHub',
        color: 'bg-purple-100',
        createdAt: '2026-02-22T08:00:00.000Z',
    },
]

// ===== READ (OKU) — Tüm notları getir =====
export function getNotes() {
    try {
        const data = localStorage.getItem(STORAGE_KEY)

        // Eğer localStorage boşsa, başlangıç verilerini yükle ve kaydet
        if (!data) {
            saveNotes(DEFAULT_NOTES)
            return DEFAULT_NOTES
        }

        return JSON.parse(data)
    } catch (error) {
        console.error('Notlar okunurken hata:', error)
        return DEFAULT_NOTES
    }
}

// ===== Kaydetme yardımcı fonksiyonu =====
function saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}

// ===== CREATE (OLUŞTUR) — Yeni not ekle =====
export function addNote(title, content, color) {
    const notes = getNotes()

    const newNote = {
        id: Date.now(),          // benzersiz kimlik
        title: title.trim(),     // not başlığı
        content: content.trim(), // not içeriği
        color: color,            // kart rengi
        createdAt: new Date().toISOString(),
    }

    // Yeni notu başa ekle
    const updated = [newNote, ...notes]
    saveNotes(updated)
    return newNote
}

// ===== UPDATE (GÜNCELLE) — Notu güncelle =====
export function updateNote(id, updates) {
    const notes = getNotes()

    // map() ile eşleşen notu bul ve güncelle
    const updated = notes.map(function (note) {
        if (note.id === id) {
            return { ...note, ...updates }
        }
        return note
    })

    saveNotes(updated)
}

// ===== DELETE (SİL) — Notu sil =====
export function deleteNote(id) {
    const notes = getNotes()

    // filter() ile silinecek not hariç diğerlerini tut
    const updated = notes.filter(function (note) {
        return note.id !== id
    })

    saveNotes(updated)
}
