
import { pokemonResponse, SimplePokemon } from "@/pokemons";
import { PokemonsGrid } from "../../../pokemons/components/PokemonsGrid";
import { maxPokemons } from "@/app/utilities";

const getPokemons = async (
  limit: number,
  offset: number
): Promise<SimplePokemon[]> => {
  const response: pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = response.results.map((pokemon) => ({
    id: parseInt(pokemon.url.split("/")[6]),
    name: pokemon.name,
  }));
  return pokemons;
};

const Page = async () => {
  const pokemons = await getPokemons(maxPokemons, 0);
  return (
    <div className="flex flex-col ">
      <span className="text-5xl my-2">
        Pokemons list <small>Static</small>
      </span>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <PokemonsGrid pokemons={[pokemon]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
