import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import WeatherPage from './components/WeatherPage';
import "./App.css";
//import FavoritesPage from './components/FavoritesPage';

function App() {
  return (
    <Router>
        <Header />
        <WeatherPage/>
    </Router>
  );
}

export default App;