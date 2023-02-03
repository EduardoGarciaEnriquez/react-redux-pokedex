import { fromJS } from 'immutable'
import { actionTypes } from '../actions/types';

const initialState = fromJS({
    pokemons: [],
});

const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_POKEMONS:
            return state.setIn(['pokemons'], fromJS(action.payload))

        case actionTypes.SET_FAVORITE:
            const pokeIndex = state.get('pokemons').findIndex(
                pokemon => { return pokemon.getIn(['data', 'id']) === action.payload.id }
            )
            if (pokeIndex === -1) {
                return state;
            }
            const isFavorite = state.getIn(['pokemons', pokeIndex, 'data', 'favorite'])
            return state.setIn(['pokemons', pokeIndex, 'data', 'favorite'], !isFavorite)

        default:
            return state
    }
}

export default pokemonsReducer;