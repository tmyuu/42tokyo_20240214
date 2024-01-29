// src/App.tsx

import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Privacy from './Privacy';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <nav style={{ 'borderBottom': '1px solid', 'marginBottom': '20px' }}>
          <Link to="/">ホーム</Link> | <Link to="/privacy">プライバシーポリシー</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more!!!!!!!?????????
              </p>
            </>
          } />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
