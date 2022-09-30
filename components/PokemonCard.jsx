import Link from "next/link";
import Image from "next/image";

import styles from "../styles/PokemonCard.module.css";

const PokemonCard = ({ name, index }) => {
  const pokemonIndex = ("000" + (index + 1)).slice(-3);

  return (
    <Link href={`/pokemon/${name}`}>
      <a className={styles.hoverScale}>
        <div
          className={`card ${styles.cardTransition} mb-4 ${styles.cardBg}`}
          key={index}
        >
          <Image
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonIndex}.png`}
            width={250}
            height={250}
            layout={"responsive"}
          />
          <div className="card-body">
            <div className="clearfix">
              <div className="float-start">
                <h5 className="card-title text-capitalize">{name}</h5>
              </div>
              <div className="float-end">
                <span className="badge bg-light text-dark pull-right">{`#${pokemonIndex}`}</span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PokemonCard;
