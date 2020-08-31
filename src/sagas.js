import { all } from 'redux-saga/effects';
import jokesSagas from './app/Jokes/redux/sagas';

export default function* root() {
  yield all([ jokesSagas() ]);
}
