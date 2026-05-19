import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Brand from './components/brand';
import Nav from './layout/nav';
import ProductsPage from './pages/ProductsPage';
import DoveSiamo from './pages/DoveSiamo';
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
            <Route path="/dove-siamo" element={<DoveSiamo />} />
          </Routes>
        </main>
        <CookieBanner />
      </div>
    </ThemeProvider>
  );
}

export default App;
