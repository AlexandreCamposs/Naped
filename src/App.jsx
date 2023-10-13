import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RegisterUser from './pages/RegisterUser';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import Animes from './pages/Animes';
import Games from './pages/Games';
import Account from './pages/Account';
import PageError from './pages/PageError';
import Footer from './components/Footer';

import styles from './App.module.css';

function App() {
  return (
    <>
      <div className={styles.app}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/animes" element={<Animes />} />
            <Route path="/games" element={<Games />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/account" element={<Account />} />
            <Route path="/error" element={PageError} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
