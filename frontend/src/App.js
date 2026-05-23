import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Brand from './components/brand';
import Nav from './layout/nav';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import DoveSiamo from './pages/DoveSiamo';
import OperatoreDetailPage from './pages/OperatoreDetailPage';
import BrandProductsPage from './pages/BrandProductsPage';
import Footer from './layout/footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Brand />} />
            <Route path="/prodotti/:category" element={<ProductsPage />} />
            <Route path="/prodotti/:category/:id" element={<ProductDetailPage />} />
            <Route path="/dove-siamo" element={<DoveSiamo />} />
            <Route path="/operatori/:id" element={<OperatoreDetailPage />} />
            <Route path="/brand/:id" element={<BrandProductsPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </ThemeProvider>
  );
}

export default App;
