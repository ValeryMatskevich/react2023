import { Component } from 'react';
import PokemonsList from './PokemonsList';
import { MainProps } from '../interface/MainProps';

export default class Main extends Component<MainProps> {
  render() {
    const { data } = this.props;

    return (
      <main>
        <PokemonsList data={data} />
      </main>
    );
  }
}
