import { useEffect, useState } from "react";
import Card from "./Card";

export default function CardContainer() {
  const pokemonNames = ["pikachu", "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod"];
  const cards = pokemonNames.map(pokemon => <Card pokemon={pokemon} key={pokemon}></Card>);

  let [clickedPokemon, setClickedPokemon] = useState();
  const handleClick = (card) => setClickedPokemon(card.lastChild.textContent);

  useEffect(() => {
    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", () => handleClick(card));
      console.log(clickedPokemon)
    });

    return () => document.querySelectorAll(".card").forEach(
      card => card.removeEventListener("click", handleClick(card))
    )
  }, [clickedPokemon])

  return (
    <div className="cards">{cards}</div>
  )
}

function shuffleCards(arr) {
  return arr.sort(() => 0.5 - Math.random());
}