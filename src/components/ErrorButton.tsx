import { Component } from 'react';
import classes from './ErrorButton.module.css';
import { ErrorButtonProps } from '../interface/ErrorButtonProps';

export default class ErrorButton extends Component<ErrorButtonProps> {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" className={classes.errorBtn} onClick={onClick}>
        <p className="errorMessage">Error</p>
        <img
          src="../../public/Pokeball.png"
          alt="Pokemon"
          className="pokemon-image"
        />
      </button>
    );
  }
}
