import { FavoritePokemons } from "@/pokemons";


export const metadata = {
 title: 'Favorites',
 description: 'Favorites list page',
};

const page = () => {
  return (
    <div>
      <div className="flex items-center">
        <span className="text-4xl">Favorite pokemons</span><h1 className="ml-2 text-blue-600">GLobal state</h1></div>
      <FavoritePokemons/>
    </div>
  )
}
export default page;

