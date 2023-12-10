import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from "react-redux";
import Header from './components/Header/Header';
import WeatherPage from './components/WeatherPage/WeatherPage';
import FavoritesPage from './components/FavoritesPage/FavoritesPage';
import "./App.css";


function App() {
  const mode = useSelector((state: { mode: { value: string } }) => state.mode.value);
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