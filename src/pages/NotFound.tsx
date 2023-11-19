import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={classes.notFound} data-testid="not-found">
      <h2>Not found</h2>

      <p>
        Go back to <Link to="/">Home page</Link>.
      </p>
    </div>
  );
}
