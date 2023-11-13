import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { useAuthentication } from "./hooks/userAuthentication";
import { onAuthStateChanged } from "firebase/auth";

import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Animes from "./pages/Animes";
import Games from "./pages/Games";
import MovieDetails from './components/MovieDetails'
import Account from "./pages/Account";
import PageError from "./pages/PageError";
import Footer from "./components/Footer";

import styles from "./App.module.css";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication(); //auth é a autenticação
  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <AuthProvider value={{ user }}>
      <div className={styles.app}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {!user && <Route path="/" element={<RegisterUser />} />}
            <Route path="/" element={!user ? <RegisterUser /> : <Home />} />
            <Route
              path="/series"
              element={!user ? <RegisterUser /> : <Series />}
            />
            <Route
              path="/movies"
              element={!user ? <RegisterUser /> : <Movies />}
            />
            <Route
              path="/animes"
              element={!user ? <RegisterUser /> : <Animes />}
            />
            <Route
              path="/games"
              element={!user ? <RegisterUser /> : <Games />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/account" element={<Account />} />
            <Route path="/error" element={PageError} />
            <Route path="/movie-details/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
