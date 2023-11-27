import Image from 'next/image';
import loaderImg from '../../../assets/loader.png';
import classes from './Loader.module.css';

function Loader() {
  return (
    <div className={classes.loaderContainer} data-testid="loader">
      <Image
        src={loaderImg}
        className={classes.loader}
        alt="Loading..."
        width={200}
        height={200}
      />
    </div>
  );
}

export default Loader;
