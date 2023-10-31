import { Component } from 'react';
import classes from './ErrorButton.module.css';
import { ErrorButtonProps } from '../interface/ErrorButtonProps';
import pokeballImg from '../assets/Pokeball.png';

export default class ErrorButton extends Component<ErrorButtonProps> {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" className={classes.errorBtn} onClick={onClick}>
        <p className="errorMessage">Error</p>
        <img src={pokeballImg} alt="Pokemon" className="pokemon-image" />
      </button>
    );
  }
}
