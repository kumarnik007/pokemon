import React, { useCallback, useEffect, useState } from "react";
import { getPokemon } from "../../api";
import { NamedAPIResource, Pokemon } from "../../types";

interface Props {
  resource: NamedAPIResource,
}

export const PokemonDetail: React.FC<Props> = ({ resource }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const fetchPokemon = useCallback(async (url: string) => {
    try {
      setIsLoading(true);
      setErrorLoading(false);
      const fetchedData = await getPokemon<Pokemon>(url);

      setPokemon(fetchedData);
    } catch (error) {
      setErrorLoading(true);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPokemon(resource.url);
  }, [resource]);

  console.log('Fetched pokemon is ', pokemon);

  return (
    <h1>
      {`Selected resource : ${resource.name}`}
    </h1>
  );
};
