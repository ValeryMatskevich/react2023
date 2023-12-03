import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/controlled">Controlled </NavLink>
      <NavLink to="/uncontrolled">Uncontrolled </NavLink>
    </nav>
  );
}
