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
    <div className={styles.container}>
      <span>Naped</span>
      <h1>Faça uma conta</h1>
      <form className={styles.form} onSubmit={handleSignUp}>
        <label>
          <AiOutlineUser />
          <input
            type="text"
            name="name"
            placeholder="Digite seu usuário"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <AiOutlineMail />
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
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
        <label>
          <RiLockPasswordLine />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Digite novamente a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </label>
        <input type="submit" value="Sign up" />
      </form>
      <Link to="/login">Já tenho uma conta</Link>
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegisterUser;
