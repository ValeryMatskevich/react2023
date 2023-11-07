import axios from 'axios';

const BASEURL = 'https://pokeapi.co/api/v2/pokemon';

interface Pokemon {
  name: string;
  url: string;
}

export interface Details {
  name: string;
  id: number;
  img: string;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  weight: string;
  height: string;
}

const getPokemons = async (
  pokemonName?: string,
  page = 1,
  limit = 5
): Promise<{ pokemonDetails: Details[]; count?: number }> => {
  const offset = (page - 1) * limit;
  const url = pokemonName ? `${BASEURL}/${pokemonName}` : BASEURL;

  try {
    const response = await axios.get(url, {
      params: { limit, offset },
    });
    const { count } = response.data;

    if (pokemonName) {
      const pokemonDetails = [response.data];
      return { pokemonDetails, count };
    }

    const pokemons: Pokemon[] = response.data.results;

    const pokemonDetailsResponses = await Promise.all(
      pokemons.map((pokemon) => axios.get(pokemon.url))
    );

    const pokemonDetails = pokemonDetailsResponses.map(
      (pokemon) => pokemon.data
    );

    return { pokemonDetails, count };
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export default getPokemons;
