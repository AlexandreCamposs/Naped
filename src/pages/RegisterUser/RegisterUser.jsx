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
      <span className="text-3xl text-support01 font-bold ">Naped</span>
      <h1 className="sm:text-5xl text-4xl">Faça uma conta</h1>
      <form
        className="flex flex-col mt-8 max-w-sm w-full"
        onSubmit={handleSignUp}
      >
        <label className="relative">
          <AiOutlineUser className="absolute top-2/4 translate-y-[-85%] left-2 bg-transparent  text-support01 " />
          <input
            className="shadow appearance-none  rounded w-full py-2 px-8 mb-3 text-gray-700   focus:outline-none focus:text-white bg-dark20 "
            type="text"
            name="name"
            placeholder="Digite seu usuário"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label className="relative">
          <AiOutlineMail className="absolute top-2/4 translate-y-[-85%] left-2 bg-transparent  text-support01 " />
          <input
            className="shadow appearance-none  rounded w-full py-2 px-8 mb-3 text-gray-700   focus:outline-none focus:text-white bg-dark20 "
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className="relative">
          <RiLockPasswordLine className="absolute top-2/4 translate-y-[-85%] left-2 bg-transparent  text-support01 " />
          <input
            className="shadow appearance-none  rounded w-full py-2 px-8 mb-3 text-gray-700   focus:outline-none focus:text-white bg-dark20 "
            type="password"
            name="password"
            placeholder="Digite uma senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label className="relative">
          <RiLockPasswordLine className="absolute top-2/4 translate-y-[-85%] left-2 bg-transparent  text-support01 " />
          <input
            className="shadow appearance-none  rounded w-full py-2 px-8 mb-3 text-gray-700   focus:outline-none focus:text-white bg-dark20 "
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
          className="text-white border-none bg-support01  font-bold rounded cursor-pointer py-2 mb-2"
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
