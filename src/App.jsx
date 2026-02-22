import HomePage from './Pages/HomePage'

function App() {
  // Ana sayfayı render et (görüntüle)
  return (
    <div>
      {/* HomePage bileşenini burada çağırıyoruz */}
      {/* React bileşenleri HTML etiketleri gibi kullanılır: <BileşenAdı /> */}
      <HomePage />
    </div>
  )
}

// App bileşenini dışa aktar 
export default App
