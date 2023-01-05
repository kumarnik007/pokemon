import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <Link
              to={`/pokemon/${pokemon.name}`}
              onClick={() => setSelectedPokemon(pokemon)}
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>

      {selectedPokemon && (
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
      )}
    </>
  );
};
