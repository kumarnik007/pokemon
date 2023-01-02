import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemons, POKEMON_API_URL } from "../../api";
import { NamedAPIResource } from "../../types";
import { Loader } from "../Loader";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<NamedAPIResource[]>([]);
  const [nextOffset, setNextOffset] = useState(POKEMON_API_URL);
  const [prevOffset, setPrevOffset] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  const fetchPokemons = useCallback(async (url: string) => {
    try {
      setIsLoading(true);
      setErrorLoading(false);
      const fetchedData = await getPokemons(url);

      setPokemons(fetchedData.results);
      setNextOffset(fetchedData.next);
      setPrevOffset(fetchedData.previous);
    } catch (error) {
      setErrorLoading(true);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchPokemons(nextOffset);
  }, []);

  const fetchNextPokemonPage = useCallback(() => {
    fetchPokemons(nextOffset);
  }, [nextOffset]);

  const fetchPreviousPokemonPage = useCallback(() => {
    fetchPokemons(prevOffset);
  }, [prevOffset]);

  console.log('Fetched pokemons are ', pokemons);

  return (
    <>
      <h1 className="title">Pokemons</h1>

      <div className="block">
        <div className="box table-container">
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

          {(pokemons.length > 0) && (
            <>
              <ul>
                {pokemons.map((pokemon, idx) => (
                  <li
                    key={idx}
                    className="title is-4"
                  >
                    <Link to={`/pokemon/${pokemon.name}`} >
                      {pokemon.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="pagination">
                <li className="page-item">
                  <button
                    type="button"
                    className="page-link"
                    disabled={!prevOffset}
                    onClick={fetchPreviousPokemonPage}
                  >
                    Previous
                  </button>
                </li>

                <li className="page-item">
                  <button
                    type="button"
                    className="page-link"
                    disabled={!nextOffset}
                    onClick={fetchNextPokemonPage}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};
