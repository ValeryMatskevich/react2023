import styles from './Loader.module.css';
import loaderImg from '../../../assets/loader.png';

function Loader() {
  return (
    <div className={styles.loaderContainer} data-testid="loader">
      <img src={loaderImg} className={styles.loader} alt="Loading..." />
    </div>
  );
}

export default Loader;
