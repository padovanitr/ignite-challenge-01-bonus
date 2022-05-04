import { useCallback, useEffect, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { api } from './services/api';

import { GenreResponseProps, MovieProps } from './@types/Movies'

interface MovieModal {
  Title: string;
  Poster: string;
  Actors: string;
  Director: string;
  Plot: string;
}

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { Modal } from './components/Modal';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);
  const [movieModal, setMovieModal] = useState<MovieModal>({} as MovieModal);
  const [openModal, setOpenModal] = useState(false);

  async function renderMovieModal(imdbID: string) {
    console.log('imdb', imdbID)
    api.get(`movies/?imdbID=${imdbID}`).then(response => {
      setOpenModal(true)
      setMovieModal(response.data[0])
    });
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, [])

  const data = useCallback(() => {

    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      console.log('movies', response.data);
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    });

  }, [selectedGenreId]);

  useEffect(() => {
    data()
  }, [selectedGenreId])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar 
        handleClickButton={handleClickButton}
        selectedGenreId={selectedGenreId}
        genres={genres}
      />

      <Content 
        selectedGenre={selectedGenre}
        movies={movies}
        renderMovieModal={renderMovieModal}
      />

      {movieModal && openModal &&
        <Modal 
          setOpenModal={setOpenModal}
          movieModal={movieModal}
        />
      }
    </div>
  )
}