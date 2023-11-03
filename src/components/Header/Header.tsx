import classes from './Header.module.css';
import SearchForm from '../SearchForm';

interface HeaderProps {
  onSubmit: (value: string) => void;
}

function Header({ onSubmit }: HeaderProps) {
  return (
    <header className={classes.header}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
}

export default Header;
