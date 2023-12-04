import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias
        cupiditate ad nostrum doloribus iste tempora quisquam excepturi
        repellat, fugit cumque dolore magni possimus inventore neque provident!
        Sunt, quo eos?
      </p>

      <p>
        Go back to <Link to="/">Home</Link>.
      </p>
    </div>
  );
}
