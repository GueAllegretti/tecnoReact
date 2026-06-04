import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './components/home';
import Nav from './layout/nav';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import DoveSiamo from './pages/DoveSiamo';
import OperatoreDetailPage from './pages/OperatoreDetailPage';
import BrandProductsPage from './pages/BrandProductsPage';
import ComeFunzionaPage from './pages/ComeFunzionaPage';
import PersonalizzazionePage from './pages/PersonalizzazionePage';
import OffertePage from './pages/OffertePage';
import Footer from './layout/footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <ScrollToTop />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prodotti/:category" element={<ProductsPage />} />
            <Route path="/prodotti/:category/:id" element={<ProductDetailPage />} />
            <Route path="/dove-siamo" element={<DoveSiamo />} />
            <Route path="/operatori/:id" element={<OperatoreDetailPage />} />
            <Route path="/brand/:id" element={<BrandProductsPage />} />
            <Route path="/come-funziona" element={<ComeFunzionaPage />} />
            <Route path="/personalizzazione" element={<PersonalizzazionePage />} />
            <Route path="/offerte" element={<OffertePage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </ThemeProvider>
  );
}

export default App;
