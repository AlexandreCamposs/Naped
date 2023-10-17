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

  const { registerUser, loading, error } = useAuthentication();

  const handleSignOut = (e) => {
    e.preventDefault();

    registerUser(email, password);
    // console.log(name, email, error);
  };
  if (loading) {
    return <p>Carregando</p>;
  }
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
