// NoteForm.jsx — Yeni Not Ekleme Formu
// ======================================
// Kullanıcı bu form ile yeni not ekler.
// Başlık, içerik ve renk seçimi yapar.
//
// Props:
//   onAdd — yeni not eklendiğinde çağrılacak fonksiyon

import { useState } from 'react'

// Seçilebilir kart renkleri
const COLORS = [
    { value: 'bg-yellow-100', label: '🟡' },
    { value: 'bg-blue-100', label: '🔵' },
    { value: 'bg-green-100', label: '🟢' },
    { value: 'bg-pink-100', label: '🩷' },
    { value: 'bg-purple-100', label: '🟣' },
]

function NoteForm({ onAdd }) {
    // State tanımlamaları
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [color, setColor] = useState('bg-yellow-100')

    // Form gönderildiğinde çalışır
    function handleSubmit(e) {
        e.preventDefault() // sayfa yenilenmesini engelle

        // Boş başlık kontrolü
        if (title.trim() === '') return

        // Üst bileşene veriyi gönder
        onAdd(title, content, color)

        // Formu temizle
        setTitle('')
        setContent('')
        setColor('bg-yellow-100')
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-5 mb-6">
            <h2 className="text-lg font-bold text-gray-700 mb-3">📝 Yeni Not Ekle</h2>

            {/* Başlık girişi */}
            <input
                type="text"
                value={title}
                onChange={function (e) { setTitle(e.target.value) }}
                placeholder="Not başlığı..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* İçerik girişi — textarea: çok satırlı metin alanı */}
            <textarea
                value={content}
                onChange={function (e) { setContent(e.target.value) }}
                placeholder="Not içeriği..."
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />

            {/* Renk seçimi ve Ekle butonu */}
            <div className="flex items-center justify-between">
                {/* Renk butonları */}
                <div className="flex gap-2">
                    {COLORS.map(function (c) {
                        return (
                            <button
                                key={c.value}
                                type="button"
                                onClick={function () { setColor(c.value) }}
                                className={`w-8 h-8 rounded-full text-sm flex items-center justify-center cursor-pointer transition-transform ${color === c.value ? 'scale-125 ring-2 ring-gray-400' : ''
                                    }`}
                            >
                                {c.label}
                            </button>
                        )
                    })}
                </div>

                {/* Ekle butonu */}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                    + Ekle
                </button>
            </div>
        </form>
    )
}

export default NoteForm
