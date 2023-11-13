import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <p>
        Copyright &copy; <span>AlexandreCamposs</span>. Todos os direitos
        reservados
      </p>{" "}
    </div>
  );
};

export default Footer;
