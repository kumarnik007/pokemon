import classNames from "classnames";
import React, { useCallback, useMemo, useState } from "react";
import { getPokemon } from "../../api";
import { ApiParam } from "../../types/ApiParam";
import { Pokemon } from "../../types/Pokemon";
import { PokemonInfo } from "../PokemonInfo";
import './PokemonSearch.scss';

export const PokemonSearch = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [nameQuery, setNameQuery] = useState('');
  const [isNameError, setNameError] = useState(false);
  const [moveQuery, setMoveQuery] = useState('');
  const [isMoveError, setMoveError] = useState(false);
  const [abilityQuery, setAbilityQuery] = useState('');
  const [isAbilityError, setAbilityError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchQueries = [nameQuery, moveQuery, abilityQuery];

  const submitDisabled = useMemo(() => (
    searchQueries.every(query => query.length === 0)
  ), [nameQuery, moveQuery, abilityQuery])

  const nameQueryDisabled = useMemo(() => (
    moveQuery.length !== 0 || abilityQuery.length !== 0
  ), [moveQuery, abilityQuery])

  const moveQueryDisabled = useMemo(() => (
    nameQuery.length !== 0 || abilityQuery.length !== 0
  ), [nameQuery, abilityQuery])

  const abilityQueryDisabled = useMemo(() => (
    moveQuery.length !== 0 || nameQuery.length !== 0
  ), [moveQuery, nameQuery])

  const apiParam: ApiParam = useMemo(() => {
    if (!nameQueryDisabled) {
      return {
        endpoint: 'pokemon',
        resource: nameQuery,
      }
    }

    if (!moveQueryDisabled) {
      return {
        endpoint: 'move',
        resource: moveQuery,
      }
    }

    if (!abilityQueryDisabled) {
      return {
        endpoint: 'ability',
        resource: abilityQuery,
      }
    }

    return {};
  }, [nameQuery, moveQuery, abilityQuery])

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      try {
        setIsLoading(true);
        setNameError(false);
        setAbilityError(false);
        setMoveError(false);
        const result = await getPokemon<Pokemon>(apiParam);

        console.log('Got result ', result);
        setPokemon(result);
        setNameQuery('');
        setMoveQuery('');
        setAbilityQuery('');
      } catch (error) {
        if (!nameQueryDisabled) {
          setNameError(true)
        }

        if (!moveQueryDisabled) {
          setMoveError(true)
        }

        if (!abilityQueryDisabled) {
          setAbilityError(true)
        }
      }

      setIsLoading(false);
    }, [nameQuery, abilityQuery, moveQuery],
  );

  const handleNameQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNameQuery(event.target.value);
      setNameError(false);
    }, [],
  );

  const handleMoveQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setMoveQuery(event.target.value);
      setMoveError(false);
    }, [],
  );

  const handleAbilityQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setAbilityQuery(event.target.value);
      setAbilityError(false);
    }, [],
  );

  const closePokemon = useCallback(() => {
    setPokemon(null);
  }, []);

  return (
    <>
      <form
        className="find-pokemon"
        onSubmit={handleSubmit}
      >
        <div className="field">
          <label className="label" htmlFor="pokemon-name">
            Pokemon Name
          </label>

          <div className="control">
            <input
              type="text"
              id="pokemon-name"
              placeholder="Enter a name to search"
              className="input is-dander"
              name="nameQuery"
              value={nameQuery}
              onChange={handleNameQueryChange}
              disabled={nameQueryDisabled}
            />
          </div>

          {isNameError && (
            <p className="help is-danger">
              Can&apos;t find a pokemon with such a name
            </p>
          )}
        </div>

        <div className="field">
          <label className="label" htmlFor="pokemon-move">
            Pokemon Move
          </label>

          <div className="control">
            <input
              type="text"
              id="pokemon-move"
              placeholder="Enter a move to search"
              className="input is-dander"
              name="moveQuery"
              value={moveQuery}
              onChange={handleMoveQueryChange}
              disabled={moveQueryDisabled}
            />
          </div>

          {isMoveError && (
            <p className="help is-danger">
              Can&apos;t find a pokemon with such a move
            </p>
          )}
        </div>

        <div className="field">
          <label className="label" htmlFor="pokemon-ability">
            Pokemon Ability
          </label>

          <div className="control">
            <input
              type="text"
              id="pokemon-ability"
              placeholder="Enter an ability to search"
              className="input is-dander"
              name="abilityQuery"
              value={abilityQuery}
              onChange={handleAbilityQueryChange}
              disabled={abilityQueryDisabled}
            />
          </div>

          {isAbilityError && (
            <p className="help is-danger">
              Can&apos;t find a pokemon with such an ability
            </p>
          )}
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              type="submit"
              className={classNames(
                'button',
                'is-light',
                {
                  'is-loading': isLoading,
                },
              )}
              disabled={submitDisabled}
            >
              {pokemon ? ('Search again') : ('Find a pokemon')}
            </button>
          </div>
        </div>
      </form>

      {pokemon && (
        <div
          className={classNames(
            'modal',
            {
              'is-active': pokemon,
            }
          )}
        >
          <PokemonInfo
            pokemon={pokemon}
            onCloseModal={closePokemon}
          />
        </div>
      )}
    </>
  );
};
