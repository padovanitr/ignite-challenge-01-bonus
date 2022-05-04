import { MovieCard } from '../components/MovieCard';
import { MovieProps } from '../@types/Movies'
import { memo } from 'react';

interface ContentProps {
  movies: Array<MovieProps>,
  selectedGenre: {
    title: string;
  },
  renderMovieModal: (value: string) => void;
}

function ContentComponent({ selectedGenre, movies, renderMovieModal }: ContentProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard renderMovieModal={renderMovieModal} imdbID={movie.imdbID} key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.movies, nextProps.movies);
})