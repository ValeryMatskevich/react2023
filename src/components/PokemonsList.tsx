import { Component } from 'react';
import PokemonCard from './PokemonCard';
import classes from './PokemonsList.module.css';
import { PokemonsListProps } from '../interface/PokemonsListProps';

export default class PokemonsList extends Component<PokemonsListProps> {
  render() {
    const { data } = this.props;

    if (!data.length) {
      return (
        <div className={classes.errorWrapper}>
          <h1>The name of the Pokemon was entered incorrectly.</h1>
          <p>Try again.</p>
        </div>
      );
    }
    return (
      <ul className={classes.list}>
        {data.map(({ id, name, sprites }) => (
          <PokemonCard
            name={name}
            img={sprites?.front_default}
            key={id}
            id={id}
          />
        ))}
      </ul>
    );
  }
}
