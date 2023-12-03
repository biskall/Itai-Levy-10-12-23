import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Header from './components/Header';
import WeatherPage from './components/WeatherPage';
import FavoritesPage from './components/FavoritesPage';
import "./App.css";
import { Mode } from './interfaces/mode-interface';
//import FavoritesPage from './components/FavoritesPage';

function App() {
  const mode = useSelector((state: {mode: { value: string }} ) => state.mode.value);
  return (
    <Router>
      <div className={mode}>
      <header className="App-header">
        <Header />
      </header>
      <Routes>
      <Route path="/" element={<WeatherPage />} />
      <Route path="/favorite" element={<FavoritesPage />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;