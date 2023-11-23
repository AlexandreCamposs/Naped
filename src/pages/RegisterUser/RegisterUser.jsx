import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../hooks/userAuthentication';
import { useAuthValue } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import styles from './Register.module.css';

const RegisterUser = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();
	const { user } = useAuthValue();

	const {
		registerUser,
		error: newError,
		loading,
		clearError,
	} = useAuthentication();

	const handleSignUp = async (e) => {
		e.preventDefault();

		const user = {
			name,
			email,
			password,
		};

		if (name.trim() === '') {
			setError('Campo nome obrigatório.');
			return;
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError('Email inválido.');
			return;
		}

		if (password !== confirmPassword) {
			setError('As senhas precisam ser iguais.');
			return;
		}

		await registerUser(user);
	};

	useEffect(() => {
		if (newError) {
			setError(newError);
			clearError();
		}
	}, [newError]);

	useEffect(() => {
		if (error) {
			setTimeout(() => {
				setError('');
			}, 2000);
		}
	}, [error]);

	if (user) {
		navigate('/');
	}
	return (
		<div className="containerDefault h-heightDefault px-4">
			<span className="mt-4 text-3xl font-bold text-support01">Naped</span>
			<h1 className="text-4xl sm:text-5xl">Faça uma conta</h1>
			<form
				className="mt-8 flex w-full max-w-sm flex-col"
				onSubmit={handleSignUp}
			>
				<label className="relative">
					<AiOutlineUser className="absolute left-2 top-2/4 translate-y-[-85%] bg-transparent  text-support01 " />
					<input
						className="mb-3 w-full  appearance-none rounded bg-dark20 px-8 py-2 text-gray-700   shadow focus:text-white focus:outline-none "
						type="text"
						name="name"
						placeholder="Digite seu usuário"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</label>
				<label className="relative">
					<AiOutlineMail className="absolute left-2 top-2/4 translate-y-[-85%] bg-transparent  text-support01 " />
					<input
						className="mb-3 w-full  appearance-none rounded bg-dark20 px-8 py-2 text-gray-700   shadow focus:text-white focus:outline-none "
						type="text"
						name="email"
						placeholder="Digite seu e-mail"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label className="relative">
					<RiLockPasswordLine className="absolute left-2 top-2/4 translate-y-[-85%] bg-transparent  text-support01 " />
					<input
						className="mb-3 w-full  appearance-none rounded bg-dark20 px-8 py-2 text-gray-700   shadow focus:text-white focus:outline-none "
						type="password"
						name="password"
						placeholder="Digite uma senha"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</label>
				<label className="relative">
					<RiLockPasswordLine className="absolute left-2 top-2/4 translate-y-[-85%] bg-transparent  text-support01 " />
					<input
						className="mb-3 w-full  appearance-none rounded bg-dark20 px-8 py-2 text-gray-700   shadow focus:text-white focus:outline-none "
						type="password"
						name="confirmPassword"
						placeholder="Digite novamente a senha"
						onChange={(e) => setConfirmPassword(e.target.value)}
						value={confirmPassword}
					/>
				</label>
				<input
					type="submit"
					value="Sign up"
					className="mb-2 cursor-pointer rounded  border-none bg-support01 py-2 font-bold text-white"
				/>
			</form>
			<Link to="/login" className="text-white">
				Já tenho uma conta
			</Link>
			{error && <p className="text-error"> {error}</p>}
		</div>
	);
};

export default RegisterUser;
