'use client';
import { Provider } from "react-redux";
import { store } from "./index";
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemons";

interface ProvidersProps {
children: React.ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites-pokemons") ?? "{}")
    store.dispatch(setFavoritePokemons(favorites));
   },[])

  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default Providers;