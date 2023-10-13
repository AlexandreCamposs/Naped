import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <span>Naped</span>
      <h1>Entrar na conta</h1>
      <form className={styles.form}>
        <label>
          <AiOutlineUser />
          <input type="text" name="name" placeholder="Digite seu usuário" />
        </label>
        <label>
          <RiLockPasswordLine />
          <input
            type="password"
            name="password"
            placeholder="Digite uma senha"
          />
        </label>
        <input type="submit" value="Logar na conta" />
      </form>
      <Link to="/register">Criar uma conta</Link>
    </div>
  );
};

export default Login;
