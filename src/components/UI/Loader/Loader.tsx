import classes from './Loader.module.css';
import loaderImg from '../../../assets/loader.png';

function Loader() {
  return (
    <div className={classes.loaderContainer} data-testid="loader">
      <img src={loaderImg} className={classes.loader} alt="Loading..." />
    </div>
  );
}

export default Loader;
