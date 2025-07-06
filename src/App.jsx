import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom'
import './App.css'

const products = [
  { id: 1, name: 'Wireless Headphones', price: '$59.99', img: 'https://placehold.co/220x140?text=Headphones', description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.' },
  { id: 2, name: 'Smart Watch', price: '$129.99', img: 'https://placehold.co/220x140?text=Watch', description: 'Feature-rich smartwatch with health tracking, GPS, and water resistance.' },
  { id: 3, name: 'Bluetooth Speaker', price: '$39.99', img: 'https://placehold.co/220x140?text=Speaker', description: 'Portable Bluetooth speaker with 360-degree sound and 12-hour battery.' },
  { id: 4, name: 'Fitness Tracker', price: '$49.99', img: 'https://placehold.co/220x140?text=Tracker', description: 'Advanced fitness tracker with heart rate monitoring and sleep analysis.' },
  { id: 5, name: 'VR Headset', price: '$199.99', img: 'https://placehold.co/220x140?text=VR+Headset', description: 'Immersive VR headset with high-resolution displays and motion tracking.' },
  { id: 6, name: 'E-Reader', price: '$89.99', img: 'https://placehold.co/220x140?text=E-Reader', description: 'E-ink display e-reader with weeks of battery life and thousands of books.' },
  { id: 7, name: 'Smart Light', price: '$24.99', img: 'https://placehold.co/220x140?text=Smart+Light', description: 'WiFi-enabled smart light bulb with voice control and scheduling.' },
  { id: 8, name: 'Portable Charger', price: '$19.99', img: 'https://placehold.co/220x140?text=Charger', description: '10,000mAh portable charger with fast charging and multiple ports.' },
]

function Header({ theme, setTheme, searchOpen, setSearchOpen, headerVisible }) {
  const toggleTheme = () => setTheme && setTheme(theme === 'dark' ? 'light' : 'dark')
  const toggleSearch = () => setSearchOpen(!searchOpen)

  return (
    <header className={`store-header ${headerVisible ? 'header-visible' : 'header-hidden'}`}>
      <div className="header-left">
        <span className="logo">WebStore</span>
      </div>
      <div className="header-center">
        {searchOpen && (
          <div className="search-container">
            <input type="text" placeholder="Search products..." className="search-input" />
            <button className="search-btn">Search</button>
          </div>
        )}
      </div>
      <div className="header-right">
        <button className="search-toggle" onClick={toggleSearch} title="Search">
          🔍
        </button>
        {setTheme && (
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle light/dark mode">
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        )}
        <button className="cart-btn">Cart</button>
        <button className="profile-btn">Profile</button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="store-footer">
      <div className="footer-inner">
        <div className="footer-section">
          <span className="footer-logo">[StoreLogo]</span>
          <span className="footer-text">© 2024 WebStore. All rights reserved.</span>
        </div>
        <div className="footer-section">
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Subscribe to our newsletter" className="newsletter-input" />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <span className="footer-social">[FB]</span>
          <span className="footer-social">[IG]</span>
          <span className="footer-social">[X]</span>
        </div>
      </div>
    </footer>
  )
}

function Home() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const navigate = useNavigate()
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false)
      } else {
        setHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`)
  }

  return (
    <>
      <Header 
        theme="dark" 
        setTheme={() => {}} 
        searchOpen={searchOpen} 
        setSearchOpen={setSearchOpen} 
        headerVisible={headerVisible} 
      />
      <main>
        <section className="hero">
          <h1>Discover the Latest Tech</h1>
          <p>Shop the best gadgets and electronics, handpicked for you.</p>
          <button className="cta-btn">Shop Now</button>
        </section>
        <section className="product-section">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            {products.map(product => (
              <div className="product-card" key={product.id} onClick={() => handleProductClick(product.id)}>
                <img src={product.img} alt={product.name} className="product-img" />
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="add-cart-btn" onClick={(e) => e.stopPropagation()}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="theme-dark">
        <Header theme="dark" searchOpen={false} setSearchOpen={() => {}} headerVisible={true} />
        <main style={{ paddingTop: '5.5rem', textAlign: 'center' }}>
          <h1>Product not found</h1>
          <button onClick={() => navigate('/')} className="cta-btn">Back to Home</button>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="theme-dark">
      <Header theme="dark" searchOpen={false} setSearchOpen={() => {}} headerVisible={true} />
      <main style={{ paddingTop: '5.5rem' }}>
        <div className="product-detail-container">
          <button onClick={() => navigate('/')} className="back-btn">← Back to Products</button>
          <div className="product-detail">
            <div className="product-detail-image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="product-detail-info">
              <h1>{product.name}</h1>
              <p className="product-detail-price">{product.price}</p>
              <p className="product-detail-description">{product.description}</p>
              <button className="add-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <Router>
      <div className={`theme-${theme}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
