import React from "react";
import { useMatch } from "react-router-dom";
import { NamedAPIResource, Pokemon } from "../../types";

interface Props {
  pokemon: NamedAPIResource,
}

export const PokemonDetail: React.FC<Props> = ({ pokemon }) => {
  // const pokemon = useMatch('/pokemon/:name')?.params.name || '';

  console.log('Selected pokemon is ', pokemon);

  return (
    <h1>
      {`Selected pokemon : ${pokemon.name}`}
    </h1>
  );
};
