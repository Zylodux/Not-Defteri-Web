// NoteList.jsx — Not Listesi Bileşeni
// =====================================
// Tüm notları grid (ızgara) düzeninde gösterir.
// Eğer hiç not yoksa boş mesaj gösterir.
//
// Props:
//   notes    — not dizisi (array)
//   onUpdate — güncelleme fonksiyonu
//   onDelete — silme fonksiyonu

import NoteCard from './NoteItem'

function NoteList({ notes, onUpdate, onDelete }) {
    // Not yoksa boş mesaj göster
    if (notes.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="text-5xl mb-3">📒</div>
                <p className="text-gray-400 text-lg">Henüz not eklenmedi</p>
                <p className="text-gray-300 text-sm mt-1">Yukarıdaki formu kullanarak ilk notunu ekle!</p>
            </div>
        )
    }

    // Not kartlarını grid düzeninde göster
    // grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 — ekran boyutuna göre sütun sayısı değişir
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map(function (note) {
                return (
                    <NoteCard
                        key={note.id}
                        note={note}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                )
            })}
        </div>
    )
}

export default NoteList
