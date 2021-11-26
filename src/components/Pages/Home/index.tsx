import './style.css';

import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  cleanLoading,
  getContrastMovie,
  getListMovieByGenres,
} from '../../../storeConfig/actions';
import { State } from '../../../storeConfig/rootReducer';
import { ListMovie as ListMovieInterface } from '../../../types';
import { MovieCover } from '../../Shared';
import Loading from '../../Shared/Loading';
import ListMovie from './ListMovie';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: State) => state.loading);
  const featuredMovie = useSelector((state: State) => state.featuredMovie);
  const movieLists = useSelector((state: State) => state.movieLists);

  useLayoutEffect(() => {
    dispatch(getContrastMovie());
    dispatch(getListMovieByGenres());
    return () => {
      dispatch(cleanLoading('LIST_MOVIES'));
      dispatch(cleanLoading('CONTRAST_MOVIE'));
    };
  }, []);
  return !loading.contrastMovie && !loading.listMovie ? (
    <>
      <MovieCover movie={featuredMovie} />
      {movieLists.list.map((movie: ListMovieInterface) => (
        <div className="container-list-movie" key={movie.genre_id}>
          <h2 className="title-list-movie">{movie.genre}</h2>
          <ListMovie movies={movie.results} />
        </div>
      ))}
    </>
  ) : (
    <Loading />
  );
};

export default Home;
