import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import pokemonsSlice from "./pokemons/pokemons";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
//import { localStorageMiddleware } from "./middlewares/localstorage-middleware";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
