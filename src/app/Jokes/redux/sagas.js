const { takeEvery, call, put } = require("redux-saga/effects");
const { FETCH_JOKES, FETCH_JOKES_SUCCESS, FETCH_SINGLE, FETCH_SINGLE_SUCCESS } = require("./actions");




async function fetchCategoriesFromJokesAPI (url) {
    try {
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

function* fetchJokes(){
    try {
        const url = 'https://sv443.net/jokeapi/v2/categories'
        const response = yield call(fetchCategoriesFromJokesAPI, url)
        yield put({
            type: FETCH_JOKES_SUCCESS,
            payload: response.categories
        })
    } catch (error) {
       console.log(error) 
    }
}

function* fetchSingleJoke(action) {
    try {
        const category = action.payload
        const url = ` https://sv443.net/jokeapi/v2/joke/${category}?type=single&amount=10`
        const response = yield call(fetchCategoriesFromJokesAPI, url)
        yield put({
            type: FETCH_SINGLE_SUCCESS,
            payload: response.jokes
        })
    } catch (error) {
        
    }
}

function* jokesSagas() {
    yield takeEvery(FETCH_JOKES, fetchJokes)
    yield takeEvery(FETCH_SINGLE, fetchSingleJoke)
}

export default jokesSagas