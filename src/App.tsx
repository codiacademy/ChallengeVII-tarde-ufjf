// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar'
import Gastos from './pages/Gastos';
import Dashboard from './pages/Dashboard';
import Vendas from './pages/Vendas';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/gastos" element={<Gastos />} />
            <Route path="/vendas" element={<Vendas />} />
          </Routes>
        </div>
        <Header/>
              </div>
    </Router>
  );
}

export default App;
