import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${classes.link} ${isActive ? classes.active : ''}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${classes.link} ${isActive ? classes.active : ''}`
        }
      >
        About
      </NavLink>
    </nav>
  );
}
