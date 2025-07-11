import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Award, 
  Users, 
  Heart, 
  Star, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Mudgal Ayurveda</h1>
            <p className="hero-subtitle">
              Bringing you the ancient wisdom of Ayurveda through carefully crafted natural products
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content grid grid-2">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
                <p>At MUdgal Ayurveda, we are dedicated to bringing the timeless wisdom of Ayurveda into modern living. Our mission is to provide 100% natural, pure, and organic Ayurvedic products that help you lead a healthier, balanced, and more harmonious life.
                    Rooted in the ancient knowledge of Ayurveda, passed down through generations of sages and healers, our products are crafted with care and backed by deep research. We carefully select natural herbs and ingredients, 
                    ensuring that every product we offer is free from harmful chemicals and artificial additives.
                    We believe in creating a lifestyle that reconnects you with nature. Our goal is not just to sell products, but to empower you to embrace holistic well-being and unlock the healing power of nature in your everyday routine.
                    With a strong commitment to quality and purity, MUdgal Ayurveda strives to deliver exceptional service and authentic Ayurvedic solutions that honor the rich heritage of India’s ancient wellness science.
                    Pure. Natural. Trusted.
                </p>
            </div>
            <div className="story-image">
              <img 
                src="/images/about/ayurvedic-herbs.jpg" 
                alt="Traditional Ayurvedic Herbs" 
                className="story-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="mission-vision bg-light">
        <div className="container">
          <div className="mission-vision-grid grid grid-2">
            <div className="mission-card card">
              <div className="card-icon">
                <Heart />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower individuals on their wellness journey by providing authentic, 
                natural Ayurvedic products that promote health, beauty, and harmony with nature. 
                We are committed to preserving ancient wisdom while embracing modern quality standards.
              </p>
            </div>
            <div className="vision-card card">
              <div className="card-icon">
                <Star />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted name in Ayurvedic wellness, creating a world where 
                natural healing is accessible to all. We envision a future where traditional 
                knowledge and modern innovation work together for holistic well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <h2 className="section-title text-center">Our Core Values</h2>
          <div className="values-grid grid grid-3">
            <div className="value-item">
              <div className="value-icon">
                <Leaf />
              </div>
              <h4>100% Natural</h4>
              <p>We use only pure, natural ingredients sourced ethically from trusted suppliers worldwide.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <Award />
              </div>
              <h4>Quality Excellence</h4>
              <p>Every product undergoes rigorous testing to ensure the highest standards of purity and effectiveness.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <Users />
              </div>
              <h4>Customer First</h4>
              <p>Your wellness journey is our priority. We provide personalized support and guidance.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <Heart />
              </div>
              <h4>Ethical Practices</h4>
              <p>We believe in fair trade, sustainable sourcing, and giving back to the communities we work with.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <CheckCircle />
              </div>
              <h4>Transparency</h4>
              <p>We believe in complete transparency about our ingredients, processes, and sourcing methods.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <Star />
              </div>
              <h4>Innovation</h4>
              <p>We continuously research and develop new formulations while respecting traditional knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Certifications & Standards</h2>
          <div className="certifications-content">
            <div className="certifications-grid grid grid-4">
              <div className="cert-item">
                <div className="cert-icon">
                  <Award />
                </div>
                <h4>ISO Certified</h4>
                <p>International quality management standards</p>
              </div>
              <div className="cert-item">
                <div className="cert-icon">
                  <Leaf />
                </div>
                <h4>Organic Certified</h4>
                <p>Certified organic ingredients and processes</p>
              </div>
              <div className="cert-item">
                <div className="cert-icon">
                  <CheckCircle />
                </div>
                <h4>FDA Approved</h4>
                <p>All products meet safety regulations</p>
              </div>
              <div className="cert-item">
                <div className="cert-icon">
                  <Heart />
                </div>
                <h4>Cruelty Free</h4>
                <p>No animal testing, ever</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info">
        <div className="container">
          <h2 className="section-title text-center">Get in Touch</h2>
          <div className="contact-grid grid grid-3">
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin />
              </div>
              <h4>Visit Our Store</h4>
              <p>
                123 Wellness Street<br />
                Ayurveda Quarter<br />
                Mumbai, Maharashtra 400001
              </p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Phone />
              </div>
              <h4>Call Us</h4>
              <p>
                Customer Service: +91 98765 43210<br />
                Business Hours: 9 AM - 6 PM<br />
                Monday to Saturday
              </p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Mail />
              </div>
              <h4>Email Us</h4>
              <p>
                General: info@mudgalayurveda.com<br />
                Support: support@mudgalayurveda.com<br />
                Orders: orders@mudgalayurveda.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta bg-primary">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="cta-title">Ready to Start Your Wellness Journey?</h2>
            <p className="cta-description">
              Discover our collection of authentic Ayurvedic products and experience the difference nature makes
            </p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-secondary">
                Explore Products <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
