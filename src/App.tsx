// src/App.tsx

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Privacy from './Privacy';
import Products from './Products';
import ProductDescription from './ProductDescription';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ 'borderBottom': '1px solid', 'marginBottom': '20px' }}>
          <Link to="/">ホーム</Link> | <Link to="/privacy">プライバシーポリシー</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cart" element={<div>カート</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;