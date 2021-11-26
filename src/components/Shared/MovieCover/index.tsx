import './index.css';

import React, { useEffect, useState } from 'react';

import { Movie } from '../../../types';
import NavBar from '../NavBar';

interface Props {
  movie: Movie;
}

const MovieCover: React.FC<Props> = ({ movie }) => {
  const [backdropImage, setBackdropImage] = useState({});
  const [runTimeFormat, setRunTimeFormat] = useState('');

  useEffect(() => {
    setBackdropImage({
      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    });
    setRunTimeFormat(handleConverRunTimeMovie(movie.runtime || '0'));
  }, [movie]);

  const handleConverRunTimeMovie = (runtime: string) => {
    let result;
    const time = parseInt(runtime, 10);
    if (time === 0) {
      return 'duração não informada';
    }

    if (time > 60) {
      const horas = Math.trunc(time / 60);
      result = `${horas}h`;

      const minutos = time % 60;
      return minutos > 0
        ? `${result} ${
            minutos.toString().length === 1 ? `0${minutos}` : minutos
          }min`
        : result;
    }
    return `${time}min`;
  };

  return (
    <>
      <NavBar />
      <section className="container-details-movie " style={backdropImage}>
        <div className="gost-details">
          <div className="infos-movie-details">
            <h1>{movie.title}</h1>
            <span className="movie-relevance">
              {movie.vote_average ? parseInt(movie.vote_average, 10) * 10 : 0}%
              Relevante
            </span>
            <span className="movie-release_date">
              {movie.release_date?.substring(0, 4)}{' '}
            </span>
            <span className="movie-runtime">{runTimeFormat} </span>
            <p>{movie.overview}</p>
            <span>
              <strong>Gêneros:</strong>
              {movie.genres?.map(genre => genre.name).join(', ')}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieCover;
