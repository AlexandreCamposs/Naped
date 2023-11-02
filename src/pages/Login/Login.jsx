import { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/userAuthentication';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import styles from './Login.module.css';
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
    <div className={styles.container}>
      <span>Naped</span>
      <h1>Entrar na conta</h1>
      <form className={styles.form} onSubmit={handleSignIn}>
        <label>
          <AiOutlineUser />
          <input
            type="text"
            name="email"
            placeholder="Digite seu usuário"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <RiLockPasswordLine />
          <input
            type="password"
            name="password"
            placeholder="Digite uma senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <input type="submit" value="Log in" />
      </form>
      <Link to="/register">Criar uma conta</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
