import { ListMovie, MovieDiscover } from '../../types';
import { API, paramsBaseUrl } from './index';

// Lista os generos de filmes
export const listGenreMovie = () => {
  API.get(`/genre/movie/list${paramsBaseUrl()}`);
};

// Lista os generos de series de tv
export const listGenreTV = () => API.get(`/genre/tv/list${paramsBaseUrl()}`);

// Busca filmes pelo id do genero
export const discoverMovieByGenre = (genre: string) =>
  API.get<MovieDiscover>(
    `/discover/movie${paramsBaseUrl()}&with_genres=${genre}`,
  );

export const detailsMovie = (id: string) =>
  API.get(`/movie/${id}${paramsBaseUrl()}`);

export const listsGenresMoreKnown = async (): Promise<Array<ListMovie>> => [
  {
    genre: 'Animação',
    genre_id: '16',
    results: await (await discoverMovieByGenre('16')).data.results,
  },
  {
    genre: 'Comédia',
    genre_id: '35',
    results: await (await discoverMovieByGenre('35')).data.results,
  },
  {
    genre: 'Crime',
    genre_id: '80',
    results: await (await discoverMovieByGenre('80')).data.results,
  },
  {
    genre: 'Documentário',
    genre_id: '99',
    results: await (await discoverMovieByGenre('99')).data.results,
  },
  {
    genre: 'Drama',
    genre_id: '18',
    results: await (await discoverMovieByGenre('18')).data.results,
  },
  {
    genre: 'Família',
    genre_id: '10751',
    results: await (await discoverMovieByGenre('10751')).data.results,
  },
  {
    genre: 'Mistério',
    genre_id: '9648',
    results: await (await discoverMovieByGenre('9648')).data.results,
  },
  {
    genre: 'Faroeste',
    genre_id: '37',
    results: await (await discoverMovieByGenre('37')).data.results,
  },
];
