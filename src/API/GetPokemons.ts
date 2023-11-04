import axios from 'axios';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonDetails {
  name: string;
  id: number;
  img: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
}

const getPokemons = async (pokemonName?: string): Promise<PokemonDetails[]> => {
  const url = pokemonName ? `${baseUrl}/${pokemonName}` : baseUrl;

  try {
    const response = await axios.get(url);
    if (pokemonName) {
      const pokemonDetails = [response.data];
      return pokemonDetails;
    }

    const pokemons: Pokemon[] = response.data.results;

    const pokemonDetailsResponses = await Promise.all(
      pokemons.map((pokemon) => axios.get(pokemon.url))
    );

    const pokemonDetails = pokemonDetailsResponses.map(
      (pokemon) => pokemon.data
    );

    return pokemonDetails;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export default getPokemons;
