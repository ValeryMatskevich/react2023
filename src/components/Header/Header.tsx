import SearchForm from '../SearchForm/SearchForm';
import classes from './Header.module.css';

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
