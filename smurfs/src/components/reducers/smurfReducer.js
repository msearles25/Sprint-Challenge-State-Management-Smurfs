import { FETCH_SUCCESS, FETCH_SMURF_START} from '../actions/smurfActions';

const initState = {
    smurfs: []
}

const smurfReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default smurfReducer;