import { combineReducers } from 'redux';

import {
  featuredMovie,
  FeaturedMovieState,
  ListMovieState,
  loading,
  LoadingState,
  movieLists,
  profilesLists,
  ProfilesListsState,
} from './reducers';

export interface State {
  loading: LoadingState;
  featuredMovie: FeaturedMovieState;
  movieLists: ListMovieState;
  profilesLists: ProfilesListsState;
}

const rootReducer = combineReducers({
  loading,
  featuredMovie,
  movieLists,
  profilesLists,
});

export default rootReducer;
