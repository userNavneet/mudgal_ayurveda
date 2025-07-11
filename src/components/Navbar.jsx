import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Leaf, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Navbar.css';

function Navbar() {
  const { user, cart, logout, setSearchTerm } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchValue);
    navigate('/products');
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <Leaf className="brand-icon" />
            <span className="brand-text">Mudgal Ayurveda</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-nav desktop-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-input-group">
              <input
                type="text"
                placeholder="Search ayurvedic products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-btn">
                <Search size={20} />
              </button>
            </div>
          </form>

          {/* Right Side Actions */}
          <div className="navbar-actions">
            {/* Cart */}
            <Link to="/cart" className="action-btn cart-btn">
              <ShoppingCart size={20} />
              {cartItemsCount > 0 && (
                <span className="cart-badge">{cartItemsCount}</span>
              )}
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="user-menu">
                <span className="user-name">Hi, {user.name.split(' ')[0]}</span>
                {user.role === 'admin' && (
                  <Link to="/admin" className="action-btn">
                    <Settings size={20} />
                  </Link>
                )}
                <button onClick={handleLogout} className="btn btn-secondary logout-btn">
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn btn-secondary">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-content">
              <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/products" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
              <Link to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              
              {user ? (
                <>
                  <div className="mobile-user-info">
                    <User size={20} />
                    <span>Hi, {user.name}</span>
                  </div>
                  {user.role === 'admin' && (
                    <Link 
                      to="/admin" 
                      className="mobile-nav-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button onClick={handleLogout} className="mobile-nav-link logout-link">
                    Logout
                  </button>
                </>
              ) : (
                <div className="mobile-auth">
                  <Link 
                    to="/login" 
                    className="btn btn-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="btn btn-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
