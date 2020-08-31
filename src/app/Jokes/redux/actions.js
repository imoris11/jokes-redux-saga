export const FETCH_JOKES = 'FETCH_JOKES'
export const FETCH_SINGLE = 'FETCH_SINGLE'
export const FETCHING_JOKES = 'FETCHING_JOKES'
export const FETCH_JOKES_SUCCESS = 'FETCH_JOKES_SUCCESS'
export const FETCH_JOKES_FAILURE = 'FETCH_JOKES_FAILURE'
export const FETCH_SINGLE_SUCCESS = 'FETCH_SINGLE_SUCCESS'


export const fetchJokes = () => ({
    type: FETCH_JOKES,
})

export const fetchOneJoke = (payload) => ({
    type: FETCH_SINGLE,
    payload
})