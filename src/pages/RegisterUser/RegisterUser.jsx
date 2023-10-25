import { useState } from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import { useAuthentication } from '../../hooks/userAuthentication';

import styles from './Register.module.css';

const RegisterUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { registerUser, error: newError, loading } = useAuthentication();

  const handleSignOut = async (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    if (name.trim() === '') {
      setError('Campo nome obrigatório.');
    }

    if (password !== confirmPassword) {
      setError('As senhas precisam ser iguais.');
      return;
    }

    await registerUser(user);
    console.log(user);
  };

  return (
    <div className={styles.container}>
      <span>Naped</span>
      <h1>Faça uma conta</h1>
      <form className={styles.form} onSubmit={handleSignOut}>
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
        <input type="submit" value="Criar conta" />
      </form>
      <Link to="/login">Já tenho uma conta</Link>
    </div>
  );
};

export default RegisterUser;
