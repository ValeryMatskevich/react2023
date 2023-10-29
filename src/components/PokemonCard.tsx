import { Component } from 'react';
import upperCaseFirst from '../utils/upperCaseFirst';
import classes from './PokemonCard.module.css';
import { PokemonCardProps } from '../interface/PokemonCardProps';

export default class PokemonCard extends Component<PokemonCardProps> {
  render() {
    const { name, img } = this.props;
    return (
      <li className={classes.card}>
        <p className={classes.name}>{upperCaseFirst(name)}</p>
        <img className={classes.img} src={img} alt={name} />
      </li>
    );
  }
}
