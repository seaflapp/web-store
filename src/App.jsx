import { useState } from 'react'
import './App.css'

const products = [
  { id: 1, name: 'Wireless Headphones', price: '$59.99', img: 'https://placehold.co/220x140?text=Headphones' },
  { id: 2, name: 'Smart Watch', price: '$129.99', img: 'https://placehold.co/220x140?text=Watch' },
  { id: 3, name: 'Bluetooth Speaker', price: '$39.99', img: 'https://placehold.co/220x140?text=Speaker' },
  { id: 4, name: 'Fitness Tracker', price: '$49.99', img: 'https://placehold.co/220x140?text=Tracker' },
  { id: 5, name: 'VR Headset', price: '$199.99', img: 'https://placehold.co/220x140?text=VR+Headset' },
  { id: 6, name: 'E-Reader', price: '$89.99', img: 'https://placehold.co/220x140?text=E-Reader' },
  { id: 7, name: 'Smart Light', price: '$24.99', img: 'https://placehold.co/220x140?text=Smart+Light' },
  { id: 8, name: 'Portable Charger', price: '$19.99', img: 'https://placehold.co/220x140?text=Charger' },
]

function App() {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <div className={`theme-${theme}`}>
      <header className="store-header">
        <div className="header-left">
          <span className="logo">WebStore</span>
        </div>
        <div className="header-center">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle light/dark mode">
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>
        <div className="header-right">
          <button className="cart-btn">Cart</button>
          <button className="profile-btn">Profile</button>
        </div>
      </header>
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
              <div className="product-card" key={product.id}>
                <img src={product.img} alt={product.name} className="product-img" />
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button className="add-cart-btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </main>
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
    </div>
  )
}

export default App
