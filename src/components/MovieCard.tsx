import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
  imdbID: string;
  renderMovieModal: (value: string) => void;
}

export function MovieCard({ renderMovieModal, title, poster, rating, runtime, imdbID }: MovieCardProps) {
  return (
    <button onClick={() => renderMovieModal(imdbID)} className="movie-card">
      <img
        src={poster}
        alt={title}
      />

      <div>
        <div className="movie-info">
          <span>{title}</span>
          <div className="meta">
            <div>
              <Star /> {rating}
            </div>

            <div>
              <Clock /> {runtime}
            </div>
          </div>
        </div>
      </div>
    </button>
  )
}