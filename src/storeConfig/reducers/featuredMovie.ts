import { Reducer } from 'redux';

import { Movie } from '../../types';

export type FeaturedMovieState = Movie;

const initalState: FeaturedMovieState = {
  title: '',
};

// eslint-disable-next-line default-param-last
const featuredMovie: Reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_CONTRAST_MOVIE_OK':
      return action.payload;
    default:
      return state;
  }
};

export default featuredMovie;
