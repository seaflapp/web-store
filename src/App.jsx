import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="store-container">
      <header className="store-header">
        <div className="header-section header-left">
          <button className="menu-btn" onClick={() => setMenuOpen((open) => !open)}>
            ☰
          </button>
          {menuOpen && (
            <div className="dropdown-menu">
              <button>Electronics</button>
              <button>Clothing</button>
              <button>Books</button>
            </div>
          )}
        </div>
        <div className="header-section header-center">
          <input type="text" placeholder="Search products..." className="search-input" />
          <button className="search-btn">Search</button>
        </div>
        <div className="header-section header-right">
          <button className="cart-btn">Cart</button>
          <button className="profile-btn">Profile</button>
        </div>
      </header>
      <main>
        <div className="product-list">
          <div className="product-card">
            <h2>Product 1</h2>
            <p>$10.00</p>
            <button>Add to Cart</button>
          </div>
          <div className="product-card">
            <h2>Product 2</h2>
            <p>$15.00</p>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="actions">
          <button>Checkout</button>
          <button>Admin: Add Product</button>
        </div>
      </main>
    </div>
  )
}

export default App
