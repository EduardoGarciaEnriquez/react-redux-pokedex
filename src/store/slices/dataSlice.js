import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemonData, getPokemons } from '../../api';
import { setLoading } from './uiSlice';

const initialState = {
    pokemons: [],
    filteredPokemons: [],
}

export const fetchPokeDetails = createAsyncThunk(
    'data/fetchPokeDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true))
        const pokeResponse = await getPokemons();
        if (pokeResponse.status === 200) {

            const pokeResponseData = await Promise.all(
                pokeResponse.data.results.map(async (pokemon) => { return await getPokemonData(pokemon) })
            )

            dispatch(setPokemons(pokeResponseData))
        } else {
            alert("Sorry we couldn't fetch data. Try again")
        }
        dispatch(setLoading(false))
    }
)

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload
        },
        setFavorite: (state, action) => {
            const pokeIndex = state.pokemons.findIndex(
                pokemon => { return pokemon.data.id === action.payload.id }
            )
            if (pokeIndex >= 0) {
                const isFavorite = state.pokemons[pokeIndex].data.favorite
                state.pokemons[pokeIndex].data.favorite = !isFavorite
            }
        },
        filterPokemons: (state, action) => {
            const pokemonsFiltered = state.pokemons.filter(pokemon => pokemon.data.name.includes(action.payload))
            state.filteredPokemons = pokemonsFiltered
        }
    }
});

export const { setFavorite, setPokemons, filterPokemons } = dataSlice.actions

export default dataSlice.reducer