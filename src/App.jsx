import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import AdminDashboard from './admin/AdminDashboard';
import './App.css';

function App() {
  // Set basename based on environment
  const basename = process.env.NODE_ENV === 'production' ? '/mudgal_ayurveda' : '';
  
  return (
    <AppProvider>
      <Router basename={basename}>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/admin" element={<AdminDashboard />} />
              {/* Add more routes as needed */}
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
