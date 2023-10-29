import { Component } from 'react';
import Header from './Header';
import Main from './Main';
import { PokemonsPageState } from '../interface/PokemonsPageState';
import { PokemonsPageProps } from '../interface/PokemonsPageProps';

export default class PokemonsPage extends Component<
  PokemonsPageProps,
  PokemonsPageState
> {
  constructor(props: PokemonsPageProps) {
    super(props);
    this.state = {
      pokemonData: [],
    };
    this.getPokemonsListData = this.getPokemonsListData.bind(this);
    this.getPokemonData = this.getPokemonData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('pokemonName');
    if (!searchValue) this.getPokemonsListData();
    else this.getPokemonData(searchValue);
  }

  handleSubmit(inputValue: string) {
    localStorage.setItem('pokemonName', inputValue);
    if (!inputValue) this.getPokemonsListData();
    else this.getPokemonData(inputValue);
    return inputValue;
  }

  getPokemonsListData() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    this.setState({ pokemonData: [] });
    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) =>
        data.results.forEach((element) => {
          return fetch(element.url)
            .then((response) => response.json())
            .then((pokemon) => {
              const { pokemonData } = this.state;
              const isDuplicate = pokemonData.some(
                (item) => item.id === pokemon.id
              );
              if (!isDuplicate) {
                this.setState((state) => ({
                  pokemonData: [...state.pokemonData, pokemon].sort(
                    (a, b) => a.id - b.id
                  ),
                }));
              }
            });
        })
      )
      .catch((error) => console.log('error: ', error));
  }

  getPokemonData(searchValue: string) {
    this.setState({ pokemonData: [] });
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(`${url}${searchValue.toLowerCase()}/`)
      .then((response) => response.json())
      .then((data) => this.setState({ pokemonData: [data] }))
      .catch((error) => console.log('error: ', error));
  }

  render() {
    const { pokemonData } = this.state;
    return (
      <>
        <Header onSubmit={this.handleSubmit} />
        <Main data={pokemonData} />
      </>
    );
  }
}
