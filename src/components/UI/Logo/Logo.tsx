import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg';
import classes from './Logo.module.css';

function Logo() {
  return (
    <Link to="/">
      <img className={classes.logo} src={logo} alt="Logo" />
    </Link>
  );
}

export default Logo;
