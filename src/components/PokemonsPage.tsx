import { Component } from 'react';
import Header from './Header';
import Main from './Main';
import { PokemonsPageState } from '../interface/PokemonsPageState';
import { PokemonsPageProps } from '../interface/PokemonsPageProps';
import { PokemonResponseItem } from '../interface/PokemonResponseItem';
import Loader from './Loader';

export default class PokemonsPage extends Component<
  PokemonsPageProps,
  PokemonsPageState
> {
  constructor(props: PokemonsPageProps) {
    super(props);
    this.state = {
      isLoading: true,
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
    this.setState({ pokemonData: [], isLoading: true });
    setTimeout(() => {
      fetch(`${url}`)
        .then((response) => response.json())
        .then((data) =>
          data.results.forEach((element: PokemonResponseItem) => {
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
        .then(() => this.setState({ isLoading: false }))
        .catch((error) => console.log('error: ', error));
    }, 15000);
  }

  getPokemonData(searchValue: string) {
    this.setState({ pokemonData: [], isLoading: true });
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(`${url}${searchValue.toLowerCase()}/`)
      .then((response) => response.json())
      .then((data) => this.setState({ pokemonData: [data] }))
      .then(() => this.setState({ isLoading: false }))
      .catch((error) => console.log('error: ', error));
  }

  render() {
    const { pokemonData, isLoading } = this.state;
    return (
      <>
        <Header onSubmit={this.handleSubmit} />
        {isLoading ? <Loader /> : <Main data={pokemonData} />}
      </>
    );
  }
}
