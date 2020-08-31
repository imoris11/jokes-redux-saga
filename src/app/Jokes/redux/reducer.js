const { FETCH_JOKES_SUCCESS, FETCHING_JOKES, FETCH_SINGLE_SUCCESS } = require("./actions")

const initialState = {
    loading:false,
    data: [],
    jokes:[],
    loadingError:false
}

/*

action = {
    type: 'FETCH_USERS_SUCCESS',
    payload: [{}, {}, {}, {}]
}


action = {
    type: 'FETCH_USERS_FAILURE',
    payload: "ERROR FETCHING USERS"
}

*/

const jokesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_JOKES_SUCCESS:
            return {
                ...state,
                data: [...action.payload],
                loading:false
            }
        case FETCH_SINGLE_SUCCESS:
            return {
                ...state,
                jokes: [...action.payload]
            }
        case FETCHING_JOKES:
            return {
                ...state,
                loading:true
            }
        default:
            return state
    }
}

export default jokesReducer
