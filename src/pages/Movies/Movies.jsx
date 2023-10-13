import Error from '../../assets/error.svg';
import styles from './Movies.module.css';

const Movies = () => {
  return (
    <div className={styles.container}>
      <h1>Filmes</h1>
      <h2>Página em construção</h2>
      <img src={Error} alt="" />
    </div>
  );
};

export default Movies;
