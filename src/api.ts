import { ApiParam } from "./types/ApiParam";

export const API_URL = 'https://pokeapi.co/api/v2/';

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getPokemon<T>(param: ApiParam): Promise<T> {
  const url = (param.url ? param.url : API_URL)
    + (param.endpoint ? param.endpoint : '')
    + (param.resource ? `/${param.resource}` : '')
    + (param.query ? param.query : '');

  console.log(url);

  // keeping this delay for testing purpose
  return wait(500)
    .then(() => fetch(url))
    .then(response => response.json());
}
