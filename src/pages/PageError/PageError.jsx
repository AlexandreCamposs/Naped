import { Link } from "react-router-dom";

import IconError from "../../assets/error.svg";
import styles from "./PageError.module.css";

const PageError = () => {
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <h1>
          Tenho más notícias <br /> para você!
        </h1>
        <p>
          A página que você está procurando pode ter sido <br /> removida ou
          está temporariamente indisponível.
        </p>
        <Link to="/"> Voltar para o início</Link>
      </div>
      <div className={styles.imageError}>
        <img src={IconError} alt="logo error" />
        <p>Ups! Você chegou no espaço... volte para o mundo nerd!</p>
      </div>
    </div>
  );
};

export default PageError;
