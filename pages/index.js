import { Suspense, useState } from "react";

import Layout from "../components/Layout.jsx";
import Pagination from "../components/Pagination.jsx";
import PokemonCard from "../components/PokemonCard.jsx";

export default function Home({ pokemon }) {
  // States
  const [monster, setMonster] = useState(pokemon);
  const [offset, setOffset] = useState(0);

  // Set pagination next or prev
  const getPokemon = async (url, next) => {
    const response = await fetch(url);
    const nextMonster = await response.json();

    // Checks if next is true then update the offset query
    setOffset(next ? offset + 20 : offset - 20);
    // Set the monster to get the next obj from the response
    setMonster(nextMonster);
  };

  return (
    <Suspense fallback="Loading...">
      <Layout pageTitle={"PokeApp | Pokedex"}>
        <div className="container">
          <div className="row">
            {/*Loop thru the monster state and render each monster in the PokemonCard component */}
            {monster.results.map((m, index) => {
              return (
                <div className="col-xl-3 col-md-4" key={index}>
                  <PokemonCard name={m.name} index={index + offset} />
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <Pagination
            pagiPrev={() => getPokemon(monster.previous, false)}
            pagiNext={() => getPokemon(monster.next, true)}
            prevVal={!monster.previous}
            nextVal={!monster.next}
          />
        </div>
      </Layout>
    </Suspense>
  );
}

export async function getStaticProps() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
  };
}
