import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CyberhacksPage from './pages/CyberhacksPage';
import VehiclesPage from './pages/VehiclesPage';
import WeaponsPage from './pages/WeaponsPage';
import LayoutDecoration from './components/atoms/LayoutDecoration/LayoutDecoration';
import LayoutDecorationBeta from './components/atoms/LayoutDecorationBeta/LayoutDecorationBeta';
import LayoutDecorationCharly from './components/atoms/LayoutDecorationCharly/LayoutDecorationCharly';
import LayoutDecorationDelta from './components/atoms/LayoutDecorationDelta/LayoutDecorationDelta';
import LayoutDecorationEcho from './components/atoms/LayoutDecorationEcho/LayoutDecorationEcho';
import LayoutDecorationFoxtrot from './components/atoms/LayoutDecorationFoxtrot/LayoutDecorationFoxtrot';

import './App.css';



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <LayoutDecoration className="deco1"/>
      <LayoutDecoration className="deco2"/>
      <LayoutDecoration className="deco3"/>
      <LayoutDecoration className="deco4"/>
      <LayoutDecorationBeta className="deco5"/>
      <LayoutDecorationCharly className="deco6"/>
      <LayoutDecorationCharly className="deco7"/>
      <LayoutDecorationDelta className="deco9"/>
      <span className="deco10">
        ◍
      </span>
      <LayoutDecorationEcho className="deco11"/>
      <LayoutDecorationFoxtrot className="deco12"/>
      <div className="app-header">
        <div></div>
        <div>
          <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Home</NavLink>
            <NavLink to="/cyberhacks" className={({ isActive }) => isActive ? 'active' : ''}>Cyberhacks</NavLink>
            <NavLink to="/vehicles" className={({ isActive }) => isActive ? 'active' : ''}>Vehicles</NavLink>
            <NavLink to="/weapons" className={({ isActive }) => isActive ? 'active' : ''}>Weapons</NavLink>
          </nav>
        </div>
        <div></div>
      </div>
      <div className="app-content">
        <Routes>
          <Route path="/" element={
            <div>
              <div>
                <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
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
                Click on the Vite and React logos to learn more
              </p>
            </div>
          } />
          <Route path="/cyberhacks" element={<CyberhacksPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/weapons" element={<WeaponsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
