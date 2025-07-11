import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, Leaf } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Auth.css';

function Login() {
  const { login } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Get the intended destination or default to home
  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const result = login(formData.email, formData.password);
      
      if (result.success) {
        // Redirect to intended page or dashboard based on role
        if (result.user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate(from);
        }
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemoCredentials = (role) => {
    if (role === 'admin') {
      setFormData({
        email: 'admin@mudgalayurveda.com',
        password: 'admin123'
      });
    } else {
      setFormData({
        email: 'customer@example.com',
        password: 'customer123'
      });
    }
    setError('');
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">
              <Leaf className="logo-icon" />
              <span>Mudgal Ayurveda</span>
            </div>
            <h1>Welcome Back</h1>
            <p>Sign in to your account to continue</p>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-group">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <Lock className="input-icon" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary auth-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="demo-credentials">
            <p>Demo Accounts:</p>
            <div className="demo-buttons">
              <button 
                type="button"
                onClick={() => fillDemoCredentials('admin')}
                className="btn btn-secondary demo-btn"
              >
                Admin Demo
              </button>
              <button 
                type="button"
                onClick={() => fillDemoCredentials('customer')}
                className="btn btn-secondary demo-btn"
              >
                Customer Demo
              </button>
            </div>
          </div>

          <div className="auth-footer">
            <p>
              Don't have an account?{' '}
              <Link to="/register" state={{ from: location.state?.from }}>
                Sign up here
              </Link>
            </p>
            <Link to="/forgot-password" className="forgot-link">
              Forgot your password?
            </Link>
          </div>
        </div>

        <div className="auth-image">
          <img 
            src="/api/placeholder/400/500" 
            alt="Ayurvedic products" 
            className="auth-bg-image"
          />
          <div className="auth-image-overlay">
            <h2>Natural Wellness Awaits</h2>
            <p>Join thousands of satisfied customers who trust our ayurvedic solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
