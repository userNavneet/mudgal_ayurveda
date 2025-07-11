import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Star, ShoppingCart, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { categories } from '../data/products';
import './Products.css';

function Products() {
  const { 
    filteredProducts, 
    searchTerm, 
    selectedCategory, 
    setSearchTerm, 
    setCategory,
    addToCart,
    user
  } = useApp();

  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const productsInPriceRange = sortedProducts.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  const handleAddToCart = (product) => {
    if (!product.inStock) return;
    addToCart(product);
    // Show success message (in a real app, you might use a toast notification)
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="products-page">
      <div className="container">
        {/* Page Header */}
        <div className="page-header">
          <h1>Our Products</h1>
          <p>Discover our premium collection of ayurvedic products</p>
        </div>

        {/* Search and Filters Bar */}
        <div className="filters-bar">
          <div className="search-section">
            <div className="search-input-group">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <button 
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
            Filters
          </button>

          <div className="sort-section">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="products-layout">
          {/* Sidebar Filters */}
          <aside className={`filters-sidebar ${showFilters ? 'show' : ''}`}>
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-filter">
                <div className="price-inputs">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="price-input"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                    className="price-input"
                  />
                </div>
                <div className="price-range-display">
                  ₹{priceRange[0]} - ₹{priceRange[1]}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="products-main">
            <div className="products-count">
              {productsInPriceRange.length} products found
            </div>

            {productsInPriceRange.length === 0 ? (
              <div className="no-products">
                <div className="no-products-content">
                  <Search size={48} className="no-products-icon" />
                  <h3>No products found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setCategory('All Products');
                      setPriceRange([0, 1000]);
                    }}
                    className="btn btn-primary"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            ) : (
              <div className="products-grid grid grid-3">
                {productsInPriceRange.map(product => (
                  <div key={product.id} className="product-card card">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                      {!product.inStock && (
                        <div className="out-of-stock-badge">Out of Stock</div>
                      )}
                      <div className="product-overlay">
                        <Link 
                          to={`/product/${product.id}`}
                          className="btn btn-secondary view-btn"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                    
                    <div className="product-info">
                      <div className="product-category">{product.category}</div>
                      <h3 className="product-name">
                        <Link to={`/product/${product.id}`}>
                          {product.name}
                        </Link>
                      </h3>
                      
                      <div className="product-rating">
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'}
                            />
                          ))}
                        </div>
                        <span className="rating-text">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>

                      <p className="product-description">
                        {product.description.substring(0, 100)}...
                      </p>

                      <div className="product-footer">
                        <div className="product-price">₹{product.price}</div>
                        <button
                          onClick={() => handleAddToCart(product)}
                          disabled={!product.inStock}
                          className={`btn ${product.inStock ? 'btn-primary' : 'btn-disabled'} add-to-cart-btn`}
                        >
                          <ShoppingCart size={16} />
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Products;
