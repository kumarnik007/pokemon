import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemon, POKEMON_API_URL } from "../../api";
import { NamedAPIResource, NamedAPIResourceList } from "../../types";
import { Loader } from "../Loader";
import { PokemonDetail } from "../PokemonDetail";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState<NamedAPIResource[]>([]);
  const [nextOffset, setNextOffset] = useState(POKEMON_API_URL);
  const [prevOffset, setPrevOffset] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState<NamedAPIResource | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  const fetchPokemons = useCallback(async (url: string) => {
    try {
      setIsLoading(true);
      setErrorLoading(false);
      const fetchedData = await getPokemon<NamedAPIResourceList>(url);

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
    setSelectedPokemon(null);
    fetchPokemons(nextOffset);
  }, [nextOffset]);

  const fetchPreviousPokemonPage = useCallback(() => {
    setSelectedPokemon(null);
    fetchPokemons(prevOffset);
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
              <div className="tile is-ancestor">
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

                <div
                  className={classNames(
                    'tile',
                    'is-parent',
                    'Sidebar',
                    {
                      'Sidebar--open': selectedPokemon,
                    },
                  )}
                >
                  {selectedPokemon && (
                    <div className="tile is-child box is-success ">
                      {<PokemonDetail resource={selectedPokemon}/>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
