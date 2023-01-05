import React from "react";
import { Pokemon } from "../../types/Pokemon";

interface Props {
  pokemon: Pokemon,
  onCloseModal: () => void,
}

export const PokemonInfo: React.FC<Props> = ({
  pokemon,
  onCloseModal,
}) => {
  return (
    <>
      <div
        className="modal-background"
        onClick={() => onCloseModal()}
      />

      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            {pokemon.name}
          </p>

          <button
            className="delete"
            aria-label="close"
            onClick={() => onCloseModal()}
          />
        </header>

        <section className="modal-card-body">
          <table
            className="table is-striped is-hoverable is-narrow is-fullwidth"
          >
            <thead>
              <tr>
              <th>Property</th>
              <th>Value(s)</th>
            </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  Name
                </td>

                <td>
                  {pokemon.name}
                </td>
              </tr>

              <tr>
                <td>
                  Front Appearances
                </td>

                <td>
                  <img
                    src={pokemon.sprites.front_default}
                    alt=""
                  />

                  <img
                    src={pokemon.sprites.front_shiny}
                    alt=""
                  />

                  <img
                    src={pokemon.sprites.front_female}
                    alt=""
                  />

                  <img
                    src={pokemon.sprites.front_shiny_female}
                    alt=""
                  />
                </td>
              </tr>

              <tr>
                <td>
                  Back Appearances
                </td>

                <td>
                  <img
                    src={pokemon.sprites.back_default}
                    alt=""
                  />

                  <img
                    src={pokemon.sprites.back_shiny}
                    alt=""
                  />

                  <img
                    src={pokemon.sprites.back_female}
                    alt=""
                  />

                  <img
                    src={pokemon.sprites.back_shiny_female}
                    alt=""
                  />
                </td>
              </tr>

              <tr>
                <td>
                  {pokemon.moves.length > 1
                    ? 'Moves'
                    : 'Move'
                  }
                </td>

                <td>
                  {pokemon.moves.map(m => m.move.name).join(', ')}
                </td>
              </tr>

              <tr>
                <td>
                  {pokemon.abilities.length > 1
                    ? 'Abilities'
                    : 'Ability'
                  }
                </td>

                <td>
                  {pokemon.abilities.map(a => a.ability.name).join(', ')}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};
