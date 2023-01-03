import React, { useCallback, useEffect, useState } from "react";
import { getPokemon } from "../../api";
import { NamedAPIResource, Pokemon } from "../../types";
import { Loader } from "../Loader";

interface Props {
  resource: NamedAPIResource,
  onSelectResource: (val: null) => void,
}

export const PokemonDetail: React.FC<Props> = ({
  resource,
  onSelectResource,
}) => {
  const [isPokemonLoading, setIsPokemonLoading] = useState(false);
  const [errorLoadingPokemon, setErrorLoadingPokemon] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const fetchPokemon = useCallback(async (url: string) => {
    try {
      setIsPokemonLoading(true);
      setErrorLoadingPokemon(false);
      const fetchedData = await getPokemon<Pokemon>(url);

      setPokemon(fetchedData);
    } catch (error) {
      setErrorLoadingPokemon(true);
    }

    setIsPokemonLoading(false);
  }, []);

  useEffect(() => {
    fetchPokemon(resource.url);
  }, [resource]);

  console.log('Fetched pokemon is ', pokemon);

  return (
    <>
      <div
        className="modal-background"
        onClick={() => onSelectResource(null)}
      />

      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            {resource.name}
          </p>

          <button
            className="delete"
            aria-label="close"
            onClick={() => onSelectResource(null)}
          />
        </header>

        <section className="modal-card-body">
          {isPokemonLoading && (
            <Loader />
          )}

          {errorLoadingPokemon && (
            <div className="notification is-danger">
              Something went wrong
            </div>
          )}

          {!isPokemonLoading && !errorLoadingPokemon && !pokemon && (
            <p className="title is-4" data-cy="NoCommentsMessage">
              No Pokemon Found
            </p>
          )}

          {pokemon && (
            <>
              <article
                className="message is-small"
              >
                <div className="message-body">
                  <p>
                    {`Weight : ${pokemon.weight}`}
                  </p>

                  <p className="image is-96x96">
                    {'Image : '}

                    <span>
                      <img
                        src={pokemon.sprites.front_default}
                        alt=""
                      />
                    </span>
                  </p>
                </div>
              </article>
            </>
          )}
        </section>
      </div>
    </>
  );
};
