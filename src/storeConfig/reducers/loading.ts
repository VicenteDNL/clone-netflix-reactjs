import { Reducer } from 'redux';

export interface LoadingState {
  contrastMovie: boolean;
  listMovie: boolean;
  profiles: boolean;
}

const initState: LoadingState = {
  contrastMovie: true,
  listMovie: true,
  profiles: true,
};
// eslint-disable-next-line default-param-last
const loading: Reducer = (state = initState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'GET_CONTRAST_MOVIE_OK':
      newState.contrastMovie = false;
      return newState;
    case 'GET_LIST_MOVIES_OK':
      newState.listMovie = false;
      return newState;
    case 'GET_PROFILE_LIST_OK':
      newState.profiles = false;
      return newState;
    case 'CLEAN_LOADING':
      switch (action.payload) {
        case 'CONTRAST_MOVIE':
          newState.contrastMovie = true;
          return newState;
        case 'LIST_MOVIES':
          newState.listMovie = true;
          return newState;
        case 'PROFILE_LIST':
          newState.profiles = true;
          return newState;
        default:
          return state;
      }
    default:
      return state;
  }
};
export default loading;
