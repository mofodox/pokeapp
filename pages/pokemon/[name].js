import Image from "next/image";

import Layout from "../../components/Layout";

import styles from "../../styles/Pokemon.module.css";

const Pokemon = ({ currentPokemon }) => {
  const pokemonIndex = ("000" + currentPokemon.id).slice(-3);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const currPokemonNameCapitalize = capitalizeFirstLetter(currentPokemon.name);

  return (
    <Layout pageTitle={`PokeApp | ${currPokemonNameCapitalize} `}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-5">
            <div className="d-flex justify-content-center">
              <Image
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonIndex}.png`}
                width={400}
                height={400}
                style={{ margin: "0 auto" }}
                alt={currentPokemon.name}
              />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <span className="badge rounded-pill bg-light text-dark me-2">{`#${pokemonIndex}`}</span>
              <h1 className="text-capitalize text-center inline display-3 fw-bold">
                {currentPokemon.name}
              </h1>
            </div>
          </div>

          <hr className="d-block d-sm-none" />

          <div className="col-lg-6 col-12">
            <h2 className="fw-bold mb-1 mb-lg-4 display-6">Details</h2>

            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="types mb-4 mt-5 mt-md-1">
                  <h5 className="fw-bold mt-5 mt-lg-3 d-inline me-2">Type:</h5>
                  {currentPokemon.types.map((type) => {
                    return (
                      <span
                        className="badge rounded-pill bg-light text-dark me-2"
                        key={type.type.name}
                      >
                        {type.type.name}
                      </span>
                    );
                  })}
                </div>

                <h5 className="fw-bold">Weight:</h5>
                <p>{currentPokemon.weight}</p>
                <h5 className="fw-bold">Height:</h5>
                <p>{currentPokemon.height}</p>

                <h5 className="fw-bold">Abilities:</h5>
                <ul className="list-inline">
                  {currentPokemon.abilities.map((ability) => {
                    return (
                      <li
                        className="list-inline-item"
                        key={ability.ability.name}
                      >
                        {ability.ability.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-6 col-12">
                <h5 className="fw-bold">Base Stats:</h5>
                {currentPokemon.stats.map((stat) => {
                  return (
                    <div key={stat.stat.name}>
                      <span className="text-capitalize">{`${stat.stat.name}`}</span>
                      <div className="progress h-75">
                        <div
                          className={`progress-bar ${styles.progressBarPrimary}`}
                          role="progressbar"
                          style={{ width: `${stat.base_stat}%` }}
                          aria-valuenow={`${stat.base_stat}`}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {stat.base_stat}%
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pokemon;

export async function getServerSideProps(context) {
  const pokemonName = context.query.name;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const currentPokemon = await response.json();

  return {
    props: {
      currentPokemon,
    },
  };
}
