import axios from 'axios'

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const fetchSmurf = () => dispatch => {
    dispatch({type: FETCH_SMURF_START})
    axios.get('http://localhost:3333/smurfs')
        .then(res =>
            dispatch({ type: FETCH_SUCCESS, payload: res.data })
        )
        .catch(err => console.log(err))
}

export const addSmurf = smurf => {
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .catch(err => console.log(err));
}