import { fromJS } from 'immutable'
import { actionTypes } from '../actions/types';

const initialState = fromJS({
    loading: false,
});

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LOADING:
            return state.setIn(['loading'], action.payload)

        default:
            return state
    }
}

export default loadingReducer