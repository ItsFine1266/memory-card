import { useEffect, useState } from "react";
import Card from "./Card";

let pokemonNames = ["pikachu", "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod"];

export default function CardContainer() {
  let [clickedPokemon, setClickedPokemon] = useState();
  let [pokemons, setPokemons] = useState(pokemonNames);

  const handleShuffle = () => {
    const shuffled = [...pokemonNames].sort(() => 0.5 - Math.random());
    setPokemons(shuffled);
  }

  const handleClick = (card) => {
    setClickedPokemon(card.lastChild.textContent);
    handleShuffle();
  };

  const checkClick = (e) => {
    if (e.target.className === "card") {
      handleClick(e.target);
    }
  }

  useEffect(() => {
    window.addEventListener("click", checkClick);

    return () => window.removeEventListener("click", checkClick);
  }, []);

  return (
    <div className="cards">
      {
        pokemons.map(pokemon => <Card pokemon={pokemon} className="card" key={pokemon}></Card>)
      }
    </div>
  )
}