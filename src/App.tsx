import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
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
          <Route path="/" element={<HomePage />} />
          <Route path="/cyberhacks" element={<CyberhacksPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/weapons" element={<WeaponsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
