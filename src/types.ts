export interface ListMovie {
  genre?: string;
  genre_id?: string;
  results: Array<Movie>;
}

export interface Genre {
  id?: number;
  name?: string;
}

export interface Movie {
  id?: number;
  backdrop_path?: string;
  title: string;
  overview?: string;
  genres?: Genre[];
  vote_average?: string;
  release_date?: string;
  runtime?: string;
  poster_path?: string;
}

export interface MovieDiscover {
  page: number;
  results: [Movie];
  total_results: number;
  total_pages: number;
}

export interface User {
  name: string;
  avatar: string;
  id: string;
}
