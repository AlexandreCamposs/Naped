import { Link } from 'react-router-dom';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

import styles from './Register.module.css';

const RegisterUser = () => {
  return (
    <div className={styles.container}>
      <span>Naped</span>
      <h1>Faça uma conta</h1>
      <form className={styles.form}>
        <label>
          <AiOutlineUser />
          <input type="text" name="name" placeholder="Digite seu usuário" />
        </label>
        <label>
          <AiOutlineMail />
          <input type="text" name="email" placeholder="Digite seu e-mail" />
        </label>
        <label>
          <RiLockPasswordLine />
          <input
            type="password"
            name="password"
            placeholder="Digite uma senha"
          />
        </label>
        <label>
          <RiLockPasswordLine />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Digite novamente a senha"
          />
        </label>
        <input type="submit" value="Criar conta" />
      </form>
      <Link to="/login">Já tenho uma conta</Link>
    </div>
  );
};

export default RegisterUser;
