const mockData = {
  listLimit10Offset0: {
    count: 1292,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
    previous: null,
    results: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
    ],
  },
  bulbasaur: {
    name: 'bulbasaur',
    id: 1,
    sprites: {
      front_default: 'url',
      other: {
        dream_world: {
          front_default: 'url',
        },
      },
    },
    weight: 69,
    height: 7,
  },
  butterfree: {
    name: 'butterfree',
    id: 12,
    sprites: {
      front_default: 'url',
      other: {
        dream_world: {
          front_default: 'url',
        },
      },
    },
    weight: 320,
    height: 11,
  },
};

export default mockData;
