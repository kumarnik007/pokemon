import React from "react";
import { Pokemon } from "../../types";

interface Props {
  pokemon: Pokemon,
}

export const PokemonDetail: React.FC<Props> = ({
  pokemon,
}) => {
  return (
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
  );
};
