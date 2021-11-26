import { Reducer } from 'redux';

import { ListMovie } from '../../types';

export interface ListMovieState {
  list: Array<ListMovie>;
}

const initalState: ListMovieState = { list: [] };
// eslint-disable-next-line default-param-last
const movieLists: Reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_LIST_MOVIES_OK':
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
export default movieLists;
