import { Link } from 'react-router-dom';
import { Leaf, ShoppingBag, Users, Award, ArrowRight, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { testimonials } from '../data/products';
import './Home.css';

function Home() {
  const { products } = useApp();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Natural Ayurvedic Products for Better Health</h1>
              <p className="hero-description">
                Discover the power of ancient Ayurveda with our premium collection of 
                natural products. From skincare to haircare, we bring you the best 
                of traditional Indian wellness.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary hero-btn">
                  Shop Now <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="btn btn-secondary hero-btn">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="/mudgal_ayurveda/images/hero/ayurvedic-products.png" 
                alt="Ayurvedic Products" 
                className="hero-img"
              />
              <div className="hero-badge">
                <Leaf className="badge-icon" />
                <span>100% Natural</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Mudgal Ayurveda?</h2>
          <div className="features-grid grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <Leaf />
              </div>
              <h3>100% Natural</h3>
              <p>All our products are made from pure, natural ingredients sourced from trusted suppliers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Award />
              </div>
              <h3>Quality Certified</h3>
              <p>Our products are tested and certified to meet the highest quality standards.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h3>Trusted by Thousands</h3>
              <p>Join thousands of satisfied customers who trust our ayurvedic solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <Link to="/products" className="view-all-link">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
          <div className="products-grid grid grid-4">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {!product.inStock && (
                    <div className="out-of-stock-badge">Out of Stock</div>
                  )}
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-category">{product.category}</p>
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
                    <span className="rating-text">({product.reviews})</span>
                  </div>
                  <div className="product-price">₹{product.price}</div>
                  <Link 
                    to={`/product/${product.id}`} 
                    className="btn btn-primary product-btn"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits bg-light">
        <div className="container">
          <h2 className="section-title text-center">Benefits of Ayurvedic Products</h2>
          <div className="benefits-grid grid grid-2">
            <div className="benefits-content">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Leaf />
                </div>
                <div>
                  <h4>Natural Ingredients</h4>
                  <p>Free from harmful chemicals and synthetic additives</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Award />
                </div>
                <div>
                  <h4>Time-Tested Formulas</h4>
                  <p>Based on ancient Ayurvedic wisdom and modern research</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <Users />
                </div>
                <div>
                  <h4>Suitable for All</h4>
                  <p>Gentle and effective for all skin and hair types</p>
                </div>
              </div>
            </div>
            <div className="benefits-image">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop" 
                alt="Ayurvedic Benefits" 
                className="benefits-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title text-center">What Our Customers Say</h2>
          <div className="testimonials-grid grid grid-3">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card card">
                <div className="testimonial-content">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? 'star-filled' : 'star-empty'}
                      />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="author-image"
                    />
                    <span className="author-name">{testimonial.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta bg-primary">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to Experience Natural Wellness?</h2>
            <p className="cta-description">
              Join thousands of satisfied customers and discover the power of Ayurveda
            </p>
            <Link to="/products" className="btn btn-secondary cta-btn">
              <ShoppingBag size={20} />
              Start Shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
