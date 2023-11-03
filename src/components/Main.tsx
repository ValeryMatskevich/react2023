import { Component } from 'react';
import PokemonsList from './PokemonsList';
import { MainProps } from '../interface/MainProps';
import classes from './Main.module.css';

export default class Main extends Component<MainProps> {
  render() {
    const { data } = this.props;

    return (
      <main className={classes.main}>
        <PokemonsList data={data} />
      </main>
    );
  }
}
