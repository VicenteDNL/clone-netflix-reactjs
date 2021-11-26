export const getListMovieByGenres = () => ({ type: 'GET_LIST_MOVIES' });

export const getContrastMovie = () => ({ type: 'GET_CONTRAST_MOVIE' });

export const getProfilesList = () => ({ type: 'GET_PROFILE_LIST' });

export const cleanLoading = (loading: string) => {
  const validLoadings = ['CONTRAST_MOVIE', 'LIST_MOVIES', 'PROFILE_LIST'];
  if (validLoadings.indexOf(loading) !== -1) {
    return { type: 'CLEAN_LOADING', payload: loading };
  }
  return { type: 'CLEAN_LOADING' };
};
