import { createContext, useContext, useReducer, useEffect } from 'react';
import { products as initialProducts, mockUsers } from '../data/products';

const AppContext = createContext();

const initialState = {
  user: null,
  products: initialProducts,
  cart: [],
  filteredProducts: initialProducts,
  searchTerm: '',
  selectedCategory: 'All Products',
  isLoading: false,
  error: null
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    
    case 'LOGOUT':
      return { ...state, user: null, cart: [] };
    
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      };
    
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    
    case 'ADD_PRODUCT':
      const newProduct = { ...action.payload, id: Date.now() };
      const updatedProducts = [...state.products, newProduct];
      return {
        ...state,
        products: updatedProducts,
        filteredProducts: filterProducts(updatedProducts, state.searchTerm, state.selectedCategory)
      };
    
    case 'UPDATE_PRODUCT':
      const updatedProductsList = state.products.map(product =>
        product.id === action.payload.id ? action.payload : product
      );
      return {
        ...state,
        products: updatedProductsList,
        filteredProducts: filterProducts(updatedProductsList, state.searchTerm, state.selectedCategory)
      };
    
    case 'DELETE_PRODUCT':
      const filteredProductsList = state.products.filter(product => product.id !== action.payload);
      return {
        ...state,
        products: filteredProductsList,
        filteredProducts: filterProducts(filteredProductsList, state.searchTerm, state.selectedCategory),
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
        filteredProducts: filterProducts(state.products, action.payload, state.selectedCategory)
      };
    
    case 'SET_CATEGORY':
      return {
        ...state,
        selectedCategory: action.payload,
        filteredProducts: filterProducts(state.products, state.searchTerm, action.payload)
      };
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    default:
      return state;
  }
}

function filterProducts(products, searchTerm, category) {
  let filtered = products;
  
  if (category !== 'All Products') {
    filtered = filtered.filter(product => product.category === category);
  }
  
  if (searchTerm) {
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
  
  return filtered;
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('mudgal_cart');
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        cartItems.forEach(item => {
          dispatch({ type: 'ADD_TO_CART', payload: item });
        });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('mudgal_cart', JSON.stringify(state.cart));
  }, [state.cart]);

  // Login function
  const login = (email, password) => {
    const user = mockUsers.find(u => u.email === email && u.password === password);
    if (user) {
      dispatch({ type: 'SET_USER', payload: user });
      return { success: true, user };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  // Register function (in a real app, this would make an API call)
  const register = (userData) => {
    const existingUser = mockUsers.find(u => u.email === userData.email);
    if (existingUser) {
      return { success: false, message: 'Email already exists' };
    }
    
    const newUser = {
      id: Date.now(),
      ...userData,
      role: 'customer'
    };
    
    mockUsers.push(newUser);
    dispatch({ type: 'SET_USER', payload: newUser });
    return { success: true, user: newUser };
  };

  const value = {
    ...state,
    dispatch,
    login,
    register,
    logout: () => dispatch({ type: 'LOGOUT' }),
    addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
    removeFromCart: (productId) => dispatch({ type: 'REMOVE_FROM_CART', payload: productId }),
    updateCartQuantity: (productId, quantity) => 
      dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: productId, quantity } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    setSearchTerm: (term) => dispatch({ type: 'SET_SEARCH_TERM', payload: term }),
    setCategory: (category) => dispatch({ type: 'SET_CATEGORY', payload: category }),
    addProduct: (product) => dispatch({ type: 'ADD_PRODUCT', payload: product }),
    updateProduct: (product) => dispatch({ type: 'UPDATE_PRODUCT', payload: product }),
    deleteProduct: (productId) => dispatch({ type: 'DELETE_PRODUCT', payload: productId })
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
