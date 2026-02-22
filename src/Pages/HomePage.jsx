// HomePage.jsx — Ana Sayfa
// =========================
// Uygulamanın ana sayfası. Tüm CRUD işlemlerini burada yönetiyoruz.
// State (durum) yönetimi bu bileşende yapılır.

import { useState, useEffect } from 'react'

// Veri servisi fonksiyonları
import { getNotes, addNote, updateNote, deleteNote } from '../Interfaces/NotService'

// Bileşenler
import NoteForm from '../Components/NoteForm'
import NoteList from '../Components/NoteList'

function HomePage() {
    // notes: not listesi state'i 
    const [notes, setNotes] = useState([])

    // useEffect: sayfa yüklendiğinde localStorage'dan notları oku
    useEffect(function () {
        setNotes(getNotes())
    }, [])

    // CRUD İŞLEMLERİ

    // 1. EKLE
    function handleAdd(title, content, color) {
        addNote(title, content, color)
        setNotes(getNotes())
    }

    // 2. GÜNCELLE
    function handleUpdate(id, updates) {
        updateNote(id, updates)
        setNotes(getNotes())
    }

    // 3. SİL
    function handleDelete(id) {
        deleteNote(id)
        setNotes(getNotes())
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Üst başlık */}
            <header className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-5">
                    <h1 className="text-2xl font-bold text-gray-800">📒 Not Defteri</h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Notlarını ekle, düzenle ve organize et — {notes.length} not
                    </p>
                </div>
            </header>

            {/* Ana içerik */}
            <main className="max-w-4xl mx-auto px-4 py-6">
                {/* Not ekleme formu */}
                <NoteForm onAdd={handleAdd} />

                {/* Not listesi */}
                <NoteList
                    notes={notes}
                    onUpdate={handleUpdate}
                    onDelete={handleDelete}
                />
            </main>

            {/* Alt bilgi */}
            <footer className="text-center py-4 text-gray-300 text-xs">
                React Not Defteri — Web Geliştirme Projesi © 2026
            </footer>
        </div>
    )
}

export default HomePage
