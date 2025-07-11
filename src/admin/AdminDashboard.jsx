import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Package, 
  Users, 
  ShoppingCart, 
  TrendingUp,
  Search,
  Filter 
} from 'lucide-react';
import './AdminDashboard.css';

function AdminDashboard() {
  const { products, deleteProduct, user } = useApp();
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for dashboard stats
  const stats = {
    totalProducts: products.length,
    totalUsers: 147,
    totalOrders: 89,
    revenue: 45670
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId);
    }
  };

  if (!user || user.role !== 'admin') {
    return (
      <div className="admin-access-denied">
        <div className="container">
          <div className="access-denied-content">
            <h1>Access Denied</h1>
            <p>You don't have permission to access the admin dashboard.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <div className="sidebar-header">
            <h2>Admin Panel</h2>
            <p>Welcome, {user.name}</p>
          </div>
          
          <nav className="sidebar-nav">
            <button
              className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <TrendingUp size={20} />
              Overview
            </button>
            <button
              className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              <Package size={20} />
              Products
            </button>
            <button
              className={`nav-item ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              <Users size={20} />
              Users
            </button>
            <button
              className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <ShoppingCart size={20} />
              Orders
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="admin-main">
          {activeTab === 'overview' && (
            <div className="overview-section">
              <div className="section-header">
                <h1>Dashboard Overview</h1>
                <p>Monitor your store's performance</p>
              </div>

              <div className="stats-grid grid grid-4">
                <div className="stat-card card">
                  <div className="stat-icon">
                    <Package />
                  </div>
                  <div className="stat-content">
                    <h3>{stats.totalProducts}</h3>
                    <p>Total Products</p>
                  </div>
                </div>
                
                <div className="stat-card card">
                  <div className="stat-icon">
                    <Users />
                  </div>
                  <div className="stat-content">
                    <h3>{stats.totalUsers}</h3>
                    <p>Total Users</p>
                  </div>
                </div>
                
                <div className="stat-card card">
                  <div className="stat-icon">
                    <ShoppingCart />
                  </div>
                  <div className="stat-content">
                    <h3>{stats.totalOrders}</h3>
                    <p>Total Orders</p>
                  </div>
                </div>
                
                <div className="stat-card card">
                  <div className="stat-icon revenue">
                    <TrendingUp />
                  </div>
                  <div className="stat-content">
                    <h3>₹{stats.revenue.toLocaleString()}</h3>
                    <p>Revenue</p>
                  </div>
                </div>
              </div>

              <div className="recent-activity card">
                <h3>Recent Activity</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon">
                      <Package size={16} />
                    </div>
                    <div className="activity-content">
                      <p><strong>New product added:</strong> Turmeric Face Wash</p>
                      <span className="activity-time">2 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">
                      <Users size={16} />
                    </div>
                    <div className="activity-content">
                      <p><strong>New user registered:</strong> john@example.com</p>
                      <span className="activity-time">4 hours ago</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon">
                      <ShoppingCart size={16} />
                    </div>
                    <div className="activity-content">
                      <p><strong>Order completed:</strong> Order #12345</p>
                      <span className="activity-time">6 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="products-section">
              <div className="section-header">
                <h1>Product Management</h1>
                <button 
                  className="btn btn-primary"
                  onClick={() => setShowAddProduct(true)}
                >
                  <Plus size={20} />
                  Add Product
                </button>
              </div>

              <div className="products-controls">
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

              <div className="products-table-container card">
                <table className="products-table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Rating</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map(product => (
                      <tr key={product.id}>
                        <td>
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="product-thumb"
                          />
                        </td>
                        <td>
                          <div className="product-name">
                            {product.name}
                          </div>
                        </td>
                        <td>
                          <span className="category-badge">
                            {product.category}
                          </span>
                        </td>
                        <td>
                          <span className="price">₹{product.price}</span>
                        </td>
                        <td>
                          <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </td>
                        <td>
                          <div className="rating">
                            <span className="rating-value">{product.rating}</span>
                            <span className="rating-reviews">({product.reviews})</span>
                          </div>
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button
                              className="btn-icon edit-btn"
                              onClick={() => setEditingProduct(product)}
                              title="Edit Product"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              className="btn-icon delete-btn"
                              onClick={() => handleDeleteProduct(product.id)}
                              title="Delete Product"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {filteredProducts.length === 0 && (
                  <div className="no-products">
                    <Package size={48} className="no-products-icon" />
                    <h3>No products found</h3>
                    <p>Try adjusting your search criteria</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="users-section">
              <div className="section-header">
                <h1>User Management</h1>
              </div>
              <div className="card">
                <p>User management features coming soon...</p>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="orders-section">
              <div className="section-header">
                <h1>Order Management</h1>
              </div>
              <div className="card">
                <p>Order management features coming soon...</p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Add/Edit Product Modal would go here */}
      {(showAddProduct || editingProduct) && (
        <div className="modal-overlay" onClick={() => {
          setShowAddProduct(false);
          setEditingProduct(null);
        }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
            <p>Product form coming soon...</p>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                setShowAddProduct(false);
                setEditingProduct(null);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
