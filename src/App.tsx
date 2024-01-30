// src/App.tsx

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Privacy from './Privacy';
import Products from './Products';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ 'borderBottom': '1px solid', 'marginBottom': '20px' }}>
          <Link to="/">ホーム</Link> | <Link to="/privacy">プライバシーポリシー</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
