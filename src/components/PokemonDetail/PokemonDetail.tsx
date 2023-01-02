import React from "react";
import { useMatch } from "react-router-dom";

export const PokemonDetail = () => {
  const pokemon = useMatch('/pokemon/:name')?.params.name || '';

  console.log('Selected pokemon is ', pokemon);

  return (
    <h1>Pokemon Detail page</h1>
  );
};
