'use client'

import Link from "next/link";
import Image from "next/image";

import { IoHeartOutline, IoHeart } from "react-icons/io5";

import { useAppSelector, useAppDispatch } from "@/store";
import { togglePokemons } from "@/store/pokemons/pokemons";
import { SimplePokemon } from "../interface/simple-pokemon";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

  const { id, name } = pokemon;
  const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id])
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(togglePokemons(pokemon));
  }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            style={{ width: "auto", height: "auto" }}
            key={pokemon.id}
            width={96}
            height={96}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            alt={pokemon.name}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/namepokemon/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More info
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div onClick={toggle} className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
            <div className="text-red-600">
              {isFavorite ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite?"Favorite":"No favorite"}
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
