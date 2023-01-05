import classNames from "classnames";
import React, { useState } from "react";
import { NamedAPIResource } from "../../types/Pokemon";
import { PokemonFetch } from "../PokemonFetch";

interface Props {
  pokemons: NamedAPIResource[],
}

export const PokemonList: React.FC<Props> = ({
  pokemons,
}) => {
  const [selectedPokemon, setSelectedPokemon] = useState<NamedAPIResource | null>(null);

  return (
    <>
      <ul className="tile is-parent is-vertical">
        {pokemons.map((pokemon, idx) => (
          <li
            key={idx}
            className="title is-4"
          >
            <a
              onClick={() => setSelectedPokemon(pokemon)}
            >
              {pokemon.name}
            </a>
          </li>
        ))}
      </ul>

      {selectedPokemon && (
        <div className="container is-clipped">
          <div
            className={classNames(
              'modal',
              {
                'is-active': selectedPokemon,
              }
            )}
          >
            <PokemonFetch
              resource={selectedPokemon}
              onSelectResource={setSelectedPokemon}
            />
          </div>
        </div>
      )}
    </>
  );
};
