import axios, { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { profilesList } from '../../services/FakeBackend';
import {
  discoverMovieByGenre,
  listsGenresMoreKnown,
} from '../../services/TheMovieDB/api';
import { ListMovie, Movie, MovieDiscover, User } from '../../types';

function* getContrastMovie() {
  const movie: AxiosResponse<MovieDiscover> = yield discoverMovieByGenre('35');

  const idMovie = movie.data.results[Math.floor(Math.random() * 20)].id;

  const response: AxiosResponse<Movie> = yield call(
    axios.get,
    `https://api.themoviedb.org/3/movie/${idMovie}?api_key=8c2615fde837edfe3621e4c31532dac1&language=pt-BR`,
  );
  // const delay = (ms:any) => new Promise(res => setTimeout(res, ms))
  // yield delay(3000)
  yield put({ type: 'GET_CONTRAST_MOVIE_OK', payload: response.data });
}

function* getListMovies() {
  const response: [ListMovie] = yield listsGenresMoreKnown();

  // const delay = (ms:any) => new Promise(res => setTimeout(res, ms))
  // yield delay(2000)
  yield put({ type: 'GET_LIST_MOVIES_OK', payload: response });
}

function* getProfilesList() {
  const response: [User] = yield profilesList();
  yield put({ type: 'GET_PROFILE_LIST_OK', payload: response });
}

function* actionWatcher() {
  yield takeLatest('GET_CONTRAST_MOVIE', getContrastMovie);
  yield takeLatest('GET_LIST_MOVIES', getListMovies);
  yield takeLatest('GET_PROFILE_LIST', getProfilesList);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
