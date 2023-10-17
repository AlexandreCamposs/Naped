import { useState } from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import { useAuthentication } from '../../hooks/userAuthentication';

import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loginUser } = useAuthentication();

  const handleSignIn = (e) => {
    e.preventDefault();

    const user = { email, password };

    loginUser(user);
    console.log(user);
  };
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
        <input type="submit" value="Logar na conta" />
      </form>
      <Link to="/register">Criar uma conta</Link>
    </div>
  );
};

export default Login;
