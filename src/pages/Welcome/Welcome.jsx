import { Link } from 'react-router-dom';

import styles from './Welcome.module.css';
const Welcome = () => {
  return (
    <div className={styles.container}>
      <h1>Seja bem vindo.</h1>
      <h2>
        Para começar a usar a plataforma,realize o cadastro no botão abaixo.
      </h2>

      <Link to="/register">Cadatrar usuário</Link>
    </div>
  );
};

export default Welcome;
