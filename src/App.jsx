import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useAuthentication } from './hooks/userAuthentication';
import { onAuthStateChanged } from 'firebase/auth';

import RegisterUser from './pages/RegisterUser';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';

function App() {
	const [user, setUser] = useState(undefined);
	const { auth } = useAuthentication();
	const loadingUser = user === undefined;

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, [auth]);

	if (loadingUser) {
		return (
			<h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-4xl ">
				Loading <span className="text-support01">site</span> ...
			</h1>
		);
	}

	return (
		<AuthProvider value={{ user }}>
			<div className="mx-auto min-h-screen w-full max-w-7xl bg-dark30">
				<BrowserRouter>
					<NavBar />
					<Routes>
						{!user && <Route path="/" element={<RegisterUser />} />}
						<Route path="/" element={!user ? <RegisterUser /> : <Home />} />
						<Route
							path="/page=series"
							element={!user ? <RegisterUser /> : <Series />}
						/>
						<Route
							path="/page=movies"
							element={!user ? <RegisterUser /> : <Movies />}
						/>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<RegisterUser />} />
						<Route path="/search" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</div>
			<Footer />
		</AuthProvider>
	);
}

export default App;
