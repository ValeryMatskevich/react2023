import { HttpResponse, http } from 'msw';
import mockData from './mockData';

const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon', async () => {
    // const url = new URL(request.url);
    // const limit = url.searchParams.get('limit');
    // const offset = url.searchParams.get('offset');
    // const value = `?limit=${limit}&offset=${offset}`;
    // if (value === '?limit=10&offset=0') {

    // }
    // if (value === 'bulbasaur') {
    //   return new Response(JSON.stringify(mockData.bulbasaur));
    // }
    // if (value === 'butterfree') {
    //   return new Response(JSON.stringify(mockData.butterfree));
    // }

    return HttpResponse.json(mockData.listLimit10Offset0);
  }),
];

export default handlers;
