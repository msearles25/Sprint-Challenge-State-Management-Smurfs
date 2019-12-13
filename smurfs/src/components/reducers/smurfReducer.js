import { FETCH_SUCCESS } from '../actions/smurfActions';

const initState = {
    smurfs: []
}

const smurfReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload
            }
        default:
            return state;
    }
}

export default smurfReducer;