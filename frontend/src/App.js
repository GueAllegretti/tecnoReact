import { Routes, Route } from 'react-router-dom';
import Brand from './components/brand';
import Nav from './layout/nav';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <div className="bg-white">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Brand />} />
          <Route path="/prodotti/:category" element={<ProductsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
