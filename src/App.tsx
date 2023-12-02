import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import WeatherPage from './components/WeatherPage';
//import FavoritesPage from './components/FavoritesPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
        <WeatherPage />
          {/* Other components can go here */}
        </div>
      </div>
    </Router>
  );
}

export default App;