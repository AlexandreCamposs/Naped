import { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/userAuthentication';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import { useAuthValue } from '../../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigator = useNavigate();

  const { user } = useAuthValue();
  const { loginUser, error: newError, clearError, auth } = useAuthentication();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const user = { email, password };

    await loginUser(user);
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
    navigator('/');
  }

  return (
    <div className="containerDefault h-heightDefault px-4">
      <span className="text-3xl text-support01 font-bold ">Naped</span>
      <h1 className="sm:text-5xl text-4xl">Entrar na conta</h1>
      <form
        className="flex flex-col mt-8 max-w-sm w-full"
        onSubmit={handleSignIn}
      >
        <label className="relative">
          <AiOutlineUser className="absolute top-2/4 translate-y-[-85%] left-2 bg-transparent  text-support01 " />
          <input
            className="shadow appearance-none  rounded w-full py-2 px-8 mb-3 text-gray-700   focus:outline-none focus:text-white bg-dark20 "
            type="text"
            name="email"
            placeholder="Digite seu usuário"
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
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <input
          type="submit"
          value="Log in"
          className="text-white border-none bg-support01  font-bold rounded cursor-pointer py-2 mb-2"
        />
      </form>
      <Link to="/register" className="text-white">
        Criar uma conta
      </Link>
      {error && <p className="text-error">{error}</p>}
    </div>
  );
};

export default Login;
