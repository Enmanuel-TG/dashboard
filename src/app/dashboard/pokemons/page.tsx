import { pokemonResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";
export const getPokemons = async (limit: number, offset: number): Promise<SimplePokemon[]> => {
    const response: pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((res) => res.json());

    const pokemons = response.results.map(pokemon => ({
        id: parseInt(pokemon.url.split('/')[6]),
        name: pokemon.name,
    }))

    return pokemons;

}

const Page = async () => {
    const pokemons = await getPokemons(20, 0);
  return (
      <div className=" flex flex-col ">
          page
          <div className="flex flex-wrap gap-10 items-center justify-center">
              {pokemons.map(pokemon => (
                  <div key={pokemon.id}>{pokemon.name}
                      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} width={100} height={100} alt={pokemon.name} />
                  </div>
              ))}
          </div>
      </div>
  )
}


export default Page;