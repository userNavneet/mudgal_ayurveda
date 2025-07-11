import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Cart.css';

function Cart() {
  const { cart, updateCartQuantity, removeFromCart, clearCart } = useApp();

  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    // In a real app, this would redirect to payment
    alert('Checkout functionality coming soon!');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-content">
              <ShoppingBag size={64} className="empty-cart-icon" />
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added any products to your cart yet.</p>
              <Link to="/products" className="btn btn-primary">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <Link to="/products" className="back-link">
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
          <h1>Shopping Cart</h1>
          <p>{totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart</p>
        </div>

        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item card">
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                
                <div className="item-details">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <div className="item-price">₹{item.price}</div>
                  {!item.inStock && (
                    <div className="out-of-stock-notice">
                      This item is currently out of stock
                    </div>
                  )}
                </div>

                <div className="item-quantity">
                  <label className="quantity-label">Quantity:</label>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      disabled={!item.inStock}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="item-total">
                  <div className="total-price">₹{(item.price * item.quantity).toLocaleString()}</div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    title="Remove from cart"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-actions">
              <button 
                className="btn btn-secondary clear-cart-btn"
                onClick={() => {
                  if (window.confirm('Are you sure you want to clear your cart?')) {
                    clearCart();
                  }
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="cart-summary card">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal ({totalItems} items):</span>
              <span>₹{totalAmount.toLocaleString()}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping:</span>
              <span>{totalAmount >= 500 ? 'Free' : '₹50'}</span>
            </div>
            
            <div className="summary-row">
              <span>Tax (18% GST):</span>
              <span>₹{Math.round(totalAmount * 0.18).toLocaleString()}</span>
            </div>
            
            <hr className="summary-divider" />
            
            <div className="summary-row total-row">
              <span>Total:</span>
              <span>₹{(totalAmount + (totalAmount >= 500 ? 0 : 50) + Math.round(totalAmount * 0.18)).toLocaleString()}</span>
            </div>

            {totalAmount < 500 && (
              <div className="free-shipping-notice">
                Add ₹{(500 - totalAmount).toLocaleString()} more for free shipping!
              </div>
            )}

            <button 
              className="btn btn-primary checkout-btn"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>

            <div className="security-info">
              <p>🔒 Secure checkout guaranteed</p>
              <p>✓ 100% natural products</p>
              <p>📞 24/7 customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
