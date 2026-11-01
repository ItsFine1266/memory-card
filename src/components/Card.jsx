import { useEffect, useState } from "react";

export default function Card({ pokemon }) {
  let [pokemonName, setPokemonName] = useState(null);
  let [pokemonImage, setPokemonImage] = useState(null);

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      
      if (!response.ok) {
        throw new Error("Status 404, data not fetched");
      }

      const data = await response.json();

      setPokemonName(data.name);
      setPokemonImage(data.sprites.front_default);
    }

    getPokemon()
  }, []);

  return (
    <div className="card" key={pokemon}>
      <img src={pokemonImage} alt={pokemonName} />
      <h1>{pokemonName}</h1>
    </div>
  )
}