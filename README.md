# Mudgal Ayurveda E-commerce Website

A modern, responsive e-commerce website for ayurvedic products built with React.js and Vite. Features a green-themed design that reflects the natural, wellness-focused brand.

#Developer
#Navneet Sharma

## 🌿 Features

### Customer Features
- **Product Catalog**: Browse ayurvedic products with filtering and search
- **User Authentication**: Register and login functionality
- **Shopping Cart**: Add products to cart and manage quantities
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Product Categories**: Hair Care, Face Care, Skin Care, Bath Care, Body Care

### Admin Features
- **Admin Dashboard**: Comprehensive overview of store performance
- **Product Management**: Add, edit, and delete products
- **User Management**: View and manage customer accounts
- **Order Management**: Track and manage customer orders

### Products Available
- Ayurvedic Herbal Shampoo
- Turmeric Face Wash
- Rose Water Toner
- Pure Aloe Vera Gel
- Neem Tulsi Bathing Soap
- Multani Mitti Face Pack
- Ayurvedic Body D-Tan Pack
- Argan Oil Hair Serum

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mudgal_ayurveda
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🔑 Demo Accounts

### Admin Account
- **Email**: admin@mudgalayurveda.com
- **Password**: admin123
- **Access**: Full admin dashboard with product management

### Customer Account
- **Email**: customer@example.com
- **Password**: customer123
- **Access**: Standard customer features

## 🛠️ Technology Stack

- **Frontend**: React.js 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: CSS3 with CSS Variables
- **State Management**: React Context API with useReducer

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   └── Navbar.css      # Navigation styles
├── pages/               # Page components
│   ├── Home.jsx        # Homepage
│   ├── Home.css        # Homepage styles
│   ├── Products.jsx    # Products catalog
│   ├── Products.css    # Products styles
│   ├── Login.jsx       # Login page
│   ├── Register.jsx    # Registration page
│   └── Auth.css        # Authentication styles
├── admin/               # Admin panel components
│   ├── AdminDashboard.jsx
│   └── AdminDashboard.css
├── context/             # React context providers
│   └── AppContext.jsx  # Global state management
├── data/                # Mock data and constants
│   └── products.js     # Product data and mock users
├── hooks/               # Custom React hooks
├── App.jsx             # Main application component
├── App.css             # Global application styles
├── index.css           # Global CSS with theme variables
└── main.jsx            # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary Green**: #2d5a27
- **Secondary Green**: #4a7c59
- **Light Green**: #8fbc8f
- **Accent Green**: #6b8e23
- **Pale Green**: #f0f8f0

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Primary green color scheme
- **Body Text**: Dark text for readability

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Features Implementation

### Shopping Cart
- Persistent cart using localStorage
- Real-time quantity updates
- Add/remove items functionality

### Authentication
- Form validation
- Error handling
- Protected routes for admin

### Product Management
- CRUD operations for products
- Image handling
- Category management
- Stock status tracking

### Search & Filtering
- Real-time search functionality
- Category-based filtering
- Price range filtering
- Sorting options

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

## 📝 Future Enhancements

- Payment gateway integration
- Order tracking system
- Email notifications
- Product reviews and ratings
- Wishlist functionality
- Multi-language support
- Advanced admin analytics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and queries, contact:
- **Email**: admin@mudgalayurveda.com
- **Website**: [Mudgal Ayurveda](#)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for natural wellness**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
