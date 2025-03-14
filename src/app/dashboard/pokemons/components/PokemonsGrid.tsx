import { SimplePokemon } from "@/pokemons";
import { PokemonCard } from "./PokemonCard";

interface PokemonsCardProps {
  pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: PokemonsCardProps) => {
  return (
    <div className=" flex flex-col ">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemons) => (
          <PokemonCard key={pokemons.id} pokemon={pokemons} />
        ))}
      </div>
    </div>
  );
};
