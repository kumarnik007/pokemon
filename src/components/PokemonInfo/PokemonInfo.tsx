import React from "react";
import { Pokemon } from "../../types";

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
          <article
            className="message is-small"
          >
            <div className="message-body">
              <p>
                {`Weight is : ${pokemon.weight}`}
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
        </section>
      </div>
    </>
  );
};
