import { Component } from 'react';
import classes from './ErrorButton.module.css';
import pokeballImg from '../assets/Pokeball.png';
import { ErrorButtonProps } from '../interface/ErrorButtonProps';
import { ErrorButtonState } from '../interface/ErrorButtonState';

export default class ErrorButton extends Component<
  ErrorButtonProps,
  ErrorButtonState
> {
  constructor(props: ErrorButtonProps) {
    super(props);
    this.state = { hasError: false };
    this.toggleError = this.toggleError.bind(this);
  }

  toggleError() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      throw new Error('This is a test error.');
    }

    return (
      <button
        type="button"
        className={classes.errorBtn}
        onClick={this.toggleError}
      >
        <p className="errorMessage">Error</p>
        <img src={pokeballImg} alt="Pokemon" className="pokemon-image" />
      </button>
    );
  }
}
