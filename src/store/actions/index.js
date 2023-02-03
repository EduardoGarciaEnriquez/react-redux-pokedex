//action creators
import { actionTypes } from "./types";
import { getPokemonData } from "../../api";

export const setPokemons = (payload) => ({
    type: actionTypes.SET_POKEMONS,
    payload
})

export const setLoading = payload => ({
    type: actionTypes.SET_LOADING,
    payload 
})

export const setFavorite = payload => ({
    type: actionTypes.SET_FAVORITE,
    payload
})

export const getPokemonDetails =
    (pokemons = []) =>
        async (dispatch) => {
            const pokeResponseData = await Promise.all(
                pokemons.map(async (pokemon) => { return await getPokemonData(pokemon) })
            )
            dispatch(setPokemons(pokeResponseData))
        }