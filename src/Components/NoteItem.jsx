// NoteCard.jsx — Tek Bir Not Kartı
// ===================================
// Her bir notu renkli kart olarak gösterir.
// Düzenleme ve silme butonları içerir.
//
// Props:
//   note     — not objesi { id, title, content, color, createdAt }
//   onUpdate — güncelleme fonksiyonu
//   onDelete — silme fonksiyonu

import { useState } from 'react'

function NoteCard({ note, onUpdate, onDelete }) {
    // Düzenleme modu state'leri
    const [isEditing, setIsEditing] = useState(false)
    const [editTitle, setEditTitle] = useState(note.title)
    const [editContent, setEditContent] = useState(note.content)

    // Düzenlemeyi kaydet
    function handleSave() {
        if (editTitle.trim() === '') return
        onUpdate(note.id, { title: editTitle.trim(), content: editContent.trim() })
        setIsEditing(false)
    }

    // Düzenlemeyi iptal et
    function handleCancel() {
        setEditTitle(note.title)
        setEditContent(note.content)
        setIsEditing(false)
    }

    // Tarihi formatla
    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('tr-TR', {
            day: 'numeric', month: 'short', year: 'numeric'
        })
    }

    return (
        // Not kartı — seçilen renk arka plan olarak uygulanır
        <div className={`${note.color} rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow`}>
            {isEditing ? (
                // ===== DÜZENLEME MODU =====
                <div>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={function (e) { setEditTitle(e.target.value) }}
                        className="w-full bg-white/70 border border-gray-300 rounded-lg px-3 py-1.5 mb-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <textarea
                        value={editContent}
                        onChange={function (e) { setEditContent(e.target.value) }}
                        rows={2}
                        className="w-full bg-white/70 border border-gray-300 rounded-lg px-3 py-1.5 mb-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                    />
                    <div className="flex gap-2">
                        <button onClick={handleSave} className="text-sm bg-green-500 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-green-600">
                            Kaydet
                        </button>
                        <button onClick={handleCancel} className="text-sm bg-gray-400 text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-500">
                            İptal
                        </button>
                    </div>
                </div>
            ) : (
                // ===== GÖRÜNTÜLEME MODU =====
                <div>
                    {/* Not başlığı */}
                    <h3 className="font-bold text-gray-800 mb-1">{note.title}</h3>

                    {/* Not içeriği — varsa göster */}
                    {note.content && (
                        <p className="text-gray-600 text-sm mb-2 whitespace-pre-wrap">{note.content}</p>
                    )}

                    {/* Alt kısım: tarih + butonlar */}
                    <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-400">{formatDate(note.createdAt)}</span>
                        <div className="flex gap-1">
                            {/* Düzenle butonu */}
                            <button
                                onClick={function () { setIsEditing(true) }}
                                className="text-gray-400 hover:text-blue-500 p-1 cursor-pointer text-sm"
                                title="Düzenle"
                            >
                                ✏️
                            </button>
                            {/* Sil butonu */}
                            <button
                                onClick={function () { onDelete(note.id) }}
                                className="text-gray-400 hover:text-red-500 p-1 cursor-pointer text-sm"
                                title="Sil"
                            >
                                🗑️
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NoteCard
