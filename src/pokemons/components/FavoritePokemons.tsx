"use client";
import { useAppSelector } from "@/store";
import { PokemonsGrid } from "./PokemonsGrid";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((state) => Object.values(state.pokemons.favorites));
  const [favorite] = useState(pokemons);

  return pokemons.length <= 0 ? (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className=" text-red-600" />
      <span>No Favorite</span>
    </div>
  ) : (
    <PokemonsGrid pokemons={favorite} />
  );
};
