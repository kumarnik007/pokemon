export interface NamedAPIResource {
  name: string,
  url: string,
}

export interface NamedAPIResourceList {
  count: number,
  next: string,
  previous: string,
  results: NamedAPIResource[],
}

export interface PokemonAbility {
  is_hidden: boolean,
  slot: number,
  ability: NamedAPIResource,
}

export interface PokemonMoveDetail {
  level_learned_at: number,
  version_group: NamedAPIResource,
  move_learn_method: NamedAPIResource,
}

export interface PokemonMove {
  move: NamedAPIResource,
  version_group_details: PokemonMoveDetail[],
}

export interface Sprite {
  back_default: string,
  back_female: string,
  back_shiny: string,
  back_shiny_female: string,
  front_default: string,
  front_female: string,
  front_shiny: string,
  front_shiny_female: string,
}

export interface Pokemon {
  id: number,
  name: string,
  height: number,
  weight: number,
  abilities: PokemonAbility[],
  moves: PokemonMove[],
  sprites: Sprite,
}

export interface PokemonWithAbility {
  pokemon: NamedAPIResource,
}

export interface Ability {
  pokemon: PokemonWithAbility[],
}

export interface Move {
  learned_by_pokemon: NamedAPIResource[],
}
