import { NamedAPIResourceList } from './types/Pokemon';

export const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10';
// export const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10';

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getPokemons(url: string): Promise<NamedAPIResourceList> {
  // keeping this delay for testing purpose
  return wait(500)
    .then(() => fetch(url))
    .then(response => response.json());
}
