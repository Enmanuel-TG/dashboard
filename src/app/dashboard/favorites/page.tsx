import { PokemonsGrid } from "@/pokemons/components/PokemonsGrid";

export const metadata = {
 title: 'Favorites',
 description: 'Favorites list page',
};

const page = () => {
  return (
    <div>
      <PokemonsGrid pokemons={[]}/>
    </div>
  )
}
export default page;