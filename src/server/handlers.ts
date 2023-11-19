import { HttpResponse, http } from 'msw';
import mockData from './mockData';

const handlers = [
  http.get('https://pokeapi.co/api/v2/pokemon', async ({ request }) => {
    const url = new URL(request.url);
    const limit = url.searchParams.get('limit');
    const offset = url.searchParams.get('offset');
    const value = `?limit=${limit}&offset=${offset}`;
    if (value === '?limit=10&offset=0') {
      return HttpResponse.json(mockData.listLimit10Offset0);
    }
    if (value === 'butterfree') {
      return new Response(JSON.stringify(mockData.butterfree));
    }

    return HttpResponse.json();
  }),
  http.get('https://pokeapi.co/api/v2/pokemon/:id', async (request) => {
    const { id: name } = request.params;
    if (name === 'butterfree') {
      return HttpResponse.json(mockData.butterfree);
    }
    if (name === 'qwer') {
      return HttpResponse.error();
    }
    return HttpResponse.json();
  }),
];

export default handlers;
