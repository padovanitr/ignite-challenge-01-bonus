import { MovieCard } from '../components/MovieCard';
import { MovieProps } from '../@types/Movies'

interface ContentProps {
  movies: Array<MovieProps>,
  selectedGenre: {
    title: string;
  },
}

export function Content({ selectedGenre, movies }: ContentProps) {

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