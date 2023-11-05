import { Link } from 'react-router-dom';
import classes from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={classes.notFound}>
      <h2>Страница не найдена!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias
        cupiditate ad nostrum doloribus iste tempora quisquam excepturi
        repellat, fugit cumque dolore magni possimus inventore neque provident!
        Sunt, quo eos?
      </p>

      <p>
        Вернуться на <Link to="/">Главную страницу</Link>.
      </p>
    </div>
  );
}
