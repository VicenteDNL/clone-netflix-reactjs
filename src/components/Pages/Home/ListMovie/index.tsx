import './index.css';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Movie } from '../../../../types';

type Props = {
  movies: Array<Movie>;
};

const ListMovie: React.FC<Props> = ({ movies }) => {
  const [positionLeftList, setPositionLeftList] = useState(0);
  const handleListMovieLeft = () => {
    const newPosition = positionLeftList + window.innerWidth / 1.5;
    if (newPosition > 0) {
      setPositionLeftList(0);
      return;
    }
    setPositionLeftList(newPosition);
  };
  const handleListMovieRight = () => {
    const newPosition = positionLeftList - window.innerWidth / 1.5;
    const lenghList = movies.length * 200 - window.innerWidth + 90;

    if (newPosition * -1 > lenghList) {
      setPositionLeftList(lenghList * -1);
      return;
    }
    setPositionLeftList(newPosition);
  };

  return (
    <div className="list-movie">
      <button type="button" onClick={handleListMovieLeft}>
        <div className="button-left-movie">
          <ChevronLeftIcon style={{ fontSize: '40px' }} />
        </div>
      </button>
      <button type="button" onClick={handleListMovieRight}>
        <div className="button-right-movie">
          <ChevronRightIcon style={{ fontSize: '40px' }} />
        </div>
      </button>
      <div
        style={{
          position: 'relative',
          left: positionLeftList,
          transition: 'all ease 0.5s',
        }}>
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div
              className="movie"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w300${movie.poster_path})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#545',
                backgroundSize: 'cover',
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListMovie;
