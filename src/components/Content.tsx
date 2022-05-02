import { MovieCard } from '../components/MovieCard';
import { MovieProps } from '../@types/Movies'
import { memo } from 'react';

interface ContentProps {
  movies: Array<MovieProps>,
  selectedGenre: {
    title: string;
  },
}

function ContentComponent({ selectedGenre, movies }: ContentProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.movies, nextProps.movies);
})