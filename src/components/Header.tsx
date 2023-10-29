import { Component } from 'react';
import classes from './Header.module.css';
import SearchForm from './SearchForm';

interface HeaderProps {
  onSubmit: (value: string) => void;
}

export default class Header extends Component<HeaderProps> {
  render() {
    const { onSubmit } = this.props;
    return (
      <header className={classes.header}>
        <SearchForm onSubmit={onSubmit} />
      </header>
    );
  }
}
