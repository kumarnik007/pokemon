import React, { useCallback, useEffect, useState } from "react";
import { getPokemon } from "../../api";
import { ApiParam } from "../../types/ApiParam";
import { NamedAPIResource, NamedAPIResourceList } from "../../types/Pokemon";
import { Loader } from "../Loader";
import { PokemonList } from "../PokemonList";

export const PokemonsPage = () => {
  const [pokemons, setPokemons] = useState<NamedAPIResource[]>([]);
  const [nextOffset, setNextOffset] = useState('');
  const [prevOffset, setPrevOffset] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  const fetchPokemons = useCallback(async (param: ApiParam) => {
    try {
      setIsLoading(true);
      setErrorLoading(false);
      const fetchedData = await getPokemon<NamedAPIResourceList>(param);

      setPokemons(fetchedData.results);
      setNextOffset(fetchedData.next);
      setPrevOffset(fetchedData.previous);
    } catch (error) {
      setErrorLoading(true);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPokemons({
      endpoint: 'pokemon',
      query: '?limit=10',
    });
  }, []);

  const fetchNextPokemonPage = useCallback(() => {
    fetchPokemons({ url: nextOffset });
  }, [nextOffset]);

  const fetchPreviousPokemonPage = useCallback(() => {
    fetchPokemons({ url: prevOffset });
  }, [prevOffset]);

  return (
    <>
      <h1 className="title">Pokemons</h1>

      <div className="block">
        <div className="box container">
          {isLoading && <Loader />}

          {errorLoading && (
            <p data-cy="peopleLoadingError" className="has-text-danger">
              Something went wrong
            </p>
          )}

          {(pokemons.length === 0) && !errorLoading && !isLoading && (
            <p data-cy="noPeopleMessage">
              There are no pokemons on the server
            </p>
          )}

          {(pokemons.length > 0 && !isLoading) && (
            <div className="container">
              <PokemonList pokemons={pokemons} />

              <nav
                className="pagination is-centered is-parent tile"
                role="navigation"
                aria-label="pagination"
              >
                <button
                  className="pagination-previous"
                  disabled={!prevOffset}
                  onClick={fetchPreviousPokemonPage}
                >
                  Previous
                </button>

                <button
                  className="pagination-next"
                  disabled={!nextOffset}
                  onClick={fetchNextPokemonPage}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
